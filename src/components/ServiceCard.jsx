import React, { useRef, useState } from 'react'
import Services from './Services'

const ServiceCard = ({service,index}) => {

const [position, setPosition] =useState({x:0,y:0})

const [visible,setVisible] =useState(false)

const divRef=useRef(null)

const handleMouseMove=(e)=>{
    const bounds=divRef.current.getBoundingClientRect()
    setPosition({x:e.clientX - bounds.left,y:e.clientY - bounds.top })

}



  return (
    <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>

        <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 w-[500px] h-[500px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70':'opacity-0'}`}style={{top:position.y -150,left:position.x -150}} />

            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

<div className='bg-gray-100 dark:bg-gray-700 rounded-full'>

<img src={service.icon} alt="" className='ma-w-30 bg-white dark:bg-gray-900 rounded-full m-4' />

</div>

<div className='flex-1'>
    <h3 className='font-bold'>{service.title}</h3>
    <p className='mt-2 text-sm'>{service. description}</p>

</div>


            </div>


        
    </div>
  )
}

export default ServiceCard
