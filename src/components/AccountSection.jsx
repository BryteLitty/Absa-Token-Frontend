import React from 'react';
import AccountBalance from './AccountBalance';
import SideSection from './SideSection';

const AccountSection = () => {
  return (
    <div className='flex align-center items-start space-x-10'>
        <AccountBalance />
        <SideSection />
    </div>
  )
}

export default AccountSection;