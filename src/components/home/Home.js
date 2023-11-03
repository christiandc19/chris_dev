import React from 'react'
import Section1 from '../section1/Section1'
import Section2 from '../section2/Section2';
import ContactForm from '../contact/ContactForm';
import ContactCards from '../contact/ContactCards'

const home = () => {
  return (
    <>
    <Section2 />
    <Section1 />
    <ContactForm />
    <ContactCards />
    </>
  )
}

export default home
