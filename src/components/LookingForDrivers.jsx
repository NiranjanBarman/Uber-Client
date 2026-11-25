

const LookingForDrivers = (props) => {
    return(
        <div className="w-full">
            <h5 className="mx-auto mb-2 flex h-5 w-full items-center justify-center text-gray-400">
                <i
                    onClick={() => props.setVehicleFound(false)}
                    className="ri-arrow-down-wide-line cursor-pointer text-2xl transition-colors hover:text-gray-700"
                />
            </h5>

            <h3 className="text-xl font-bold tracking-tight text-gray-900">
                Looking For Drivers
            </h3>

            <div className="-mt-6 flex flex-col items-center justify-start">
                <img className="h-60" src="https://imgs.search.brave.com/9bUGwTDlNSvmlZhsPtdXS0K1uz1-yKHULHGmKFliBdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTQ2LzAyOS9zbWFs/bC93aGl0ZS1tb2Rl/cm4tY2FyLWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtM2QtcmVu/ZGVyaW5nLWlsbHVz/dHJhdGlvbi1mcmVl/LXBuZy5wbmc" alt="" />
                <div className="w-full divide-y divide-gray-200 rounded-xl bg-gray-50 px-4">
                    <div className="flex items-center gap-4 py-3">
                        <i className="ri-map-pin-2-fill flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-gray-800 shadow-sm"></i>
                        <div className="min-w-0">
                            <h3 className="text-base font-semibold text-gray-900">562/11-A</h3>
                            <p className="text-sm text-gray-500">Sevoke Road, Siliguri</p>
                        </div>

                    </div>

                    <div className="flex items-center gap-4 py-3">
                        <i className="ri-map-pin-user-fill flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-gray-800 shadow-sm"></i>
                        <div className="min-w-0">
                            <h3 className="text-base font-semibold text-gray-900">Third Wave Coffe</h3>
                            <p className="text-sm text-gray-500">Sevoke Road, Siliguri, Hong Kong Market, Siliguri</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 py-3">
                        <i className="ri-money-rupee-circle-fill flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-gray-800 shadow-sm"></i>
                        <div className="min-w-0">
                            <h3 className="text-base font-semibold text-gray-900">₹193.20</h3>
                            <p className="text-sm text-gray-500">Cash Cash</p>
                        </div>
                    </div>
                </div>

            

                <button
                    onClick={() => {
                        props.setVehicleFound(false)
                        props.setWaitingForDriver(true)
                    }}
                    className="mt-4 w-full rounded-xl bg-black px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-800 active:scale-[0.99]">
                    Confirm
                </button>

            </div>
        </div>
    )
}

export default LookingForDrivers