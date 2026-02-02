import AuthBranding from '../components/auth/AuthBranding'
import AuthForm from '../components/auth/AuthForm'

const AuthPage = () => {
    return (
        <div className="min-h-screen flex w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display selection:bg-primary/30">
            <AuthBranding />
            <AuthForm />
        </div>
    )
}

export default AuthPage
