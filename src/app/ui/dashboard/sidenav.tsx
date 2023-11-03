import NavLinks from "./nav-links";


export default function Sidenav () {
    return (
        <div className="h-full flex-col px-3 py-4 md:px-2 bg-gray-100">
            <h1 className="font-bold text-center p-3">FUGOSTORE</h1>
            <hr/>
            
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 mt-5">
                <NavLinks/>
            </div>
        </div>
    )
}