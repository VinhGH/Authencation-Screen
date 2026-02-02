const MetadataSidebar = () => {
    return (
        <aside className="w-80 border-l border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark/30 hidden lg:flex flex-col shrink-0">
            <div className="p-6 flex flex-col gap-8">
                {/* Save Action */}
                <div>
                    <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-12 bg-primary hover:bg-primary/90 text-white gap-2 text-base font-bold transition-colors shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">save</span>
                        <span>Save Note</span>
                    </button>
                    <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-2">Auto-save enabled</p>
                </div>

                {/* Details Section */}
                <div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Details</h3>
                    {/* Description List */}
                    <div className="grid grid-cols-[30%_1fr] gap-y-4 text-sm">
                        <div className="text-slate-500 dark:text-slate-400 font-medium">Created</div>
                        <div className="text-slate-900 dark:text-white text-right">Oct 24, 2023</div>

                        <div className="text-slate-500 dark:text-slate-400 font-medium">Modified</div>
                        <div className="text-slate-900 dark:text-white text-right">Just now</div>

                        <div className="col-span-2 border-t border-slate-200 dark:border-border-dark my-2"></div>

                        <div className="text-slate-500 dark:text-slate-400 font-medium">Words</div>
                        <div className="text-slate-900 dark:text-white text-right">84</div>

                        <div className="text-slate-500 dark:text-slate-400 font-medium">Chars</div>
                        <div className="text-slate-900 dark:text-white text-right">542</div>
                    </div>
                </div>

                {/* Tags Section */}
                <div>
                    <h3 className="text-slate-900 dark:text-white text-sm font-bold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            #security
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 cursor-pointer hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                            + Add tag
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default MetadataSidebar
