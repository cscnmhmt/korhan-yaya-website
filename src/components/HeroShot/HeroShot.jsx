import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import ContactCard from './ContactCard'
import SocialLinks from './SocialLinks'
import ProfileImg from '../../assets/profile-img.png'

const HeroShot = () => {
    const [socials, setSocials] = useState([
        {
            media: 'linkedin',
            link: '#'
        },
        {
            media: 'dribble',
            link: '#'
        },
        {
            media: 'behance',
            link: '#'
        }
    ])


  return (
    <div className='py-[200px] rounded-3xl bg-white -mt-6'>
        <h4 className='font-normal text-5xl text-center'>With Creative Digital Designs</h4>
        <h2 className='font-black text-9xl max-w-5xl mx-auto text-center leading-tight'>TURN YOUR DREAMS INTO <span className='bg-gradient-to-r from-primary to-[#F13A3A] bg-clip-text text-transparent'>REALITY</span></h2>
        <div className="grid grid-cols-2 gap-4 items-center max-w-7xl mx-auto mt-40">
            <ProfileCard image={ProfileImg} />
            <ContactCard />
            <div className='col-span-full flex justify-between gap-4'>
            {socials.map(social => (
                <SocialLinks social={social} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default HeroShot