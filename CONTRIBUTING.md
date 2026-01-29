# Contributing to Iranicard Clone

Thank you for your interest in contributing to Iranicard Clone! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue using the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md). Include:

- A clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node.js version)

### Suggesting Features

Feature requests are welcome! Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- A clear description of the feature
- The problem it solves
- Proposed solution
- Any alternatives considered

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Submit a pull request** using the PR template

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Make your changes
5. Test your changes: `npm run build && npm start`
6. Run linter: `npm run lint`

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new files
- Follow existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### React/Next.js

- Use functional components with hooks
- Follow Next.js 14 App Router conventions
- Use TypeScript interfaces for props
- Keep components focused and reusable

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure RTL support for Persian content
- Test responsive design on multiple screen sizes

### Git Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Reference issue numbers when applicable
- Example: `Fix: Resolve navbar mobile menu closing issue (#123)`

## Project Structure

```
iranicard-clone/
├── app/              # Next.js pages and layouts
├── components/       # React components
│   ├── layout/      # Layout components
│   ├── sections/    # Page sections
│   └── ui/          # Reusable UI components
├── data/            # Static data
├── lib/             # Utilities and constants
└── public/          # Static assets
```

## Testing

Before submitting a PR, please ensure:

- [ ] Code runs without errors
- [ ] No console warnings or errors
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] RTL layout works correctly (for Persian content)
- [ ] No TypeScript errors
- [ ] Linter passes: `npm run lint`
- [ ] Build succeeds: `npm run build`

## Questions?

If you have questions, feel free to:

- Open a discussion in GitHub Discussions
- Create an issue with the `question` label
- Check the README for documentation

Thank you for contributing! 🎉
