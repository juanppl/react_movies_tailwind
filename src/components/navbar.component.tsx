import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import React from "react";


const NavBar: FC = () => {

    const [open, setOpen] = useState(true);

    const menus = [
        { name: "Series", link: "/", icon: MdOutlineDashboard },
    ];

    return (
        <>
            <nav className=" bg-[#f3f4f6] border-b border-gray-300 shadow-lg top-0 fixed w-full z-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-start p-4">
                    <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-300 " aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </nav>

            <section className="flex gap-6 pt-[72px] z-10 top-0 left-0 fixed">
                <div
                    className={`bg-[#f3f4f6] min-h-screen ${open ? "w-72" : "w-16"
                        } duration-500 text-gray-700 px-4 border-r border-gray-300
                        shadow-[5px_0_5px_-5px_#888]`}
                >
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                key={i}
                                className={`mt-5 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-300 rounded-md`}
                            >
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${open && "hidden"
                                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <div className={`w-full h-full overflow-scroll pt-[72px] duration-500 ${open ? "pl-80" : "pl-20"}`}>
                <Outlet />
            </div>
        </>
    );
}

export default NavBar;
