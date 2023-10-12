"use client";

// No need to explicitly import React in Next.js
//import React from 'react'
import Link from "next/link";
import Image from "next/image";

//React hooks here
import { useState, useEffect } from 'react';

// Built in authentication imports
import { signIn, signOut, useSession, getProviders } from "next-auth/react";



const Nav = () => {
    const userLogged = true;
    /* initialise providers */
    const [providers, setProvider] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const res = await getProviders();

            setProviders(res);
        }

        setProviders();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/zc.png"
                    alt="zc image logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />
                <p className="logo_text">
                    Prompt Bank
                </p>
            </Link>

            {/* DESKTOP NAV */}
            <div className="sm:flex hidden">
                { userLogged ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create Post
                        </Link>
                        <button type="button" onClick = { signOut } className="outline_btn">
                            Log Out
                        </button>
                        <Link href="/profile">
                            {/* Users avatar and username will be in this link */}
                            <Image
                                src="/assets/images/zc.png" 
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile picture"                       
                            />
                        </Link>
                    </div>
                ): (
                    <div className="flex gap-3 md:gap-5">
                        {providers && Object.values(providers).map((provider) => {
                             <button 
                             type="button" 
                             key="provider.name"
                             onclick = { signIn(provider.id) } 
                             className="outline_btn"
                             >
                             Log In
                         </button>
                        })}
                        <button type="button" className="outline_btn">
                            Sign Up
                        </button>
                       
                    </div>
                )}
            </div>


            {/* MOBILE NAV */}
            <div className="sm:hidden flex relative">
                { userLogged ? (
                    <div className="flex">
                            <Image
                                src="/assets/images/zc.png" 
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile picture"
                                onClick={() => {
                                    !setToggleDropdown((prev) => {
                                        !prev
                                    })
                                }}                
                            />

                            { toggleDropdown && (
                                <div className="dropdown">
                                    <Link>
                                        6s
                                    </Link>
                                </div>
                            )}
                    </div>
                ): (
                    <div className="flex gap-3 md:gap-5">
                        {providers && Object.values(providers).map((provider) => {
                             <button 
                             type="button" 
                             key="provider.name"
                             onclick = { signIn(provider.id) } 
                             className="outline_btn"
                             >
                             Log In
                         </button>
                        })}
                        <button type="button" className="outline_btn">
                            Sign Up
                        </button>
                       
                    </div>
                )}
            </div>
        </nav>
    )
}


export default Nav