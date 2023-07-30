import React from 'react'

const ProfileCard = ({image}) => {
  return (
    <div className='bg-[#f8f8f8] rounded-3xl p-11 pb-16 flex flex-col gap-4'>
        <img src={image} alt="Korhan Yaya" className='w-[108px] h-[108px]' />
        <p className='text-6xl text-secondary-100 leading-[66px]'><span className='text-black'>korhan yaya</span> is an <span className='text-black'>Expert interface designer</span> working at Digital agency</p>
    </div>
  )
}

export default ProfileCard