import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

export default function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        console.log(formData)
        window.location.href = `mailto:kennedynelson0812@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
  
    return (
    <div className='h-screen relative flex overflow-hidden flex-col text-center md:flex-row 
    max-w-7xl justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='-mb-20 sm:-mb-40 flex flex-col space-y-5'>
            <h4 className='text-lg md:text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
            <div className='space-y-10 px-20'>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-2xl'>7440730613</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-2xl'>kennedynelson0812@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-2xl'>123 Developer Lane</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 mx-auto max-w-[60%]'>
                <div className='flex space-x-2'>
                    <input {...register('name')} type='text' placeholder='Name' className='contactInput w-[50%]'/>
                    <input {...register('email')} type='email'placeholder='Email'  className='contactInput w-[50%]'/>
                </div>
                <input {...register('subject')} type='text' placeholder='Subject' className='contactInput'/>
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button type='submit' className='bg-[#F7AB0A] py-3 sm:py-5 px-10 rounded-md text-black fon-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}