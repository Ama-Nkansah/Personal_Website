'use client'; 

import { ThemeProvider } from 'next-themes';

export function MyThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
}