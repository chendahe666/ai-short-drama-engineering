# AI Short-Drama Production Engineering: Body of Knowledge and Textbook Blueprint

[中文](../zh/overview.md)

Pilot edition v0.1 · 2026-10-13

## What This Framework Is Intended to Address

An AI short drama is a continuous narrative product. It enables a particular audience, in a particular viewing situation, to understand the characters’ circumstances, form expectations, experience change, and want to keep watching. The production team must also complete it within constraints of budget, schedule, authorization, and platform delivery requirements. Image and video generation are only one part of that process.

We provisionally call this framework “AI Short-Drama Production Engineering.” This is our working name and curriculum structure, not yet a new discipline recognized by the academic community or a formal industry standard. Existing knowledge in film, animation, screenwriting, software engineering, experimental design, and media business provides its foundation. What we hope to add is a set of interfaces, recordkeeping practices, and acceptance methods connecting that knowledge in generative production.

A university has already partnered with DramaBox to offer a practical microdrama course, and historical texts of microdrama association standards also exist. Claims such as “the world’s first” or “the first person to establish standards” therefore lack supporting evidence at present. A contribution we can realistically pursue is a traceable, open draft that invites replication by different teams, publishes failures and disagreements, and earns adoption by others. [GM17: University course](https://news.calstatela.edu/2026/02/11/cal-state-la-partners-with-dramabox-to-launch-a-groundbreaking-microdrama-academic-course/); [FM05: Standards development process](https://www.iso.org/developing-standards.html)

## Why We Recommend Six Volumes

Organizing volumes around generation software would date quickly. Organizing them only around writing, cinematography, and editing could leave out platform economics and experimental feedback. The six volumes correspond to six types of decisions, each producing an output that can be handed to the next stage.

| Volume | Title | Core question | Deliverables after completing the volume |
|---|---|---|---|
| 1 | Market and Research Methods | Who are we making this for, and which information deserves our trust? | Opportunity brief, brand-coverage table, comment-coding table |
| 2 | Story Design and Adaptation | Why should viewers care, and why does change occur? | Story promise, character actions, causal diagram, episodic script |
| 3 | Directing, Audiovisual Storytelling, and Scene Design | What will viewers learn and feel from this shot? | Scene map, shot list, sound plan, editing design |
| 4 | AI Production Engineering | How can we produce consistently, control rework, and maintain traceability? | Asset library, job ledger, version and acceptance records |
| 5 | Distribution, Profitability, and Experiments | How do we reach viewers, and how do we know whether a revision works? | Contract definitions, project accounts, experimental plan, review |
| 6 | Case Studies and Standardization Practice | How can experience become a specification others can use? | Case-replication package, provisions, disagreement and revision records |

These are substantive pilot texts for six volumes, each containing teaching explanations, examples, and exercises. Their length remains that of introductory workbooks; they are not six completed, peer-reviewed scholarly monographs. Tool details belong in the evidence library and formal provisions in the draft specification, so tool updates do not force every textbook to be rewritten.

## Shared Objects and Terms

- **Project:** an agreement about content, audience, budget, and delivery.
- **Story promise:** the experience a work leads viewers to expect—for example, seeing a misunderstood person act to secure fair treatment.
- **Beat:** a meaningful change in information, goals, relationships, or the state of the action; it is not the same as a cut.
- **Scene:** a unit of action unfolding within relatively continuous time and space.
- **Shot:** a continuous unit of audiovisual presentation. One generation job may produce several shots, and several jobs may also be assembled into one shot.
- **Asset state:** the specifications and accepted materials for characters, clothing, props, locations, and sounds at a particular point in time.
- **Acceptance:** confirmation that an output is usable for a purpose stated in advance. Successful generation means only that the service completed its job.
- **Evidence:** traceable material sufficient to support a judgment within a defined scope. A famous source is no substitute for applicability.
- **Method learning:** incorporating new evidence into principles, cases, checks, and versions. This project does not thereby train or permanently change the underlying model’s weights.

## Knowledge Areas and Boundaries

1. Audiences and culture: viewing contexts, needs, genres, cross-cultural meanings, and comment sampling.
2. Narrative and adaptation: conflict, action, causality, characters, suspense, fulfillment of promises, and mapping to source works.
3. Audiovisual expression: composition, performance, blocking, space, sound, time, editing, and subtitles.
4. Generative production: task decomposition, reference binding, generation constraints, identity and state consistency, and postproduction compositing.
5. Engineering management: configuration, dependencies, error recovery, cost, schedule, delivery, and regression checks.
6. Platforms and business: entry points, eligibility, recommendations and advertising, settlement, cash flow, and managing a series.
7. Measurement and research: observation, qualitative interviews, experiments, data quality, and external validity.
8. Rights and governance: adaptation scope, use of materials, character/person and voice permissions, labeling, platform rules, and rule changes.
9. Standardization: working definitions, conformity, exceptions, versions, participants, disagreements, and public adoption.

Organizing the curriculum around knowledge areas draws on the public introduction to SWEBOK. We have neither reproduced its complete contents nor obtained its certification. [FM06](https://www.computer.org/education/bodies-of-knowledge/software-engineering)

## When a Principle Qualifies for Inclusion in the Textbooks

Every principle must answer at least six questions: what problem does it aim to solve; in which situations does it apply; what supports it; when might it not apply; how can it be checked; and what is currently unknown?

Do not conflate these four levels of authority:

| Category | Example | How it can be changed |
|---|---|---|
| External obligation | AI labeling rules applicable at release | Consult the original regulatory text and platform updates, and apply them within their actual scope |
| Project agreement | This sample has three principal characters and three episodes, each approximately one minute long | Update the brief and dependent outputs, preserving the reason |
| Conditional recommendation | Prefer a stable line of action for dialogue within the same scene | Use a different design for a clear expressive purpose and check comprehensibility |
| Hypothesis awaiting validation | Showing the incorrect bill first may improve comprehension of the opening | Prespecify the comparison and metrics, then judge after testing |

We do not treat “a dramatic hook every three seconds,” “no shot may exceed four seconds,” or “one model is the best in the world” as foundational laws.

## The Project Running Through All Six Volumes

The original teaching case *Back for Revision* follows designer Lu Qiao, who is accused of putting the wrong date on materials for an opening event. Her supervisor, Han Zheng, demands that she sign a responsibility form immediately. She checks versions and approval records with client Zhou Ning, identifies the skipped confirmation following a date change, and argues for addressing the facts and delivery before assigning responsibility. The ending resolves the immediate misunderstanding while retaining the real cost of reprinting.

The case is an exercise. We do not claim that it came from a real client, has been made into a short drama, has won audience approval, or proves that it can make money. The previously considered Chinese novel *公司扣我年终奖，我不忍了* (working English title: *The Company Withheld My Year-End Bonus—I've Had Enough*) remains a separate candidate for commercial adaptation, with authorization still to be verified. This teaching case neither replaces the rights check for that candidate nor borrows its specific plot, dialogue, or characters.

## Recommended Learning Sequence

First complete the opportunity brief in Volume 1, then use Volumes 2 and 3 to develop a work on paper. Volume 4 supports a minimal technical pilot. Volume 5 designs and collects feedback. Volume 6 brings only those parts that withstand scrutiny into the specification. Who needs to participate depends on the project’s scale; one person is not required to serve as nine different experts.

The first round’s final deliverable is a complete case package that demonstrates the method. The next round must add actual media, viewing records from the target audience, real working hours, and costs, followed by replication across works and teams. AI self-evaluation or document consistency alone cannot elevate a candidate principle to “market-validated.”

## A Practical Route to Initiating a Standard

Begin by publishing a version and provisions that others can discuss, giving every requirement a problem identifier, supporting evidence, and a test. Then invite screenwriters, directors, generative-production practitioners, editors, distributors, rights holders, and audience representatives to identify situations in which it fails. Consider releasing a stable version only after trials by different teams and public handling of disagreements. These participants and trials have not yet been recruited. During the original research round, nothing was publicly released on the user’s behalf, no invitations were sent, and no certification was requested. The current book release does not establish external trials or standards certification.

Foundational documents, public research, and records of actual projects can gradually make this framework credible. The number of books written first does not itself establish a discipline.
