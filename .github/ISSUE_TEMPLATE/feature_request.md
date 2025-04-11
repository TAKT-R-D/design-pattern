name: Feature request
description: Suggest a new idea or enhancement.
labels: [enhancement]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for suggesting a feature! Please complete the form below to help us evaluate it.
  - type: input
    id: title
    attributes:
      label: Feature title
      description: A clear and concise name for the feature.
      placeholder: "e.g. Add dark mode toggle"
    validations:
      required: true
  - type: textarea
    id: motivation
    attributes:
      label: Motivation
      description: Why should this feature be added?
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Feature description
      description: Describe the feature and how it should work.
    validations:
      required: true
  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives
      description: Are there any alternatives you've considered?
