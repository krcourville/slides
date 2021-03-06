# Intro to Runbooks

## Why?

A runbook can fullfill at least a few goals:

1. Identify the existence of a service, why it was created, how it was implemented, and how to use it.
2. Document the infrastructure of a service.
3. Identity how to maintain the service.
4. Serve as a starting point for troubleshooting incidents and allowing personnel to enjoy uninterrupted vacations.

## Demo

[Runbook for Aeon_Identity_Provider](https://git.yale.edu/Library-IT/Aeon_Identity_Provider/wiki/SSO-Runbook)

### Observations

* Only accessible to users of `git.yale.edu`.
* Seems discoverable. Can locate the runbook by searching for `sso runbook` and looking at `Wikis`.
* Markdown-based: Commonly used features such as table of content and tables can be cumbersome using Github Wiki.  Use of VS Code and extensions is helpful, but a more fully-featured browser-based GUI may be ideal.
* Is Wiki better? As opposed to a `docs` dir in the associated repository?

## Recommendations

* DO: Put runbooks in a discoverable, accessible location, ideally in an organized directory of services.
* DO: Ensure runbooks are easy to contribute to and do not require extra tools to do so.
* DO NOT: Try to over-standardize the contents of a runbook.  Every service and team is different.
* DO: Offer a starting template.
* DO: Offer a checklist of items to consider for a runbook.
* DO NOT: Think that all documentation MUST go into a Runbook.
* DO: Link references to other documentation sources such as the source repo(s), api documentation.
* DO NOT: Put secrets in runbooks.
* DO: Include "runbook is updated" in acceptance criteria.
* DO: Include a table of contents that allows linking to specific topics in a runbook (unless the runbook is trivial).

## References

* [https://www.pagerduty.com/resources/learn/what-is-a-runbook/](https://www.pagerduty.com/resources/learn/what-is-a-runbook/)
* [https://www.fool.com/the-blueprint/runbook/](https://www.fool.com/the-blueprint/runbook/)
* [https://wa.aws.amazon.com/wat.concept.runbook.en.html](https://wa.aws.amazon.com/wat.concept.runbook.en.html)