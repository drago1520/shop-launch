import { DarkTheme, DefaultTheme, type Theme, useTheme as useNavTheme } from '@react-navigation/native';

export const THEME = {
  light: {
    background: 'hsl(223.8136 -172.5242% 100.0000%)',
    foreground: 'hsl(223.8136 0.0000% 3.9388%)',
    card: 'hsl(223.8136 -172.5242% 100.0000%)',
    cardForeground: 'hsl(223.8136 0.0000% 3.9388%)',
    popover: 'hsl(223.8136 -172.5242% 100.0000%)',
    popoverForeground: 'hsl(223.8136 0.0000% 3.9388%)',
    primary: 'hsl(110.1313 64.2532% 44.8898%)',
    primaryForeground: 'hsl(223.8136 -172.5242% 100.0000%)',
    secondary: 'hsl(5.5481 79.6005% 48.0383%)',
    secondaryForeground: 'hsl(223.8136 -172.5242% 100.0000%)',
    muted: 'hsl(223.8136 0.0002% 96.0587%)',
    mutedForeground: 'hsl(223.8136 0.0000% 45.1519%)',
    accent: 'hsl(223.8136 0.0002% 96.0587%)',
    accentForeground: 'hsl(223.8136 0.0000% 9.0527%)',
    destructive: 'hsl(351.7303 123.6748% 40.5257%)',
    destructiveForeground: 'hsl(223.8136 -172.5242% 100.0000%)',
    border: 'hsl(223.8136 0.0001% 89.8161%)',
    input: 'hsl(223.8136 0.0001% 89.8161%)',
    ring: 'hsl(159.5700 145.1252% 36.1947%)',
    radius: '0.5rem',
    chart1: 'hsl(211.7880 101.9718% 78.6759%)',
    chart2: 'hsl(217.4076 91.3672% 59.5787%)',
    chart3: 'hsl(221.4336 86.3731% 54.0624%)',
    chart4: 'hsl(223.6587 78.7180% 47.8635%)',
    chart5: 'hsl(226.5426 70.0108% 39.9224%)',
    // Sidebar system
    sidebar: 'hsl(223.8136 0.0004% 98.0256%)',
    sidebarForeground: 'hsl(223.8136 0.0000% 3.9388%)',
    sidebarPrimary: 'hsl(110.1313 64.2532% 44.8898%)',
    sidebarPrimaryForeground: 'hsl(223.8136 -172.5242% 100.0000%)',
    sidebarAccent: 'hsl(110.1313 64.2532% 44.8898%)',
    sidebarAccentForeground: 'hsl(223.8136 0.0000% 3.9388%)',
    sidebarBorder: 'hsl(223.8136 0.0001% 89.8161%)',
    sidebarRing: 'hsl(120.9392 280.9384% 9.6844%)',
    // Brand accents
    brandBlueForeground: 'hsl(211 76% 41%)',
    brandGreenForeground: 'hsl(128 52.1% 46.7%)',
  },
  dark: {
    background: 'hsl(240.1022 11.2443% 3.9839%)',
    foreground: 'hsl(223.8136 0.0004% 98.0256%)',
    card: 'hsl(240.0173 6.0307% 9.9812%)',
    cardForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    popover: 'hsl(240.0173 6.0307% 9.9812%)',
    popoverForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    primary: 'hsl(135.6652 -2168.8238% -3.2007%)',
    primaryForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    secondary: 'hsl(4.5991 104.8885% 37.7391%)',
    secondaryForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    muted: 'hsl(240.0469 4.0430% 15.9329%)',
    mutedForeground: 'hsl(240.0761 5.7134% 64.2961%)',
    accent: 'hsl(239.8080 3.5833% 18.4540%)',
    accentForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    destructive: 'hsl(6.5085 70.5784% 21.0125%)',
    destructiveForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    border: 'hsl(223.8136 0.0000% 16.0746%)',
    input: 'hsl(223.8136 0.0000% 14.1153%)',
    ring: 'hsl(159.5700 145.1252% 36.1947%)',
    radius: '0.5rem',
    chart1: 'hsl(159.5700 145.1252% 36.1947%)',
    chart2: 'hsl(213.1135 93.8994% 67.8360%)',
    chart3: 'hsl(255.1347 91.7807% 76.2809%)',
    chart4: 'hsl(43.2524 96.4157% 56.2927%)',
    chart5: 'hsl(169.9377 62.3104% 58.2179%)',
    // Sidebar system
    sidebar: 'hsl(240.0173 6.0307% 9.9812%)',
    sidebarForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    sidebarPrimary: 'hsl(135.6652 -2168.8238% -3.2007%)',
    sidebarPrimaryForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    sidebarAccent: 'hsl(239.8080 3.5833% 18.4540%)',
    sidebarAccentForeground: 'hsl(223.8136 0.0004% 98.0256%)',
    sidebarBorder: 'hsl(223.8136 0.0000% 16.0746%)',
    sidebarRing: 'hsl(159.5700 145.1252% 36.1947%)',
    // Brand accents
    brandBlueForeground: 'hsl(211 76% 41%)',
    brandGreenForeground: 'hsl(128 52.1% 46.7%)',
  },
};

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: THEME.dark.background,
      border: THEME.dark.border,
      card: THEME.dark.card,
      notification: THEME.dark.destructive,
      primary: THEME.dark.primary,
      text: THEME.dark.foreground,
    },
  },
};

// Runtime accessors for color tokens
export type ColorMode = 'light' | 'dark';
export type ColorTokens = typeof THEME.light;

// Returns the color tokens for an explicit mode (useful in non-React contexts)
export function getThemeColors(mode: ColorMode): ColorTokens {
  return THEME[mode];
}

// Hook to get the active color tokens based on the current React Navigation theme
export function useThemeColors(): ColorTokens {
  const navTheme = useNavTheme();
  const mode: ColorMode = navTheme.dark ? 'dark' : 'light';
  return THEME[mode];
}
