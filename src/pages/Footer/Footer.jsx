import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className="flex flex-col items-center text-center container mx-auto text-white  space-y-4 py-8">
                <h2 className='text-7xl font-bold'>KeenKeeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className="flex flex-col">
                    <h2>Social Links</h2>
                    <div className="flex gap-2 pt-2">
<span className='rounded-full p-2 bg-amber-50 text-black'><FaInstagramSquare /></span>
<span className='rounded-full p-2 bg-amber-50 text-black'><FaFacebookSquare /></span>
<span className='rounded-full p-2 bg-amber-50 text-black'><FaXTwitter /></span>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-5" >
                    <h2>© 2026 KeenKeeper. All rights reserved.</h2>
                    <div className="flex gap-7">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;