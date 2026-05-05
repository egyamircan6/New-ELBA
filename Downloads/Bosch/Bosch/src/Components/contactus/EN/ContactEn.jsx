import React from 'react'
import FormContactEn from '../EN/parts/FormContactEn'
import ContactSectionEn from '../EN/parts/ContactSectionEn'
import ContactfaqEn from '../../faq/EN/ContactfaqEn'
import { Helmet } from 'react-helmet-async'

export default function ContactEn() {
  return (
    <>


       <Helmet>
            <title>About Us | American Group - Authorized Bosch Service Agent in Egypt</title>
            <meta
              name="description"
              content="Get to know American Group, the leading entity for German Bosch maintenance in Egypt. We provide authorized technical support services with original spare parts and a one-year warranty. German reliability is in your hands.."
            />
          </Helmet>
      <div className='mt-20'>
        <FormContactEn />
      </div>

      <div>
        <ContactSectionEn />
      </div>

      <div>
        <ContactfaqEn />
      </div>
    </>
  )
}