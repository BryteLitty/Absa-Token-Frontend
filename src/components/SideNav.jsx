import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Dashboard', icon: 'element-3' },
  { href: '/', label: 'Analytics', icon: 'analytics' },
  { href: '/', label: 'My Wallet', icon: 'wallet' },
  { href: '/', label: 'Account', icon: 'user' },
  { href: '/', label: 'Setting', icon: 'settings' },
];

const SideNav = () => {
  return (
    <nav className="fixed w-1/6 bg-white py-8 pt-10 h-screen">
      {/* Logo */}
      <div className="flex justify-center items-center space-x-4">
        <Image
          src="/images/absa-log-black.svg"
          alt="absa-logo"
          width={80}
          height={100}
        />

        <h1 className="text-3xl text-black font-bold">Bank</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col justify-between align-center items-center h-full">
        <ul className='mt-14 nav-links text-black w-full'>
          {links.map((link, index) => (
            <li key={index} className="mb-3 px-16 py-3 flex justify-start space-x-5 align-center">
              <Image
                src={`/icons/${link.icon}.svg`}
                alt="absa-logo"
                width={20}
                height={100}
              />
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="user-account">
          dsddsdsddsdsds
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
