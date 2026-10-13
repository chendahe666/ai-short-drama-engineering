# Book 5: Distribution, Profitability, and Experiments

**AI Short-Drama Engineering · Pilot Textbook v0.1 | 2026-10-13**

This book develops the ability to connect a work, its contracts, its costs, and audience behavior. The final deliverables are a channel-selection table, a project ledger without duplicate deductions, a metric dictionary, and a prespecified experimental plan. All example amounts, percentages, and sample sizes are hypothetical. They are not platform prices, historical results, or guarantees of earnings. This book uses the original teaching case *Back for Revision*, which has not yet been distributed and has no actual revenue.

## Chapter 1: Establish Who Pays Whom

A producer’s revenue does not necessarily come from viewers. Common arrangements include commissioned production under contract, rights licensing, platform revenue sharing, and operating a title while bearing the cost of acquiring traffic. The same work carries different risks under different arrangements. Commissioned production places greater emphasis on deliverables, the scope of revisions, and acceptance. Revenue sharing places greater emphasis on attribution and settlement definitions. Buying traffic yourself also exposes you to price fluctuations, conversion risk, and the time needed to recoup expenditure.

| Arrangement | Basis of revenue | What the producer must clarify first |
|---|---|---|
| Commissioned production | Milestone payments or payment upon final acceptance | Delivery specifications, revision rounds, acceptance deadlines, and payment conditions |
| Rights licensing | A licensing fee, or a minimum guarantee with a revenue share | Territory, term, language, medium, exclusivity, and derivative versions |
| Platform revenue sharing | Contractually defined eligible usage or revenue base | Eligibility definitions, deduction order, reconciliation, and settlement timing |
| Paid-acquisition operation | User and advertising revenue less acquisition costs | Trackable orders/users, attribution windows, and payback periods |
| Brand commissions | Client orders and distribution deliverables | Placement requirements, responsibility for revisions, brand acceptance, and usage rights |

Public partnership portals often state only that earnings follow the contract. This establishes that a partnership mechanism exists; it does not establish that our account, work, or AI format qualifies. The FOX and HOLYWATER announcement also shows that brand and IP partnerships are one business route, without implying that a newcomer has secured an order. [CM01: Short-Drama Creator Center](https://www.shortdramas.com/), [GM08: FOX announcement](https://www.foxflash.com/releases/view/fox-entertainment-deepens-creative-content-portfolio-and-audience-reach-with-strategic-investment-in-vertical-video-technology-platform-holywater)

**Worked example.** If someone funds *Back for Revision* for training purposes, first establish whether they are buying a finished film, editable source files, or long-term exclusive rights. These have different effects on the work’s future distribution value. Do not judge them solely by an identical total price.

**Counterexample.** A platform advertises a maximum reward of several hundred thousand yuan. The producer books it as confirmed revenue and begins full production. Rewards usually have conditions, eligibility requirements, and defined periods; advertising credits are not cash either.

**Exercise.** A client requests “unlimited revisions until satisfied.” The fixed price appears to cover all generation fees. Can you immediately conclude that the project will be profitable?

**Answer points.** No. Labor and rework are uncapped. You also need to establish who can approve the work, which revisions constitute a change of scope, how feedback is consolidated within each round, and whether payment is linked to explicit criteria.

## Chapter 2: Cost Accepted Deliverables, Not Generation Button Clicks

The price of one model call is only part of the cost. Record screenplay development, assets, trial and error, generation, editing, sound, subtitles, localization, quality assurance, repairs, licensing, and release. If a beautiful clip cannot connect to the shots before and after it, its cost has still been incurred, but it has not yet become accepted finished footage.

This project recommends keeping two ledgers. A cash-expenditure ledger helps determine whether funds will last until payment arrives. A full-cost ledger adds your own working hours and allocated shared-equipment costs to assess whether the activity is worth continuing in the long run. Valuing your time does not mean you must pay yourself that amount in the same month. If fixed expenses already include an employee’s salary, adding the same hours at that salary rate again would double-count labor.

The following structure can be used, provided that categories are mutually exclusive and clearly assigned:

`Full production cost = Project cash production expenditure + Labor cost not already included in the preceding term + Reasonably allocated shared costs`

`Total project cost = Full production cost + Rights costs + Distribution costs + Acquisition costs actually borne by the project`

If rights or distribution costs are already included in cash production expenditure, exclude them from the later terms. Allocate subscriptions according to each project’s use; do not charge the entire monthly subscription to every project. A system error that triggers a refund is also different from an unsatisfactory result that needs to be regenerated. Refund eligibility depends on the tool and access route used for that task. [TS08: Runway generation-error guidance](https://help.runwayml.com/hc/en-us/articles/32880432736659-Why-am-I-receiving-errors-when-trying-to-generate), [API failure categories](https://docs.dev.runwayml.com/errors/task-failures/)

**Worked example—all figures are hypothetical.** A sample film incurs 900 yuan in generation expenditure and 300 yuan for audio, subtitles, and related work. You work for 20 hours, valued internally at 80 yuan per hour. A reasonable allocation of shared software is 200 yuan. Allocated cash production cost is 1,400 yuan, and full production cost is 3,000 yuan. Actual additional cash payments still depend on when the software fee was paid. If 180 seconds of finished footage pass acceptance, full cost is 16.67 yuan per accepted second. Having generated 900 seconds does not entitle you to expand the denominator to 900 seconds.

**Counterexample.** Someone claims to have “completed 120 minutes in three days” while excluding topic selection, assets, waiting, corrections, and postproduction. Reported timelines and costs from different producers cannot be compared directly across projects either. [CM09: Producer interview](https://www.thepaper.cn/newsDetail_forward_33101093)

**Exercise.** You have paid 200 yuan for a subscription and another 400 yuan for outsourced work, and have spent 12 hours on production. The outsourced work already includes voiceover. Internal labor is valued at 50 yuan per hour, and the entire subscription serves this film alone. What is the full cost?

**Answer points.** 1,200 yuan: 600 yuan in cash and 600 yuan in labor. Do not add the already-included voiceover cost again. If the subscription serves several projects, first establish a reasonable allocation method.

## Chapter 3: From Platform Billings to Money You Can Use

Define the settlement base B before defining the share α. “A 50% revenue share” cannot be calculated without a base and deduction rules. B might represent attributed purchases after refunds, revenue from eligible viewing, or another platform-defined amount. App-store billings, advertising revenue, the producer’s receivable, and money already deposited in a bank account are different layers. If an amount is already net of a channel fee, do not deduct the same fee again.

**Hypothetical contract example.** Attributed billings for a period are 10,000 yuan, with 1,000 yuan in refunds. The contract specifies a channel fee of 20% of the amount after refunds, with the remainder forming the revenue-sharing base. Thus B = 7,200 yuan. The producer’s share is 50%, giving a revenue-share receivable R = 3,600 yuan. If the contract explicitly makes a minimum guarantee G = 2,000 yuan recoupable against this share, total entitlement for the same cumulative period is `max(G, R) = 3,600 yuan`. If 2,000 yuan has already been received, only 1,600 yuan remains payable; revenue is not 5,600 yuan. Add a separate production fee F only if the contract explicitly makes it additional and non-recoupable. Do not mechanically apply this formula to contracts involving different periods, different rights, or caps.

Project contribution can be estimated as `Final settled revenue attributable to the producer − Total project cost` to assess operating results. It does not replace formal accounting profit. Cash actually available to use also depends on payment timing, taxes, and unpaid receivables. Do not treat deposits, money collected on behalf of others, or conditional rewards whose conditions have not been met as freely available revenue.

| Metric | Definition this project must state explicitly |
|---|---|
| Impressions and eligible views | How the platform counts them, whether it deduplicates them, and whether they include paid promotion |
| Opening retention | Viewers still watching at a specified point after starting / eligible starts |
| Episode completion rate | Viewers reaching a predefined end criterion / eligible starts |
| Next-episode entry rate | Starts of the next episode / eligible viewers of the current episode |
| Paid conversion | Paying users / eligible users in the same defined cohort |
| Net revenue per user | Attributable net revenue for the same cohort and window / users |
| ROAS | Attributed revenue within a specified window / advertising expenditure; state whether revenue is gross or net |
| Full-cost recovery | Revenue attributable to the producer / all project costs |
| Cost per accepted second | Full production cost for the corresponding scope / accepted seconds of finished footage |
| Rework rate | Rework hours / total hours, or reworked tasks / total tasks; do not mix the two |

**Counterexample.** A team declares a profit because ROAS is 1.2. The ratio may compare only revenue with advertising expenditure, without covering production, refunds, or channel fees. The ReelShort/Moloco case combines IAP and IAA in its D7 measure; it does not claim that this measure equals project net profit. [GM02: Official customer case study](https://www.moloco.com/case-studies/reelshort)

**Exercise.** Under this chapter’s assumptions, the company receives 3,600 yuan. Full project cost is 4,200 yuan and cash cost is 2,600 yuan. How should the result be described?

**Answer points.** Project contribution is negative 600 yuan. If all 3,600 yuan has arrived and other cash conditions are unchanged, the cash balance increases by 1,000 yuan. These results are compatible: some costs, such as labor, have not become cash expenditure in the current period.

## Chapter 4: Turn “We Think It Is Better” into a Testable Comparison

A story seeming smoother after revision establishes only that an internal review has produced a new version. To determine whether the version change caused a change in audience behavior, you need a comparison design. A randomized A/B experiment assigns eligible users to versions at random under prespecified rules. Nonrandomized observation includes posting A today and B tomorrow, or posting one version on each of two accounts. The latter approaches mix in differences in timing, recommendation systems, audiences, and accounts.

This project draws on online experimentation methods: specify a falsifiable hypothesis, the unit of randomization, a primary metric, guardrail metrics, and stopping rules before collecting results. The method comes from software experimentation; applying it to short drama is our adaptation. [FM04: Microsoft experimentation guide](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)

The first comprehension test for *Back for Revision* can invite a small number of people who meet the target criteria. Each watches one frozen version and independently answers, “Where was the date changed, who knew, and what establishes responsibility?” This helps find obvious defects; it is not enough to estimate a market click-through rate. A formal A/B experiment requires a larger, suitable sample. Its size depends on the baseline, the smallest meaningful difference, and the required level of uncertainty. There is no universal rule that “20 people is enough.”

**Concrete plan.** Suppose the only comparison is between “explain the approval relationships first” and “reveal them later,” keeping other content as consistent as possible. Randomize by person. The primary metric is a prespecified rate of correct timeline comprehension. Guardrail metrics include liking, confusion, and intention to continue watching. Measure actual continuation separately during real distribution; saying “I would watch” is not actual viewing behavior.

A formal plan also needs an observation window and statistical analysis to prevent stopping as soon as a favorable result appears. If you use a sequential method, specify it before starting. Check for unexpected differences in group sizes, missing logs, participants seeing both versions, and incorrect version delivery. When the sample is insufficient, report intervals and uncertainty rather than forcing a winner.

**Counterexample.** A receives 1,000 views and B receives 3,000, so the team attributes the difference to B being better. B may simply have received more impressions. Even if random assignment shows an increase in clicks for B, worsening comprehension, complaints, or post-payment satisfaction means that launch decisions cannot rely on clicks alone.

**Exercise.** You publish one version on each of two days, and B has a higher completion rate. What can you say, and what should you do next?

**Answer points.** You can report an observed association, but cannot establish causality. First inspect differences in traffic sources, impressions, users, and timing. Conduct a randomized comparison if conditions allow, or retain the result only as a lead for further testing. Do not present it as an A/B experiment.

## Chapter 5: Distribution Is a Delivery Process, Not an Upload Click

Distribution requires media files, metadata, rights documentation, platform submissions, subtitles and audio, version labels, viewer guidance, and clear responsibility for reconciliation. Identify the specific product or channel first, then build a delivery checklist from its current rules. WeChat Mini Programs, WeChat Channels, and Tencent Video are not one settlement product. The availability of PineDrama advertising inventory also does not mean individuals can directly upload works for revenue sharing. [GM09: Official PineDrama advertising guidance](https://ads-useast2a.tiktok.com/resources/help/article/about-pinedrama-for-performance-auction-in-tiktok-ads-manager?lang=en)

China’s *Measures for the Development and Administration of Microdramas* took effect on 2026-09-01. Different categories involve different licenses, approvals, or platform review numbers; Article 34 concerns notices in every episode of AI-produced works. Separate rules also govern labeling of generated and synthesized content. At delivery, check the work’s category and the platform’s current requirements. Research notes do not establish that the required submissions have been completed. [CM16: NRTA original text](https://www.nrta.gov.cn/art/2026/7/31/art_1588_73827.html), [CM17: Labeling measures](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm)

YouTube’s current monetization policy distinguishes series using the same characters with new plots from mass-produced, repetitive template content. AI does not automatically disqualify content from monetization, nor automatically exempt it from originality, copyright, or advertiser-friendly requirements. [GM10: YouTube policy](https://support.google.com/youtube/answer/1311392?hl=en)

**Worked example.** The release package for *Back for Revision* should connect to the same versions of the screenplay, character and prop records, finished film, subtitles, music/voice permissions, and cover image and synopsis. After changing the edit, check whether subtitle timing and the synopsis’s promises remain accurate. The maintenance history of an existing skill also records a fix for subtitles becoming invalid after media was regenerated, demonstrating an actual workflow dependency. [TS22: Drama Skills changelog](https://github.com/zenstory-ai/drama-skills/blob/main/CHANGELOG.md)

**Counterexample.** A fictional teaching case is packaged as a real corporate scandal to attract clicks. Or an advertisement promises the “complete ending” when only a three-episode sample is delivered. Both create a gap between expectations and the viewing experience; short-term clicks do not excuse it.

**Exercise.** Beyond translating dialogue, what should you check when sending the same Chinese-language film to an overseas platform?

**Answer points.** Whether local viewers can understand the approval process; subtitle pacing and formats for units and dates; the territories covered by voice and music rights; the platform’s display areas and specifications; labeling requirements; and the contract’s scope. An untested literal translation is not completed localization.

## Chapter 6: Let Results Guide the Next Round, Not Attractive Numbers

After reviewing the data, first ask whether it can answer the original question. A viewing spike may occur because people like a moment, or because they rewatch it after failing to understand it. Official analytics guidance explicitly notes these multiple interpretations. [FM03: YouTube retention metrics](https://support.google.com/youtube/answer/9314415?hl=en). Similarly, a comment saying “that makes no sense” needs to be traced to a specific causal link, character motivation, or visual misunderstanding. It should not automatically overturn the entire film.

Keep a learning record for each round: the frozen version, hypothesis, actual execution, expenditure and hours, metric results, uncertainty, negative signals, decision, and changes in the next version. Decisions fall into three categories: continue, repair, or pause investment. A version not yet shown to be effective may proceed to another small test, but its budget should not expand without evidence.

**Worked example.** Suppose audience comprehension of *Back for Revision* improves substantially, liking remains uncertain, and cost per accepted unit doubles. Retain the clearer causal structure while looking for a less expensive way to present the information. You do not have to choose only between “keep the entire expensive version” and “revert everything.” If viewers still do not understand how responsibility shifts after revision, re-examine the story’s core task rather than continuing to add effects.

Economic decisions need sensitivity analysis: when do changes in the settlement rate, eligible viewing, working hours, or refunds make the project unviable? Suppose total cost is 10,000 yuan and the producer receives 10 yuan per 10,000 settlement units. Recouping that cost requires 10 million settlement units measured on the same basis. This is not a guarantee of profit from 10 million publicly displayed views. If the contract settles by watch time, replace the entire unit rather than reusing a view-count formula.

**Counterexample.** A team extracts shared tags from the ten most popular dramas but ignores failed works with the same tags. This survivorship bias can make common conventions look like causes of success. Nor can AI write a screenplay, score it itself, and then call a high score market validation.

**Exercise.** The current version meets its click target, but complaints focus on “the ending is unclear” and “I paid before discovering this wasn’t a complete work.” Should promotion immediately increase? State the next step.

**Answer points.** First stop amplifying the defect. Check advertising promises against the scope of delivery, repair the ending or clearly label the work as ongoing, and observe satisfaction, refunds, and actual continuation again. Existing clicks remain one metric; they cannot cancel out promises that have not been fulfilled. Only real delivery and external testing can turn this book’s ledgers and experimental procedures into useful project knowledge.
