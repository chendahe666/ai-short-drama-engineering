# Draft Specification for AI Short-Drama Production and Validation v0.1

[中文](../zh/standards.md)

Status: an internal project draft for trial use and review. It is not a national, industry, or association standard, and does not represent platform approval. Research cutoff: 2026-10-13. Scope: short-drama projects that use AI in writing, asset generation, editing, or audio processing. By default, these provisions apply to this project's design, production, pilot-release, and delivery records. Release jurisdictions and platforms are recorded separately.

“Must” is used only for external obligations with an established applicable basis, or project agreements explicitly adopted by the team. “Recommended” permits alternatives when reasons are given. A “hypothesis” must remain unvalidated; aesthetic judgments or model self-ratings cannot promote it to a general rule. External obligations are governed by the authoritative text in force at release and its scope of application. Except where an original requirement is explicitly cited, the checking methods in this draft are engineering arrangements for this project.

Use only four check results: Pass, Revision needed, Not applicable, and Not checked. “Not applicable” must include a reason. When sample footage, rights documentation, or audience records are missing, enter “Not checked,” not “Pass.” Passing a provision at the script stage does not mean it has passed at the finished-film or release stage.

## Provisions

### SD001 — Establish the release scope and review route

**Category: External obligation; applicability must be verified.**

- Input: The project's release country/region, distribution platform, format, budget, subject matter, and responsible entity.
- Check: Identify the applicable route under the relevant rules, including permits, approval documents, platform review numbers, or other requirements. Verify that the documentation corresponds to the version proposed for release.
- Pass: A responsible person has confirmed the route on an evidential basis, and the corresponding completion records are available at the release stage. An old platform's identifier has not been substituted for a new platform's requirements.
- Exception: A purely internal teaching case that has not been released may record that release checks have not been performed. This does not justify claiming that it can later go online without further checks.
- Evidence: Scope card, review-document versions, and human verification records; [Articles 17 and 33 of the NRTA Measures](https://www.nrta.gov.cn/art/2026/7/31/art_1588_73827.html). Classification cannot rely solely on an automatically estimated budget.

### SD002 — Provide an episode-level notice for AI microdramas released in China

**Category: External obligation.**

- Input: Each finished episode submitted for distribution, a description of AI use, and applicable platform requirements.
- Check: Inspect every episode to determine whether the notice is in a conspicuous position and whether it has been cropped, covered, or lost during transcoding.
- Pass: Every episode to which this requirement applies contains a notice that complies with the current rules, and the corresponding inspected files have been retained.
- Exception: For other jurisdictions, state the local requirements in separate provisions. If a draft has not yet produced a finished film, record Not checked.
- Evidence: Finished-file hashes and records of human inspection for each episode; [Article 34 of the NRTA Measures](https://www.nrta.gov.cn/art/2026/7/31/art_1588_73827.html). A tool detecting a notice does not establish that it is sufficiently conspicuous.

### SD003 — Use the release platform's AI disclosure feature

**Category: External obligation, subject to applicable regulations.**

- Input: The platform's publishing interface, exported files, and an explanation of how the material was generated.
- Check: Proactively disclose AI-generated or synthetic content and use the labeling features provided by the platform. Check that the process has not maliciously removed or hidden required labels.
- Pass: The platform disclosure matches the actual material, and the publication status has a human verification record.
- Exception: If the platform has no corresponding option, first verify its applicable procedure and record the handling. The absence of a button is not an exemption.
- Evidence: Disclosure records and platform-rule versions; [Article 10 of the labeling measures](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm).

### SD004 — Make the rights chain available for verification by a responsible person

**Category: External obligation; the documentation checklist is a project agreement.**

- Input: Records of the story source, text, reference images, music, voices, fonts, real-person likenesses, and tool terms.
- Check: A responsible person verifies the rights holder, authorized scope, term, territory, platforms, AI uses, and related restrictions. “AI-generated” is not a substitute for verification.
- Pass: The materials proposed for use have an explainable rights basis, and material ambiguities have been confirmed by someone authorized to do so. A source link alone is not authorization.
- Exception: An unpublished internal draft may retain unresolved items, but subsequent uses should be limited accordingly. Draft-stage checks must not substitute for commercial-release checks.
- Evidence: Rights register, contracts or applicable licenses, and human verification records; [Article 10 of the NRTA Measures](https://www.nrta.gov.cn/art/2026/7/31/art_1588_73827.html). A model cannot verify whether a signatory actually has authority to grant the rights.

### SD005 — Freeze the project brief before production

**Category: Project agreement.**

- Input: Audience, channel, aspect ratio, episode count and duration range, visual style, language, delivery format, budget boundaries, and acceptance roles.
- Check: Each field is actionable and contradictions have been resolved. Updates identify affected assets.
- Pass: A versioned brief exists, current work can be traced to that version, and unknown commercial conditions are explicitly listed.
- Exception: Exploratory experiments may leave final specifications open, but must state the specifications of the current experiment.
- Evidence: Project brief and change records. This provision is an engineering agreement for the project. The [Short Drama Creator Center](https://www.shortdramas.com/)'s description of earnings as subject to agreement does not support a universal price quote.

### SD006 — Give key plot developments a causal chain

**Category: Project agreement.**

- Input: Synopsis, scene list, character goals, and consequences of actions.
- Check: A human reviewer asks, item by item, “Why does the character act this way now?”, “What does the action cause?”, and “How was the information on which the reversal depends obtained earlier?”
- Pass: Key actions and turns have identifiable support, with no unresolved internal contradictions. Plausible coincidences have explicit purposes and boundaries.
- Exception: Deliberate omission is allowed, but suspense must be distinguished from a logical gap the author has not yet resolved.
- Evidence: Causality table, issue list, and revisions. This provision does not require all viewers to like the characters, and does not permit a model's logic score to replace human reading.

### SD007 — Record evidence, time, and character knowledge separately

**Category: Project agreement.**

- Input: Key documents/information, when they appear, and when and how each character learns about them.
- Check: Separate what objectively happened, what a document claims, and what a character believes. In *Back for Revision*, pay particular attention to v7/v8 and the client's confirmation status.
- Pass: Every judgment of responsibility can be traced to information already available within the story. Characters do not know later truths early without a reason.
- Exception: Unreliable narration may be used, but the scope of the deception and the point of eventual clarification need to be recorded.
- Evidence: Knowledge timeline, version comparison, and human reading records. Facts in the teaching story are defined by the case version; they are not evidence of real events.

### SD008 — Check consistency across groups of connected shots

**Category: Project agreement.**

- Input: Character references, location and prop states, and groups of connected shots.
- Check: A human watches the sequence to inspect identity, clothing, held objects, spatial orientation, and action continuity. Automated similarity is only a clue for locating possible problems.
- Pass: There are no unexplained identity, prop, or action jumps that affect comprehension. Intentional changes are explained.
- Exception: Flashbacks, dreams, and time jumps may involve changes, but viewers need cues that let them recognize those changes.
- Evidence: Shot-group checklists and problem timecodes; an [attributed producer interview](https://www.thepaper.cn/newsDetail_forward_33101093) supports the existence of the problem, while the project defines its specific thresholds.

### SD009 — Trace selected material to its version

**Category: Project agreement.**

- Input: Shot IDs, asset sources, model/tool versions, input references, output files, and human modifications.
- Check: Determine whether the material used in the finished film can be located, and whether discarded and selected outputs are distinguished. Do not record unnecessary keys or sensitive personal information.
- Pass: A spot check of any key shot can locate the actual selected file and its revision history. External-tool states that cannot be reproduced are honestly marked as such.
- Exception: If a provider does not expose parameters, record the provider, delivered version, and known limitations; do not claim full reproducibility.
- Evidence: Asset list, file hashes, generation records, and editing records. This is an engineering agreement and does not require private assets to be made public.

### SD010 — Record all production costs

**Category: Project agreement.**

- Input: Tool/compute bills, labor hours, failed attempts, rights costs, editing, audio, and promotional expenditure.
- Check: Verify that total costs include rework and unusable generations, and that the allocation rule for shared expenses is consistent.
- Pass: Incurred, committed, and estimated expenditure are listed separately. Cost per usable finished minute can be calculated, and unknown items remain visibly unknown.
- Exception: When a creator's own labor involves no cash payment, list both cash cost and an agreed labor-hour cost; do not default labor to zero.
- Evidence: Cost ledger and supporting records. The [Huang Chujie interview](https://www.thepaper.cn/newsDetail_forward_33101093) and [Jiuzhou interview](https://www.thepaper.cn/newsDetail_forward_33955220) support distinguishing cost definitions; they do not establish a universal market rate.

### SD011 — Deliver to the agreed technical specifications

**Category: Project agreement.**

- Input: Project delivery specifications, the actual encoded file, cover artwork, and caption/audio-track requirements.
- Check: Inspect resolution, aspect ratio, frame rate, duration, audio encoding, and missing/black frames. Play the entire file on the target device.
- Pass: The output meets the explicit technical specifications of the project and platform, with no unexplained technical anomalies.
- Exception: Mark intentional still frames, black screens, and similar creative choices to avoid automated false positives. Resolve specification conflicts at the version level first.
- Evidence: Media inspection reports and human playback records. Passing technical checks does not mean narrative or market performance has passed.

### SD012 — Accept dialogue, sound, and music separately

**Category: Project agreement.**

- Input: Dialogue text, audio tracks, mixed files, and agreed devices.
- Check: Listen through a phone speaker and under project-specified conditions for key lines, audiovisual synchronization, clipping or harsh audio artifacts, and music masking the dialogue. Inspect levels where necessary.
- Pass: Key lines are intelligible, emotional delivery has been reviewed by listening, there are no unresolved audio errors, and any adopted platform loudness requirements are met.
- Exception: Intentional ambiguity or distortion should serve a narrative purpose and must not obscure information that needs to be understood.
- Evidence: Listening conditions, problem timecodes, and revision records. The [creator-interview episode description](https://www.xiaoyuzhoufm.com/episode/6963ab5ce235ea65bc4bb08d) is a workflow reference. Loudness metrics cannot establish emotional impact.

### SD013 — Make captions and visual information readable on the target device

**Category: Project agreement.**

- Input: Captions, images of key documents, areas obscured by the platform interface, and the target phone.
- Check: Verify names, versions, dates, and dialogue. Inspect actual on-screen duration, occlusion, contrast, and line length.
- Pass: The responsible reviewer can read the information required by the plot during normal playback. Typos and unnecessary obstruction have been resolved.
- Exception: Background props that cannot be read in full need not be displayed word for word. Fields that serve as plot evidence cannot be waived under the background exception.
- Evidence: Caption proofreading and device-check records. No fixed font size or three-second display rule is prescribed for all films.

### SD014 — Separate story-comprehension tests from artistic evaluation

**Category: Project agreement, adopted on entering the pilot-testing stage.**

- Input: A fixed version, target participants who have not been told the answers, and comprehension questions and judgment criteria written in advance.
- Check: Record each participant's actual answers, whether they were prompted, and their relationship to the creator. Separate misunderstanding from dislike.
- Pass: The test procedure follows the plan, results and denominators are complete, and critical comprehension gaps have been reported. Whether this is sufficient for release is a separate project decision.
- Exception: If no participants are available yet, record Not checked. Multiple model responses must not be presented as an audience sample.
- Evidence: Anonymized test records, questions, and analysis. A procedural pass here does not establish that the work's effectiveness has been demonstrated.

### SD015 — Preserve the context and sampling limits of community feedback

**Category: Project agreement.**

- Input: Readable comments/posts, platform, date, work being discussed, and sampling method.
- Check: Distinguish viewers, creators, tool customers, and promotional referrals. Record deleted posts, login restrictions, and portions that were not read.
- Pass: Every item of feedback used to support a conclusion is traceable. Repost counts, likes, or a small number of comments have not been turned into population proportions.
- Exception: Anonymous feedback or feedback from an unidentified role may suggest questions, but cannot be treated as confirmed industry fact.
- Evidence: Comment-coding table and citations. The [promotional Zhihu answer](https://www.zhihu.com/question/1990728643920561512/answer/2015570176066736949) is an example for examining interests and incentives.

### SD016 — Give business metrics clear denominators and receipt definitions

**Category: Project agreement.**

- Input: Data on plays, users, watch time, popularity scores, payments, revenue shares, refunds, and costs, together with contracts.
- Check: State each metric's unit, period, source, and deduplication method. Distinguish platform revenue, creator revenue, cash received, and profit.
- Pass: Calculations can be reproduced from detailed records. Whether deposits/minimum guarantees are recoupable has been explained. Cash and advertising credits are listed separately, without double-counting income.
- Exception: When only public rankings are available, report ranking data only and mark project profit as unknown.
- Evidence: Metric dictionary, contract version, and settlement ledger. Tool revenue in [Kuaishou's results](https://ir.kuaishou.com/zh-hans/news-releases/news-release-details/kuaishoukejifabu2026niandierjidujizhongqiweijingshenhecaiwuyeji) cannot be treated as the earnings of a film.

### SD017 — Check release blockers independently for each release version

**Category: Project agreement that carries forward applicable external obligations.**

- Input: The proposed release file, platform, rights register, review/labeling records, and unresolved issue list.
- Check: Determine item by item whether missing required rights, review, labeling, or key deliverables block release. An aggregate score must not offset a blocking issue.
- Pass: A responsible person explicitly records the exact version and channels cleared for release, with no unresolved blockers among required items.
- Exception: An internal draft may be delivered, but its status must be labeled. “Progress has been made” does not mean “release passed.”
- Evidence: Version list and human release review. This provision does not automatically publish anything or presume any commercial or copyright authorization.

### SD018 — Put rule updates through traceable review

**Category: Project agreement.**

- Input: Rule proposal, supporting material, counterexamples, scope, and impact analysis.
- Check: Record accepted, partially accepted, rejected, and pending-validation comments and the reasons for their treatment. Check whether external supporting requirements have ceased to apply.
- Pass: The new version preserves changes, applicability dates, and the migration procedure for existing projects. Unresolved disagreements are visible to users.
- Exception: An urgent factual correction may be issued before the review record is completed. The record must not be rewritten to imply that no error ever occurred.
- Evidence: RFC, comment table, and version log. The [historical association standard](https://www.tvoao.com/userfiles/files/%E3%80%8A%E5%BE%AE%E7%9F%AD%E5%89%A7%E5%88%9B%E4%BD%9C%E7%94%9F%E4%BA%A7%E5%8F%8A%E5%86%85%E5%AE%B9%E5%AE%A1%E6%A0%B8%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83%E3%80%8B.pdf) and its [status page](https://www.ndls.org.cn/standard/index?draftman=%E9%9F%A6%E7%8A%81) illustrate the need to verify versions.

### SD019 — Test high-risk scenes before generating at scale

**Category: Conditional recommendation.**

- Input: Scene complexity, character count, movement, known tool limitations, and budget.
- Check: Identify the shot groups most likely to cause rework, make limited samples first, and record usable yield and labor time.
- Pass: If the recommendation is adopted, there is a sample and a stop/adjust decision. If it is not adopted, explain the existing mature assets or other basis for the alternative.
- Exception: Checks may be simplified for fully reused, previously accepted material whose specifications have not changed, but continuity within the new story still needs checking.
- Evidence: Sample costs and failure list. An [attributed interview](https://www.thepaper.cn/newsDetail_forward_33101093) supports the motivation for testing first; effectiveness still requires records from this project.

### SD020 — Treat a fixed “hook time” only as an experimental hypothesis

**Category: Hypothesis awaiting validation.**

- Input: A hypothesis about when to reveal information, two material versions, the primary outcome, sample, and stopping plan.
- Check: Change only the target factor as far as possible. Control differences such as cover artwork and volume, and record recruitment/distribution biases and comprehension results.
- Pass: The experimental procedure and results report are complete, and both positive and negative results are retained. Revise recommendations only within the measured scope; do not promote them to universal laws.
- Exception: When platform recommendations cannot be controlled, explicitly describe the work as an observational comparison rather than reporting a causal percentage improvement.
- Evidence: Advance plan, versions, raw viewing records, and analysis. Model self-ratings, team votes, and total plays cannot independently establish emotion or a causal effect on continued viewing.

## Conformity Status of the Current Teaching Case

*Back for Revision* has reached only the original teaching-design stage. The provisions above are planned review arrangements. There is no finished film, no external audience test, and no settlement from a release. This document therefore issues no certificate of conformity. The script and documentation structure can be reviewed, but that does not replace checks such as SD002, SD008, and SD011–SD014, which require actual finished footage or viewing material.

Adaptation rights for the earlier candidate novel, *The Company Cut My Year-End Bonus, and I Won't Take It* (《公司扣我年终奖，我不忍了》), remain unverified. Market discussion of that novel does not authorize its commercial production, nor does it automatically grant rights to any reference assets used in this original teaching case.

## How to Review This Draft

Submit a concrete counterexample for each provision, identifying whether the problem is a mistaken goal, excessive scope, an unworkable check, excessive cost, or missing evidence. The next version should first repair provisions that could cause misclassification or improper release, then simplify duplicate records. Report the number of adopting organizations, checks actually completed, reviewer disagreements, and changes in defects separately. Until actual adoption records exist, call this a draft—not an industry standard or a validated method.

