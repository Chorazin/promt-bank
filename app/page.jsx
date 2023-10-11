// No need to explicitly import React in Next.js
//import React from 'react'

import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text head-center">PROMPTZ IN HERE BRO!
                <br className ="max-md:hidden" />
                <div className="text-center">
                    <span className="orange_gradient">AI promptz</span>
                </div>
            </h1>
            <p className="desc text-center">
                Get some fucking prompts in ya face mfer's.
            </p>
            < Feed />
        </section>
    )
}


export default Home