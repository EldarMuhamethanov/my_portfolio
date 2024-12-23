import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/lib/icons'

const Moon = Icons.moon
const Sun = Icons.sun

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'light')
  }, [])

  React.useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  const onChangeTheme = (theme: 'light' | 'dark') => {
    setThemeState(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => onChangeTheme(theme === 'light' ? 'dark' : 'light')}
      className="shrink-0"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
