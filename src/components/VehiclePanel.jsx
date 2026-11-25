const VehiclePanel = (props) => {
  return (
    <div>

       <h5 className="flex justify-center items-center w-[93%] opacity-35">
            <i
                onClick={() => props.setVehiclePanelOpen(false)}
                className="ri-arrow-down-wide-line text-xl cursor-pointer"
            />
        </h5>
        <h3 className="text-2xl font-semibold mb-5">
            Choose a Vehicle
        </h3>
        <div onClick={() => {
                props.setConfriomRIdePanel(true)
                props.setVehiclePanelOpen(false)
            }} 
            className="flex w-full border-2 active:border-black rounded-xl mb-2 p-3 items-center justify-between">
            <img className="h-20" src="https://imgs.search.brave.com/9bUGwTDlNSvmlZhsPtdXS0K1uz1-yKHULHGmKFliBdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTQ2LzAyOS9zbWFs/bC93aGl0ZS1tb2Rl/cm4tY2FyLWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtM2QtcmVu/ZGVyaW5nLWlsbHVz/dHJhdGlvbi1mcmVl/LXBuZy5wbmc"/>
            <div className="w-1/2">
                <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill">3</i></span></h4>
                <h5 className="font-medium text-sm">2 Minutes away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable, compact ride </p>
            </div>
            <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>

    </div>
  )
}

export default VehiclePanel
