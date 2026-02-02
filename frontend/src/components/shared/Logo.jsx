const Logo = ({ size = 'md', showText = true }) => {
    const sizes = {
        sm: { container: 'w-8 h-8', icon: 'text-lg', text: 'text-base' },
        md: { container: 'w-10 h-10', icon: 'text-2xl', text: 'text-2xl' },
        lg: { container: 'w-12 h-12', icon: 'text-3xl', text: 'text-3xl' }
    }

    const currentSize = sizes[size]

    return (
        <div className="flex items-center gap-3">
            <div className={`${currentSize.container} bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/25`}>
                <span className={`material-symbols-outlined ${currentSize.icon} text-white`}>lock</span>
            </div>
            {showText && (
                <h2 className={`${currentSize.text} font-bold tracking-tight text-slate-900 dark:text-white`}>
                    Private Notes
                </h2>
            )}
        </div>
    )
}

export default Logo
