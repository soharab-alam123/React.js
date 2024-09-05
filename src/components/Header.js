import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { TbProgressHelp } from "react-icons/tb";
import { GoSignIn } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }
    const hideSideMenu = () => {
        setToggle(false);
    }
    const links = [
        {
            icons: <CiSearch />,
            name: "search"
        },
        {
            icons: <CiDiscount1 />,
            name: "offers"
        },
        {
            icons: <TbProgressHelp />,
            name: "help"
        },
        {
            icons: <GoSignIn />,
            name: "signup"
        },
        {
            icons: <CiShoppingCart />,
            name: "cart"
        }
    ]
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-400' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div className='w-[500px] bg-white h-full absolute' style={{
                    left: toggle ? '0%' : '-100%'
                }}>
                </div>
            </div>
            <header className='fixed top-0 w-full mx-auto z-50  bg-white p-[15px] shadow-xl text-[#686b78]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[100px] border-blue-500'>
                        <img src='images/Swiggy.png' className='w-full cursor-pointer' alt='Swiggy' />
                    </div>
                    <div className='cursor-pointer'>
                        <span className='font-bold border-b-[3px] cursor-pointer'>Botanical </span>
                        noida, india <RxCaretDown fontSize={25} className='inline text-[0.9rem] text-[#ff5200] cursor-pointer' onClick={showSideMenu} />
                    </div>
                    <nav className='flex list-none gap-5 ml-auto text-[18px] font-semibold'>
                        {links.map((link, index) => (
                            <li key={index} className='flex items-center gap-2 hover:text-[#ff5200] cursor-pointer'>
                                {link.icons}
                                {link.name}
                            </li>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
