import { Link } from 'react-router-dom'
import { getCurrentUser, logout } from '../../services/authService'

const Sidebar = () => {
    const user = getCurrentUser()

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout()
        }
    }

    return (
        <aside className="flex w-64 flex-col border-r border-[#e5e7eb] dark:border-[#232f48] bg-white dark:bg-[#111722] transition-all">
            <div className="flex h-full flex-col justify-between p-4">
                <div className="flex flex-col gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3 px-2">
                        <div className="flex items-center justify-center rounded-lg bg-primary/20 p-2">
                            <span className="material-symbols-outlined text-primary">lock</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-base font-bold leading-tight">SecureNotes</h1>
                            <p className="text-xs text-[#637588] dark:text-[#92a4c9]">Private Workspace</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2">
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-colors hover:bg-primary/20"
                            to="/dashboard"
                        >
                            <span className="material-symbols-outlined filled">description</span>
                            <span className="text-sm font-medium">My Notes</span>
                        </Link>
                        <a
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#637588] dark:text-[#92a4c9] transition-colors hover:bg-[#f0f2f4] dark:hover:bg-[#232f48] hover:text-[#111418] dark:hover:text-white"
                            href="#"
                        >
                            <span className="material-symbols-outlined">favorite</span>
                            <span className="text-sm font-medium">Favorites</span>
                        </a>
                        <a
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#637588] dark:text-[#92a4c9] transition-colors hover:bg-[#f0f2f4] dark:hover:bg-[#232f48] hover:text-[#111418] dark:hover:text-white"
                            href="#"
                        >
                            <span className="material-symbols-outlined">delete</span>
                            <span className="text-sm font-medium">Trash</span>
                        </a>
                        <a
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#637588] dark:text-[#92a4c9] transition-colors hover:bg-[#f0f2f4] dark:hover:bg-[#232f48] hover:text-[#111418] dark:hover:text-white"
                            href="#"
                        >
                            <span className="material-symbols-outlined">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </a>
                    </nav>
                </div>

                {/* Footer / User */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 rounded-xl bg-[#f0f2f4] dark:bg-[#1a2436] p-3">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                            {user?.name?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div className="flex flex-1 flex-col overflow-hidden">
                            <p className="truncate text-sm font-medium text-[#111418] dark:text-white">{user?.name || 'User'}</p>
                            <p className="truncate text-xs text-[#637588] dark:text-[#92a4c9]">{user?.email || 'user@example.com'}</p>
                        </div>
                        <button onClick={handleLogout} className="text-[#637588] dark:text-[#92a4c9] hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">logout</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-[#637588] dark:text-[#64748b]">
                        <span className="material-symbols-outlined text-[14px]">verified_user</span>
                        <span>End-to-end Encrypted</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
