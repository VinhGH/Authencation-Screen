const Button = ({
    children,
    variant = 'primary',
    icon,
    iconPosition = 'right',
    className = '',
    ...props
}) => {
    const baseStyles = 'flex items-center justify-center gap-2 font-bold transition-all rounded-lg'

    const variants = {
        primary: 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/20',
        secondary: 'bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white',
        icon: 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {icon && iconPosition === 'left' && (
                <span className="material-symbols-outlined text-xl">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">{icon}</span>
            )}
        </button>
    )
}

export default Button
