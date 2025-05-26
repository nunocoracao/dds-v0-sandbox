# Font Override Strategy: Mapping DDS Tokens to Tailwind/shadcn

## Problem Statement

Our Docker Design System (DDS) generates CSS custom properties for typography, but Tailwind CSS and shadcn/ui components don't automatically respect these tokens. This creates a disconnect between our design system and the actual rendered fonts.

**Expected Behavior:**
- H1-H5 should use **Poppins** (headings)
- Body text, buttons, and UI components should use **Inter** (sans)

**Current Issue:**
- Tailwind's default font stack overrides our CSS custom properties
- shadcn components use Tailwind's `font-sans` which doesn't map to our tokens

## Root Cause Analysis

1. **CSS Specificity**: Tailwind utility classes have higher specificity than our base CSS rules
2. **Font Mapping Gap**: Our CSS variables exist but aren't connected to Tailwind's font system
3. **Component Inheritance**: shadcn components inherit from Tailwind's font definitions, not our custom properties

## Solution Strategy

### Phase 1: Map CSS Variables to Tailwind Font System

Update `tailwind.config.ts` to bridge our CSS variables into Tailwind's utility system:

\`\`\`typescript
fontFamily: {
  sans: ["var(--font-family-sans)"],      // Maps to Inter
  heading: ["var(--font-family-heading)"], // Maps to Poppins  
  mono: ["var(--font-family-mono)"],      // Maps to monospace
}
\`\`\`

### Phase 2: Apply Correct Font Classes

Use explicit Tailwind classes that map to our tokens:

\`\`\`jsx
// Headings - Use font-heading
<h1 className="text-5xl font-heading font-bold">Docker Heading</h1>
<h2 className="text-3xl font-heading font-semibold">Section Title</h2>

// Body text - Use font-sans (automatically maps to Inter)
<p className="text-base font-sans">Body content uses Inter</p>

// Buttons - Use font-sans
<Button className="font-sans">Button Text</Button>
\`\`\`

### Phase 3: Override shadcn Components

For shadcn components that need explicit font control:

\`\`\`jsx
// Force heading font on specific components
<CardTitle className="font-heading">Card Title</CardTitle>

// Ensure body font on text components  
<CardDescription className="font-sans">Description text</CardDescription>
\`\`\`

## Implementation Checklist

### ✅ CSS Variables (Already Complete)
- [x] `--font-family-sans` → Inter
- [x] `--font-family-heading` → Poppins
- [x] `--font-family-mono` → Monospace
- [x] CSS rules for h1-h6 elements

### 🔧 Tailwind Configuration
- [ ] Map `font-sans` to `var(--font-family-sans)`
- [ ] Map `font-heading` to `var(--font-family-heading)`
- [ ] Map `font-mono` to `var(--font-family-mono)`

### 🎨 Component Implementation
- [ ] Apply `font-heading` to all h1-h6 elements
- [ ] Ensure `font-sans` on body text and buttons
- [ ] Override shadcn components where needed

## Testing Strategy

### Visual Verification
1. **Inspect Element**: Check computed styles show correct font families
2. **Font Loading**: Verify Poppins loads for headings, Inter for body
3. **Component Consistency**: Ensure all shadcn components respect font mapping

### Browser DevTools Check
\`\`\`css
/* Expected computed styles */
h1 { font-family: "Poppins", system-ui, sans-serif; }
p { font-family: "Inter", system-ui, sans-serif; }
button { font-family: "Inter", system-ui, sans-serif; }
\`\`\`

## Key Principles

1. **Don't Modify globals.css**: This is auto-generated from our pipeline
2. **Use Tailwind's System**: Map our tokens to Tailwind utilities instead of fighting them
3. **Explicit Over Implicit**: Use `font-heading` and `font-sans` classes explicitly
4. **Component-Level Control**: Override at the component level when needed

## Common Pitfalls

❌ **Don't do this:**
\`\`\`jsx
<h1 className="text-5xl">Heading</h1> // Uses default font stack
\`\`\`

✅ **Do this:**
\`\`\`jsx
<h1 className="text-5xl font-heading">Heading</h1> // Uses Poppins
\`\`\`

❌ **Don't modify:**
- `globals.css` (pipeline-generated)
- Font file imports (handled by pipeline)

✅ **Do modify:**
- `tailwind.config.ts` font mapping
- Component className props
- Explicit font utility usage

## Success Metrics

- [ ] All headings render in Poppins
- [ ] All body text renders in Inter  
- [ ] No font fallbacks to system fonts
- [ ] Consistent typography across all components
- [ ] Design system tokens properly connected to UI layer

## Maintenance Notes

This strategy ensures our DDS pipeline can continue generating CSS tokens while Tailwind and shadcn components properly consume them. Any future font changes should happen at the token level, and this mapping will automatically propagate through the system.
