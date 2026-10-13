# Project contract and production records

This is a suggested schema, not a requirement to create every file for every task.

## Brief

Record project_id, original_or_adaptation, source_locator, rights_status, audience, platform_route, format, episode_scope, resource_cap, creative_intent, deliverable and acceptance. A proposed spending ceiling is not an approved one. Preserve the user's actual authorization.

Suggested rights states: unknown, inquiry_prepared, terms_received, scope_verified. A readable novel, app subscription, open-source skill license or stock subscription cannot establish all downstream rights by itself.

## Story and assets

Keep stable identifiers for episode, scene, character, prop and shot. A story fact contains who knows it and when; a prop state contains appearance, ownership/location and relevant changes. Record purposeful continuity breaks rather than treating all departures as defects.

## Generation ledger

Suggested fields: job_id, provider_or_local_environment, model, model_version_or_access_date, account_route, prompt_version, input_asset_ids, input_hashes, requested_duration, request_time, execution_status, charged_amount, refunded_amount, accepted_ranges, rejection_reason, human_minutes. Cloud jobs use provider IDs and actual billing records. Local jobs may mark provider_invoice as not_applicable and use local IDs, resource usage and labor records instead.

Do not infer a refunded charge from a failed-looking output. Query actual status/receipts. Unknown or pending job state requires reconciliation before a duplicate request. Reusing an accepted interval twice in an edit does not produce two independently accepted generated intervals for yield analysis.

Define the denominator explicitly. Cost per final second uses final exported runtime, including intentional repetitions in the finished edit; do not add overlapping track durations. Generated usable yield uses deduplicated accepted source intervals over total generated source duration. Reusing the same source interval twice does not double generation yield. These measures answer different questions.

## Dependencies

source facts → script → shot plan → reference assets/prompts → jobs → accepted media → edit/audio/captions → delivery.

This is a conceptual dependency graph, not a fixed one-way workflow. If dialogue changes, determine which audio, lip-sync, subtitle and cut products are stale. Keep unaffected artifacts accepted. Store replaced versions for comparison.

## Money

Choose cash or complete economic cost and label it. Include only actual receipts as received income; record accrued/unpaid rights separately. Free labor still has opportunity cost in complete-cost estimates. Avoid counting a subscription twice as both fixed cost and its included credits.

For a recoupable minimum guarantee G with cumulative earned royalty R covering the same term/scope, total entitlement may be max(G,R), if that is what the contract says. It is not automatically G+R. Terms can differ; read the actual agreement.

## Release state

Useful stages: paper_preproduction, media_in_progress, internal_review, viewer_test, delivery_ready, published. Passing JSON checks never promotes an artifact to viewer_test or published. A project can be useful at paper_preproduction if that is the requested deliverable.
