import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'
import { MdOutlineEmail } from 'react-icons/md'
import { SocialIcon } from 'react-social-icons'

type Props = {
    socials: Social[]
}

export default function Header({socials}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20'>
        <motion.div initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }} className='flex flex-row items-center'>
            {socials.map((social) => 
                <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor='grey' 
                    bgColor='transparent'/>
                
            )}
        </motion.div>
        <Link href="#contact">
            <motion.div initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }} className='flex flex-row p-4 cursor-pointer text-gray-300'>
                <MdOutlineEmail className='cursor-pointer w-6 h-6 mx-2 text-gray-500' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </motion.div>
        </Link>    
    </header> 
  )
}