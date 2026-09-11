import { useState } from 'react'
import { Card, StatCard } from '../components/Card'
import { AreaChartDemo, BarChartDemo, PieChartDemo, ChartCard } from '../components/Charts'
import { TrendingUp, Users, Cpu, Zap, Download } from 'lucide-react'

const areaData = [
  { name: 'Jan', v1: 4000, v2: 2400 },
  { name: 'Feb', v1: 3000, v2: 1398 },
  { name: 'Mar', v1: 2000, v2: 9800 },
  { name: 'Apr', v1: 2780, v2: 3908 },
  { name: 'May', v1: 1890, v2: 4800 },
  { name: 'Jun', v1: 2390, v2: 3800 },
  { name: 'Jul', v1: 3490, v2: 4300 },
]

const barData = [
  { name: 'Healthcare', value: 85, target: 90 },
  { name: 'Finance', value: 72, target: 80 },
  { name: 'Retail', value: 68, target: 75 },
  { name: 'Energy', value: 91, target: 85 },
  { name: 'Supply', value: 77, target: 80 },
  { name: 'Legal', value: 63, target: 70 },
]

const pieData = [
  { name: 'Healthcare', value: 25 },
  { name: 'Finance', value: 20 },
  { name: 'Retail', value: 15 },
  { name: 'Energy', value: 18 },
  { name: 'Supply Chain', value: 12 },
  { name: 'Other', value: 10 },
]

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('7d')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900 dark:text-white">Dashboard</h1>
          <p className="text-surface-500 dark:text-surface-400">AI Vertical Performance Overview</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-surface-300 dark:border-surface-600 overflow-hidden">
            {['24h', '7d', '30d', '90d'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Agents" value="1,284" change="+12.5%" changeType="positive" icon={<Cpu className="w-5 h-5" />} />
        <StatCard title="Active Users" value="3,429" change="+8.2%" changeType="positive" icon={<Users className="w-5 h-5" />} />
        <StatCard title="Throughput" value="94.2%" change="+2.1%" changeType="positive" icon={<Zap className="w-5 h-5" />} />
        <StatCard title="Revenue" value="$284K" change="-3.4%" changeType="negative" icon={<TrendingUp className="w-5 h-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Performance Trend">
          <AreaChartDemo data={areaData} />
        </ChartCard>
        <ChartCard title="Vertical Comparison">
          <BarChartDemo data={barData} />
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Market Share">
          <PieChartDemo data={pieData} />
        </ChartCard>
        <Card className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'Healthcare model deployed', time: '2 min ago', status: 'success' },
              { action: 'Energy grid optimization', time: '15 min ago', status: 'success' },
              { action: 'Supply chain alert resolved', time: '1 hour ago', status: 'warning' },
              { action: 'Finance audit completed', time: '3 hours ago', status: 'success' },
              { action: 'Retail demand forecast', time: '5 hours ago', status: 'info' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-surface-100 dark:border-surface-700 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'success' ? 'bg-accent-500' :
                    item.status === 'warning' ? 'bg-amber-500' : 'bg-primary-500'
                  }`} />
                  <span className="text-sm text-surface-700 dark:text-surface-300">{item.action}</span>
                </div>
                <span className="text-xs text-surface-500">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
