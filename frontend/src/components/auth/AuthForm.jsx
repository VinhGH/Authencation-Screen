import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../shared/Logo'
import Input from '../shared/Input'
import PasswordInput from './PasswordInput'
import AuthToggle from './AuthToggle'
import SocialAuthButtons from './SocialAuthButtons'
import { login, register } from '../../services/authService'

const AuthForm = () => {
    const [activeTab, setActiveTab] = useState('signup')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setError('') // Clear error when user types
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            if (activeTab === 'signup') {
                // Register
                const response = await register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })

                if (response.success) {
                    // After successful registration, switch to login tab
                    setActiveTab('signin')
                    setFormData({ name: '', email: formData.email, password: '' })
                    setError('')
                    // Show success message
                    alert('Đăng ký thành công! Vui lòng đăng nhập.')
                }
            } else {
                // Login
                const response = await login({
                    email: formData.email,
                    password: formData.password
                })

                if (response.success) {
                    navigate('/dashboard')
                }
            }
        } catch (err) {
            // Handle error from backend
            const errorMessage = err.response?.data?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại.'
            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 relative bg-background-light dark:bg-background-dark">
            {/* Mobile Header (Visible only on small screens) */}
            <div className="lg:hidden absolute top-6 left-6">
                <Logo size="sm" />
            </div>

            <div className="w-full max-w-[440px] flex flex-col gap-8">
                {/* Header Text */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        {activeTab === 'signup' ? 'Create an account' : 'Welcome back'}
                    </h2>
                    <p className="text-slate-600 dark:text-text-secondary">
                        {activeTab === 'signup'
                            ? 'Start securing your personal data today.'
                            : 'Sign in to access your secure notes.'}
                    </p>
                </div>

                {/* Toggle Segmented Control */}
                <AuthToggle activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    {/* Name Field (only for signup) */}
                    {activeTab === 'signup' && (
                        <Input
                            icon="person"
                            label="Full Name"
                            placeholder="John Doe"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}

                    {/* Email Field */}
                    <Input
                        icon="mail"
                        label="Email Address"
                        placeholder="name@example.com"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    {/* Password Field */}
                    <PasswordInput
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {/* Submit Button */}
                    <button
                        className="mt-2 w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={loading}
                    >
                        <span>{loading ? 'Processing...' : (activeTab === 'signup' ? 'Create Account' : 'Sign In')}</span>
                        {!loading && (
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">
                                arrow_forward
                            </span>
                        )}
                    </button>
                </form>

                {/* Social Auth */}
                <SocialAuthButtons />
            </div>
        </div>
    )
}

export default AuthForm
