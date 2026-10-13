import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const {marked}=process.argv[2]?await import(pathToFileURL(process.argv[2]).href):await import('marked');
const cfg=JSON.parse(fs.readFileSync(path.join(root,'publication.json'),'utf8'));
const repo=`https://github.com/${cfg.repository}`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const read=p=>fs.readFileSync(path.join(root,p),'utf8').replace(/^\uFEFF/,'').replace(/\r\n/g,'\n');
const write=(p,t)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),t,'utf8');};
const rel=(from,to)=>path.posix.relative(path.posix.dirname(from),to)||path.posix.basename(to);
const hash=t=>crypto.createHash('sha256').update(t).digest('hex');
const text={zh:{toc:'章节目录',prev:'上一章',next:'下一章',home:'书架',search:'搜索本语言全部章节',download:'下载与版本',source:'在GitHub阅读',edit:'编辑原稿',status:'试编版 · 未经真人观众或盈利验证',appendix:'附录',rights:'保留全部权利 · 允许阅读和下载',book:'册',chapter:'章',no:'没有找到匹配章节。'},en:{toc:'Contents',prev:'Previous',next:'Next',home:'Library',search:'Search all chapters in this language',download:'Downloads & editions',source:'Read on GitHub',edit:'Edit manuscript',status:'Working edition · no audience or profitability validation',appendix:'Appendices',rights:'All rights reserved · reading and downloads permitted',book:'Volume',chapter:'Chapter',no:'No matching chapters.'}};
const books={};const pages=[];const chapters=[];
for(const lang of cfg.languages){
 books[lang]=[];
 for(const b of cfg.books){
  const source=`manuscript/${lang}/${b.slug}.md`,raw=read(source);
  const matches=[...raw.matchAll(/^## (?:第[一二三四五六]章[^\n]*|Chapter [1-6][^\n]*)$/gm)];
  if(matches.length!==6)throw new Error(`${source}: expected 6 chapters, got ${matches.length}`);
  const volume={...b,source,intro:raw.slice(0,matches[0].index).trim(),chapters:[]};
  for(let i=0;i<6;i++){
   const title=matches[i][0].slice(3),id=`B${b.id}-C${String(i+1).padStart(2,'0')}`;
   const content='# '+title+'\n\n'+raw.slice(matches[i].index+matches[i][0].length,matches[i+1]?.index??raw.length).trim()+'\n';
   const p={lang,id,title,volume:b.slug,source,content,md:`book/${lang}/${b.slug}/${String(i+1).padStart(2,'0')}.md`,html:`${lang}/${b.slug}/${String(i+1).padStart(2,'0')}.html`};
   volume.chapters.push(p);chapters.push(p);
  }
  books[lang].push(volume);
 }
}
const nav=(p,html=false)=>{
 const t=text[p.lang],list=chapters.filter(c=>c.lang===p.lang),i=list.findIndex(c=>c.id===p.id),from=html?p.html:p.md;
 const make=(label,to)=>html?`<a href="${esc(rel(from,to))}">${esc(label)}</a>`:`[${label}](${rel(from,to)})`;
 const targets=html?list.map(c=>c.html):list.map(c=>c.md);
 return [i>0?make('← '+t.prev,targets[i-1]):'',make(t.toc,html?`${p.lang}/index.html`:`book/${p.lang}/README.md`),i+1<list.length?make(t.next+' →',targets[i+1]):''].filter(Boolean).join(html?' ':' · ');
};
for(const lang of cfg.languages){
 const other=lang==='zh'?'en':'zh',t=text[lang];
 let summary=`# ${t.toc}\n\n[${text[other].toc}](../${other}/SUMMARY.md) · [${t.home}](README.md)\n\n`;
 let landing=`# ${cfg.title[lang]}\n\n[${other==='en'?'English':'中文'}](../${other}/README.md) · [${t.download}](../../DOWNLOADS.md)\n\n${t.status} · v${cfg.version}\n\n`;
 landing+=lang==='zh'?'六册、36章。先了解市场与证据，再依次完成叙事、视听、生产、经营与规则检验。\n\n':'Six volumes and 36 chapters. Start with markets and evidence, then develop narrative, audiovisual design, production, economics and testable rules.\n\n';
 for(const b of books[lang]){
  const intro={lang,id:`B${b.id}`,title:b.title[lang],source:b.source,md:`book/${lang}/${b.slug}/README.md`,html:`${lang}/${b.slug}/index.html`};
  const chapterLinks=b.chapters.map(c=>`- [${c.title}](${path.posix.basename(c.md)})`).join('\n');
  const counterpart=`book/${other}/${b.slug}/README.md`;
  const md=`[${t.home}](../README.md) · [${other==='en'?'English':'中文'}](${rel(intro.md,counterpart)})\n\n${b.intro}\n\n## ${t.toc}\n\n${chapterLinks}\n\n---\n\n${t.rights}. [LICENSE](../../../LICENSE)\n`;
  write(intro.md,md);intro.content=md;pages.push(intro);
  landing+=`## ${b.id} · [${b.title[lang]}](${b.slug}/README.md)\n\n`+b.chapters.map(c=>`- [${c.title}](${b.slug}/${path.posix.basename(c.md)})`).join('\n')+'\n\n';
  summary+=`- [${b.title[lang]}](${b.slug}/README.md)\n`+b.chapters.map(c=>`  - [${c.title}](${b.slug}/${path.posix.basename(c.md)})`).join('\n')+'\n';
  for(const p of b.chapters){
   const paired=p.md.replace(`/`+lang+`/`,`/`+other+`/`);
   const top=`<!-- Generated from ${p.source}. Edit the manuscript, then rebuild. -->\n\n${nav(p)} · [${other==='en'?'English':'中文'}](${rel(p.md,paired)})\n\n`;
   write(p.md,top+p.content+`\n---\n\n${nav(p)}\n\n${t.rights}. [LICENSE](${rel(p.md,'LICENSE')})\n`);
   pages.push(p);
  }
 }
 landing+=`## ${t.appendix}\n\n`;
 for(const a of cfg.appendices){
  const source=`appendices/${lang}/${a.slug}.md`;
  if(!fs.existsSync(path.join(root,source)))throw new Error('Missing appendix '+source);
  landing+=`- [${a.title[lang]}](../../${source})\n`;
  pages.push({lang,id:'A-'+a.slug,title:a.title[lang],source,md:source,html:`${lang}/appendices/${a.slug}.html`,content:read(source)});
 }
 landing+=`\n[${lang==='zh'?'翻译同步状态':'Translation synchronization'}](../../TRANSLATION-STATUS.md) · [${lang==='zh'?'研究来源与阅读边界':'Sources and access limits'}](../../research/README.md)\n`;
 write(`book/${lang}/README.md`,landing);write(`book/${lang}/SUMMARY.md`,summary);
 pages.push({lang,id:'home',title:cfg.title[lang],source:`book/${lang}/README.md`,md:`book/${lang}/README.md`,html:`${lang}/index.html`,content:landing});
}
const renderer=new marked.Renderer();
renderer.table=function(token){return '<div class="table-scroll">'+marked.Renderer.prototype.table.call(this,token)+'</div>';};
marked.use({renderer});
function body(p){return marked.parse(p.content,{walkTokens(token){if(token.type==='link'&&!/^(https?:|#|mailto:)/.test(token.href)){
 const target=path.posix.normalize(path.posix.join(path.posix.dirname(p.md),token.href));
 const page=pages.find(x=>x.md===target);
 token.href=page?rel(p.html,page.html):`${repo}/blob/main/${target}`;
}}});}
const css=`:root{--bg:#fff;--text:#1f2328;--muted:#59636e;--line:#d1d9e0;--soft:#f6f8fa;--blue:#0969da}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:16px/1.8 system-ui,-apple-system,'Segoe UI','Microsoft YaHei',sans-serif}a{color:var(--blue);text-decoration:none}a:hover{text-decoration:underline}header{border-bottom:1px solid var(--line);background:var(--soft);padding:14px 26px;display:flex;gap:20px;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:3}header b{font-size:17px}header nav{display:flex;gap:18px;font-size:13px}.layout{display:grid;grid-template-columns:280px minmax(0,1fr);max-width:1500px;margin:auto}aside{border-right:1px solid var(--line);padding:22px 18px;position:sticky;top:60px;height:calc(100vh - 60px);overflow:auto}aside details{margin:12px 0}summary{cursor:pointer;font-size:14px;font-weight:600}aside a{display:block;font-size:12px;padding:5px 8px;color:var(--muted)}aside a.current{color:var(--blue);background:#ddf4ff;border-radius:5px}main{min-width:0;max-width:1000px;padding:36px clamp(20px,5vw,65px) 80px}h1{font-size:32px;line-height:1.4;border-bottom:1px solid var(--line);padding-bottom:18px}h2{font-size:23px;line-height:1.5;margin-top:32px;border-bottom:1px solid var(--line);padding-bottom:10px}h3{font-size:19px}p{margin:16px 0}li{margin:5px 0}table{border-collapse:collapse;min-width:500px;width:100%;font-size:14px}th,td{padding:9px 12px;border:1px solid var(--line);vertical-align:top}th,tr:nth-child(even){background:var(--soft)}.table-scroll{overflow:auto;margin:24px 0}pre{overflow:auto;padding:16px;background:var(--soft);border-radius:6px}code{font-size:.88em;background:var(--soft);padding:2px 4px;border-radius:4px}blockquote,.notice{padding:12px 18px;border-left:4px solid var(--line);background:var(--soft);color:var(--muted)}.meta{font-size:12px;color:var(--muted);display:flex;gap:12px;flex-wrap:wrap}.chapter-nav{display:flex;justify-content:space-between;gap:16px;border-block:1px solid var(--line);padding:15px 0;margin:30px 0;font-size:14px}footer{font-size:12px;color:var(--muted);margin-top:35px}input{width:100%;padding:9px 12px;border:1px solid var(--line);border-radius:6px;font:inherit;font-size:13px}#results{background:var(--soft);padding:20px;border:1px solid var(--line)}#results a{display:block;margin:9px 0}button{font:inherit;font-size:13px;cursor:pointer;border:1px solid var(--line);background:white;border-radius:5px;padding:6px 12px}.menu{display:none}.library{max-width:1060px;margin:auto;padding:55px 30px}.choices{display:grid;grid-template-columns:1fr 1fr;gap:22px}.choice{border:1px solid var(--line);border-radius:8px;padding:28px;background:var(--soft)}.badge{display:inline-block;border:1px solid var(--line);padding:3px 9px;border-radius:20px;font-size:12px}.copyright{border-top:1px solid var(--line);padding-top:20px;margin-top:35px;font-size:13px;color:var(--muted)}[hidden]{display:none!important}@media(max-width:800px){header{padding:10px 14px;flex-wrap:wrap}header nav{gap:12px;flex-wrap:wrap}.layout{display:block}.menu{display:inline-block}aside{display:none;position:static;height:auto;border-bottom:1px solid var(--line)}aside.open{display:block}main{padding:25px 18px 60px}h1{font-size:27px}.choices{grid-template-columns:1fr}.chapter-nav{flex-wrap:wrap}}@media print{header,aside,.chapter-nav,#results,.meta a{display:none!important}.layout{display:block}main{max-width:none;padding:0}body{font-size:11pt}a{color:inherit}.table-scroll,pre{overflow:visible}table{min-width:0;font-size:9pt}h1,h2,h3{break-after:avoid}tr{break-inside:avoid}}`;
write('docs/assets/style.css',css);
for(const p of pages){
 const t=text[p.lang],other=p.lang==='zh'?'en':'zh',paired=pages.find(q=>q.lang===other&&q.id===p.id);
 const side=books[p.lang].map(b=>`<details ${p.volume===b.slug?'open':''}><summary>${b.id} ${esc(b.title[p.lang])}</summary><a href="${esc(rel(p.html,`${p.lang}/${b.slug}/index.html`))}">${t.toc}</a>${b.chapters.map(c=>`<a ${c.id===p.id?'class="current" aria-current="page"':''} href="${esc(rel(p.html,c.html))}">${esc(c.title)}</a>`).join('')}</details>`).join('');
 const searchData=chapters.filter(c=>c.lang===p.lang).map(c=>({title:c.title,volume:cfg.books.find(b=>b.slug===c.volume).title[p.lang],url:rel(p.html,c.html),text:c.content}));
 const html=`<!doctype html><html lang="${p.lang==='zh'?'zh-CN':'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(p.title)} · ${esc(cfg.title[p.lang])}</title><link rel="stylesheet" href="${rel(p.html,'assets/style.css')}"></head><body><header><a href="${rel(p.html,`${p.lang}/index.html`)}"><b>${esc(cfg.title[p.lang])}</b></a><nav><button class="menu" id="menu">${t.toc}</button><a href="${rel(p.html,paired.html)}" lang="${other}">${other==='en'?'English':'中文'}</a><a href="${rel(p.html,'downloads.html')}">${t.download}</a><a href="${repo}">GitHub ↗</a><button onclick="window.print()">${p.lang==='zh'?'打印':'Print'}</button></nav></header><div class="layout"><aside id="sidebar"><input type="search" id="search" aria-label="${t.search}" placeholder="${t.search}">${side}<h3>${t.appendix}</h3>${cfg.appendices.map(a=>`<a href="${rel(p.html,`${p.lang}/appendices/${a.slug}.html`)}">${esc(a.title[p.lang])}</a>`).join('')}</aside><main><div class="meta"><span>v${cfg.version} · ${cfg.date}</span><span>${esc(p.id)}</span><a href="${repo}/blob/main/${p.md}">${t.source}</a><a href="${repo}/edit/main/${p.source}">${t.edit}</a></div><div id="results" hidden></div>${body(p)}${p.volume?`<nav class="chapter-nav">${nav(p,true)}</nav>`:''}<footer>${t.status}<br>${t.rights} · <a href="${repo}/blob/main/LICENSE">LICENSE</a></footer></main></div><script>const data=${JSON.stringify(searchData).replace(/</g,'\\u003c')};document.getElementById('menu').onclick=()=>document.getElementById('sidebar').classList.toggle('open');document.getElementById('search').oninput=e=>{const q=e.target.value.trim().toLowerCase();const out=document.getElementById('results');out.hidden=!q;out.replaceChildren();if(!q)return;let n=0;data.forEach(item=>{if(item.text.toLowerCase().includes(q)){const a=document.createElement('a');a.href=item.url;a.textContent=item.volume+' / '+item.title;out.append(a);n++;}});if(!n)out.textContent=${JSON.stringify(t.no)};};</script></body></html>`;
 write('docs/'+p.html,html);
}
write('docs/index.html',`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI短剧制作工程 · AI Short Drama Engineering</title><link rel="stylesheet" href="assets/style.css"></head><body><header><b>AI SHORT DRAMA ENGINEERING</b><nav><a href="downloads.html">下载 / Downloads</a><a href="${repo}">GitHub ↗</a></nav></header><main class="library"><span class="badge">v${cfg.version} · Working edition / 试编版</span><h1>AI短剧制作工程<br>AI Short Drama Engineering</h1><p>从市场证据到故事、视听、生产、经营与可检验规范。<br>From market evidence to story, audiovisual design, production, economics and testable standards.</p><div class="choices"><section class="choice"><h2>中文</h2><p>六册 · 36章 · 案例与标准草案</p><a href="zh/index.html">开始阅读 →</a><p><a href="${repo}/blob/main/book/zh/README.md">在GitHub按章阅读</a></p></section><section class="choice"><h2>English</h2><p>6 volumes · 36 chapters · case and draft standards</p><a href="en/index.html">Start reading →</a><p><a href="${repo}/blob/main/book/en/README.md">Read chapters on GitHub</a></p></section></div><div class="notice">本版完成文本与结构审查；尚未生成案例成片、开展真人观众测试或验证盈利。<br>This edition has undergone text and structural review. The case has no finished film, human audience test or profitability validation.</div><div class="copyright">${text.zh.rights}<br>${text.en.rights} · <a href="${repo}/blob/main/LICENSE">LICENSE</a><p>English translation is AI-assisted and has not received professional human translation review.</p></div></main></body></html>`);
write('docs/downloads.html',`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>下载 / Downloads</title><link rel="stylesheet" href="assets/style.css"></head><body><header><a href="index.html">← 书架 / Library</a><a href="${repo}/releases">GitHub Releases</a></header><main class="library"><h1>下载与版本 / Downloads & editions</h1><p>版本 Version ${cfg.version}. 下载包保留本地目录与双语导航，解压后打开 index.html 即可离线阅读。<br>Extract the offline package and open index.html. Chapter navigation, language switching and search work without a server.</p><ul><li><a href="${repo}/releases/download/v${cfg.version}/ai-short-drama-engineering-v${cfg.version}-offline.zip">双语离线HTML / Bilingual offline HTML</a></li><li><a href="${repo}/releases/download/v${cfg.version}/ai-short-drama-engineering-v${cfg.version}-sources.zip">书稿与研究包 / Manuscripts and research package</a></li><li><a href="${repo}/releases/download/v${cfg.version}/SHA256SUMS.txt">SHA-256 校验 / Checksums</a></li></ul><p>GitHub也提供Code → Download ZIP。打印任一章节可使用浏览器“另存为PDF”。本次未发行独立排版PDF或EPUB。<br>GitHub also offers Code → Download ZIP. Use your browser's print-to-PDF function for individual chapters. This edition does not include a separately typeset PDF or EPUB.</p><p>${text.zh.rights} / ${text.en.rights}</p></main></body></html>`);
write('docs/.nojekyll','');
write('chapter-manifest.json',JSON.stringify({version:cfg.version,chapters:chapters.map(({id,lang,title,source,md,html,content})=>({id,lang,title,source,path:md,html,content_sha256:hash(content)}))},null,2)+'\n');
console.log(JSON.stringify({chapters:chapters.length,languages:cfg.languages,html_pages:pages.length+2}));
