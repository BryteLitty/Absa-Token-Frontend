import React from 'react'
import PageHeader from './PageHeader';
import AccountSection from './AccountSection';

const MainPage = () => {
  return (
    <div className='p-12 w-5/6 main-page'>
        <PageHeader />
        <AccountSection />
        
    </div>
  )
}

export default MainPage;