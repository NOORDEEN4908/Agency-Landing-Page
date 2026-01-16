import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-10 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 '>
         
<div className='flex justify-between lg:items-center max-lg:flex-col gap-10 ' >
<div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>

<img src={theme === 'dark'? assets.logo_dark :assets.logo} className='w-32 sm:w-40'     alt="" />
<p className='max-w-md'>From strategy to execution, we craft digital
solutions that move your business forward.</p>  
<ul className='flex gap-8'>
<li><a href="#hero" className='hover:text-primary' >Home </a></li>
<li><a href="#services"className='hover:text-primary' >Services </a></li>
<li><a href="#our-work" className='hover:text-primary'>Our Work </a></li>
<li><a href="#contact-us" className='hover:text-primary'>Contact Us </a></li>
</ul>
</div>

<div className='text-gray-600 dark:text-gray-400'>

<h3 className='font-semibold' >Subscribe to Our newsletter  </h3>
<p className='text-sm mt-2 mb-6'>The latest news,articles and resources send to your inbox weekly</p>
<div className='flex gap-2 text-sm'>
    <input type="email" name="email" placeholder='Enter Your email' className='w-full p-3 text-sm outline-non rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'  />
<button type="submit" className='bg-primary text-white rounded px-6'>Subscribe </button>

</div>




</div>


</div>

<hr className='border-gray-300 dark:border-gray-600 my-6' />

<div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
<p>Copyright © 2025 . All rights reserved.</p>
<div className='flex items-center justify-between gap-4'>
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
    <img src={assets.instagram_icon} alt="" />
</div>

</div>

    </div>
  )
}

export default Footer