# Reader review / 阅读器检查

Date: 2026-10-13. This records actual browser inspection of the generated book site before release. It is not a short-drama media or audience test.

|Check / 检查|Observed result / 实际结果|
|---|---|
|Library and contents / 书架目录|Both language entrances and the six-volume chapter list rendered correctly / 双语入口和六册章节正常显示|
|Language pairing / 语言配对|Chinese B02-C03 switched to English B02-C03, preserving the chapter identity / 同章切换正确|
|Full-text search / 全文搜索|The English query recoupable returned B05-C03; clicking opened the matching chapter / 英文检索及跳转正确|
|Responsive layout / 窄屏排版|At a 390×844 viewport, content width was 375 including scrollbar allocation; no document-wide horizontal overflow / 无整页横向溢出|
|Tables / 表格|500-wide table stayed in a 339-wide scroll container / 宽表格在局部容器内滚动|
|Mobile contents / 手机目录|Contents button opened the chapter sidebar / 按钮可展开章节目录|
|Browser logs / 浏览器日志|No warning or error observed during these checks / 检查中未见警告或错误|

Default viewport was restored. The site uses local CSS and inline search data, with no remote scripts, fonts or fetch-based content dependency. ZIP CRC and downloaded hashes are checked separately. This review does not certify every browser's printing or file-URL behavior; there is no separately typeset PDF or EPUB in v0.1.0.

已恢复默认视口。正文、CSS和搜索数据均随离线包提供，不依赖远程脚本、字体或内容请求。ZIP完整性与下载哈希另行验证；本检查未认证所有浏览器打印及本地文件URL行为。本版没有独立排版PDF或EPUB。
