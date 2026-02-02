const AuthBranding = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-dark items-center justify-center p-12">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-primary/20 mix-blend-multiply z-10"></div>
                <div
                    className="w-full h-full bg-cover bg-center opacity-60"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr0QzPz_rvGzxBJ5vsv6luT9oCrpELWjRwZzOG1k6lEfaCOBdowtX7n_94h1s7ctXm-iQNu-ckdCkKvcEMFqffc3uig9XpTCi_my1kP9QXn7LIROLr9D-v-UD98lPInUGUD_ZKTxeJDD7CWHKeAmicaowBdGdj7P23FGVnnNL4UWMhQ4afO0927NDBf0kOP09Vs3wSiWIFBGbnSFbrD6hdmiQgz3ORpcK7pWhqoJuSgfk_qh4Y-Aj19wtFahF2zk9FFzAX-PlveS0S')"
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-lg">
                <div className="flex items-center gap-3 text-white mb-8">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/25">
                        <span className="material-symbols-outlined text-2xl">lock</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Private Notes</h2>
                </div>

                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-sm">
                    Your thoughts,<br />secured forever.
                </h1>

                <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-md">
                    End-to-end encryption for your personal archives. Keep your ideas safe, isolated, and accessible only to you.
                </p>

                {/* Trust Indicators */}
                <div className="mt-12 flex gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-white">256-bit</span>
                        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Encryption</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-white">0</span>
                        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Data Leaks</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-white">100%</span>
                        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Private</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthBranding
