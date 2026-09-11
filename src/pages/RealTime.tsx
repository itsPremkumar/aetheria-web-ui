import { useState, useEffect, useRef } from 'react'
import { Card, StatCard } from '../components/Card'
import { ChartCard, LineChartDemo, AreaChartDemo } from '../components/Charts'
import { Activity, Radio, Wifi, WifiOff, Pause, Play } from 'lucide-react'

interface DataPoint {
  name: string
  value: number
  value2: number
}

export default function RealTime() {
  const [data, setData] = useState<DataPoint[]>([])
  const [isLive, setIsLive] = useState(true)
  const [latency, setLatency] = useState(42)
  const [connections, setConnections] = useState(128)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    const initial: DataPoint[] = Array.from({ length: 20 }, (_, i) => ({
      name: `${i}`,
      value: Math.random() * 100 + 50,
      value2: Math.random() * 80 + 40,
    }))
    setData(initial)
  }, [])

  useEffect(() => {
    if (isLive) {
      intervalRef.current = window.setInterval(() => {
        setData(prev => {
          const newPoint: DataPoint = {
            name: `${prev.length}`,
            value: Math.random() * 100 + 50,
            value2: Math.random() * 80 + 40,
          }
          return [...prev.slice(1), newPoint]
        })
        setLatency(Math.floor(Math.random() * 30 + 30))
        setConnections(Math.floor(Math.random() * 20 + 120))
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isLive])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900 dark:text-white">Real-Time Dashboard</h1>
          <p className="text-surface-500 dark:text-surface-400">Live streaming data visualization</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-100 dark:bg-accent-900/30">
            {isLive ? (
              <>
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span className="text-xs font-medium text-accent-700 dark:text-accent-300">LIVE</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-surface-400" />
                <span className="text-xs font-medium text-surface-500">PAUSED</span>
              </>
            )}
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className="btn-primary flex items-center gap-2"
          >
            {isLive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isLive ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Latency" value={`${latency}ms`} change="-5ms" changeType="positive" icon={<Activity className="w-5 h-5" />} />
        <StatCard title="Connections" value={connections.toString()} change="+8" changeType="positive" icon={<Radio className="w-5 h-5" />} />
        <StatCard title="Throughput" value="2.4K/s" change="+12%" changeType="positive" icon={<Wifi className="w-5 h-5" />} />
        <StatCard title="Uptime" value="99.98%" change="Stable" changeType="neutral" icon={<Wifi className="w-5 h-5" />} />
      </div>

      <ChartCard title="Live Stream — Agent Activity" className="min-h-[300px]">
        <LineChartDemo data={data.map(d => ({ name: d.name, accuracy: d.value, latency: d.value2 }))} />
      </ChartCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Throughput">
          <AreaChartDemo data={data.map(d => ({ name: d.name, v1: d.value, v2: d.value2 }))} />
        </ChartCard>
        <Card>
          <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Live Events</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-surface-100 dark:border-surface-700 last:border-0">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-accent-500 animate-pulse' : 'bg-surface-300'}`} />
                <span className="text-sm text-surface-700 dark:text-surface-300 flex-1">
                  {['Agent deployed', 'Model updated', 'Alert triggered', 'Task completed', 'Data synced'][i % 5]}
                </span>
                <span className="text-xs text-surface-500">{i === 0 ? 'now' : `${i * 12}s ago`}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Connection Status</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-surface-50 dark:bg-surface-800">
              {i < connections / 10 ? (
                <Wifi className="w-4 h-4 text-accent-500" />
              ) : (
                <WifiOff className="w-4 h-4 text-surface-400" />
              )}
              <span className="text-xs text-surface-600 dark:text-surface-400">Node {i + 1}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
