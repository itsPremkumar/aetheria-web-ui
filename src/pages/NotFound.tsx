import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-surface-100 dark:bg-surface-800 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-surface-400" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-surface-900 dark:text-white mb-2">404</h1>
          <p className="text-surface-500 dark:text-surface-400">Page not found</p>
        </div>
        <p className="text-surface-600 dark:text-surface-300 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
