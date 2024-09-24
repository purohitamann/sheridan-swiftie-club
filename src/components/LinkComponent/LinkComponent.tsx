import React from 'react'
import LinkButton from './LinkButton'

const LinkComponent = () => {
    return (
        <div style={{ fontFamily: "Cinzel" }} className='flex flex-col sm:flex-row text-center text-[#E4E2DD] font-light text-2xl gap-4 sm:space-x-4'>
            <LinkButton LinkLabel="Instagram" LinkUrl="https://www.instagram.com/sheridanswiftieclub/" />
            <LinkButton LinkLabel="Clubs Corner" LinkUrl="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub" />
            <LinkButton LinkLabel="mail" LinkUrl="mailto:sheridanswiftieclub@gmail.com" />
        </div>
    )
}

export default LinkComponent
