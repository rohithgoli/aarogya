import { Button } from '@/components/ui/button'
import { GraduationCap } from 'lucide-react'
import React from 'react'
import BookAppointment from './BookAppointment'

const DoctorDetail = ({doctor}) => {

    const socialMediaList = [
        {
            id: 1,
            icon: '/youtube.png',
            url: ''
        },
        {
            id: 2,
            icon: '/linkedin.png',
            url: ''
        },
        {
            id: 3,
            icon: '/twitter.png',
            url: ''
        },
        {
            id: 4,
            icon: '/facebook.png',
            url: ''
        }
    ]

  return (
    <>
        <div className='grid grid-col-1 md:grid-col-3 border-[1px] p-5 mt-5 rounded-lg'>
            <div>
                <Image src={doctor.attributes?.image?.data?.attributes?.url}
                width={200} height={200} alt='doctor-image' className='rounded-lg w-full h-[280px] object-cover' />
            </div>
            
            <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                <h2 className='font-bold text-2xl'>{doctor.attributes?.Name}</h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <GraduationCap />
                    <span>{doctor.attributes?.Year_of_Experience} of Experience</span>
                </h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <MapPin/>
                    <span>{doctor.attributes.Address}</span>
                </h2>
                <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                    {doctor.attributes?.categories.data[0].attributes?.Name}
                </h2>
                <div className='flex gap-3'>
                    {socialMediaList.map((item, index) => (
                        <Image src={item.icon} key={index}
                        width={30} height={30} />
                    ))}
                </div>
                <BookAppointment doctor={doctor} />
            </div>
        </div>
        <div className='p-3 mt-5 border-[1px] rounded-lg'>
            <h2 className='font-bold text-[20px]'>About Me</h2>
            <p className='text-gray-500 tracking-wide mt-2'>{doctor.attributes.About}</p>
        </div>
    </>  
  )
}

export default DoctorDetail