import React from 'react';
import { MdHome, MdDoorSliding } from 'react-icons/md';
import { IoCall, IoMail } from 'react-icons/io5';
import { HiTrendingUp } from 'react-icons/hi';
import { RiHandCoinFill, RiAccountCircleFill } from 'react-icons/ri';
import { GrSettingsOption } from 'react-icons/gr';

export const DropNavLinks = [
  {
    name: 'Home',
    icon: <MdHome style={{ color: 'white', fontSize: '25px' }} />,
    link: '/',
    number: 1,
  },
  {
    name: 'Contact',
    icon: <IoCall style={{ color: 'white', fontSize: '25px' }} />,
    link: '/contact',
    number: 2,
  },
  {
    name: 'Account',
    icon: <MdDoorSliding style={{ color: 'white', fontSize: '25px' }} />,
    link: '/account',
    number: 3,
  },
  {
    name: 'Sale',
    icon: <HiTrendingUp style={{ color: 'white', fontSize: '25px' }} />,
    link: '/sale',
    number: 4,
  },
  {
    name: 'Service',
    icon: <RiHandCoinFill style={{ color: 'white', fontSize: '25px' }} />,
    link: '/service',
    number: 5,
  },
  {
    name: 'Outreach',
    icon: <IoMail style={{ color: 'white', fontSize: '25px' }} />,
    link: '/outreach',
    number: 6,
  },
  {
    name: 'Commerce',
    icon: <GrSettingsOption style={{ color: 'white', fontSize: '25px' }} />,
    link: '/commerce',
    number: 7,
  },
  {
    name: 'My Account',
    icon: <RiAccountCircleFill style={{ color: 'white', fontSize: '25px' }} />,
    link: '/my-account',
    number: 8,
  },
];
