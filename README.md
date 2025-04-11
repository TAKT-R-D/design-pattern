# Design Pattern Tutorial

_An anti-pattern driven design pattern guide, for practical and structural understanding._

This is an open-source tutorial site built with [Docusaurus](https://docusaurus.io), focusing on **real-world design patterns**.

Rather than starting from abstract concepts, this guide starts with **anti-patterns** and shows how they can be improved using multiple design patterns.  
Engineers will learn how to choose and apply the right structure for the right situation.

**Live site**: [https://takt.dev/design-pattern/](https://takt.dev/design-pattern/)

## Getting Started

Clone the repository and start the development server:

```bash
git clone git@github.com:TAKT-R-D/design-pattern.git
cd design-pattern
yarn install
yarn start
```

Then open your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `docs/`: Main documentation content (anti-patterns, patterns, summaries, practices)
- `advanced/`: Supplemental guides and pattern combinations
- `i18n/`: Translations for multi-language support
- `src/`: Custom components and styling
- `static/`: Static assets (images, og-images, etc.)
- `docusaurus.config.ts`: Site configuration

## Localization

This project supports multiple languages (currently English and Japanese).

To write or update translations:

```bash
yarn docusaurus write-translations --locale ja
```

Edit the translated content in `i18n/ja`.

> 💡 To preview Japanese content locally, run:
>
> ```bash
> yarn start --locale ja
> ```

## Contributing

We welcome contributions!

To suggest improvements, submit a pull request or open an issue.  
For major changes, please open a discussion first to propose your ideas.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.  
Please also read our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.

## Security

If you find a security issue, please see our [Security Policy](./.github/SECURITY.md).

## License

This project is licensed under the [MIT License](./LICENSE).

Thank you!
