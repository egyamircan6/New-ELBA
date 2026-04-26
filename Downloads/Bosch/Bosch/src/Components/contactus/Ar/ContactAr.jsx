import React from 'react'
import FormContact from '../Ar/parts/FormContact'
import ContactSection from '../Ar/parts/contactsection'
import Contactfaqar from '../../faq/AR/Contactfaqar'


export default function ContactAr() {
  return (
    <>
    <div className='mt-20'>
      <FormContact />
    </div>
    <div className=''>
      < ContactSection/>
    </div>
    <div className=''>
      < Contactfaqar/>
    </div>
    </>
  )
}