# Changesets

Add a changeset to every pull request that changes the published package:

```console
npm run changeset
```

Select `lbcamden-frontend`, choose the semantic version impact, and write a concise user-facing summary. Documentation, test-only, and internal tooling changes do not require a changeset.

The Prepare release workflow consumes pending changesets and checks that their combined version increment matches the patch, minor, or major option selected when the workflow is dispatched.
