"use client"

// A trick to make react use this on client
// https://ui.shadcn.com/docs/dark-mode/next
// https://nextui.org/docs/customization/dark-mode

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}