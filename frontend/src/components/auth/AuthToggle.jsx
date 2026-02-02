import { useState } from 'react'

const AuthToggle = ({ activeTab, onTabChange }) => {
    return (
        <div className="w-full p-1 bg-slate-200 dark:bg-border-dark rounded-xl flex">
            <label className="flex-1 cursor-pointer">
                <input
                    className="peer sr-only"
                    name="auth-toggle"
                    type="radio"
                    checked={activeTab === 'signin'}
                    onChange={() => onTabChange('signin')}
                />
                <div className="w-full py-2.5 rounded-lg text-sm font-semibold text-center text-slate-500 dark:text-text-secondary transition-all peer-checked:bg-white dark:peer-checked:bg-background-dark peer-checked:text-primary peer-checked:shadow-sm">
                    Sign In
                </div>
            </label>
            <label className="flex-1 cursor-pointer">
                <input
                    className="peer sr-only"
                    name="auth-toggle"
                    type="radio"
                    checked={activeTab === 'signup'}
                    onChange={() => onTabChange('signup')}
                />
                <div className="w-full py-2.5 rounded-lg text-sm font-semibold text-center text-slate-500 dark:text-text-secondary transition-all peer-checked:bg-white dark:peer-checked:bg-background-dark peer-checked:text-primary peer-checked:shadow-sm">
                    Sign Up
                </div>
            </label>
        </div>
    )
}

export default AuthToggle
