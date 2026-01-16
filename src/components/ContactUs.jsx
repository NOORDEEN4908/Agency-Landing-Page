import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {

//  const [submit,onSubmit] = useState("")

const onSubmit =async (e)=>{
  e.preventDefault();
 
  const formData = new FormData(e.target);

  formData.append("access_key", "edcacb62-0d06-48c0-a25f-454b56e01ab1");

try {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
   toast.success('Thank you for you submition')
    e.target.reset();
  } else {
   toast.error(data.message)
  }



  
} catch (error) {
  toast.error(data.message)
  
}


 

}






  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
<Title title='Reach Out To us' desc="From strategy to execution , we craft digital solution that move your business forward" />

<form className='grid sm: grid-cols-2 gap-3 sm: gap-5 max-w-2x1 w-full' onSubmit={onSubmit}>
<div>
<p className='mb-2 text-sm font-medium'>Your name</p>
<div className='flex pl-3 rounded-1g border border-gray-300
dark:border-gray-600'>
<img src={assets.person_icon} alt="" />
<input type="text" name="name"  placeholder='Enter your name' className='w-full
p-3 text-sm outline-none'/>
</div>
</div>

<div>
<p className='mb-2 text-sm font-medium'>Email id</p>
<div className='flex pl-3 rounded-1g border border-gray-300
dark:border-gray-600'>
<img src={assets.person_icon} alt="" />
<input type="email" name="email" placeholder='Enter your Email' className='w-full
p-3 text-sm outline-none' required/>
</div>
</div>

<div className='sm:col-span-2'>
<p className='mb-2 text-sm font-medium'>Message</p>
<textarea  rows={8} placeholder='Enter your message'  name="message" className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required />
</div>

<button type="submit" className='w-max flex gap-2 bg-primary text-white
text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105
transition-all'>
Submit <img src={assets.arrow_icon} alt="" className='w-4' />
</button>



</form>

    </div>
  )
}

export default ContactUs
