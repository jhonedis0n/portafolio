import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { theme } from "./config/theme";

import "./index.css";

const root = document.documentElement;

root.style.setProperty(
  "--color-background",
  theme.colors.background
);

root.style.setProperty(
  "--color-background-secondary",
  theme.colors.backgroundSecondary
);

root.style.setProperty(
  "--color-border",
  theme.colors.border
);

root.style.setProperty(
  "--color-text-primary",
  theme.colors.textPrimary
);

root.style.setProperty(
  "--color-text-secondary",
  theme.colors.textSecondary
);

root.style.setProperty(
  "--color-accent",
  theme.colors.accent
);

root.style.setProperty(
  "--color-accent-hover",
  theme.colors.accentHover
);

root.style.setProperty(
  "--color-success",
  theme.colors.success
);

root.style.setProperty(
  "--color-danger",
  theme.colors.danger
);

root.style.setProperty(
  "--font-primary",
  `"${theme.fonts.primary}", sans-serif`
);

root.style.setProperty(
  "--font-mono",
  `"${theme.fonts.mono}", monospace`
);

root.style.setProperty(
  "--radius-sm",
  theme.radius.small
);

root.style.setProperty(
  "--radius-md",
  theme.radius.medium
);

root.style.setProperty(
  "--radius-lg",
  theme.radius.large
);

root.style.setProperty(
  "--spacing-xs",
  theme.spacing.xs
);

root.style.setProperty(
  "--spacing-sm",
  theme.spacing.sm
);

root.style.setProperty(
  "--spacing-md",
  theme.spacing.md
);

root.style.setProperty(
  "--spacing-lg",
  theme.spacing.lg
);

root.style.setProperty(
  "--spacing-xl",
  theme.spacing.xl
);

root.style.setProperty(
  "--spacing-xxl",
  theme.spacing.xxl
);

root.style.setProperty(
  "--container-width",
  theme.layout.maxWidth
);

root.style.setProperty(
  "--transition-fast",
  theme.transitions.fast
);

root.style.setProperty(
  "--transition-normal",
  theme.transitions.normal
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);