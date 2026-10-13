# Book 3: Directing, Audiovisual Storytelling, and Scene Design

AI Short-Drama Engineering · Pilot Textbook v0.1 · 2026-10-13

This book aims to turn the actions in a screenplay into shots that audiences can understand and feel, and that editors can work with. The example parameters are teaching designs; they have not yet been validated with video models or audience experiments.

## Chapter 1: State the Purpose of the Shot First

“Cinematic, ultra-high-definition, spectacular, award-winning” does not explain why a shot exists. More useful shot objectives are to let the audience read the disputed date, see Lu Qiao prepare to sign and then stop, or see Han Zheng change his account after the client confirms what happened.

Write three sentences for every shot: what the audience knows when it begins; what this shot adds or changes; and what you want the audience to anticipate when it ends. These will determine shot size, performance, and duration. Give the date a close-up because the audience needs to identify it. Give the silent character a reaction shot because that reaction affects how the audience understands the relationship.

If a shot merely repeats information already clear in the previous shot, you can remove or shorten it, or deliberately retain it for rhythm or comedy. Be able to explain what an exception does, rather than letting a checklist make the director’s decisions.

**Exercise.** Turn “Lu Qiao stands angrily” into visible behavior. **Suggested answer:** she puts the cap back on the pen she has already uncapped and pushes the responsibility form back to the center of the table. Whether to use this action depends on the surrounding performance and the character’s habits. Do not turn one action into a universal template for anger.

## Chapter 2: A Scene Is a System of Space and States


A scene specification should include doors, tables, windows, character positions, important props, and the direction of the light. Two beautiful office images may not cut together as the same location if their doors are in different places.

For this example, establish that the meeting-room door is on the north side and the client’s seat is at the north end of the table. Lu Qiao sits on the west side and Han Zheng on the east. The printed proof and the responsibility form lie separately on the table. The camera can move, but the audience must have an opportunity to establish and update this spatial map.

Dialogue in the same scene can usually be filmed from one side of the action to maintain left–right relationships. The purpose of the 180-degree rule is spatial legibility; deliberately crossing the line can express unease or a shift in power. Adobe’s official teaching material also discusses expressive uses of breaking the rule, so “never cross the line” is not one of our mandatory rules. [FM01](https://www.adobe.com/creativecloud/video/discover/what-is-the-180-degree-rule.html)

Props need states: the responsibility form is unsigned; the pen is in Lu Qiao’s right hand; the printed proof bears the old date; and the shared system shows v8 awaiting the client’s review. If a character puts the pen down in one shot but suddenly holds it in the next, the audience’s understanding of the action may change. For generated material, record states in the shot’s inputs and outputs, rather than repeatedly pasting only the characters’ physical descriptions.

**Exercise.** Draw an overhead floor plan, then mark the camera positions and characters’ eyelines for three consecutive shots. **Answer points:** unless you deliberately change the relationship, the audience should not mistake two people speaking to each other for two people looking in the same direction at a third person.

## Chapter 3: Design Performance, Composition, and Shot Length Together


“One action per shot” suits some generation tasks that are difficult to control. Yet a natural chain of actions may need to remain continuous: Lu Qiao reads the date, looks at her supervisor, and draws back the pen. Forcing this into three segments can also make the reaction seem slow or less believable.

One existing skill treats 2–4 seconds as a strict rule; another maintained project explicitly limits certain observations about action to particular models and small samples. We therefore treat short shots as one option for reducing the cost of failure, rather than an industry-wide requirement. [TS03](https://github.com/MrMO0802/short-drama-agent/blob/main/SKILL.md); [TS22](https://github.com/zenstory-ai/drama-skills/blob/main/CHANGELOG.md)

Start with information needs when deciding shot length: has the sentence finished? Can the essential text be read? Does the character’s reaction have a beginning and a resolution? Does extending the shot add meaning? Only then check whether the model can support it. If the tool cannot do so, adjust the blocking, split the generation tasks, conceal joins through editing, or change how the scene communicates its meaning.

A vertical frame requires an allocation of vertical space. The upper area can preserve the characters’ eyelines, the middle can emphasize hands and evidence, and the lower area can accommodate subtitles. However, check specific safe areas against the target platform’s interface. Do not treat one platform’s button positions as a fixed template for every platform.

For the date close-up in this example, composite the exact text in postproduction. Leave a blank or replaceable area on the paper in the generated character footage. This separates text legibility from stochastic generation and allows the date to change without regenerating the entire performance. It is an engineering choice, not an aesthetic principle that every artwork must obey.

**Exercise.** Design two versions of the same reaction: one continuous 8-second shot and a version using two short shots. Explain their respective expressive benefits, generation challenges, and editing risks, then produce test material for comparison. Do not announce which is better before you have the material.

## Chapter 4: Sound Carries Information and Establishes Space


Dialogue, ambience, action sounds, and music do different jobs. Dialogue explains characters’ actions; the sound of a printer stopping may signal delivery pressure; room tone places separate shots in the same space; and music can change what an audience expects from the same facial expression.

One experiment presented the same short film under audiovisual, visual-only, and audio-only conditions. It found that subjective experience and different physiological measures did not move together in a simple way. This supports treating sound as an independent design concern, but does not establish that “more tense music is better.” The study used a particular participant population and a single film. [FM08](https://www.nature.com/articles/s41599-022-01461-5)

AI voice work often needs two checks. First, listen without the picture to assess phrasing, forms of address, numbers, emotion, and the character’s vocal identity. Second, combine it with the picture to check mouth movements, the sense of space, breathing, and edit points. Even a consistent voice can sound like narration pasted over an image if it lacks a sense of distance and room acoustics.

Specific issues raised by a creator community about one AI short film included overly dry voices, missing reverberation, and color shifts between shots. These are useful diagnostic leads to test, not estimates of defect rates across all generated video. [TS18](https://www.reddit.com/r/aifilmmaking/comments/1w484j8/what_i_learned_about_character_consistency_while/)

A J-cut introduces sound before its corresponding picture. An L-cut lets the preceding shot’s sound continue after the picture cuts away. In this example, we might hear the supervisor urging Lu Qiao to act during a close-up of the paper, then cut to his expression. Alternatively, when the client says, “I haven’t confirmed the new draft yet,” we can cut to Lu Qiao, letting one person’s words change another person’s situation. Do not make the speaker impossible to identify merely to reduce lip-sync costs.

**Exercise.** Write a four-track sound plan for a 30-second conversation, then watch it once without music. If the story becomes entirely incomprehensible, check the dialogue and picture first rather than continuing to add sound effects.

## Chapter 5: Editing and Subtitles Shape the Final Narrative


A complete set of media files does not mean a complete narrative. Editing selects viewpoints, controls the order of information, and preserves reactions. Assembling generated files solely in filename order may place the evidence shot before the confrontation, disrupting suspense or what the characters know.

In this example, showing the incorrectly printed date first, followed by the request to change the date, v8’s pending-review status, and the record of v7 being sent to print, lets the audience discover the cause alongside Lu Qiao. If the opening instead shows the supervisor bypassing approval, the expectation becomes “when will this be uncovered and corrected?” Either approach can work, but choose deliberately. Do not mix the two so that the sequence simultaneously pretends the answer is unknown and implies it was known all along.

Subtitles are not finished simply because the voice track has been transcribed automatically. Check names, numbers, spelling, phrasing, and synchronization with sound and picture. Check whether they cover the responsibility form, hands, or mouth movements. Also consider labeling sounds essential to understanding the plot. W3C’s guidance on captions includes identifying speakers and important non-speech sounds. This textbook adopts that accessibility goal without claiming that every short-drama platform mandates the same format. [FM02](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded)

Watch the finished film once at actual phone size, once with the sound off, and listen once through headphones. These three checks address different issues. Do not mistake “understandable with the sound off” for “sound has no function.” Test Chinese subtitle line length, display duration, and screen margins in relation to font size, language, content, and platform.

**Exercise.** Place subtitles in three different positions over the same evidence shot. Ask viewers to state the date on the paper and explain what the speaker means. If the two interfere with or obscure each other, change the layout or the shot arrangement.

## Chapter 6: Diagnosing Problems in a Scene


“This scene isn’t satisfying” might mean the protagonist does not act, the evidence is unclear, the antagonist never changes, the sound is too quiet, a character’s face changes, or the ending fails to deliver. First translate a vague judgment into a problem you can locate. Only then can you decide whether to revise the screenplay, change the shot, regenerate material, or adjust postproduction alone.

This project proposes the following diagnostic order: facts and causality → space and identity → whether information can be seen and heard → performance and rhythm → visual design details. This is a troubleshooting priority, not a claim that visual design is always unimportant. If a work’s main appeal is visual spectacle, a failure of visual design can itself be a core problem.

For each defect, record the timecode, expectation, observation, impact, scope of repair, and recheck result. For example, “At 00:23, the client says v8, but the onscreen label reads v7” may require only a local label correction. If the client has already confirmed a new version they do not yet know about, you must return to the screenplay and shot order.

**Final assignment.** Submit a scene package that can be filmed or generated, including a spatial map, character and prop states, shot purposes, a sound plan, and a draft edit. Passing a paper review shows only that the dependencies are reasonably clear. Generation quality and audience comprehension must be tested with actual media in the next stage.
