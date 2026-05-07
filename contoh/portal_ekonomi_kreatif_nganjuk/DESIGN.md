---
name: Portal Ekonomi Kreatif Nganjuk
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#343536'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#b6c4ff'
  on-secondary: '#05297a'
  secondary-container: '#264191'
  on-secondary-container: '#9db2ff'
  tertiary: '#a4c9ff'
  on-tertiary: '#00315d'
  tertiary-container: '#001934'
  on-tertiary-container: '#3984d6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a4c9ff'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#004883'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#343536'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is engineered to bridge the gap between traditional governance and the burgeoning digital startup ecosystem. It evokes a sense of "Smart City Leadership," positioning Nganjuk as a forward-thinking hub for creative industries. 

The aesthetic is a sophisticated blend of **Modern Minimalism** and **Glassmorphism**. It utilizes a deep, dark canvas to allow vibrant gradients and translucent layers to pop, creating a multi-dimensional "HUD" (Heads-Up Display) feel that remains grounded in professional utility. The emotional response is one of reliability, innovation, and frictionless interaction.

## Colors
The color palette is built on a foundation of depth and luminescence. The dominant Navy (#0A192F) serves as the primary "void" background, providing high contrast for white text and vibrant accents. Professional Blue (#1E3A8A) is used for secondary surfaces and structural components, while Light Blue (#60A5FA) acts as the primary action color.

The "Blue to Cyan" gradient is the signature visual driver, used for primary calls-to-action, progress indicators, and data visualizations. For glass components, we use semi-transparent variations of the secondary blue with a subtle white stroke to simulate the refractive edge of glass.

## Typography
This design system utilizes **Inter** exclusively to ensure a systematic, utilitarian, and clean appearance. The hierarchy is defined by tight letter spacing in headlines to maintain a modern, "tech-first" look, while body text uses generous line heights for maximum readability against dark backgrounds. 

Labels and small metadata should use the `label-caps` style to differentiate administrative information from creative content.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. Content is contained within a 1280px max-width container, centered on the viewport. Inside this container, a 12-column grid provides the structure for glassmorphic cards and modules.

The spacing rhythm is strictly based on an 8px base unit. Negative space is used aggressively to prevent the "government portal" feel, instead opting for the spaciousness of a premium SaaS product. Use large padding (32px+) inside cards to maintain the minimalist aesthetic.

## Elevation & Depth
Depth in this design system is achieved through **Backdrop Blurs** and **Tonal Layering** rather than traditional black shadows. 

1.  **Level 1 (Base):** Deep Navy (#0A192F).
2.  **Level 2 (Glass):** Semi-transparent background (blur: 20px) with a 1px border of `glass_stroke`.
3.  **Level 3 (Overlay):** Floating elements like modals or tooltips, using a slightly higher opacity and a soft blue-tinted drop shadow (0px 20px 40px rgba(0, 0, 0, 0.4)).

Visual depth is reinforced by the interplay of the background gradient "blobs" moving behind the frosted glass surfaces.

## Shapes
The shape language is defined by large, inviting radii. The standard `roundedness` level 2 (0.5rem base) is applied to small elements like buttons and inputs, while larger `rounded-xl` (1.5rem) is the signature for the glassmorphic cards. This softness balances the futuristic tech vibe with a friendly, accessible government persona.

## Components

### Glassmorphic Cards
Cards are the primary container. They must feature a `backdrop-filter: blur(20px)`, a semi-transparent fill, and a 1px solid stroke at the top and left edges to simulate light hitting the glass edge.

### Premium Hover States
Interactive elements should never jump. Use 300ms cubic-bezier transitions. On hover, cards should subtly scale (1.02x) and their border-opacity should increase. Buttons should exhibit a "glow" effect using an outer box-shadow that matches the gradient color.

### Modern Input Fields
Inputs are dark-themed with a subtle `glass_stroke`. Upon focus, the border transitions to the Light Blue (#60A5FA) and the label floats upward using the `label-caps` typography style.

### Buttons
- **Primary:** Full gradient (Blue to Cyan) with white text. Rounded-pill shape.
- **Secondary:** Ghost style with a 1px Light Blue border and transparent background.
- **Tertiary:** Text-only with an arrow icon that slides on hover.

### Dynamic Chips
Used for categorizing creative sectors (e.g., "Batik," "Digital Arts"). These use a very low-opacity Light Blue fill with high-contrast white text to keep the UI clean.