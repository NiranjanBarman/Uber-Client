import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserDataContext } from "../../context/UserDataContext"
import { userAPI } from "../../services/api"
import { setAccessToken } from "../../services/authToken"

const UserLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setUserData } = useContext(UserDataContext);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault()
        
        const userData = {
            email: email,
            password: password
        }

        const response = await userAPI.login(userData);
        if(response.status === 200){
            const data = response.data;
            setAccessToken(data.accessToken)
            setUserData(data.user);
            navigate("/user/home")
        }
        
        setEmail("")
        setPassword("")
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-5 py-10">
            <section className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-9">
                <Link to="/" className="mb-10 inline-flex text-3xl font-bold tracking-tight text-black" aria-label="Uber home">Uber</Link>
                <form onSubmit={submitHandler} className="flex flex-col">
                    <p className="mb-2 text-sm font-medium text-neutral-500">Welcome back</p>
                    <h1 className="mb-8 text-3xl font-semibold tracking-tight text-neutral-950">Sign in to ride</h1>

                    <label htmlFor="user-email" className="mb-2 text-sm font-medium text-neutral-800">Email address</label>
                    <input
                        id="user-email"
                        className="mb-5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                    />

                    <label htmlFor="user-password" className="mb-2 text-sm font-medium text-neutral-800">Password</label>
                    <input
                        id="user-password"
                        className="mb-6 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                    />

                    <button type="submit" className="w-full rounded-lg bg-black px-4 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Sign in
                    </button>

                    <p className="mt-6 text-center text-sm text-neutral-600">
                        New to Uber?{" "}
                        <Link to="/user-signup" className="font-semibold text-black underline-offset-4 hover:underline">Create an account</Link>
                    </p>

                    <div className="my-6 flex items-center gap-4 text-xs text-neutral-400">
                        <span className="h-px flex-1 bg-neutral-200" />
                        OR
                        <span className="h-px flex-1 bg-neutral-200" />
                    </div>
                    <Link to="/captain-login" className="flex w-full items-center justify-center rounded-lg border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50">
                        Sign in as a captain
                    </Link>
                </form>
            </section>
        </main>
    )
}

export default UserLogin