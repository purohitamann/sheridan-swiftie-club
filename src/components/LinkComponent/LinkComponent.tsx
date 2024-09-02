import React from 'react'
import LinkButton from './LinkButton'
import EmailButton from './EmailButton'
const LinkComponent = () => {
    return (
        <div className='flex gap-2'>

            <LinkButton LinkLabel="Instagram" LinkUrl="https://www.instagram.com/sheridanswiftieclub/" />
            <LinkButton LinkLabel="Clubs Corner" LinkUrl="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub" />
            <EmailButton />

        </div>
    )
}

export default LinkComponent
