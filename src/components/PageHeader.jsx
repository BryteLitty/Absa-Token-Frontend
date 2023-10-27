import React from 'react'
import Image from 'next/image';


const PageHeader = () => {
  return (
    <div className='flex justify-between items-center align-center w-full'>
        <div>
            <h3 className="text-3xl font-bold mb-2">
                Welcome back, Bright 👋
            </h3>
            <p className="text-gray-500">
                Here’s what’s happening with your account today.
                
            </p>
        </div>

        <div className="flex justify-start items-center align-center space-x-10 w-1/2">
            <form action="" className='w-full flex justify-end'>
                <input 
                    type="text" 
                    className='bg-white p-4 w-2/3 rounded'
                    placeholder='search for anything...'
                />
                
            </form>
            <Image 
                src='/icons/bell.svg'
                width={40}
                height={100}
            />
        </div>
    </div>
  )
}

export default PageHeader;