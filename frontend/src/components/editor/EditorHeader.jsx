import { Link } from 'react-router-dom'

const EditorHeader = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-border-dark bg-white/50 dark:bg-background-dark/50 backdrop-blur-md px-6 py-3 z-10 shrink-0">
            {/* Left: Back Action */}
            <div className="flex items-center gap-4">
                <Link
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal"
                    to="/dashboard"
                >
                    <span className="material-symbols-outlined text-xl">arrow_back</span>
                    <span>Back</span>
                </Link>
            </div>

            {/* Center: Status */}
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-sm">lock</span>
                <h2 className="text-xs font-medium uppercase tracking-wide">Last saved just now</h2>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <button
                    className="flex items-center justify-center rounded-lg size-10 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Delete Note"
                >
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        </header>
    )
}

export default EditorHeader
