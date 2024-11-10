import React from 'react'
// import Header from "@/Components/Header"
import Hero from '@/Components/Hero'
import About from "@/Components/About"
import Services from '@/Components/Services'
import Skills from "@/Components/Skills"
import Projects from '@/Components/Projects'
import Contact from '@/Components/Contact'
// import Footer from '@/Components/Footer'



const page = () => {
  return (
    <div>
     <Hero/>
     <About/>
     <Services/>
     <Skills/>
     <Projects/>
     <Contact/>

     {/* <Footer/> */}
    </div>
  )
}

export default page
