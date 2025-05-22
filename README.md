# DDS v0 Sandbox

This private repo provides a fully tokenized Tailwind environment for generating and previewing UI components in [v0.dev](https://v0.dev) using Docker’s DDS Foundations.

## Purpose

This repo acts as a sandbox for design-to-code generation using v0.dev. It preloads:

- Tailwind configuration mapped to DDS design tokens
- A semantic token bridge via CSS custom properties
- Token-powered UI components matching shadcn/ui signatures
- Global CSS styles aligned to Docker’s design system

## Structure

- `tailwind.config.ts` — Tailwind theme mapped to DDS tokens
- `build/css/variables.css` — Output from Style Dictionary
- `app/globals.css` — Token import and base styles
- `components/ui/` — Token-styled component primitives (e.g., button, card)

## Usage

1. Import this repo into v0.dev using "Import GitHub Repo"
2. Generate components using v0's UI or prompts
3. Replace default imports or Tailwind classes if needed
4. Export final code and integrate into downstream apps

## Status

- Internal proof of concept
- Token sync assumed via external Style Dictionary build
