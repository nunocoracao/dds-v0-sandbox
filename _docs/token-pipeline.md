# Token Pipeline Documentation

## Overview
A token pipeline that transforms Figma design tokens into multiple target formats for the Docker Design System.

## Pipeline Outputs
- Style Dictionary transformations
- shadcn/ui theme variables
- CSS custom properties
- MUI theme configuration

## Project Structure
- `app/globals.css` - Docker Design System: DDS Foundations design tokens
- `components/` - UI component library
- `styles/` - Additional styling configurations
- `public/` - Static assets

## Pipeline Flow
1. **Design Tokens Source**
   - Figma export (JSON format)

2. **Token Transformation**
   - Style Dictionary processing
   - Multiple format generation

3. **Framework Integration**
   - shadcn/ui theme variables
   - CSS custom properties
   - MUI theme configuration

4. **Implementation**
   - v0.dev component generation
   - Design system compliance

5. **Deployment**
   - Vercel deployment
   - Production environment

## Demo
Live deployment: [v0-ai-design-system](https://v0-ai-design-system-git-hello-wo-35357d-chads-projects-c609126e.vercel.app/)
