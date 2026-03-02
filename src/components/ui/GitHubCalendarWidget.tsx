import { GitHubCalendar } from 'react-github-calendar'
import { useEffect, useState } from 'react'

type YearOption = number | 'last'

interface Props {
  username: string
}

const currentYear = new Date().getFullYear()
const YEAR_OPTIONS: { value: YearOption; label: string }[] = [
  { value: 'last', label: 'Последний год' },
  ...Array.from({ length: 5 }, (_, i) => currentYear - i).map((y) => ({
    value: y as YearOption,
    label: String(y),
  })),
]

export function GitHubCalendarWidget({ username }: Props) {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light')
  const [year, setYear] = useState<YearOption>('last')

  useEffect(() => {
    const update = () => {
      setColorScheme(
        document.documentElement.classList.contains('dark') ? 'dark' : 'light',
      )
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">
      <div className="min-w-0 flex-1">
        <GitHubCalendar
          username={username}
          year={year}
          colorScheme={colorScheme}
          blockSize={13}
          blockMargin={4}
          fontSize={13}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
        />
      </div>
      <div
        className="flex shrink-0 flex-col justify-center"
        style={{ flexBasis: 210, alignSelf: 'flex-start', paddingInline: 8 }}
      >
        <label
          htmlFor="github-calendar-year"
          className="mb-1.5 text-sm font-medium text-muted-foreground"
        >
          Период
        </label>
        <select
          id="github-calendar-year"
          value={year}
          onChange={(e) =>
            setYear(
              e.target.value === 'last'
                ? 'last'
                : (Number(e.target.value) as YearOption),
            )
          }
          className="min-w-[140px] rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {YEAR_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
