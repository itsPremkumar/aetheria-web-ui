import { useState } from 'react'
import { Card } from '../components/Card'
import { ChartCard, AreaChartDemo, PieChartDemo, ScatterPlotDemo, HeatmapGrid } from '../components/Charts'
import { Download } from 'lucide-react'

const trendData = [
  { name: 'Mon', v1: 2400, v2: 1800 },
  { name: 'Tue', v1: 1398, v2: 2210 },
  { name: 'Wed', v1: 9800, v2: 2290 },
  { name: 'Thu', v1: 3908, v2: 2000 },
  { name: 'Fri', v1: 4800, v2: 2181 },
  { name: 'Sat', v1: 3800, v2: 2500 },
  { name: 'Sun', v1: 4300, v2: 2100 },
]

const distributionData = [
  { name: '0-25', value: 15 },
  { name: '26-50', value: 25 },
  { name: '51-75', value: 35 },
  { name: '76-100', value: 25 },
]

const scatterData = [
  { x: 100, y: 200 }, { x: 120, y: 180 }, { x: 140, y: 220 }, { x: 160, y: 250 },
  { x: 180, y: 230 }, { x: 200, y: 280 }, { x: 220, y: 300 }, { x: 240, y: 290 },
  { x: 260, y: 320 }, { x: 280, y: 310 }, { x: 300, y: 350 }, { x: 320, y: 340 },
]

const heatmapData = [
  [85, 72, 91, 67, 88, 76, 94],
  [78, 89, 65, 92, 71, 83, 77],
  [90, 68, 87, 74, 95, 69, 82],
  [73, 91, 78, 85, 76, 88, 70],
  [86, 75, 93, 79, 84, 72, 96],
  [81, 87, 70, 90, 77, 85, 74],
  [92, 66, 84, 78, 89, 73, 80],
]

export default function Analytics() {
  const [dateRange, setDateRange] = useState('week')
  const [exportFormat, setExportFormat] = useState<'csv' | 'json' | 'png'>('csv')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900 dark:text-white">Analytics</h1>
          <p className="text-surface-500 dark:text-surface-400">Deep-dive data analysis and visualization</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-surface-300 dark:border-surface-600 overflow-hidden">
            {['day', 'week', 'month'].map(r => (
              <button
                key={r}
                onClick={() => setDateRange(r)}
                className={`px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                  dateRange === r
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex rounded-lg border border-surface-300 dark:border-surface-600 overflow-hidden">
            {(['csv', 'json', 'png'] as const).map(f => (
              <button
                key={f}
                onClick={() => setExportFormat(f)}
                className={`px-3 py-1.5 text-sm font-medium uppercase transition-colors ${
                  exportFormat === f
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Weekly Trend">
          <AreaChartDemo data={trendData} />
        </ChartCard>
        <ChartCard title="Score Distribution">
          <PieChartDemo data={distributionData} />
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Cost vs Performance">
          <ScatterPlotDemo data={scatterData} />
        </ChartCard>
        <Card>
          <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Correlation Heatmap</h3>
          <HeatmapGrid data={heatmapData} />
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-surface-500">Low</span>
            <div className="flex-1 h-2 mx-2 rounded-full bg-gradient-to-r from-primary-100 to-primary-600" />
            <span className="text-xs text-surface-500">High</span>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Export History</h3>
        <div className="space-y-2">
          {[
            { name: 'weekly-report-09-11.csv', size: '2.4 MB', date: 'Sep 11, 2026 20:00' },
            { name: 'vertical-analysis.json', size: '890 KB', date: 'Sep 11, 2026 18:30' },
            { name: 'performance-dashboard.png', size: '1.1 MB', date: 'Sep 10, 2026 14:15' },
            { name: 'full-export-09-10.csv', size: '5.7 MB', date: 'Sep 10, 2026 09:00' },
          ].map((file, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-surface-100 dark:border-surface-700 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded flex items-center justify-center">
                  <Download className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <span className="text-sm font-medium text-surface-700 dark:text-surface-300">{file.name}</span>
                  <span className="text-xs text-surface-500 block">{file.size}</span>
                </div>
              </div>
              <span className="text-xs text-surface-500">{file.date}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
