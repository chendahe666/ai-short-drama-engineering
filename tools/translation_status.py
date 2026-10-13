"""Track explicitly reviewed source/translation pairs; building does not refresh approval."""
from pathlib import Path
import json,hashlib,sys
root=Path(__file__).resolve().parents[1]
cfg=json.loads((root/'publication.json').read_text(encoding='utf-8'))
items=[(b['slug'],f"manuscript/zh/{b['slug']}.md",f"manuscript/en/{b['slug']}.md") for b in cfg['books']]
items += [('appendix-'+a['slug'],f"appendices/zh/{a['slug']}.md",f"appendices/en/{a['slug']}.md") for a in cfg['appendices']]
sha=lambda p:hashlib.sha256((root/p).read_text(encoding='utf-8-sig').replace('\r\n','\n').encode('utf-8')).hexdigest()
target=root/'translation-baseline.json'
if '--record-reviewed-pairs' in sys.argv:
    records=[{'id':i,'source':z,'translation':e,'source_sha256':sha(z),'translation_sha256':sha(e),'hash_normalization':'UTF-8 without BOM; LF newlines','review_level':'AI-assisted draft; structural/citation checks and selective cross-review; no professional human translation review','date':cfg['date']} for i,z,e in items]
    target.write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print('Recorded explicitly reviewed pairs. Do not use this flag merely to silence stale translations.')
records=json.loads(target.read_text(encoding='utf-8'))
lines=['# Translation status / 翻译同步状态','','[中文](README.md) · [English](README.en.md)','','Status describes file synchronization, not professional translation certification. / 状态只描述文件同步，不代表专业翻译认证。','','|Pair / 对应项|Chinese source / 中文|English translation / 英文|Status / 状态|','|---|---|---|---|']
stale=[]
for r in records:
    ok=sha(r['source'])==r['source_sha256'] and sha(r['translation'])==r['translation_sha256']
    if not ok:stale.append(r['id'])
    lines.append(f"|{r['id']}|[原稿]({r['source']})|[Translation]({r['translation']})|{'Synchronized AI draft / 已同步AI辅助稿' if ok else 'Review required / 需要复核'}|")
lines+=['','Source and translated file hashes are stored in [translation-baseline.json](translation-baseline.json). A change to either side makes the check fail until the pair is reviewed and explicitly recorded again. Chapters use stable Bxx-Cxx IDs in [chapter-manifest.json](chapter-manifest.json).','','源文或译文任一文件变化后，检查会报告需要复核；重新核对后才可更新基线，不应为了消除报错盲目刷新。英文已做结构和引用核对及部分交叉审查，尚无专业人工译审。']
(root/'TRANSLATION-STATUS.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
print(json.dumps({'pairs':len(records),'stale':stale},ensure_ascii=False))
raise SystemExit(bool(stale))
