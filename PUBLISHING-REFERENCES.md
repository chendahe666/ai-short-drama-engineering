# Publishing references / 发行结构参考

Checked 2026-10-13. These projects informed the organization only; their text, illustrations, branding and licenses have not been copied into this book.

|Reference / 参考|Adopted pattern / 借鉴内容|
|---|---|
|[The Rust Programming Language](https://github.com/rust-lang/book) and [mdBook chapter structure](https://rust-lang.github.io/mdBook/guide/creating.html)|One Markdown file per chapter, explicit SUMMARY, stable links / 分章Markdown、明确目录、稳定路径|
|[Dive into Deep Learning](https://github.com/d2l-ai/d2l-en)|Language entrances, readable source, release versions and downloadable editions / 语言入口、可读源码、版本发行和下载|
|[GitHub Pages publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)|Static site from main/docs / 从main分支docs目录发布静态书站|
|[GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)|Tagged editions, release notes and checksum-verified downloads / 标签版本、发行说明与校验下载|

This project uses a small static generator rather than mdBook or D2L's toolchain. The Markdown edition is directly readable on GitHub; generated HTML is committed for GitHub Pages and packaged for offline reading. No paid service is required to read the edition. The project's rights-reserved notice is independent of the references' open-source licenses.

本项目使用轻量静态生成器，未采用上述项目的完整工具链。Markdown可直接在GitHub阅读；HTML用于Pages和离线包。许可按作者选择保留全部权利，未沿用参考项目的开源许可。
