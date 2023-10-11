// No need to explicitly import React in Next.js
//import React from 'react'

import '@styles/global.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "Prompt-Bank",
    description: "AI prompt storage for great justice"
}

const CoreLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}


export default CoreLayout