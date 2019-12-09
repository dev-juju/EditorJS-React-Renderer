# Contributing to EditorJS-React Renderer (ERR)

The following is a set of guidelines for contributing to EditorJS-React Renderer. Please spend several minutes reading these guidelines before you create an issue or pull request.

## Code of Conduct
We have adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development
All work on EditorJS-React Renderer happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

## Branch Organization
According to our release schedule, we maintain two branches, master and feature. If you send a bugfix pull request, please do it against the master branch, if it's a feature pull request, please do it against the feature branch.

## Bugs
We are using GitHub Issues for bug tracking. The best way to get your bug fixed is using our issue helper and provide reproduction steps with this template.

Before you report a bug, please make sure you've searched exists issues, and read our FAQ.

## Proposing a Change
If you intend to change the public API or introduce new feature, we also recommend you use our issue helper to create a feature request issue.

If you want to help on new API, please follow our API Naming Rules.

## Your First Pull Request
Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)


## Sending a Pull Request
The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1) Fork the repository and create your branch from the correct branch.

2) Run npm install in the repository root.

3) If you've fixed a bug or added code that should be tested, add tests!

4) Ensure the test suite passes (npm run test). Tip: npm test -- --watch TestName is helpful in development.

5) Run npm test -- -u to update the jest snapshots and commit these changes as well (if there are any updates).

6) Make sure you follow our style guide (take a look at .eslint.js in the root directory).
