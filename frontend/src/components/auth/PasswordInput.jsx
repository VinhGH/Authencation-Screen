import { useState } from 'react'

const PasswordInput = ({ label = "Password", value, onChange, name, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    // Simple validation checks
    const hasMinLength = (value || '').length >= 6
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value || '')

    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-900 dark:text-white">{label}</label>
            <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    lock
                </span>
                <input
                    className="w-full h-12 pl-12 pr-12 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 transition-colors"
                    type={showPassword ? 'text' : 'password'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder="Enter your password"
                    {...props}
                />
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <span className="material-symbols-outlined text-xl">
                        {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                </button>
            </div>

            {/* Validation Hint */}
            <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-1 items-center">
                    <span className={`material-symbols-outlined text-xs ${hasMinLength ? 'text-green-500' : 'text-slate-400'}`}>
                        {hasMinLength ? 'check_circle' : 'circle'}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Min 6 characters</span>
                </div>
                <div className="flex gap-1 items-center">
                    <span className={`material-symbols-outlined text-xs ${hasSpecialChar ? 'text-green-500' : 'text-slate-400'}`}>
                        {hasSpecialChar ? 'check_circle' : 'circle'}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">1 special char</span>
                </div>
            </div>
        </div>
    )
}

export default PasswordInput
