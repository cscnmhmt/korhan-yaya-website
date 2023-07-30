import React from 'react'


const ContactCard = () => {
  return (
    <div className='bg-[#f8f8f8] rounded-3xl p-11 flex flex-col justify-between items-center gap-16'>
      <svg width="82" height="80" viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M77.0689 24.9723C78.702 16.8952 72.9789 9.30046 64.9957 8.44127C60.8234 -1.42312 47.3559 -3.07918 41.0027 5.8016C34.6521 -3.07579 21.1841 -1.42781 17.0097 8.44127C9.02164 9.3011 3.30452 16.9007 4.93648 24.9723C-1.01378 29.9659 -1.62886 38.8655 3.37383 44.6362C-4.91443 55.8145 2.96329 72.107 17.2617 72.107C21.8276 81.646 34.8631 82.7772 41.0025 74.1953C47.147 82.7843 60.182 81.6368 64.7433 72.107C79.0061 72.1387 86.9217 55.8175 78.6312 44.6362C83.6405 38.8582 83.0117 29.9598 77.0689 24.9723ZM29.4224 74.7426C22.1987 74.7426 18.0305 66.2426 22.7375 60.5382C23.6471 59.436 23.4922 57.8043 22.3916 56.8934C21.291 55.9827 19.6618 56.1379 18.7523 57.24C16.579 59.8736 15.4222 63.2843 15.6049 66.7783C5.80311 65.735 1.43731 53.9982 7.91686 46.7627C7.98779 46.8429 10.418 43.3636 15.6033 42.8106C15.518 44.4875 15.7367 46.1829 16.2733 47.8267C16.6297 48.9185 17.6419 49.6117 18.7299 49.6117C20.4814 49.6117 21.7348 47.8945 21.1874 46.2177C19.7027 41.6686 22.19 36.7577 26.7323 35.2707C28.0893 34.8264 28.8298 33.3646 28.3861 32.0055C27.9425 30.6463 26.4834 29.9043 25.1257 30.3492C24.5341 30.5429 23.963 30.7766 23.4112 31.0419C22.3812 28.4006 23.0918 25.2806 25.3883 23.3748C26.4876 22.4624 26.6402 20.8305 25.7293 19.7295C24.8184 18.6286 23.1887 18.4759 22.0895 19.388C17.6123 23.1035 16.5764 29.3491 19.1792 34.2045C17.4356 36.1337 17.0307 37.5639 16.885 37.5639C13.0908 37.5639 9.58 38.8009 6.73227 40.8926C3.55979 36.9148 4.46342 30.9201 8.94069 28.1238C9.97212 27.4796 10.4161 26.2028 10.0072 25.0563C8.10815 19.7305 11.69 13.4664 18.5467 13.4664C19.7153 13.4664 20.7438 12.6786 21.0448 11.5405C22.0492 7.74228 25.4941 5.08966 29.4222 5.08966C34.2011 5.08966 38.0892 8.98332 38.0892 13.7695V66.0628C38.0892 70.849 34.2013 74.7426 29.4224 74.7426ZM74.6159 40.8927C71.5327 38.6283 67.7938 37.5034 64.4131 37.5665C63.8274 36.3368 63.1042 35.2393 62.1691 34.2045C64.7698 29.353 63.7398 23.1067 59.2588 19.388C58.1591 18.4757 56.5297 18.6286 55.6189 19.7295C54.708 20.8306 54.8609 22.4626 55.96 23.3748C58.2565 25.2804 58.9672 28.4006 57.9371 31.0419C57.3852 30.7766 56.8142 30.5429 56.2225 30.3492C54.8654 29.9046 53.4058 30.6465 52.9622 32.0055C52.5185 33.3645 53.259 34.8264 54.616 35.2707C59.1583 36.7577 61.6458 41.6686 60.1608 46.2177C59.7172 47.5767 60.4576 49.0386 61.8146 49.4829C63.1642 49.9248 64.6291 49.1926 65.075 47.8267C65.6115 46.1828 65.8305 44.4874 65.745 42.8104C71.8192 43.4585 76.4981 48.6312 76.4981 54.7941C76.4981 61.0069 71.7796 66.1358 65.7434 66.778C65.9259 63.2976 64.7779 59.8834 62.5961 57.2396C61.6868 56.1373 60.0573 55.9824 58.9569 56.8931C57.8563 57.804 57.7013 59.4358 58.611 60.5379C63.3094 66.2319 59.1533 74.7423 51.9261 74.7423C47.1471 74.7423 43.2591 70.8487 43.2591 66.0625V13.7695C43.2591 8.98348 47.147 5.08966 51.9261 5.08966C55.8542 5.08966 59.2991 7.74244 60.3035 11.5405C60.6119 12.7064 61.6792 13.5074 62.8872 13.4651C68.9422 13.2422 73.4051 19.2681 71.3411 25.0565C70.9322 26.203 71.3762 27.4798 72.4076 28.1239C76.8894 30.923 77.7848 36.9196 74.6159 40.8927Z" fill="black"/>
      </svg>
      <p className='text-6xl text-[#313131] leading-none text-center'>have a project in mind?</p>
      <a href="#" className='bg-primary rounded-full text-3xl text-white px-8 py-5 '>hello@korhanyaya.com.tr</a>
    </div>
  )
}

export default ContactCard