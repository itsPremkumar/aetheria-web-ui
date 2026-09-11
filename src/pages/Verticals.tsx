import { useState } from 'react'
import { Card, StatCard } from '../components/Card'
import { ChartCard, BarChartDemo, RadarChartDemo, LineChartDemo } from '../components/Charts'
import { Filter, Download, Search } from 'lucide-react'

const verticals = [
  { id: 'healthcare', name: 'Healthcare', accuracy: 94.2, uptime: 99.8, agents: 248, status: 'active' },
  { id: 'finance', name: 'Finance', accuracy: 91.7, uptime: 99.5, agents: 192, status: 'active' },
  { id: 'retail', name: 'Retail', accuracy: 88.3, uptime: 98.9, agents: 156, status: 'active' },
  { id: 'energy', name: 'Energy', accuracy: 96.1, uptime: 99.9, agents: 312, status: 'active' },
  { id: 'supply', name: 'Supply Chain', accuracy: 89.5, uptime: 99.2, agents: 178, status: 'active' },
  { id: 'legal', name: 'Legal', accuracy: 85.8, uptime: 98.5, agents: 98, status: 'beta' },
  { id: 'education', name: 'Education', accuracy: 87.2, uptime: 99.0, agents: 134, status: 'active' },
  { id: 'manufacturing', name: 'Manufacturing', accuracy: 92.4, uptime: 99.6, agents: 204, status: 'active' },
]

const barData = [
  { name: 'Health', value: 94, target: 95 },
  { name: 'Finance', value: 91, target: 93 },
  { name: 'Retail', value: 88, target: 90 },
  { name: 'Energy', value: 96, target: 95 },
  { name: 'Supply', value: 89, target: 92 },
  { name: 'Legal', value: 85, target: 88 },
  { name: 'Edu', value: 87, target: 90 },
  { name: 'Mfg', value: 92, target: 93 },
]

const radarData = [
  { subject: 'Accuracy', A: 92, B: 95 },
  { subject: 'Speed', A: 88, B: 90 },
  { subject: 'Reliability', A: 95, B: 93 },
  { subject: 'Scale', A: 85, B: 88 },
  { subject: 'Cost', A: 78, B: 80 },
  { subject: 'Safety', A: 96, B: 95 },
]

const lineData = [
  { name: 'W1', accuracy: 89, latency: 120 },
  { name: 'W2', accuracy: 91, latency: 115 },
  { name: 'W3', accuracy: 90, latency: 118 },
  { name: 'W4', accuracy: 93, latency: 110 },
  { name: 'W5', accuracy: 94, latency: 108 },
  { name: 'W6', accuracy: 95, latency: 105 },
  { name: 'W7', accuracy: 94, latency: 107 },
  { name: 'W8', accuracy: 96, latency: 102 },
]

export default function Verticals() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'beta'>('all')

  const filtered = verticals.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'all' || v.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900 dark:text-white">Verticals</h1>
          <p className="text-surface-500 dark:text-surface-400">AI performance across 8 verticals + Energy & Supply Chain</p>
        </div>
        <button className="btn-primary flex items-center gap-2 self-start">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input
            type="text"
            placeholder="Search verticals..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <div className="flex rounded-lg border border-surface-300 dark:border-surface-600 overflow-hidden">
          {(['all', 'active', 'beta'] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                statusFilter === s
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Verticals" value="8" change="+2 new" changeType="positive" />
        <StatCard title="Avg Accuracy" value="91.9%" change="+1.3%" changeType="positive" />
        <StatCard title="Total Agents" value="1,522" change="+156" changeType="positive" />
        <StatCard title="Avg Uptime" value="99.3%" change="+0.2%" changeType="positive" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Accuracy by Vertical">
          <BarChartDemo data={barData} />
        </ChartCard>
        <ChartCard title="Performance Radar">
          <RadarChartDemo data={radarData} />
        </ChartCard>
      </div>

      <ChartCard title="Accuracy & Latency Trend">
        <LineChartDemo data={lineData} />
      </ChartCard>

      <Card>
        <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Vertical Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700">
                <th className="text-left py-3 px-2 font-medium text-surface-500">Vertical</th>
                <th className="text-left py-3 px-2 font-medium text-surface-500">Accuracy</th>
                <th className="text-left py-3 px-2 font-medium text-surface-500">Uptime</th>
                <th className="text-left py-3 px-2 font-medium text-surface-500">Agents</th>
                <th className="text-left py-3 px-2 font-medium text-surface-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(v => (
                <tr key={v.id} className="border-b border-surface-100 dark:border-surface-700 last:border-0">
                  <td className="py-3 px-2 font-medium text-surface-900 dark:text-white">{v.name}</td>
                  <td className="py-3 px-2 text-surface-700 dark:text-surface-300">{v.accuracy}%</td>
                  <td className="py-3 px-2 text-surface-700 dark:text-surface-300">{v.uptime}%</td>
                  <td className="py-3 px-2 text-surface-700 dark:text-surface-300">{v.agents}</td>
                  <td className="py-3 px-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      v.status === 'active'
                        ? 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                    }`}>
                      {v.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
