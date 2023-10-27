import React from 'react'
import Image from 'next/image';


const SideSection = () => {
  return (
    <div className='mt-10 w-2/6 rounded-3xl bg-white p-5'>
        <h1 className="font-bold text-3xl mb-6">My Card</h1>

        <p className="text-gray-600">Card Balance</p>
        <h2 className="font-black text-2xl mb-10">15,595.015</h2>

        <div className="rounded-3xl gradient w-full p-10  text-white flex flex-col justify-between">
            <div className="flex justify-between items-center align-center">
                <div className="">
                    <p>Current Balance</p>
                    <h1 className="text-3xl font-black">
                        ₵5,750,20
                    </h1>
                </div>
                <Image
                    src='/images/mastercard_logo.svg'
                    width={70}
                    height={10}
                />
            </div>

            <div className="flex justify-between items-center align-center">
                <div className="font-bold">
                    5282 3456 7890 1289
                </div>
                <div className="font-black">
                    10/24
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-8">
        <svg width="44" height="7" viewBox="0 0 44 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.817383" y="0.0576172" width="21.4648" height="6.43945" rx="3.21973" fill="#D0021B"/>
        <circle cx="29.7949" cy="3.27734" r="2.71973" stroke="#D0021B"/>
        <circle cx="40.5273" cy="3.27734" r="2.71973" stroke="#D0021B"/>
        </svg>
        </div>

        {/* <div className="flex justify-between items-center">
            <svg width="169" height="53" viewBox="0 0 169 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.929688" y="0.522461" width="167.426" height="51.5156" rx="10.7324" fill="#D0021B"/>
            </svg>

            <svg width="169" height="53" viewBox="0 0 169 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.929688" y="0.522461" width="167.426" height="51.5156" rx="10.7324" fill="#D0021B"/>
            </svg>
        </div> */}
    </div>
  )
}

export default SideSection;