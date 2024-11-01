// TimeZoneCardV2.tsx
import { useState, useEffect } from 'react'
import moment from 'moment-timezone'
import 'moment/locale/ru'
moment.locale('ru')

const TimeZoneV2 = ({ timezone }: { timezone: string }) => {
  const [time, setTime] = useState(moment().tz(timezone))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Текущее время
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-2">
            <div className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
              {time.format('HH:mm')}
            </div>
            <div className="mb-1 text-xl text-zinc-500 dark:text-zinc-400">
              {time.format('ss')}
            </div>
          </div>

          <p className="capitalize text-zinc-600 dark:text-zinc-300">
            {time.format('dddd, D MMMM YYYY')}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇷🇺</span>
            <div>
              <p className="font-medium text-zinc-700 dark:text-zinc-300">
                Москва, Россия
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {timezone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="6" x2="12" y2="12" />
                <line x1="12" y1="12" x2="16" y2="14" />
              </svg>
            </span>
            <span>GMT{time.format('Z')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeZoneV2
