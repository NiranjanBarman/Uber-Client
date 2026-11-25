
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { captainAPI } from "../../services/api"
import { CaptainDataContext } from "../../context/CaptainDataContext"

const CaptainSignup = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [color, setColor] = useState("")
    const [plate, setPlate] = useState("")
    const [capacity, setCapacity] = useState("")
    const [vehicleType, setVehicleType] = useState("")
    const navigate = useNavigate()
    const { setCaptainData } = useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()

        const CaptainData = {
            fullName: {
                firstname,
                lastname
            },
            email,
            password,
            vehicle: {
                color,
                plate,
                capcity: Number(capacity),
                vihacleType: vehicleType
            }
        }

        const response = await captainAPI.register(CaptainData)
        setCaptainData(response.data.captain)
        navigate("/otpverify", { state: { email, role: "captain" } })

        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setColor("")
        setPlate("")
        setCapacity("")
        setVehicleType("")
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-3 py-5 sm:px-5 sm:py-10">
            <section className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm sm:p-7">
                <Link to="/" className="mb-4 inline-flex text-2xl font-bold tracking-tight text-black sm:mb-6 sm:text-3xl" aria-label="Uber home">
                    Uber<span className="ml-2 text-sm font-medium tracking-normal text-neutral-500">for captains</span>
                </Link>

                <form onSubmit={submitHandler} className="flex flex-col">
                    <p className="mb-2 text-sm font-medium text-neutral-500">Get started</p>
                    <h1 className="mb-2 text-xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">Create your captain account</h1>
                    <p className="mb-4 text-xs leading-5 text-neutral-500 sm:mb-5 sm:text-sm sm:leading-6">Tell us a little about yourself and your vehicle.</p>

                    <h2 className="mb-4 text-base font-semibold text-neutral-900">Personal details</h2>
                    <div className="mb-4 grid grid-cols-2 gap-2 sm:mb-5 sm:gap-4">
                        <div>
                            <label htmlFor="captain-firstname" className="mb-2 block text-sm font-medium text-neutral-800">First name</label>
                            <input
                                id="captain-firstname"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                type="text"
                                required
                                minLength={3}
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                autoComplete="given-name"
                                placeholder="First name"
                            />
                        </div>
                        <div>
                            <label htmlFor="captain-lastname" className="mb-2 block text-sm font-medium text-neutral-800">Last name</label>
                            <input
                                id="captain-lastname"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                type="text"
                                minLength={3}
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                autoComplete="family-name"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-2 sm:mb-5 sm:gap-4">
                        <div>
                            <label htmlFor="captain-signup-email" className="mb-2 block text-sm font-medium text-neutral-800">Email address</label>
                            <input
                                id="captain-signup-email"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="captain-signup-password" className="mb-2 block text-sm font-medium text-neutral-800">Password</label>
                            <input
                                id="captain-signup-password"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="new-password"
                                placeholder="Create a password"
                            />
                        </div>
                    </div>

                    <h2 className="mb-4 border-t border-neutral-200 pt-4 text-base font-semibold text-neutral-900">Vehicle details</h2>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <div>
                            <label htmlFor="vehicle-color" className="mb-2 block text-sm font-medium text-neutral-800">Vehicle color</label>
                            <input
                                id="vehicle-color"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                type="text"
                                required
                                minLength={3}
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                placeholder="e.g. Black"
                            />
                        </div>
                        <div>
                            <label htmlFor="vehicle-plate" className="mb-2 block text-sm font-medium text-neutral-800">Plate number</label>
                            <input
                                id="vehicle-plate"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm uppercase outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                type="text"
                                required
                                minLength={3}
                                value={plate}
                                onChange={(e) => setPlate(e.target.value)}
                                placeholder="WB 12 AB 1234"
                            />
                        </div>
                        <div>
                            <label htmlFor="vehicle-capacity" className="mb-2 block text-sm font-medium text-neutral-800">Seat capacity</label>
                            <input
                                id="vehicle-capacity"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                type="number"
                                required
                                min={1}
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                placeholder="Number of seats"
                            />
                        </div>
                        <div>
                            <label htmlFor="vehicle-type" className="mb-2 block text-sm font-medium text-neutral-800">Vehicle type</label>
                            <select
                                id="vehicle-type"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-2 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:px-4 sm:py-3 sm:text-base"
                                required
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                            >
                                <option value="" disabled>Select vehicle type</option>
                                <option value="car">Car</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="mt-5 w-full rounded-lg bg-black px-4 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Create captain account
                    </button>

                    <p className="mt-6 text-center text-sm text-neutral-600">
                        Already have an account?{" "}
                        <Link to="/captain-login" className="font-semibold text-black underline-offset-4 hover:underline">Sign in</Link>
                    </p>
                    <p className="mt-3 text-center text-sm text-neutral-500">
                        Looking for a ride?{" "}
                        <Link to="/user-login" className="font-medium text-neutral-800 underline-offset-4 hover:underline">Rider sign in</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}

export default CaptainSignup
