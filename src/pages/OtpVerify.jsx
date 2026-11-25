import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/UserDataContext"
import { CaptainDataContext } from "../context/CaptainDataContext"
import { captainAPI, userAPI } from "../services/api"
import { setAccessToken } from "../services/authToken"

const OtpVerify = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { userData, setUserData } = useContext(UserDataContext)
    const { setCaptainData, setCaptainAccessToken } = useContext(CaptainDataContext)
    const email = location.state?.email || userData.email
    const role = location.state?.role || "user"

    const [otp, setOtp] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const submitHandler = async (event) => {
        event.preventDefault()
        setError("")

        if (!email) {
            setError("Email is missing. Please register again.")
            return
        }

        setLoading(true)
        try {
            const response = role === "captain"
                ? await captainAPI.verifyOTP({ email, otp })
                : await userAPI.verifyOTP({ email, otp })

            if (response.status === 200) {
                setAccessToken(response.data.accessToken)
                if (role === "captain") {
                    setCaptainData(response.data.captain)
                    setCaptainAccessToken(response.data.accessToken)
                } else {
                    setUserData(response.data.user)
                }
                navigate(role === "captain" ? "/captain/home" : "/user/home")
            }

            // if(response.data.user.role === "user"){

            // }
        } catch (requestError) {
            setError(
                requestError.response?.data?.message ||
                "Unable to verify the OTP. Please try again."
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-5 py-10">
            <section className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-9">
                <Link to="/" className="mb-10 inline-flex text-3xl font-bold tracking-tight text-black" aria-label="Uber home">
                    Uber
                </Link>

                <form onSubmit={submitHandler} className="flex flex-col">
                    <p className="mb-2 text-sm font-medium text-neutral-500">Verify your account</p>
                    <h1 className="mb-8 text-3xl font-semibold tracking-tight text-neutral-950">Enter verification code</h1>

                    <label htmlFor="verify-email" className="mb-2 text-sm font-medium text-neutral-800">Email address</label>
                    <input
                        id="verify-email"
                        className="mb-5 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-3 text-base text-neutral-600 outline-none"
                        type="email"
                        value={email}
                        readOnly
                        autoComplete="email"
                    />

                    <label htmlFor="otp" className="mb-2 text-sm font-medium text-neutral-800">6-digit OTP</label>
                    <input
                        id="otp"
                        className="mb-3 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-center text-2xl font-semibold tracking-[0.35em] outline-none transition placeholder:tracking-normal placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        maxLength={6}
                        required
                        value={otp}
                        onChange={(event) => {
                            setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))
                            setError("")
                        }}
                        placeholder="000000"
                        autoComplete="one-time-code"
                    />

                    {error && (
                        <p className="mb-4 text-sm text-red-600" role="alert">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-3 w-full rounded-lg bg-black px-4 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Verifying..." : "Verify account"}
                    </button>

                    <p className="mt-6 text-center text-sm text-neutral-600">
                        Wrong email?{" "}
                        <Link to={role === "captain" ? "/captain-signup" : "/user-signup"} className="font-semibold text-black underline-offset-4 hover:underline">
                            Go back
                        </Link>
                    </p>
                </form>
            </section>
        </main>
    )
}

export default OtpVerify
