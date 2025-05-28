# Docker Design System + v0.dev

This project bridges Docker Design System (DDS) with v0.dev's AI-powered component generation, enabling teams to rapidly create DDS-compliant interfaces.

## What This Enables

- **Instant DDS Compliance**: Every component generated through v0.dev automatically uses Docker Design System tokens
- **Rapid Prototyping**: Build production-ready UI components using natural language prompts
- **Design Consistency**: Maintain Docker's visual identity without manual token implementation
- **Team Autonomy**: Any team member can generate on-brand components, regardless of DDS expertise

## Technical Foundation

Built on:
- Next.js 15.2.4
- React 19
- TypeScript 5
- Tailwind CSS 3.4
- shadcn/ui components
- DDS token implementation

## Available Components

The sandbox comes pre-configured with DDS-compliant versions of:

### Core UI
- Buttons, Inputs, Selects
- Navigation menus
- Modals and Dialogs
- Cards and Containers

### Advanced Components
- Data tables
- Form elements
- Progress indicators
- Toast notifications

### Design System Elements
- Typography system
- Color schemes
- Spacing standards
- Border radius tokens

## Getting Started

1. Fork this repository
2. Connect to v0.dev
3. Start generating components

Every component you create will automatically:
- Use DDS tokens
- Follow Docker's design patterns
- Maintain brand consistency

## Use Cases

### Product Teams
- Rapidly prototype new features
- Build consistent interfaces
- Experiment with layouts

### Design System Team
- Test token implementations
- Validate component patterns
- Showcase DDS usage

### Developers
- Generate starting points for custom components
- Ensure DDS compliance from day one
- Focus on functionality over styling details

## Looking Forward

This integration represents a new approach to scaling design systems:
- AI-powered generation
- Automatic brand compliance
- Reduced implementation overhead
- Faster development cycles

The sandbox is your starting point for exploring this future.

## Ready to Build?

Head to [Getting Started](./_docs/getting-started.md) to begin creating your own DDS-compliant components with v0.dev.

# For v0.dev robots
- You put components in the component dir
- You put pages in the app dir
- You pull assets from the public dir
- You never confuse scr/ for app/ or components/
