# Restricting Release Actions

GitHub does not provide a per-workflow allowlist. Use protected environments to require approval before privileged jobs receive secrets or run, then protect the workflow files with CODEOWNERS and branch rulesets.

## 1. Create a release-management team

In the LBCamden GitHub organisation:

1. Open **Teams**, then select **New team**.
2. Name it `release-managers`.
3. Add only people authorised to prepare and publish releases.
4. Give the team **Write** access to this repository, or **Maintain** if members also manage repository settings.

Using a team makes access easier to review than listing individuals separately.

## 2. Protect release preparation

Add the environment to the `prepare` job in `.github/workflows/prepare-release.yml`:

```yaml
jobs:
  prepare:
    if: github.ref == 'refs/heads/main'
    environment: release-management
    runs-on: ubuntu-latest
```

Commit and merge this change. Then:

1. Open **Repository Settings → Environments → New environment**.
2. Enter `release-management` and select **Configure environment**.
3. Enable **Required reviewers** and add `release-managers`.
4. Enable **Prevent self-review**, if available.
5. Under **Deployment branches and tags**, choose **Selected branches and tags**.
6. Allow only `main` and save.

Anyone with Actions access may still click **Run workflow**, but the job pauses until an authorised reviewer approves it.

## 3. Configure the release GitHub token

The preparation workflow needs `RELEASE_TOKEN` to push a branch, open a pull request, and trigger downstream workflows. Events created using the default `GITHUB_TOKEN` do not trigger further workflow runs.

Create a fine-grained personal access token:

1. Open your GitHub profile **Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
2. Select **Generate new token** and use a short, reviewed expiry.
3. Choose the LBCamden organisation and select only this repository.
4. Grant **Contents: Read and write**, **Pull requests: Read and write**, and **Metadata: Read-only**.
5. Generate and copy the token. Organisation approval may be required.
6. Open **Repository Settings → Environments → release-management**.
7. Add an environment secret named `RELEASE_TOKEN`.
8. Remove any repository-level secret with the same name.

For stronger long-term security, replace the personal token with a GitHub App installation token.

## 4. Protect npm publishing

The publish workflow already declares `environment: npm-release`. Configure it through **Settings → Environments**:

1. Create or select `npm-release`.
2. Require the `release-managers` team as reviewers.
3. Enable **Prevent self-review**, if available.
4. Restrict deployment branches to `main`.
5. Optionally add a wait timer.

Create a granular npm access token using an authorised npm account. Restrict it to `lbcamden-frontend`, give it package read/write access, use an expiry, and ensure it satisfies the organisation's 2FA policy. Add it to the `npm-release` environment as `NPM_TOKEN`, then remove any repository-level `NPM_TOKEN`.

## 5. Protect workflow changes with CODEOWNERS

Add these entries to `.github/CODEOWNERS`, replacing the team slug if necessary:

```text
.github/workflows/ @LBCamden/release-managers
bin/ @LBCamden/release-managers
package.json @LBCamden/release-managers
package-lock.json @LBCamden/release-managers
src/lbcamden/package.json @LBCamden/release-managers
```

The team slug must match the team's GitHub URL.

## 6. Protect `main`

Open **Settings → Rules → Rulesets** and create an active branch ruleset targeting `main`:

1. Require a pull request before merging.
2. Require one or two approvals and a CODEOWNER review.
3. Dismiss stale approvals and require approval of the latest reviewable push.
4. Require the `Run tests`, `Dart Sass v1 (latest)`, `Release candidate / validate`, and relevant Chromatic checks.
5. Block force pushes and branch deletion.
6. Limit bypass access to administrators or designated release managers only when operationally necessary.

A check may need to run once before GitHub offers it in the required-check list.

## 7. Protect release branches

Create another active ruleset targeting `release-*`. Require pull requests, status checks, and CODEOWNER approval, and block force pushes and deletion. If branch creation is restricted, explicitly allow the `RELEASE_TOKEN` owner or GitHub App to create release branches.

## 8. Review Actions permissions

Open **Settings → Actions → General**:

1. Allow only the actions required by this repository, or local and verified actions.
2. Set default **Workflow permissions** to read-only repository contents.
3. Keep privileged permissions declared narrowly inside individual workflows.
4. Review **Allow GitHub Actions to create and approve pull requests**. Release preparation uses `RELEASE_TOKEN`, so it does not depend on this setting.

## 9. Test the controls

1. Ask a non-release manager to run **Prepare release** from `main`.
2. Confirm the job pauses at `release-management` and only an authorised reviewer can approve it.
3. Approve it and verify that the release branch, pull request, and downstream checks are created.
4. Review and merge the release pull request.
5. Run **Publish release** from `main` and confirm it pauses at `npm-release`.
6. Confirm publishing proceeds only after an authorised reviewer checks the version, commit, build results, and release notes.

Protected environments control privileged execution. Branch rules and CODEOWNERS prevent contributors from weakening those controls through an unreviewed workflow change.
