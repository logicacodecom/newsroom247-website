---
name: Editorial Intelligence System
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1daeb'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#e0e9fa'
  surface-container-highest: '#dae3f4'
  on-surface: '#131c28'
  on-surface-variant: '#574238'
  inverse-surface: '#28313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#8a7266'
  outline-variant: '#dec1b3'
  surface-tint: '#9d4400'
  primary: '#9d4400'
  on-primary: '#ffffff'
  primary-container: '#f17a30'
  on-primary-container: '#582300'
  inverse-primary: '#ffb690'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e2'
  on-secondary-container: '#646464'
  tertiary: '#006689'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a7df'
  on-tertiary-container: '#00384d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#331100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#c3e8ff'
  tertiary-fixed-dim: '#79d1ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c68'
  background: '#f8f9ff'
  on-background: '#131c28'
  surface-variant: '#dae3f4'
  surface-base: '#FFFFFF'
  surface-muted: '#F8F9FA'
  surface-subtle: '#E9ECEF'
  status-success: '#1EB06C'
  status-info: '#2FA0A3'
  status-alert: '#F05428'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  column-gap: 24px
---

## Brand & Style

The design system is engineered for high-stakes editorial environments, functioning as a "Professional Editorial Control Room." It prioritizes information density, clarity, and rapid decision-making. The aesthetic is rooted in **Swiss-style Modernism**, utilizing a modular grid system that feels authoritative and architecturally sound.

The target audience consists of journalists, editors, and digital publishers who require a tool that balances creative output with technical precision. The visual narrative avoids decorative flourish in favor of functional utility, employing a **Corporate / Modern** style characterized by:
- **High Information Density:** Maximized screen real estate for multi-tasking and data monitoring.
- **Structural Integrity:** Use of subtle borders and rigid alignment to create a sense of order.
- **Functional Accents:** Using color primarily for status, priority, and action rather than decoration.

## Colors

The palette is anchored by the brand’s high-energy **Vibrant Orange**, used sparingly for primary actions and critical alerts. **Dark Charcoal** and a deep **Neutral Slate** provide the structural foundation, ensuring text remains legible and the interface feels grounded.

The background system utilizes a "layered light" approach:
- **Surface Base:** Pure white for primary content areas and long-form editors.
- **Surface Muted:** Off-white for secondary sidebars and navigation backgrounds.
- **Surface Subtle:** Light grey for gutters, borders, and inactive interface tracks.

Status indicators leverage a palette derived from editorial standards: teal for information, forest green for "published" states, and a deep orange-red for "breaking news" or "blocking errors."

## Typography

This design system uses a triple-font approach to manage complex information hierarchies. 
- **Headlines:** Hanken Grotesk provides a sharp, contemporary Swiss feel. Tighten letter spacing on larger sizes to maintain a punchy, news-oriented impact.
- **Body:** Source Sans 3 is selected for its exceptional legibility in long-form editorial tasks, featuring a generous x-height and clear character distinction.
- **Data & Labels:** IBM Plex Sans is used for UI labels, metadata, and status indicators, providing a technical, "system-font" feel that aids in the control-room aesthetic.

Always prioritize vertical rhythm. Use `body-sm` for dense data grids and `body-lg` for the primary article editing experience.

## Layout & Spacing

The layout utilizes a **Fixed-Fluid Hybrid Grid**. The primary workspace expands to fill the screen (Fluid), while sidebars for "Tools" and "Metadata" remain at fixed widths (typically 280px or 320px) to ensure consistency in tool access.

- **Grid Model:** 12-column system for desktop, 4-column for mobile.
- **Spacing Rhythm:** Based on a 4px baseline grid. Internal component padding should follow a tight scale (8px, 12px, 16px) to maintain high information density.
- **Breakpoints:**
  - Mobile: < 600px (Single column flow).
  - Tablet: 600px - 1024px (Stacked panels).
  - Desktop: 1025px+ (Multi-pane dashboard).

## Elevation & Depth

To maintain a "Professional Control Room" feel, this design system avoids heavy drop shadows. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** Backgrounds use `#F8F9FA`, while active cards and work areas use `#FFFFFF`. This creates a subtle lift without the need for shadows.
- **Borders:** Use 1px solid borders (`#E9ECEF`) to define boundaries between modules.
- **Active State:** Use a 2px left-border accent in Primary Orange to indicate the currently selected or "focused" article/module.
- **Hover States:** Slight darkening of the background color (`#F4F4F4`) rather than an elevation change.

## Shapes

The shape language is disciplined and geometric. A "Soft" roundedness level (4px) is applied to buttons and inputs to prevent the UI from feeling overly aggressive or "sharp," while maintaining a professional, boxy structure.

- **Buttons/Inputs:** 4px radius.
- **Cards/Modules:** 4px radius.
- **Status Chips:** 2px radius (near-sharp) to distinguish them from interactive buttons.
- **Media/Images:** 0px (Sharp) to honor the traditional "crop" of news photography.

## Components

- **Buttons:** Primary buttons use a solid `#F17A30` with white text. Secondary buttons use a `#555555` outline. Tertiary buttons are text-only with `#555555` bold labels.
- **Cards:** Use a modular grid-based approach. No shadows. 1px `#E9ECEF` border. Headers within cards should use `label-md` for metadata.
- **Input Fields:** Rectangular with 1px border. On focus, the border changes to `#F17A30`. Labels should always be visible above the field using `label-sm`.
- **Status Indicators:** Small rectangular badges with low-saturation backgrounds and high-saturation text (e.g., Light Green background with Dark Green text).
- **Data Grids:** High-density rows (32px-40px height). Use zebra-striping with `#F8F9FA` for readability across wide monitors.
- **The "Control Sidebar":** A dark-themed sidebar (`#2B3441`) can be used for primary navigation to contrast with the light-themed editorial workspace.