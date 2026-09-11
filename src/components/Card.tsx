import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`card p-6 ${className}`}>
      {children}
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: ReactNode
}

export function StatCard({ title, value, change, changeType = 'neutral', icon }: StatCardProps) {
  const changeColor = {
    positive: 'text-accent-600 dark:text-accent-400',
    negative: 'text-red-600 dark:text-red-400',
    neutral: 'text-surface-500',
  }[changeType]

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-surface-500 dark:text-surface-400">{title}</span>
        {icon && <div className="text-surface-400">{icon}</div>}
      </div>
      <div className="text-2xl font-bold text-surface-900 dark:text-white">{value}</div>
      {change && <span className={`text-sm ${changeColor}`}>{change}</span>}
    </div>
  )
}
