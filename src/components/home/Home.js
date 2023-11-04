import React from 'react'
import Section1 from '../section1/Section1'
import Section2 from '../section2/Section2';
import ContactForm from '../contact/ContactForm';
import ContactCards from '../contact/ContactCards'
import Section3 from '../section3/Section3';
import Logos from '../logos/Logos';

const home = () => {
  return (
    <>
    <Section2 />
    <Section1 />
    <Section3 />
    <Logos />
    <ContactForm />
    <ContactCards />
    </>
  )
}

export default home
