"""Build fixed release assets and verify their ZIP CRC and SHA-256."""
from pathlib import Path
import json,zipfile,hashlib
root=Path(__file__).resolve().parents[1]
cfg=json.loads((root/'publication.json').read_text(encoding='utf-8'))
check=json.loads((root/'qa/publication-checks.json').read_text(encoding='utf-8'))
if check['status']!='passed':raise SystemExit('Run and pass tools/check.py first')
dest=root/'dist';dest.mkdir(exist_ok=True)
prefix='ai-short-drama-engineering-v'+cfg['version']
outputs=[]
for kind in ['offline','sources']:
    archive=dest/(prefix+'-'+kind+'.zip')
    files=sorted((root/'docs').rglob('*')) if kind=='offline' else sorted(root.rglob('*'))
    with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
        for p in files:
            if not p.is_file():continue
            if kind=='sources' and any(x in p.relative_to(root).parts for x in ['.git','node_modules','dist','docs','.verification','__pycache__']):continue
            z.write(p,p.relative_to(root/'docs' if kind=='offline' else root).as_posix())
        if kind=='offline':z.write(root/'LICENSE','LICENSE')
    with zipfile.ZipFile(archive) as z:
        bad=z.testzip()
        if bad:raise SystemExit('Corrupt member '+bad)
        members=len(z.namelist())
    outputs.append({'file':archive.name,'bytes':archive.stat().st_size,'sha256':hashlib.sha256(archive.read_bytes()).hexdigest(),'members':members})
(dest/'SHA256SUMS.txt').write_text(''.join(x['sha256']+'  '+x['file']+'\n' for x in outputs),encoding='utf-8')
print(json.dumps(outputs,ensure_ascii=False,indent=2))
