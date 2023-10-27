'use client'

import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast'; // Make sure you've installed and set up react-hot-toast.

const handleRedeemPoint = () => {
  toast.success('Token Successfully Redeemed!');
}

const AbsaToken = () => {
  return (
    <div className='mt-16 rounded-3xl bg-white p-5'>
      <h1 className="font-black text-4xl mb-8">
        My ABSA Token Balance
      </h1>
      <div className="flex rounded-3xl justify-between border-2 border-red-200 items-center align-middle">
        <div className="p-6 bg-gray-50 rounded-3xl">
          <p className="text-red-700">
            Total Tokens Accumulated
          </p>
          <h1 className="text-9xl">
            1500 <span className='text-red-600 text-5xl font-extrabold font-mono'>ATK</span>
          </h1>
        </div>
        <Image
          src='/images/coins-two-color 1.svg'
          width={400}
          height={100}
        />
      </div>

      {/* buttons */}
      <div className="flex justify-start space-x-6 mt-6 align-center items-center">
        <button
          className='px-14 py-4 border-2 border-red-700 bg-red-700 text-2xl font-bold text-white'
          onClick={handleRedeemPoint}
        >
          Redeem Token
        </button>

        <button className='px-12 py-4 text-2xl font-bold text-red-700 border-2 border-red-700'>
          Transact Token
        </button>

        <button className='px-12 py-4 text-2xl font-bold text-red-700 border-2 border-red-700'>
          Convert Token
        </button>
      </div>
    </div>
  )
}

export default AbsaToken;
