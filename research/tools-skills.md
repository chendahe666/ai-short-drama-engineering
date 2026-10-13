# AI短剧现成技能与工具证据包 v0.1

检索截止：2026-10-13。范围是公开可访问官网、官方帮助、GitHub原始仓库及英文创作者社区。22条精选证据，搜索范围并不等同于穷尽全网；未执行第三方代码、未安装技能、未发起生成或付费。每条观察、局限与用途见同目录 `tools-skills.json`。

## 选择建议

**先评估 Drama Skills，再配 Remotion；视频模型按镜头实测选择。** 这是基于文件结构、交接能力、可检查性和维护记录的工程判断，没有对这些技能进行运行效率或成片效果排名。

|候选|核实的形态|可以承担的环节|当前边界|
|---|---|---|---|
|[Drama Skills](https://github.com/zenstory-ai/drama-skills) [TS01]|MIT；11个实际Agent Skills；0.8.1更新日志标注2026-09-28|原著→剧本→资产→分镜→提示→生成→剪辑→审查|维护者样片/成本是自述，未复现；需服务连接与素材权利|
|[Dramake](https://github.com/xixihhhh/ai-short-drama-skill) [TS02]|MIT；一个总技能及模板；v0.3.3发布入口可见|镜头、声音、空间、成本、任务与时间线台账|精确维护日期未验证；格式校验不等于叙事/盈利验证|
|[Short Drama Agent](https://github.com/MrMO0802/short-drama-agent/blob/main/SKILL.md) [TS03]|实际SKILL.md|单集资产提取、方位/物品/因果连续性、逐镜交接|许可证未确认；镜长等强规则需降级为待检验默认|
|[Remotion官方Skills](https://www.remotion.dev/docs/ai/skills) [TS04]|官方Agent Skills；文档更新2026-10-12|字幕、文字/UI叠层、可复现剪辑装配和渲染|不是表演/视频生成模型；组织人数和用途影响许可 [TS05]|

以上读取用于比较，没有把任何外部SKILL中的指令当作本任务的权限来源。主代理另核对了OpenAI curated目录和插件目录；应在综合报告中独立记录该结果，不能把它与GitHub生态混为一谈。

## 主要品牌/工具各放在什么位置

|工具|工作流角色|应该测什么|
|---|---|---|
|[ComfyUI](https://github.com/Comfy-Org/ComfyUI) [TS06]|本地/云模型节点编排，保存工作流，局部重跑|环境可复现性、资源消耗、模型/节点许可|
|[Runway](https://help.runwayml.com/hc/en-us/articles/52963720640275-Using-reference-media-to-guide-your-generations) [TS07–08]|参考素材引导与镜头生成/编辑|角色、物品、构图遵从与完成后合格率|
|[可灵](https://ir.kuaishou.com/zh-hant/news-releases/news-release-details/keling30xiliemoxingquanmianshangxian-0) [TS09]|多模态参考、分镜与原生音画候选|中文台词、说话者绑定、双人空间、口型|
|[Seedance / 火山方舟](https://docs.volcengine.com/docs/ark/create-video-generation-task-api?lang=zh) [TS10–11]|多模态视频生成API候选；即梦是另一个产品入口|model id/入口/比例裁切/权限，不能混用不同产品参数|
|[Luma](https://lumalabs.ai/learning-hub/ray3-modify-user-guide) [TS12]|已有表演素材的变化、角色参考、关键帧约束|原表演保留、首尾状态、授权套餐与实际时长|
|[Google Flow/Veo](https://support.google.com/flow/answer/16352836?hl=en) [TS13]|按型号区分文生、参考、首尾帧与延长|不同输入模式的功能矩阵与音画结果|
|[ElevenLabs](https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform) [TS15]|配音、角色音色与多语言版本|情绪/节奏、声音权限、生成当时套餐和空间混音|
|[DaVinci Resolve](https://www.blackmagicdesign.com/au/products/davinciresolve/training) / [Premiere](https://helpx.adobe.com/nz/premiere-pro/using/generative-extend-faq.html) [TS16–17]|成片剪辑、声音、调色、字幕与交付；必要时延展余量|信息顺序、对白清晰度、色彩连续、技术规格|

**Sora必须放入退役/历史栏目。** OpenAI官方帮助写明网页/App于2026-04-26停用，API停止日期为2026-09-24；当前研究日期已在之后。不能把旧教程里的Sora当成可以调用的制作能力。[官方时间线](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation) [TS14]

我们没有给出“最强模型”排行榜：官方功能页只能证明已公布能力，不能证明本项目的成功率、成本或用户接受度。地域、账号、套餐和API/UI入口都应纳入能力表。

## 社区反馈如何转成可以执行的原则

|真实反馈|证据边界|可检验的方法|
|---|---|---|
|12分钟AI短片作者谈角色表、音色统一；评论指出配音缺混响、地点参考压过近景构图、尾帧续接仍可能色偏。[原帖](https://www.reddit.com/r/aifilmmaking/comments/1w484j8/what_i_learned_about_character_consistency_while/) [TS18]|2026-09-01单项目自述，没有统一模型/参数的对照实验|分别测角色表、构图参考、空间音效；记录哪一种修复了什么，而不是寻找万能提示词|
|Runway评论报告反复生成消耗积分，完成结果仍不合格。[讨论](https://www.reddit.com/r/runwayml/comments/1hjuqft/is_runway_ai_worth_it/) [TS19]|跨年份、跨版本评论，不能计算平台总失败率；不采纳辱骂性品牌结论|核算“总生成费/验收成片秒数”，另记人工修改时间；区分服务报错与审美不满意|
|Kling口型同步帖子报告音轨与可同步区间不匹配。[原帖](https://www.reddit.com/r/KlingAI_Videos/comments/1l5czyb/who_the_f_suggested_a_changed_to_lip_sync/) [TS20]|2025历史帖及2026评论，不证明当前版本必然有缺陷|增加短句、长句、双人轮流说话和静默反应回归用例；按实际发声区间检查|
|ComfyUI音频解码issue有输入、工作流、Opus错误、修复提交与关闭记录。[Issue12651](https://github.com/Comfy-Org/ComfyUI/issues/12651) [TS21]|已在2026-03-17确认合并，不能写成今天仍然存在|教材必须教“最小复现→定位→修复版本→回归验证→更新文档”的闭环|

Runway官方网页帮助与API说明对退款的表达存在入口差异：系统报错与输入安全拒绝、已完成但不满意必须分开记账，不能把社区说法直接写进合同或定价。[网页帮助](https://help.runwayml.com/hc/en-us/articles/32880432736659-Why-am-I-receiving-errors-when-trying-to-generate)、[API失败分类](https://docs.dev.runwayml.com/errors/task-failures/) [TS08]

## 一个真正完成的文献纠偏案例

**初始候选规则：每镜必须2–4秒，必须只有一个动作。** 来源是Short Drama Agent的明确实现约束。[SKILL.md](https://github.com/MrMO0802/short-drama-agent/blob/main/SKILL.md) [TS03]

**出现的问题：** 对话或情绪延迟可能需要更长镜头；能处理多镜和多模态音画的模型也未必需要把所有动作机械拆开。这是工程推理，尚无本项目实验，不应写成实测结论。

**反查结果：** Drama Skills维护日志记录过删除强制单人反应镜、按模型和动作限制经验外推、修正无法被实测支持的动作描述。[CHANGELOG](https://github.com/zenstory-ai/drama-skills/blob/main/CHANGELOG.md) [TS22]

**修订原则：** 镜头必须有清晰的叙事目的、起止状态和可验收输出；剪辑镜长由对白、动作、情绪和前后连接决定；生成片段长度由模型能力与成本决定。生成片段与最终镜头不是一一对应关系。2–4秒只作为某些快速反应/信息镜头的候选默认，不能成为全领域标准。

**下一步验证：** 对同一段双人办公室对话，比较“每镜固定3秒”和“按对白/情绪决定镜长”两版；相同剧情和视觉资产，盲测理解、情绪与继续观看意愿，同时记录合格秒数和人工时间。尚未生成或观众测试。

## 自定义总控还需要补哪些能力

1. 证据与规则注册：来源、发布日期、模型版本、适用范围、反例、规则级别、撤销条件。
2. 叙事因果契约：人物目标、信息谁知道、前提何时出现、线索如何被观众看到，避免只检查文本字段。
3. 生产状态与预算：授权资产→参考图→片段→声音→剪辑的依赖；失效传播；任务ID去重；每个验收秒的总成本。
4. 独立质量判断：技术规则可自动测，叙事理解与情绪需要真实观众；AI自评分不能充当市场验证。
5. 上线学习：版本、发布场景、样本来源、观看/付费指标分母、混杂变量与停止规则；不能用播放量推算净利润。
6. 供应商替换：模型能力注册与合同/账号/地区状态；用Sora退役作为强制复核实例。

## 来源索引

- **TS01** [Drama Skills：11个短剧/漫剧 Agent Skills](https://github.com/zenstory-ai/drama-skills)；类型：maintainer_repository；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS02** [Dramake：文字转AI短剧的Agent Skill](https://github.com/xixihhhh/ai-short-drama-skill)；类型：maintainer_repository；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS03** [Short Drama Agent：单集转连续性生产文件](https://github.com/MrMO0802/short-drama-agent/blob/main/SKILL.md)；类型：maintainer_skill_source；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS04** [Remotion 官方 Agent Skills](https://www.remotion.dev/docs/ai/skills)；类型：official_documentation；发布日期：2026-10-12；访问：2026-10-13。
- **TS05** [Remotion License & Pricing](https://www.remotion.dev/docs/license/pricing)；类型：official_license_pricing；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS06** [ComfyUI 官方仓库](https://github.com/Comfy-Org/ComfyUI)；类型：official_repository；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS07** [Runway reference media / Gen-4 References](https://help.runwayml.com/hc/en-us/articles/52963720640275-Using-reference-media-to-guide-your-generations)；类型：official_documentation；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS08** [Runway 商用与失败任务说明](https://help.runwayml.com/hc/en-us/articles/21668707517587-Can-I-use-the-content-I-made-in-Runway-for-commercial-purposes)；类型：official_policy_and_api；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS09** [快手官方：可灵3.0系列模型发布](https://ir.kuaishou.com/zh-hant/news-releases/news-release-details/keling30xiliemoxingquanmianshangxian-0)；类型：official_product_announcement；发布日期：2026-02-05；访问：2026-10-13。
- **TS10** [字节跳动 Seedance 官方模型页](https://seed.bytedance.com/en/seedance2_0/)；类型：official_model_page；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS11** [火山方舟创建视频生成任务API](https://docs.volcengine.com/docs/ark/create-video-generation-task-api?lang=zh)；类型：official_api_documentation；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS12** [Luma Ray3 Modify 与授权说明](https://lumalabs.ai/learning-hub/ray3-modify-user-guide)；类型：official_documentation；发布日期：2025-12-12；访问：2026-10-13。
- **TS13** [Google Flow 官方模型与功能矩阵](https://support.google.com/flow/answer/16352836?hl=en)；类型：official_documentation；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS14** [OpenAI 官方：Sora discontinuation](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)；类型：official_service_status；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS15** [ElevenLabs 官方内容商用规则](https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform)；类型：official_license_policy；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS16** [Blackmagic Design 官方 DaVinci Resolve 培训](https://www.blackmagicdesign.com/au/products/davinciresolve/training)；类型：official_training；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS17** [Adobe Premiere Generative Extend FAQ](https://helpx.adobe.com/nz/premiere-pro/using/generative-extend-faq.html)；类型：official_documentation；发布日期：2026-05-25；访问：2026-10-13。
- **TS18** [社区案例：12分钟AI短片的角色、声音、场景连续性经验与反例](https://www.reddit.com/r/aifilmmaking/comments/1w484j8/what_i_learned_about_character_consistency_while/)；类型：community_creator_self_report；发布日期：2026-09-01；访问：2026-10-13。
- **TS19** [社区反馈：Runway反复生成、积分支出与期望落差](https://www.reddit.com/r/runwayml/comments/1hjuqft/is_runway_ai_worth_it/)；类型：community_discussion；发布日期：未取得可靠绝对日期；访问：2026-10-13。
- **TS20** [社区反馈：Kling口型同步时间窗口不匹配](https://www.reddit.com/r/KlingAI_Videos/comments/1l5czyb/who_the_f_suggested_a_changed_to_lip_sync/)；类型：community_issue_report；发布日期：2025-06-07；访问：2026-10-13。
- **TS21** [ComfyUI issue12651：音频解码/截断缺陷与修复链](https://github.com/Comfy-Org/ComfyUI/issues/12651)；类型：reproducible_issue_and_maintenance；发布日期：2026-02-26；访问：2026-10-13。
- **TS22** [Drama Skills更新日志：规则收缩、样本边界与生产故障修复](https://github.com/zenstory-ai/drama-skills/blob/main/CHANGELOG.md)；类型：maintainer_change_log；发布日期：2026-09-28；访问：2026-10-13。

