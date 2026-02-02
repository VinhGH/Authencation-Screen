const WelcomeBanner = () => {
    return (
        <div className="mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#135bec] to-[#4f86ed] p-6 text-white shadow-lg relative">
            <div
                className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-center opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60')"
                }}
            ></div>
            <div className="relative z-10 flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Welcome back, Alex!</h2>
                <p className="text-blue-100 max-w-lg">You have 4 new notes this week. Your vault is secure and synced.</p>
            </div>
        </div>
    )
}

export default WelcomeBanner
