
const Locations = [
    {
        pickup: "Siliguri Junction, Siliguri",
        destination: "Bagdogra Airport, Siliguri"
    },
    {
        pickup: "Sevoke Road, Siliguri",
        destination: "Hong Kong Market, Siliguri"
    },
    {
        pickup: "City Centre, Siliguri",
        destination: "North Bengal Medical College"
    },
    {
        pickup: "Darjeeling More, Siliguri",
        destination: "Salugara Monastery, Siliguri"
    },
    {
        pickup: "Pradhan Nagar, Siliguri",
        destination: "Mahananda Wildlife Sanctuary"
    }
];

const LocationSearchPanel = (props) => {

    
    return (
        <div className="h-full w-full overflow-y-auto bg-white">

            {Locations.map((location, index) => (
                <div
                    key={index}
                    onClick={() => {
                        props.setVehiclePanelOpen(true)
                        props.setOpenPanel(false)
                    }}
                    className="m-2 flex items-center gap-4 border-2 border-gray-100 active:border-black rounded-2xl  px-6 py-4"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dcdcdc]">
                        <i className="ri-map-pin-line text-2xl text-gray-800"></i>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900">
                            {location.pickup}
                        </h4>

                        <p className="mt-1 text-sm text-gray-500">
                            To: {location.destination}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default LocationSearchPanel;
