const SocialAuthButtons = () => {
    return (
        <>
            {/* Divider */}
            <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">
                    Or continue with
                </span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
            </div>

            {/* Social Auth Buttons */}
            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 h-11 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <img
                        alt="Google Logo"
                        className="w-5 h-5"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC50Ig5WgHZnlpFyMxEwUUuit7bIJN6GB9BcXWHojRfP1iFufKWT07Hu1iekFR6KzSOLbXY-Db3GlMfJ2t5R5ufxmQIE9MlhVzTCVB2cX0UJ-QjA6g6I0WKTpycBi_t1rd1e4Pv5rwgsili-neoksCy3vZ_o6wCNYJxc03HCaaX42dRa7aZvd-mok9FhDxqp4aifXhFWi7uLvAKxMZPekpQ0gnz9NeJjyoTyxp7N_VsTV4MsqieLzRpDi0cw1mJXwoXMJghs5f0uzKK"
                    />
                    <span className="text-sm font-semibold text-slate-700 dark:text-white">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 h-11 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <img
                        alt="GitHub Logo"
                        className="w-5 h-5 invert dark:invert-0"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJKkpobZYDgvYaylJw9etvCJWHRDo5v2G03AvFcETTwrPCINA9uDYFSsNEAg3H5_qfgsDeIfCQzhB7PXxtD9GXYHWlazLo6wdiDOOOBB4o9EePQsQ8lUJvZnyvEcC8XA3JSNE2zq2v4LnuZYtciyYD1CyokpouXkv3-h7dMZfBI9GvNjL-djxTs15c_2pDaHAfCez_OMTM219RM_8OSmCvakeZc89uRlLJLTGieeFhqAuwxL0VgpbHZUsMJpcidSBPVxFRKV_qlD3r"
                    />
                    <span className="text-sm font-semibold text-slate-700 dark:text-white">GitHub</span>
                </button>
            </div>

            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                By clicking continue, you agree to our{' '}
                <a className="text-primary hover:underline" href="#">Terms of Service</a>
                {' '}and{' '}
                <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
            </p>
        </>
    )
}

export default SocialAuthButtons
