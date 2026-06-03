---
name: CircuitDash Aesthetic
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#e1ffd1'
  on-tertiary: '#053900'
  tertiary-container: '#33fb0a'
  on-tertiary-container: '#106e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-tech:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1em
  score-display:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1280px
---

## Brand & Style

This design system establishes a high-octane, technical atmosphere inspired by cyber-noir environments and retro-futuristic arcade interfaces. The visual narrative is driven by the tension between a deep, "zero-light" void and hyper-saturated neon data paths.

The style is a hybrid of **Glassmorphism** and **Technical Minimalism**. It prioritizes high-contrast visibility and systematic precision, mimicking the layout of a high-density circuit board. Interfaces should feel like a Heads-Up Display (HUD), evoking an emotional response of urgency, focus, and digital mastery. Every element is treated as a functional component within a larger machine, utilizing glowing accents to denote energy flow and active states.

## Colors

The palette is anchored in a deep-space surface color to provide maximum "pop" for neon accents. 

- **Primary (Electric Blue):** Used for primary actions, navigational highlights, and stable data streams.
- **Secondary (Neon Magenta):** Reserved for high-energy interactions, rare items, or player-specific alerts.
- **Success (Circuit Green):** Indicates healthy system states, completed circuits, and positive progression.
- **Danger (Overload Red):** Used for critical system failures, damage indicators, and high-risk zones.
- **Surface:** A near-black navy that serves as the canvas for all glow effects and grid patterns.

Backgrounds should frequently utilize a 10% opacity "Circuit Blue" grid overlay to reinforce the technical theme.

## Typography

The typography strategy balances rapid legibility with a "machine-code" aesthetic. 

**Space Grotesk** is used for major display titles, providing a futuristic and slightly aggressive geometric character. **Inter** handles the bulk of the readable content, ensuring clarity during high-speed gameplay. **JetBrains Mono** is the functional workhorse for scores, timers, and technical labels, providing the monospaced "hacker" feel necessary for the tech-noir vibe.

All labels should be set in uppercase with increased letter spacing to mimic hardware serialization.

## Layout & Spacing

This design system employs a **Fixed Grid** model with a 4px base unit. The layout is designed to feel "packed" and efficient, like a complex motherboard where every millimeter is utilized.

- **Desktop:** A 12-column grid with 16px gutters. UI modules should feel docked to the edges of the screen to maximize the center "gameplay" viewport.
- **Mobile:** A 4-column grid with 16px margins. Stacked modules should maintain a tight 8px vertical rhythm.
- **Circuit Paths:** Use 2px wide lines to connect disparate UI modules, visually simulating traces on a PCB. These lines should glow when the connected modules are active.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism** and **Luminescence** rather than traditional shadows.

1.  **Surfaces:** Use semi-transparent backdrops (approx. 60-80% opacity) with a 12px-20px backdrop blur. This creates a sense of "layered glass" floating over the game world.
2.  **Glow Tiers:** 
    - **Tier 1 (Low):** A 1px solid border with 30% opacity of the primary color.
    - **Tier 2 (Active):** A 1px solid border at 100% opacity with a 4px outer bloom (box-shadow).
    - **Tier 3 (Overdrive):** Multiple shadow layers to create a "pulsing" neon effect that bleeds into the surrounding interface.
3.  **Z-Index:** Content layers are strictly enforced. HUD elements always sit at the highest elevation, separated by a subtle grain texture to distinguish the UI from the background.

## Shapes

The shape language is "Soft-Technical." We avoid the clinical coldness of 90-degree corners by applying a subtle **0.25rem (4px)** radius to all standard components. This suggests high-end manufactured hardware rather than raw code.

Large containers may use **diagonal chamfered corners** (cut corners) at 45 degrees to reinforce the arcade/sci-fi aesthetic. Interactive elements like buttons and chips should remain strictly rectangular or pill-shaped to ensure clear hit targets.

## Components

- **Neon Buttons:** High-contrast backgrounds (Primary Blue or Secondary Magenta) with a 2px "inner-glow" border. Text is always bold and capitalized. On hover, the button should "pulse" with a subtle brightness increase.
- **HUD Chips:** Small, monospaced data tags with a semi-transparent background and a solid left-side accent bar indicating category or status.
- **Glass Cards:** Used for menus and inventory. These must feature the backdrop blur and a thin, 1px border. The header of the card should be separated by a technical "trace line."
- **Input Fields:** Styled as "underlined" fields with a glowing horizontal bar. When focused, the bar expands and pulses.
- **Checkboxes/Radios:** Designed as "Toggle Switches" or "Circuit Breaks." When "On," the element completes a visual line to the next component.
- **Progress Bars:** Segmented into blocks rather than a smooth fill, resembling old-school battery indicators or signal strength meters.