"use client"
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useState, useEffect } from 'react'

const Search = ({params}) => {
  
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    console.log(params.cname);
    getDoctors();
  }, [])

  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.cname).then(resp => {
      setDoctorList(resp.data.data);
    })
  }

  return (
    <div className='mt-5'>
      <DoctorList doctorList={doctorList} heading={params.cname} />
    </div>
  )
}

export default Search