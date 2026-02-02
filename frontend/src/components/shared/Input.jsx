const Input = ({
    icon,
    label,
    type = 'text',
    placeholder,
    className = '',
    ...props
}) => {
    return (
        <div className="space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-slate-900 dark:text-white">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        {icon}
                    </span>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`w-full h-12 ${icon ? 'pl-12' : 'pl-4'} pr-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 transition-colors ${className}`}
                    {...props}
                />
            </div>
        </div>
    )
}

export default Input
