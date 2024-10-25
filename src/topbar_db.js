import React from 'react';
import { MdHome, MdDoorSliding } from 'react-icons/md';
import { IoCall, IoMail } from 'react-icons/io5';
import { HiTrendingUp } from 'react-icons/hi';
import { RiHandCoinFill, RiAccountCircleFill } from 'react-icons/ri';
import { GrSettingsOption } from 'react-icons/gr';
import Home from './pages/Home';
import Object from './pages/Object';
import Contact from './pages/Contact';

export const TopNavLinks = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    component: Home,        // Add the component property
  },
  {
    id: 2,
    name: 'Object Manager',
    url: '/object-manager',
    component: Object,
  },
  {
    id: 3,
    name: 'Contact Us',
    url: '/contact',
    component: Contact,
  },
];


export const SideNavLinks = [
  {
    id: 1,
    name: 'Account',
    url: '/account',
  },
  {
    id: 2,
    name: 'Activity',
    url: '/activity',
  },
  {
    id: 3,
    name: 'Alternative Payment Method',
    url: '/alternative-payment-method',
  },
  {
    id: 4,
    name: 'Asset',
    url: '/asset',
  },
  {
    id: 5,
    name: 'Asset Relationship',
    url: '/asset-relationship',
  },
  {
    id: 6,
    name: 'Authorization Form',
    url: '/authorization-form',
  },
  {
    id: 7,
    name: 'Authorization Form Consent',
    url: '/authorization-form-consent',
  },
  {
    id: 8,
    name: 'Authorization Form Data User',
    url: '/authorization-form-data-user',
  },
  {
    id: 9,
    name: 'Authorization Form Text',
    url: '/authorization-form-text',
  },
  {
    id: 10,
    name: 'Business Brand',
    url: '/business-brand',
  },
  {
    id: 11,
    name: 'Campaign',
    url: '/campaign',
  },
  {
    id: 12,
    name: 'Campaign Member',
    url: '/campaign-member',
  },
  {
    id: 13,
    name: 'Card Payment Method',
    url: '/card-payment-method',
  },
  {
    id: 14,
    name: 'Case',
    url: '/case',
  },
  {
    id: 15,
    name: 'Contact',
    url: '/contact',
  },
  {
    id: 16,
    name: 'Contact Point Address',
    url: '/contact-point-address',
  },
];

export const DropNavLinks = [
 
]