import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts'

const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#14b8a6']

export function ChartColors() {
  return (
    <div className="flex flex-wrap gap-2">
      {COLORS.map((c, i) => (
        <div key={i} className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
          <span className="text-xs text-surface-500">Series {i + 1}</span>
        </div>
      ))}
    </div>
  )
}

interface ChartCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function ChartCard({ title, children, className = '' }: ChartCardProps) {
  return (
    <div className={`card p-5 ${className}`}>
      <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">{title}</h3>
      <div className="h-64">{children}</div>
    </div>
  )
}

export function AreaChartDemo({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorV1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorV2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
        <YAxis stroke="#94a3b8" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--color-surface-800, #1e293b)',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Area type="monotone" dataKey="v1" stroke="#3b82f6" fillOpacity={1} fill="url(#colorV1)" />
        <Area type="monotone" dataKey="v2" stroke="#22c55e" fillOpacity={1} fill="url(#colorV2)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function LineChartDemo({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
        <YAxis stroke="#94a3b8" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function BarChartDemo({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
        <YAxis stroke="#94a3b8" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="target" fill="#22c55e" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function PieChartDemo({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export function RadarChartDemo({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={12} />
        <PolarRadiusAxis stroke="#94a3b8" fontSize={10} />
        <Radar name="Score" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
        <Radar name="Target" dataKey="B" stroke="#22c55e" fill="#22c55e" fillOpacity={0.2} />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export function ScatterPlotDemo({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="x" name="Cost" stroke="#94a3b8" fontSize={12} />
        <YAxis dataKey="y" name="Performance" stroke="#94a3b8" fontSize={12} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Area type="monotone" dataKey="y" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function HeatmapGrid({ data }: { data: number[][] }) {
  const max = Math.max(...data.flat())
  const min = Math.min(...data.flat())
  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${data[0].length}, 1fr)` }}>
      {data.flat().map((val, i) => {
        const intensity = (val - min) / (max - min)
        return (
          <div
            key={i}
            className="aspect-square rounded"
            style={{ backgroundColor: `rgba(59, 130, 246, ${0.1 + intensity * 0.8})` }}
            title={val.toString()}
          />
        )
      })}
    </div>
  )
}
