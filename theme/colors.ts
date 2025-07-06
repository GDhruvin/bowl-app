export const colors = {
  primary: '#A0522D',
  secondary: '#8B6F47',
  background: '#1C1A17',
  text: '#EAE3D2',
  lightText: '#C8B6A6', // Soft Tan
  border: '#3A2E25', // Dark Brown
  success: '#9CAF88', // Earthy Green
  error: '#D27D72', // Warm Terracotta
} as const;

export type ColorTheme = typeof colors;
