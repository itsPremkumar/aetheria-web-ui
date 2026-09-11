import { useState } from 'react'
import { Card } from '../components/Card'
import { Palette, Type, Box, Layers } from 'lucide-react'

const colorTokens = [
  { name: 'Primary', shades: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'] },
  { name: 'Accent', shades: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'] },
  { name: 'Surface', shades: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a'] },
]

const typography = [
  { label: 'Display', size: '3rem', weight: '700', sample: 'Aetheria' },
  { label: 'Heading 1', size: '2.25rem', weight: '700', sample: 'Dashboard' },
  { label: 'Heading 2', size: '1.5rem', weight: '600', sample: 'Analytics' },
  { label: 'Heading 3', size: '1.25rem', weight: '600', sample: 'Components' },
  { label: 'Body', size: '1rem', weight: '400', sample: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Small', size: '0.875rem', weight: '400', sample: 'Supporting text and labels' },
  { label: 'XS', size: '0.75rem', weight: '500', sample: 'METADATA / CAPTIONS' },
]

const spacing = ['0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '2rem', '3rem', '4rem', '6rem']

const radii = [
  { label: 'SM', value: '0.25rem' },
  { label: 'MD', value: '0.5rem' },
  { label: 'LG', value: '0.75rem' },
  { label: 'XL', value: '1rem' },
  { label: '2XL', value: '1.5rem' },
]

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'spacing' | 'components'>('colors')

  const tabs = [
    { id: 'colors' as const, label: 'Colors', icon: Palette },
    { id: 'typography' as const, label: 'Typography', icon: Type },
    { id: 'spacing' as const, label: 'Spacing', icon: Layers },
    { id: 'components' as const, label: 'Components', icon: Box },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white">Design System</h1>
        <p className="text-surface-500 dark:text-surface-400">Tokens, themes, and component library</p>
      </div>

      <div className="flex gap-1 p-1 bg-surface-100 dark:bg-surface-800 rounded-lg w-fit">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === id
                ? 'bg-white dark:bg-surface-700 text-primary-700 dark:text-primary-300 shadow-sm'
                : 'text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'colors' && (
        <div className="space-y-6">
          {colorTokens.map(group => (
            <Card key={group.name}>
              <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">{group.name}</h3>
              <div className="flex gap-1">
                {group.shades.map((shade, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className="h-12 rounded-lg mb-1" style={{ backgroundColor: shade }} />
                    <span className="text-xs text-surface-500">{shade}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'typography' && (
        <Card>
          <div className="space-y-6">
            {typography.map(t => (
              <div key={t.label} className="flex items-baseline gap-8 border-b border-surface-100 dark:border-surface-700 pb-4 last:border-0">
                <span className="w-20 text-xs font-medium text-surface-500 uppercase">{t.label}</span>
                <div className="flex-1">
                  <span style={{ fontSize: t.size, fontWeight: t.weight } as any} className="text-surface-900 dark:text-white">{t.sample}</span>
                </div>
                <span className="text-xs text-surface-400">{t.size} / {t.weight}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'spacing' && (
        <Card>
          <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Spacing Scale</h3>
          <div className="space-y-2">
            {spacing.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-16 text-xs text-surface-500">{s}</span>
                <div className="h-4 bg-primary-200 dark:bg-primary-800 rounded" style={{ width: s }} />
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'components' && (
        <div className="space-y-6">
          <Card>
            <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">Primary</button>
              <button className="btn-secondary">Secondary</button>
              <button className="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors">Outline</button>
              <button className="px-4 py-2 rounded-lg text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">Ghost</button>
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Inputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Default</label>
                <input type="text" className="input-field" placeholder="Type something..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">With Value</label>
                <input type="text" className="input-field" value="Aetheria AI" readOnly />
              </div>
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Border Radius</h3>
            <div className="flex gap-4">
              {radii.map(r => (
                <div key={r.label} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-300 dark:border-primary-700" style={{ borderRadius: r.value }} />
                  <span className="text-xs text-surface-500 mt-1 block">{r.label}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card p-4">
                <span className="text-sm font-medium text-surface-700 dark:text-surface-300">Default Card</span>
                <p className="text-xs text-surface-500 mt-1">With border and shadow</p>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Primary Card</span>
                <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">Highlighted variant</p>
              </div>
              <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800 rounded-xl p-4">
                <span className="text-sm font-medium text-accent-700 dark:text-accent-300">Success Card</span>
                <p className="text-xs text-accent-600 dark:text-accent-400 mt-1">Positive variant</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
