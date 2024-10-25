import React, { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { DropNavLinks } from '../dropbar_db.jsx';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';

const DropNavBar = () => {
    const [dropDownMenu, setDropDownMenu] = useState(false);

    return (
        
        <div className='relative h-[3.25rem] w-[3.25rem] rounded-full flex justify-center items-center bg-[#005A85]' 
            onClick={() => setDropDownMenu(!dropDownMenu)}>
            {dropDownMenu ? (
                <ImCross style={{ color: 'white', fontSize: '100px' }} className='h-[25px]' />
            ) : (
                <CgMenuGridO style={{ color: 'white', fontSize: '100px' }} className='h-[35px]' />
            )}
            
            {dropDownMenu && (
                <div className="absolute rounded-3xl pb-4 flex flex-row justify-center items-center bg-[#005A85] bottom-16 w-[14vh] p-2">
                    <div className='flex-col p-0 m-0 pb-1'>
                        {DropNavLinks.map((item) => (
                            <div key={item.number} className='flex justify-center p-0 m-0 border-b border-white mt-3'>
                                <Link to={item.link}>
                                    <div className="h-[30px] flex justify-center items-center">{item.icon}</div>
                                    <p className='text-white text-[10px]'>{item.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropNavBar;
