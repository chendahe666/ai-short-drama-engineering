"""Import the approved Chinese edition; no network or publication side effects."""
from pathlib import Path
import shutil,json
root=Path(__file__).resolve().parents[1]
original=root.parent/'research'/'ai-short-drama-discipline'
names=['01-market-research','02-story-adaptation','03-directing-audiovisual','04-production-engineering','05-distribution-economics','06-cases-standardization']
zh=['市场与研究方法','故事设计与改编','导演、视听与场景','AI制作工程','发行、盈利与实验','案例研究与标准化实践']
en=['Market and Research Methods','Story Design and Adaptation','Directing, Audiovisual Language and Scenes','AI Production Engineering','Distribution, Economics and Experiments','Case Studies and Standardization']
for file,slug in zip(sorted((original/'books').glob('*.md')),names):
    dest=root/'manuscript'/'zh'/f'{slug}.md';dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(file,dest)
for lang in ['zh','en']: (root/'appendices'/lang).mkdir(parents=True,exist_ok=True)
for a,b in [('00-学科蓝图.md','overview.md'),('case/退回重做-制作包.md','case.md'),('standards/标准草案-v0.1.md','standards.md')]:
    shutil.copyfile(original/a,root/'appendices'/'zh'/b)
(root/'research').mkdir(exist_ok=True)
for f in (original/'evidence').glob('*'):
    if f.suffix in ['.md','.json']:shutil.copyfile(f,root/'research'/f.name)
for src,dst in [('RESEARCH_PROTOCOL.md','research/protocol.zh.md'),('SKILLS评估.md','research/skills-review.zh.md'),('ITERATIONS.md','research/iterations.zh.md'),('case/shotlist.json','appendices/shotlist.zh.json')]:
    text=(original/src).read_text(encoding='utf-8-sig').replace('evidence/tools-skills','tools-skills')
    (root/dst).write_text(text,encoding='utf-8')
shutil.copytree(original/'skills'/'ai-short-drama-production',root/'skills'/'ai-short-drama-production',dirs_exist_ok=True)
cfg={'title':{'zh':'AI短剧制作工程','en':'AI Short Drama Engineering'},'version':'0.1.0','date':'2026-10-13','repository':'chendahe666/ai-short-drama-engineering','languages':['zh','en'],'books':[{'id':s[:2],'slug':s,'title':{'zh':z,'en':e}} for s,z,e in zip(names,zh,en)],'appendices':[{'slug':'overview','title':{'zh':'学科蓝图','en':'Knowledge Map'}},{'slug':'case','title':{'zh':'原创案例：退回重做','en':'Original Case: Back for Revision'}},{'slug':'standards','title':{'zh':'20条标准草案','en':'20 Draft Standards'}}]}
(root/'publication.json').write_text(json.dumps(cfg,ensure_ascii=False,indent=2),encoding='utf-8')
print('Imported six Chinese books and supporting sources; English manuscripts preserved.')
