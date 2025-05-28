# Next.js and shadcn/ui Best Practices

This document outlines the essential structure and best practices for Next.js projects using shadcn/ui components, with a focus on prioritizing the opinions and conventions of both frameworks.

## Essential Next.js Project Structure

### Core Files and Directories

\`\`\`
├── app/                  # App Router (Next.js 13+)
│   ├── layout.tsx        # Root layout (required)
│   ├── page.tsx          # Home page (required)
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # shadcn/ui components
│   └── [feature]/        # Feature-specific components
├── lib/                  # Utility functions
│   └── utils.ts          # shadcn/ui utilities
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
\`\`\`

### Required App Router Files

1. **`app/layout.tsx`**: Root layout that wraps all pages
   \`\`\`tsx
   export const metadata = {
     title: 'My App',
     description: 'My App Description',
   }
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     )
   }
   \`\`\`

2. **`app/page.tsx`**: Home page component
   \`\`\`tsx
   export default function Home() {
     return <main>Home Page Content</main>
   }
   \`\`\`

## Next.js Opinions to Prioritize

### 1. File-based Routing

Next.js uses the file system for routing. Respect this convention:

- **App Router (Next.js 13+)**: Files in `app/` directory define routes
- **File Conventions**:
  - `page.tsx`: Route UI
  - `layout.tsx`: Shared layouts
  - `loading.tsx`: Loading UI
  - `error.tsx`: Error UI
  - `not-found.tsx`: Not found UI

### 2. Data Fetching

Next.js has specific patterns for data fetching:

- **Server Components**: Fetch data directly in components (default in App Router)
- **Route Handlers**: Use `app/api/route.ts` files for API endpoints
- **Server Actions**: Use `"use server"` directive for form submissions

### 3. Rendering Modes

Next.js supports multiple rendering strategies:

- **Static Site Generation (SSG)**: Default for most pages
- **Server-Side Rendering (SSR)**: For dynamic content
- **Incremental Static Regeneration (ISR)**: For content that changes occasionally

### 4. Metadata API

Use the built-in metadata API for SEO:

\`\`\`tsx
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
}
\`\`\`

## shadcn/ui Integration Best Practices

### 1. Component Installation

shadcn/ui is not a traditional npm package. Install components individually:

\`\`\`bash
npx shadcn@latest add button
npx shadcn@latest add card
\`\`\`

### 2. Required Files

shadcn/ui requires specific files to function properly:

- **`components/ui/`**: Directory for all shadcn/ui components
- **`lib/utils.ts`**: Utility functions (especially `cn` for class merging)
- **`tailwind.config.js`**: With proper shadcn/ui configuration

### 3. Styling Approach

shadcn/ui uses a specific styling approach:

- **Tailwind CSS**: For utility-based styling
- **CSS Variables**: For theming and customization
- **`cn()` Function**: For conditional class merging

Example `utils.ts`:
\`\`\`tsx
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
\`\`\`

### 4. Component Customization

Modify shadcn/ui components directly rather than wrapping them:

- Components are added to your project's codebase
- Customize by editing the component files directly
- Maintain the component API for consistency

## Prioritizing Framework Opinions

When Next.js and shadcn/ui opinions conflict, follow these guidelines:

### 1. Routing & Data Flow: Next.js Wins

- Always use Next.js routing patterns
- Follow Next.js data fetching methods
- Use Next.js server components where appropriate

### 2. Component Structure: shadcn/ui Wins

- Keep shadcn/ui component structure intact
- Follow shadcn/ui naming conventions
- Use shadcn/ui's styling approach

### 3. Project Organization

- **Next.js Directories**: `app/`, `public/`, `api/`
- **shadcn/ui Directories**: `components/ui/`, `lib/`
- **Shared Directories**: `components/` (for custom components)

## Common Pitfalls to Avoid

1. **Mixing Routing Paradigms**: Don't mix App Router and Pages Router
2. **Ignoring Server Components**: Leverage server components for data fetching
3. **Wrapping shadcn/ui Components**: Edit them directly instead
4. **Overriding Tailwind Config**: Extend rather than replace shadcn/ui's config
5. **Neglecting TypeScript**: Both frameworks benefit from strong typing

## Conclusion

By respecting the opinions and conventions of both Next.js and shadcn/ui, you can create a maintainable, performant application that leverages the strengths of both frameworks. When in doubt:

1. For routing, data fetching, and rendering: Follow Next.js
2. For component design, styling, and UI patterns: Follow shadcn/ui

This approach ensures your application remains aligned with best practices while minimizing conflicts between the frameworks.
