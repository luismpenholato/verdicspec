# npm CI/CD

The repository has three GitHub Actions workflows:

- `ci.yml`: validates pushes and pull requests.
- `publish.yml`: provides an optional manual OIDC publish path.
- `release.yml`: increments the patch version, publishes, tags, and creates a GitHub Release after package changes reach `main`.

## One-time setup

1. Create or confirm the npm package name.
2. Ensure the package metadata points to this GitHub repository.
3. Create an npm access token with permission to publish this package.
4. In GitHub, open `Settings → Secrets and variables → Actions` and create:

   ```text
   Name: NPM_TOKEN
   Value: <the npm access token>
   ```

5. Create the GitHub environment named `npm`.
6. If you prefer tokenless publishing, configure npm Trusted Publishing instead. On npmjs.com, open the package settings and add a GitHub Actions Trusted Publisher.
7. Configure:
   - owner: `luismpenholato`;
   - repository: `verdicspec`;
   - workflow filename: `publish.yml`;
   - environment: `npm`.
8. Add approval rules to the `npm` environment if you want a human gate before publication.

The automatic `release-on-main.yml` workflow uses `NPM_TOKEN`. The tag-based `publish.yml` workflow uses OIDC Trusted Publishing and does not require `NPM_TOKEN`.

## Release process

For automatic releases, merge a package change into `main`. The workflow will:

1. Validate the package and run tests.
2. Increment the patch version.
3. Publish the package using `NPM_TOKEN`.
4. Commit the new `package.json` and `package-lock.json`.
5. Create a `vX.Y.Z` tag.
6. Create a GitHub Release with generated notes.

For a controlled manual release, update the version and create a tag:

```powershell
npm version patch
git push origin main --follow-tags
```

For a minor or major release:

```powershell
npm version minor
npm version major
```

The release workflow pushes an annotated version tag and creates the GitHub Release after publication. The tag does not trigger a second npm publication.

For the optional tokenless path, run `publish.yml` manually after configuring npm Trusted Publishing for the repository and workflow.

## Local checks

```powershell
npm run validate
npm pack --dry-run
```

Do not place npm tokens in the repository, workflow file, or `.npmrc` committed to source control.
