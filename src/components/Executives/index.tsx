import Article from '@/components/Article'
import React from 'react'
import WinterExec from '/winter.svg'
import "./index.css";
// import "../globals.css";
import Banner from '@/components/Banner'
import Link from 'next/link'
function exec() {
    return (
        <section >


            <div className="winter">
                <Banner title='SSC Executives 2024-25' subtitle='Meet your Executive Team' >
                    <div className="flex flex-col justify-center items-center align-center p-10 text-[#E4E2DD] w-3/3 h-full rounded">
                        <Link href="/executives"> <h1>Coming Soon!</h1></Link>
                    </div>
                </Banner>
            </div>
        </section>
    )
}

export default exec

