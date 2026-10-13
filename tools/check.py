"""Local publishing checks; no claim of audience, legal or factual validation."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
from collections import Counter
import hashlib,json,re
root=Path(__file__).resolve().parents[1]
cfg=json.loads((root/'publication.json').read_text(encoding='utf-8'))
errors=[]
urls=lambda t:Counter(re.findall(r'\]\((https?://[^\s)]+)\)',t))
for b in cfg['books']:
    z=(root/f"manuscript/zh/{b['slug']}.md").read_text(encoding='utf-8-sig');e=(root/f"manuscript/en/{b['slug']}.md").read_text(encoding='utf-8-sig')
    if len(re.findall(r'^## 第[一二三四五六]章',z,re.M))!=6:errors.append(b['slug']+': Chinese chapter count')
    if len(re.findall(r'^## Chapter [1-6]:',e,re.M))!=6:errors.append(b['slug']+': English chapter count')
    if urls(z)!=urls(e):errors.append(b['slug']+': source URLs differ in translation')
    for side in [z,e]:
        if re.search(r'\b(?:TODO|TBD|FIXME)\b',side):errors.append(b['slug']+': unfinished marker')
for a in cfg['appendices']:
    z=(root/f"appendices/zh/{a['slug']}.md").read_text(encoding='utf-8-sig');e=(root/f"appendices/en/{a['slug']}.md").read_text(encoding='utf-8-sig')
    if urls(z)!=urls(e):errors.append(a['slug']+': appendix external URLs differ')
base=json.loads((root/'translation-baseline.json').read_text(encoding='utf-8'))
for r in base:
    for field in ['source','translation']:
        normalized=(root/r[field]).read_text(encoding='utf-8-sig').replace('\r\n','\n').encode('utf-8')
        if hashlib.sha256(normalized).hexdigest()!=r[field+'_sha256']:errors.append(r['id']+': stale '+field)
manifest=json.loads((root/'chapter-manifest.json').read_text(encoding='utf-8'))
records=manifest['chapters']
if len(records)!=72:errors.append('Expected 72 chapter-language records')
for chapter_id in set(x['id'] for x in records):
    if {x['lang'] for x in records if x['id']==chapter_id}!={'zh','en'}:errors.append(chapter_id+': unpaired chapter')
for r in records:
    if not (root/r['path']).is_file() or not (root/'docs'/r['html']).is_file():errors.append(r['id']+': missing generated output')
def target_check(file,href):
    u=urlsplit(href)
    if u.scheme or u.netloc or not u.path:return
    target=(file.parent/unquote(u.path)).resolve()
    if not target.is_relative_to(root):errors.append(str(file.relative_to(root))+': link escapes repository '+href)
    elif not target.is_file():errors.append(str(file.relative_to(root))+': missing target '+href)
md_files=[p for p in root.rglob('*.md') if not any(s in p.parts for s in ['node_modules','.git','.verification'])]
for p in md_files:
    t=p.read_text(encoding='utf-8-sig')
    for href in re.findall(r'\]\(([^\s)]+)\)',t):target_check(p,href)
    if re.search(r'(?:[CD]:\\(?:Users|游戏)|127\.0\.0\.1:\d+|gh[pousr]_[A-Za-z0-9]{20,})',t):errors.append(str(p.relative_to(root))+': local path or credential-like string')
class Links(HTMLParser):
    def __init__(self):super().__init__();self.links=[]
    def handle_starttag(self,tag,attrs):
        d=dict(attrs)
        for k in ['href','src']:
            if k in d:self.links.append(d[k])
html_files=list((root/'docs').rglob('*.html'))
for p in html_files:
    parser=Links();parser.feed(p.read_text(encoding='utf-8'))
    for href in parser.links:target_check(p,href)
case=json.loads((root/'appendices/shotlist.zh.json').read_text(encoding='utf-8'))
if sum(len(e['shots']) for e in case['episodes'])!=20:errors.append('Case shot count')
if case['video_generated'] or case['audience_tested']:errors.append('Case status falsely advanced')
sources=json.loads((root/'research/all-sources.json').read_text(encoding='utf-8'))
if len(sources)!=70 or len({x['id'] for x in sources})!=70:errors.append('Source count or IDs')
result={'status':'passed' if not errors else 'failed','version':cfg['version'],'paired_chapters':36,'chapter_pages':len(records),'translation_pairs':len(base),'html_pages':len(html_files),'source_records':len(sources),'checks':['chapter pairing','external citation parity','translation hashes','local Markdown/HTML links','public-text path/credential-pattern scan','case state'],'limitations':['not professional human translation review','not a source truth audit','not media or audience validation'],'errors':sorted(set(errors))}
(root/'qa').mkdir(exist_ok=True);(root/'qa/publication-checks.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2));raise SystemExit(bool(errors))
