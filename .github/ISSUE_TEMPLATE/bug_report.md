name: Bug report
description: Report a reproducible bug or regression.
labels: [bug]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for reporting a bug! Please fill out this form so we can better understand and fix the issue.
  - type: input
    id: title
    attributes:
      label: Bug title
      description: Short summary of the bug.
      placeholder: "e.g. Sidebar menu does not expand"
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Please describe the bug and what you expected to happen.
    validations:
      required: true
  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce
      description: How can we reproduce the problem?
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. Scroll down to '...'
        4. See error
    validations:
      required: true
  - type: input
    id: environment
    attributes:
      label: Environment
      description: "Operating system, browser, Docusaurus version, etc."
      placeholder: "e.g. macOS, Chrome 124, Docusaurus 3.2.1"
  - type: textarea
    id: logs
    attributes:
      label: Relevant logs or screenshots
      description: Please paste any logs or screenshots here.
      render: shell
