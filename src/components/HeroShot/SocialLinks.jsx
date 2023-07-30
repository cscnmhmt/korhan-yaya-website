import React from 'react'

const SocialLinks = ({social}) => {
  return (
    <div className='bg-[#f8f8f8] rounded-3xl w-full h-14 flex items-center justify-center'>
        <a className='text-[18px] tracking-[-1px] font-normal' href={social.link}>{social.media}</a>
    </div>
  )
}

export default SocialLinks