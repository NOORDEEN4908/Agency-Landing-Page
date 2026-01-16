import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
  return (
    <div className='flex flex-col items-center gap-7 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
       <Title title='Meet the team' desc='A passionate team of digital experts
dedicated to your brands success.'/>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
  {teamData.map((team, index) => (
    <div
      key={index}
      className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-500"
    >
      <img src={team.image} alt={team.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
          {team.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {team.title}
        </p>
      </div>
    </div>
  ))}
</div>


      
    </div>
  )
}

export default Teams
