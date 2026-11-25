import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { userAPI } from "../../services/api.js"
import { UserDataContext } from "../../context/UserDataContext"

const UserLogin = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setUserData } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        
        const newUser = {
            name: name,
            email: email,
            password: password
        }

        const response = await userAPI.register(newUser);
        if (response.status === 201) {
           const data = response.data;
           setUserData(data.user)
           navigate("/otpverify", { state: { email: data.user.email || email } })
        }

        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-5 py-10">
            <section className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-9">
                <Link to="/" className="mb-10 inline-flex text-3xl font-bold tracking-tight text-black" aria-label="Uber home">Uber</Link>
                <form onSubmit={submitHandler} className="flex flex-col">
                    <p className="mb-2 text-sm font-medium text-neutral-500">Get started</p>
                    <h1 className="mb-8 text-3xl font-semibold tracking-tight text-neutral-950">Create your account</h1>

                    <label htmlFor="user-name" className="mb-2 text-sm font-medium text-neutral-800">Full name</label>
                    <input
                        id="user-name"
                        className="mb-5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                    />

                    <label htmlFor="signup-email" className="mb-2 text-sm font-medium text-neutral-800">Email address</label>
                    <input
                        id="signup-email"
                        className="mb-5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                    />

                    <label htmlFor="signup-password" className="mb-2 text-sm font-medium text-neutral-800">Password</label>
                    <input
                        id="signup-password"
                        className="mb-6 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        placeholder="Create a password"
                    />

                    <button type="submit" className="w-full rounded-lg bg-black px-4 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Create account
                    </button>

                    <p className="mt-6 text-center text-sm text-neutral-600">
                        Already have an account?{" "}
                        <Link to="/user-login" className="font-semibold text-black underline-offset-4 hover:underline">Sign in</Link>
                    </p>
                    <p className="mt-3 text-center text-sm text-neutral-500">
                        Want to drive with Uber?{" "}
                        <Link to="/captain-signup" className="font-medium text-neutral-800 underline-offset-4 hover:underline">Join as a captain</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}

export default UserLogin