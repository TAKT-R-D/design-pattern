# Contributing to Taktway Design Pattern

Thank you for considering contributing to this open-source project!  
We welcome contributions from everyone to improve the quality and usability of this documentation.

## How to Contribute

There are several ways you can help:

- Reporting bugs
- Improving documentation
- Translating content (e.g., English ⇄ Japanese)
- Proposing or refining anti-pattern or design pattern examples
- Suggesting refactoring ideas

## Before You Start

- Please [open an issue](https://github.com/TAKT-R-D/design-pattern/issues) before working on large changes.
- For small edits (typos, minor improvements), feel free to submit a PR directly.

## Local Development Setup

1. Clone the repository

```bash
git clone git@github.com:TAKT-R-D/design-pattern.git
cd design-pattern
```

2. Install dependencies

```bash
yarn install
```

3. Start the local development server

```bash
yarn start
```

The site will open at [http://localhost:3000](http://localhost:3000)

## Translations

We use Docusaurus i18n for multilingual support.

- English files: `docs/`, `advanced/`, etc.
- Japanese translations: `i18n/ja/docusaurus-plugin-content-docs/current/` etc.

Use the following to generate new translation keys:

```bash
yarn docusaurus write-translations --locale ja
```

Then, edit the corresponding files under `i18n/ja/`.

### Local Preview for Translations

Docusaurus uses hot-reload for development, but it only supports one locale at a time.

If you want to preview Japanese (ja) pages locally, use:

```bash
yarn start --locale ja
```

To go back to English (en), just run:

```bash
yarn start
```

Note: Do not rely on the language switcher in development mode—it will not reload the content properly across locales. This is a known limitation of Docusaurus during development.

## Pull Request Guidelines

- Use clear and descriptive commit messages.
- Fork the repo and create a new branch from `main`.
- Follow our file/folder structure and naming conventions.
- Keep PRs focused and minimal.

Example:

```bash
git checkout -b fix/typo-in-god-object
```

## Checklist Before Submitting

- [ ] Run `yarn build` to verify no build errors.
- [ ] Make sure all content is properly formatted.
- [ ] Confirm the changes show correctly in both languages (if applicable).

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

Thank you for your contributions!
