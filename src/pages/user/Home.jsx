import map from "../../assets/map.png";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import VehiclePanel from "../../components/VehiclePanel";
import ConfiromRide from "../../components/ConfiromRide";
// import WaitingForDrivers from "../../components/WaitingForDrivers";
import LookingForDrivers from "../../components/LookingForDrivers";
import WaitingForDrivers from "../../components/WaitingForDrivers";

const UserHome = () => {
    const [pickLocation, setPickLocation] = useState("");
    const [destinationLocation, setDestinationLocation] = useState("");
    const [openPanel, setOpenPanel] = useState(false);
    const vehiclePanelRef = useRef(null)
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
    const vehiclePanelInitializedRef = useRef(false);

    const panelRef = useRef(null);
    const arrowRef = useRef(null);

    const confriomRIdePanelRef = useRef(null)
    const [confriomRIdePanel, setConfriomRIdePanel] = useState(false)
    const confriomRIdePanelInitializedRef = useRef(false);

    const vehicleFoundRef = useRef(null)
    const [vehicleFound, setVehicleFound] = useState(false)
    const vehicleFoundInitializedRef = useRef(false);

    const waitingForDriverRef = useRef(null)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const waitingForDriverInitializedRef = useRef(false);

    const handleOpenPanel = () => {
        setOpenPanel(true);
    };

    const closePanel = () => {
        setOpenPanel(false);
    };

    useGSAP(() => {
        if (openPanel) {
            gsap.to(panelRef.current, {
                flexGrow: 1,
                duration: 0.6,
                ease: "power3.inOut",
            });

            gsap.to(arrowRef.current, {
                rotate: 180,
                duration: 0.4,
            });
        } else {
            gsap.to(panelRef.current, {
                flexGrow: 0,
                duration: 0.6,
                ease: "power3.inOut",
            });

            gsap.to(arrowRef.current, {
                rotate: 0,
                duration: 0.4,
            });
        }
    }, [openPanel]);

    useGSAP(() => {
        const vehiclePanelElement = vehiclePanelRef.current;
        if (!vehiclePanelElement) return;

        if (!vehiclePanelInitializedRef.current) {
            gsap.set(vehiclePanelElement, { yPercent: 100 });
            vehiclePanelInitializedRef.current = true;
        }

        gsap.to(vehiclePanelElement, {
            yPercent: vehiclePanelOpen ? 0 : 100,
            duration: 0.6,
            ease: "power3.inOut",
        });
    }, [vehiclePanelOpen]);

    useGSAP(() => {
        const vehiclePanelElement = confriomRIdePanelRef.current;
        if (!vehiclePanelElement) return;

        if (!confriomRIdePanelInitializedRef.current) {
            gsap.set(vehiclePanelElement, { yPercent: 100 });
            confriomRIdePanelInitializedRef.current = true;
        }

        gsap.to(vehiclePanelElement, {
            yPercent: confriomRIdePanel ? 0 : 100,
            duration: 0.6,
            ease: "power3.inOut",
        });
    }, [confriomRIdePanel]);

    useGSAP(() => {
        const vehiclePanelElement = vehicleFoundRef.current;
        if (!vehiclePanelElement) return;

        if (!vehicleFoundInitializedRef.current) {
            gsap.set(vehiclePanelElement, { yPercent: 100 });
            vehicleFoundInitializedRef.current = true;
        }

        gsap.to(vehiclePanelElement, {
            yPercent: vehicleFound ? 0 : 100,
            duration: 0.6,
            ease: "power3.inOut",
        });
    }, [vehicleFound]);

    useGSAP(() => {
        const vehiclePanelElement = waitingForDriverRef.current;
        if (!vehiclePanelElement) return;

        if (!waitingForDriverInitializedRef.current) {
            gsap.set(vehiclePanelElement, { yPercent: 100 });
            waitingForDriverInitializedRef.current = true;
        }

        gsap.to(vehiclePanelElement, {
            yPercent: waitingForDriver ? 0 : 100,
            duration: 0.6,
            ease: "power3.inOut",
        });
    }, [waitingForDriver]);

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            pickLocation,
            destinationLocation,
        };

        console.log(data);

        setPickLocation("");
        setDestinationLocation("");
        closePanel();
    };

    return (
        <main className="relative h-dvh w-full overflow-hidden bg-[#f5f5f5]">

            <div >
                <img 
                    src={map}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                >    
                </img>
            </div>

            <div className="absolute left-6 top-6 z-10">
                <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow">
                    Uber
                </h1>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end">

                {/* Main Form Panel */}
                <div className="relative z-20 h-auto shrink-0 bg-white px-6 pt-6 pb-5">

                    <button
                        type="button"
                        onClick={openPanel ? closePanel : handleOpenPanel}
                        className="absolute right-6 top-5 text-2xl text-gray-700"
                        aria-label={openPanel ? "Close panel" : "Open panel"}
                    >
                        <svg
                            ref={arrowRef}
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>

                    <h2 className="mb-5 text-2xl font-bold text-gray-900">
                        Find a trip
                    </h2>

                    <form
                        onSubmit={submitHandler}
                        className="relative flex flex-col gap-3"
                    >
                        <div className="relative flex flex-col gap-3">
                            <div className="absolute bottom-8 left-1.75 top-8 border-l-2 border-dotted border-gray-400" />

                            <div className="relative flex items-center">
                                <span className="absolute left-0 z-10 h-4 w-4 rounded-full border-4 border-black bg-white" />

                                <input
                                    type="text"
                                    placeholder="Add pickup location"
                                    required
                                    value={pickLocation}
                                    onFocus={handleOpenPanel}
                                    onChange={(e) => setPickLocation(e.target.value)}
                                    className="ml-7 w-full rounded-lg bg-gray-100 px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div className="relative flex items-center">
                                <span className="absolute left-0 z-10 h-4 w-4 bg-black" />

                                <input
                                    type="text"
                                    placeholder="Add destination location"
                                    required
                                    value={destinationLocation}
                                    onFocus={handleOpenPanel}
                                    onChange={(e) => setDestinationLocation(e.target.value)}
                                    className="ml-7 w-full rounded-lg bg-gray-100 px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>
                        
                    </form>
                </div>
                
                <div
                    ref={panelRef}
                    className="min-h-0 w-full shrink-0 basis-0 grow-0 overflow-hidden bg-white"
                >
                    <LocationSearchPanel setOpenPanel={setOpenPanel} setVehiclePanelOpen={setVehiclePanelOpen} />
                </div>

                <div ref={vehiclePanelRef} className="fixed bottom-0 z-30 w-full bg-white px-3 py-4 pt-5">
                    <VehiclePanel setConfriomRIdePanel={setConfriomRIdePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
                </div>

                <div ref={confriomRIdePanelRef} className="fixed bottom-0 z-30 w-full bg-white px-3 py-6 pt-5">
                    <ConfiromRide setConfriomRIdePanel={setConfriomRIdePanel} setVehicleFound={setVehicleFound}/>
                </div>
 
                <div ref={vehicleFoundRef} className="fixed bottom-0 z-30 w-full bg-white px-3 py-6 pt-5">
                    <LookingForDrivers setVehicleFound={setVehicleFound} setWaitingForDriver={setWaitingForDriver}/>
                </div>

                <div ref={waitingForDriverRef} className="fixed bottom-0 z-30 w-full bg-white px-3 py-6 pt-5">
                    <WaitingForDrivers setWaitingForDriver={setWaitingForDriver} setVehicleFound={setVehicleFound}/>
                </div>

            </div>
        </main>
    );
};

export default UserHome;