import { useNavigate } from 'react-router-dom'

const DashboardHeader = () => {
    const navigate = useNavigate()

    return (
        <header className="flex w-full flex-col gap-4 px-6 pt-6 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6 z-10">
            <div className="flex flex-1 items-center gap-4">
                {/* Search Bar */}
                <div className="relative flex w-full max-w-md items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#92a4c9]">search</span>
                    <input
                        className="h-10 w-full rounded-lg border-none bg-white dark:bg-[#232f48] pl-10 pr-4 text-sm text-[#111418] dark:text-white placeholder:text-[#92a4c9] focus:ring-2 focus:ring-primary shadow-sm"
                        placeholder="Search encrypted notes..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Sort Dropdown (Simulated) */}
                <button className="flex h-10 items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] px-4 text-sm font-medium text-[#111418] dark:text-white shadow-sm hover:bg-[#f0f2f4] dark:hover:bg-[#2d3b55] transition-colors">
                    <span>Sort: Newest First</span>
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </button>

                {/* Create Button */}
                <button
                    onClick={() => navigate('/editor')}
                    className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all"
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span className="hidden sm:inline">Create New Note</span>
                </button>
            </div>
        </header>
    )
}

export default DashboardHeader
