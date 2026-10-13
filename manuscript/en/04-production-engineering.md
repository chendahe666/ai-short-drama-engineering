# Volume 4: AI Short-Drama Production Engineering

*From a Single Shot to a Traceable, Revisable Finished Film*

Version: 0.1 pilot textbook. Evidence search cutoff: 2026-10-13. This volume uses the original teaching case *Back for Revision*: designer Lu Qiao, supervisor Han Zheng, client Zhou Ning, and the v7/v8 approval records that contain different opening dates. The case script supplies the actual dates and the facts of the approval process. This volume uses DATE-v7 and DATE-v8 as placeholders; production tools must not decide their values on their own.

Engineering, as used in this volume, means enabling another producer to understand why a file exists, where to make a correction when something goes wrong, and what must be checked afterward. Existing tools and skills have been read and compared, but have not been installed or run. The requests, ledgers, and figures in this book are teaching examples, not evidence of generated footage or actual charges.

## Chapter 1: Define the Deliverable Before Choosing the Tools

The input to production is more than “film this story.” It includes at least four things: an accepted script, assets that may be used, specifications for the finished film, and a way to judge quality. Leave one out, and the tool will make the missing decision for you. Suppose the script only says that Lu Qiao sees the approval record. If the storyboard does not specify when the audience sees the version number, the model may reveal v8 too early and spoil the later disclosure. Attractive images cannot repair that error.

For an evidence shot in *Back for Revision*, first write a delivery card:

| Field | Entry for this example |
|---|---|
| Narrative purpose | Let viewers clearly read the version and date that this shot is supposed to reveal |
| Upstream basis | The specific script passage and confirmed approval record, with file paths and versions for both |
| Visual inputs | An accepted location image, prop positions, and a blank screen or document plate |
| Output | Editable footage plus a revisable text overlay |
| What must be correct | The date, version, approver, and order of appearance must match the script |
| What may vary | Fine paper texture and background decoration that do not affect the story |
| Acceptance method | Check the text character by character; ask someone who has not read the script to explain which version they saw |
| What is still missing | Leave every unresolved field pending confirmation; do not generate a plausible-looking value |

A “shot” is a narrative unit in the edit. A “generation job” is a unit of local or remote execution and output; a remote service may charge for it under its own rules. The two do not have to match. A six-second generated clip may contribute only two seconds to the edit, while a longer conversation may be assembled from several jobs. Confusing these units leads to errors in cost, duration, and edit positions.

The complete handoff chain works as follows: the script determines what happens; the asset register determines who and what the characters, places, and objects are; the storyboard determines how viewers see them; generation jobs specify the required material; the edit list determines what is actually used; and the acceptance ledger records why an output was accepted or sent back. A downstream stage may discover an upstream problem, but it should return that problem for correction rather than quietly inventing new facts.

Exercise: The model changes DATE-v7 on the approval record to DATE-v8, while the characters and lighting are completely correct. Does the output pass?  
Answer: No. The date is essential narrative information. If the text was designed as a post-production overlay, you can retain the acceptable plate and rebuild the text layer. If a character is pointing to the wrong location, also check whether the action aligns with the corrected text.

## Chapter 2: Tools Perform Jobs; Skills Describe the Work

One brand may offer several models, and the same model may appear on different websites. Before choosing a tool, ask what it will do in the handoff chain. Using “this brand is the strongest” as the sole criterion hides account permissions, input limits, prices, and retry costs.

| Candidate | Suitable role | Minimum check before use |
|---|---|---|
| Runway | Reference-guided generation and shot editing | Which references the current model accepts, and whether characters and props are correct |
| Kling | Candidate for subject-referenced shots, Chinese dialogue, and related work | Speaker identity, lip sync, two-person spatial relationships, and the usable audio interval |
| Seedance/ModelArk; check the Jimeng entry point separately | Multimodal generation or editing | Exact model ID, aspect-ratio cropping, account permissions, and job interface |
| Luma Modify | Transformations based on existing performance footage | Authorized inputs, preservation of the performance, and what keyframes actually mean |
| Flow/Veo | References, first/last frames, and extensions, according to the model | Whether the selected model supports the feature, current credits, and output mode |
| ElevenLabs | Character dialogue and voice identity management | The plan in force at generation time, voice-source rights, emotion, and pronunciation |
| ComfyUI | Saving and reusing local or API workflows | Node versions, model licenses, machine resources, and failure logs |
| Remotion | Text/UI, captions, and programmatic assembly | Fonts, timeline, rendering, and framework license |
| DaVinci Resolve/Premiere | Editing, mixing, color work, and delivery | Project frame rate, audio tracks, and destination-platform specifications |

This is a division of work, not a ranking of output quality. The sources are entries TS06–TS17 in the tools evidence pack. Sora belongs in this textbook's historical section: OpenAI gives 2026-04-26 as the discontinuation date for the web/app experience and 2026-09-24 for the API. New projects should not continue to be planned around old tutorials. [Official timeline](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)

Among existing skills, [Drama Skills](https://github.com/zenstory-ai/drama-skills) has an MIT license, eleven skills, and a maintenance log, making it a candidate for production handoffs. [Dramake](https://github.com/xixihhhh/ai-short-drama-skill) brings together voice, shot, budget, and other records. [Short Drama Agent](https://github.com/MrMO0802/short-drama-agent/blob/main/SKILL.md) emphasizes spatial orientation, object states, and causality, but its license was not confirmed in this review. [Remotion's official skills](https://www.remotion.dev/docs/ai/skills) are suited to post-production automation. Reading these files establishes how they are designed; it does not establish that running them achieves the intended result.

Before adopting a skill, test it on a short original script: Does it change facts without permission? Does it refer to assets that do not exist? Does it mark files awaiting generation as already generated? Can it locate the cause of a failure? Giving several skills simultaneous authority to change the same character specification can cause them to overwrite one another. Designate one authoritative specification file and let downstream stages reference it. Record a change request when a change is needed.

Exercise: A skill says, “Every shot must last 2–4 seconds.” Can that be treated directly as an industry standard?  
Answer: No. It is a default chosen for one workflow. Shot length should follow dialogue, action, emotion, and the relationship to adjacent shots, while generated duration is also constrained by the model. Drama Skills' maintenance log also records the narrowing of overly general rules and the limits placed on conclusions from small model-specific samples. [Changelog](https://github.com/zenstory-ai/drama-skills/blob/main/CHANGELOG.md)

## Chapter 3: Continuity Is State Management, Not Just the Same Face

Keeping Lu Qiao's face consistent solves only part of identity continuity. The approval sheet in her hand, Han Zheng's position, the version visible on the screen, and whether Zhou Ning already knows about the date change are object, spatial, and information states. An unexplained jump in any of them can make viewers misunderstand causality.

First assign stable asset identifiers, such as CHAR-LU, CHAR-HAN, CHAR-ZHOU, PROP-APPROVAL, and SCENE-OFFICE. These identifiers do not change when files are renamed. For each asset, record its source, usage rights, current version, path, file hash, and acceptance status. A character reference controls appearance; a location image controls space; a composition reference controls framing. They serve different purposes and should not be inserted into prompts indiscriminately.

Next, describe a shot's starting and ending states. This example defines engineering fields only; it does not adapt the plot:

```yaml
shot_id: SH-EXAMPLE-03
story_source: "script_path#passage_identifier"
start:
  visible_document: "The version specified by the script"
  hand_state: "Fill in according to the accepted storyboard"
  audience_knows: ["Information revealed before this shot"]
end:
  visible_document: "What may be visible at the end of this shot"
  hand_state: "The state of held objects after the actual action"
next_dependency: "The state that the next shot must inherit"
references:
  identity: "Character-image path and hash"
  composition: "Composition-image path and hash"
text_overlay: "Approval-text file path and version"
status: planned
```

A character walking from a chair to a doorway is a justified change. Suddenly appearing on the other side without a shot showing the movement or an audio cue is a change that needs investigation. A continuity table should not prohibit all change; it should require a reason for important changes. Flashbacks, jump cuts, and subjective shots may break ordinary continuity, but the plan must explain how viewers will recognize the change.

Accepting a still frame first can often reveal composition and text problems earlier. But “every shot must start with a still” should not become a permanent rule either: a workflow that modifies performance footage may use video as its main input. The engineering requirement is to inspect the least expensive intermediate output that can expose the central risk. In a two-person conversation, at minimum establish who is on the left and right, where each person is looking, and who is speaking.

Community filmmakers have reported benefits from character sheets, while others found that wide location references pulled close-ups back into wide shots. This is a reason to test what a reference does, not proof that a particular character sheet always works. [Creator discussion](https://www.reddit.com/r/aifilmmaking/comments/1w484j8/what_i_learned_about_character_consistency_while/)

Exercise: To keep the office consistent, you include the same wide location image in every close-up request. The faces become smaller and smaller. How should you fix it?  
Answer: First determine whether the composition reference is too strong or the text instruction is unclear. Crop the background to the part actually needed, or supply a separate close-up composition, then compare results using the same character reference. Change only the main suspected cause at each step and preserve failed versions. Changing the model, character image, and prompt at the same time makes the result difficult to explain.

## Chapter 4: Every Generation Is a Traceable Production Transaction

Before generating, be able to answer, “What is this expenditure supposed to produce?” A job record should include at least provider, model, model_version, read_date, input hashes, request parameters, job ID, output path, charges, and result status. If the provider does not disclose a model version, write not_disclosed and preserve the exact model ID, call time, and request. Do not invent a version number.

The following example fields must be populated with real values during actual production:

```json
{
  "job_id": "JOB-EXAMPLE-001",
  "provider": "to_select",
  "model": "to_select",
  "model_version": "not_disclosed",
  "read_date": "2026-10-13",
  "shot_id": "SH-EXAMPLE-03",
  "input_hashes": [],
  "provider_task_id": null,
  "status": "planned",
  "charged_amount": null,
  "accepted_seconds": 0
}
```

Save the provider's ID immediately after submitting a remote job. For local execution, save the local job ID, execution status, and resource logs. A network interruption, sleep event, or terminated process does not mean a remote job never ran. Query its status or retrieve its result before deciding to resubmit. Otherwise, the same shot may be paid for twice. Whether a request supports an idempotency key must be checked in the current API documentation; a local job number alone cannot prevent duplicate provider charges.

Separate failures into three categories. For a service error such as a timeout, first check status and refunds. For incompatible inputs, such as an incorrect aspect ratio or number of references, fix the request. For a completed job with unacceptable characters, action, or storytelling, return to the assets or storyboard to investigate. Do not assume the third category will be refunded. Runway's web help and API documentation also describe failure categories differently, which is why accounting must record the actual entry point used. [API failure documentation](https://docs.dev.runwayml.com/errors/task-failures/)

Use the seconds actually adopted as the cost denominator. Suppose a teaching experiment generates nine six-second clips at CNY 4.8 per job, with twelve seconds ultimately used in the edit. Generation costs CNY 43.2, or CNY 3.6 per adopted second. Add half an hour of labor at CNY 60 per hour: the cost becomes CNY 73.2, or CNY 6.1 per adopted second. These prices are assumptions for calculation, not platform quotes. Unused clips, reference images, and failed attempts also consume money or time and should remain in the ledger.

Before retrying, write a falsifiable diagnosis: “The hand-contact error may come from an unclear starting pose.” Change the relevant input on the next attempt and inspect the hands. If the same type of failure recurs, change the composition, change the way the scene is shot, switch tools, or complete the effect in post-production. The project sets its retry count and budget ceiling. When the limit is reached, escalate the decision rather than continuing blind retries.

Exercise: The experiment above incurs three more generation charges. Adopted duration remains twelve seconds and labor is unchanged. What is the new unit cost?  
Answer: (43.2 + 14.4 + 30) ÷ 12 = CNY 7.3 per adopted second. If a new shot replaces an old one, the old generation cost has still been incurred; it cannot be removed from actual costs.

## Chapter 5: Editing Turns Material into Events

Not every second of a generated clip deserves to remain. The edit list records actual source in-points and out-points, the corresponding script passage, and the reason for using the material. It must not simply copy estimated durations. For example, if the cut occurs before viewers can finish reading the approval text, they see only “someone holding a document.” The evidence has not performed its narrative role. Acceptance must ask what viewers understood.

Placing DATE-v7, DATE-v8, and the approver in editable text layers enables character-by-character checks and makes multilingual versions easier. But overlays must track camera movement correctly rather than floating over the image. Do not rely on a generation model to get important text “roughly right.” You can use a blank prop plate and compositing, or use a generated result that has passed a character-by-character check.

At minimum, separate dialogue, ambience, sound effects, and music. Confirm the words and speaker first, then inspect lip sync and acoustic space. Office dialogue should not be dropped into the mix merely because the voice tool produces clean audio: distance, reverberation, and background noise affect whether characters seem to occupy the same place. Continuous ambience often helps connect cuts, but retain the creative option of sudden silence when the story calls for it. [Blackmagic's official audio training](https://www.blackmagicdesign.com/au/products/davinciresolve/training)

Dialogue and picture do not always have to begin and end together. Letting sound enter the next shot early, or cutting to a listener before the line ends, may better serve a reaction. Check whether viewers can tell who is speaking, whether the line continues correctly across the cut, and whether the ending is truncated. Do not require every shot to contain a complete spoken line.

Technical delivery follows the destination platform's current specifications. Record the source and verification date for aspect ratio, frame rate, encoding, audio sampling, subtitle safe areas, and loudness. Do not declare one common loudness value a standard for every platform. After a successful render, inspect the beginning, ending, cut points, captions, and sound in the final file. A correct project preview does not guarantee a correct export.

Once material is regenerated, old caption timing may become invalid. Mark captions, tracking data, color matching, and downstream edits for review; measure again before accepting them. Renaming a file while retaining the old timeline can leave dialogue misaligned even when technical checks pass.

Exercise: Lu Qiao's dialogue is re-voiced, but the words have not changed. Can the existing captions and lip sync be reused directly?  
Answer: They cannot be accepted without checking. Word timing, pauses, and emotion may have changed. Compare the actual audio, then review caption windows and lip sync. If the audio is merely a lossless copy with identical hash, length, and content, unnecessary repeated work can be avoided.

## Chapter 6: Acceptance Ledgers and Regression Turn Iteration into Knowledge

Every adopted shot needs an acceptance-ledger entry. Minimum fields are shot ID, candidate file hash, upstream version, technical checks, continuity checks, narrative checks, reviewer, rejection reason, corrective action, acceptance date, and adopted intervals. Possible states include planned, generated, rejected, accepted, and invalidated. “The file exists” must not mean “it passed.”

Technical checks are good candidates for automation: whether the file decodes, its actual frame rate and duration, whether audio exists, and whether assets are missing. Narrative checks cannot rely on those numbers alone. Ask people who have not read the script to explain who discovered what, which record appeared first, and why the next action made sense. AI can help identify questions, but high AI self-ratings cannot replace audience answers.

Regression asks, “After fixing this problem, did we break something that was previously correct?” Retain representative cases in the project: a single speaker, two people taking turns, a close-up of a document date, hand–prop contact, clothing and orientation across cuts, and a silent reaction. When changing a model, character reference, or editing rule, choose retests according to affected dependencies. There is no need to rebuild everything each time.

An existing engineering case illustrates the full loop: a ComfyUI audio-decoding issue included a workflow, input, and error log, then linked to a fix and was closed. This is a historical, resolved defect; the textbook cites its diagnostic method. [Issue12651](https://github.com/Comfy-Org/ComfyUI/issues/12651)

If the approval-text file changes in *Back for Revision*, invalidate the shots, captions, and evidence-comprehension tests that depend on it. There is no need to invalidate unrelated empty-office shots. If the underlying truth of the story changes, the impact is wider: script, information order, reaction performances, editing, and audience tests all need reassessment. The reach of invalidation follows dependencies, not the number of characters edited.

A complete iteration record states the problem, observation, provisional cause, evidence consulted, change, validation result, and remaining uncertainty. An unvalidated fix is only a candidate solution. When an experience enters the textbook, also specify the applicable model, input type, and exceptions, so that one success does not become a permanent commandment.

Final exercise: An exported version plays correctly and shows the right date, but all three preview viewers identify Han Zheng as the person who discovered the record. What should you do?  
Answer: First check whether the questions led the viewers, then inspect the images their three answers refer to. If eyelines, reactions, or shot order attribute the discovery to Han Zheng, repair the storytelling. Do not accept it merely because encoding checks passed. Agreement among three people is only a small-sample clue. Retest the revision with new viewers and preserve both versions and the original questions. Commercial release still requires separate validation of viewing, conversion, and net receipts.

The end-of-volume deliverable is a single-scene production package that another person can take over: inputs with clear facts, versioned assets, generation-job records, an editable timeline, the final file, and an acceptance ledger containing failures and corrections. The finished film, cost, and audience understanding together indicate whether the workflow is effective.

