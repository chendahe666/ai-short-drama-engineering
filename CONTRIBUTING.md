# Editing and maintenance / 编辑与维护

[中文入口](README.md) · [English entrance](README.en.md)

## Report an issue / 报告问题

Use the bilingual issue templates for factual corrections, translation problems or production-method evidence. Include a chapter ID such as B02-C03, the passage, a proposed correction and a source or observed result. Do not include private account information, contracts, tokens or copyrighted source text you do not have permission to share.

使用双语问题模板，注明章节ID、具体段落、修改建议及来源或实际观察。不要提交私密账号、合同、令牌，或无权分享的第三方完整作品。提交问题不会自动使其中的原则成为本书结论。

## Source of truth / 原稿位置

- `manuscript/zh/*.md`: Chinese manuscripts / 中文原稿。
- `manuscript/en/*.md`: full English translations / 完整英文译稿。
- `appendices/{zh,en}`: paired overview, original case and draft standards / 配对附录。
- `publication.json`: volume order, titles, date and edition / 册序、书名与版本。
- `book/**`, `docs/**`, `chapter-manifest.json`: generated; edit their source and rebuild / 自动生成，修改上游后重建。
- `translation-baseline.json`: reviewed-pair hashes / 经核对的翻译配对哈希。

Do not edit generated chapter files alone: the next build replaces them. Keep six `## Chapter N:` headings in each English volume and six `## 第N章` headings in Chinese (use Chinese numerals). A new chapter requires updating the manifest generator and checks deliberately.

不要只修改自动生成章节。英文保持六个`## Chapter N:`标题，中文使用六个中文数字章标题。增加章节须同时更新目录、生成器及检查规则。

## Build / 构建

Requires Node.js 20+ and Python 3.10+. Install the locked Markdown dependency with `npm ci`, then run:

```sh
npm run build
python tools/translation_status.py
python tools/check.py
python tools/package.py
```

The build creates native GitHub chapters and the static `docs` website. Opening `docs/index.html` works offline. No browser or external API is required to build. Use the browser to inspect actual layout, navigation, search and language switching after changing the generator or CSS.

构建生成GitHub章节与docs书站；打开docs/index.html即可离线阅读。修改排版或生成器后，需实际检查导航、搜索与语言切换。

## Translation updates / 翻译更新

1. Edit the Chinese source, then revise the full corresponding English passage, preserving claims, examples, limitations and references.
2. Review meaning and run structural/citation checks. A model's score is not professional translation certification.
3. Only after review, record the synchronized pairs: `python tools/translation_status.py --record-reviewed-pairs`.
4. Rebuild and rerun checks. Review the baseline diff; the command records all nine pairs, so do not use it to hide unrelated stale translations.

中文变更后先更新对应英文，核对语义、数字、例子、限制和引用。完成审查后才更新哈希基线；不得为了让检查通过直接刷新全部基线。当前英文没有专业人工译审。

## Release / 发行

Update `publication.json`, README download links, DOWNLOADS.md, CHANGELOG.md and release notes together. Build, check, inspect the site and package. Commit the validated source and `docs`; tag that commit. Upload `dist` assets to the matching GitHub Release. Verify remote files and download hashes. Never replace a published tag silently; use a patch edition for corrections.

版本号、下载链接、日志和发行说明应同步更新。先构建、检查、目视、打包，再提交并打标签。将dist附件上传至对应Release，验证远端文件及下载哈希。已发布标签不静默移动，修正使用补丁版本。

GitHub Pages serves `main:/docs`; the rendered site updates after a pushed build. This repository does not currently include a custom GitHub Actions validation workflow. Local checks are required, and the Pages deployment status should be verified separately.

Pages发布main分支docs目录，推送构建后才更新。本版没有自定义Actions校验工作流；本地检查和Pages部署确认分开进行。

## Rights / 权利

See [LICENSE](LICENSE). This is a publicly readable, rights-reserved publication. Issue reports and suggested corrections are welcome; they do not grant general permission to redistribute or adapt the book. Do not submit third-party text or media without an applicable right to share it.
