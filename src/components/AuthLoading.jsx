const AuthLoading = ({ message = "Checking authentication", transparent = true }) => {
    return (
        <main
            className={[
                "fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-between overflow-hidden px-6 py-10",
                transparent ? "bg-transparent text-neutral-950" : "bg-black text-white"
            ].join(" ")}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/3 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-500/8 blur-3xl"
            />

            <div />

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl font-bold tracking-tighter">Uber</h1>

                <div
                    role="progressbar"
                    aria-label={message}
                    className="mt-12 h-0.75 w-56 overflow-hidden rounded-full bg-neutral-300/60"
                >
                    <div className="auth-loading-slide h-full w-1/3 rounded-full bg-neutral-950" />
                </div>

                <p
                    role="status"
                    aria-live="polite"
                    className="mt-6 text-[15px] font-medium text-neutral-500"
                >
                    {message}
                    <span className="auth-loading-dot ml-0.5 inline-block">.</span>
                    <span className="auth-loading-dot ml-px inline-block [animation-delay:0.2s]">.</span>
                    <span className="auth-loading-dot ml-px inline-block [animation-delay:0.4s]">.</span>
                </p>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-xs text-neutral-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                >
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <span>Secure sign-in</span>
            </div>

            <style>{`
                @keyframes auth-loading-slide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(300%); }
                }

                @keyframes auth-loading-dot {
                    0%, 80%, 100% { opacity: 0.2; }
                    40% { opacity: 1; }
                }

                .auth-loading-slide {
                    animation: auth-loading-slide 1.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
                }

                .auth-loading-dot {
                    animation: auth-loading-dot 1.2s ease-in-out infinite;
                }

                @media (prefers-reduced-motion: reduce) {
                    .auth-loading-slide, .auth-loading-dot {
                        animation: none;
                    }
                }
            `}</style>
        </main>
    );
};

export default AuthLoading;
