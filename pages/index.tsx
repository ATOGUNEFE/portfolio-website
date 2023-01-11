import Head from 'next/head'
import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { 
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub
 } from "react-icons/ai";
 import { IoLogoJavascript } from "react-icons/io";
 import { SiAdobephotoshop,  SiAdobeillustrator, SiFigma, SiReact, SiWhatsapp } from "react-icons/si";
 import { motion as m } from "framer-motion"
import {WiDaySunny} from 'react-icons/wi'
import { FaNodeJs } from "react-icons/fa"; 


import Image from "next/image";
import icon1 from "public/icon1.JPG"
import design  from "public/design.png";
import desig1  from "public/design.svg";
import code  from "public/coding.png";
import consulating from "../public/consulting.png";
import web1 from "public/web1.png";
import web2 from "public/web2.png";
import web3 from "public/web6.png";
import web4 from "public/web4.png";

import { useState} from "react";
const inter = Inter({ subsets: ['latin'] })
// const cv = '../public/cv.pdf'

export default function Home() {
 const [darkMode, setDarkMode] = useState(false)
 const fadein ={
  start:{
    opacity: 0
  },
  end:{
    opacity: 1,
    transition:{
      delay: 0.3,
      duration: 0.5,
      ease: "easeOut"
    }
  }
 }

 const con ={
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition:{
      delayChildren:0.5,
      staggerChildren: 0.2
    }
  }
 }

 const rollinX = {
  start: {  y: "-100%", opacity: 1},
  end: {  
    y: 0, 
    opacity: 1, 
    transition: {
      delay: 0.3,
      delayChildren: 0.3,
      duration: 0.4,
      staggerChildren: 0.2
    },
   }
 }
 const rollin = {
  start: {  y: "100%", opacity: 1},
  end: {  
    y: 0, 
    opacity: 1, 
    transition: {
      delay: 0.3,
      delayChildren: 0.3,
      duration: 0.4,
      staggerChildren: 0.2
    },
   }
 }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Efe Atogun</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <main className='px-10 bg-white dark:bg-slate-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='flex justify-between py-10 mb-12'>
            <m.h1 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            className='dark:text-gray-100'>Efe  Atogun</m.h1>
            <m.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            className=' flex items-center'>
              <li>{ darkMode ? <WiDaySunny  className='text-white ease-out duration-100 font-bold text-xl cursor-pointer' onClick={() => setDarkMode(!darkMode)} /> :
                <BsFillMoonStarsFill  onClick={() => { setDarkMode(!darkMode)}} className=' text-xl cursor-pointer  ease-out duration-100' />
              }
              </li> 
              <m.li 
              ><a className=' text-white bg-gradient-to-b from-orange-600 to-orange-400 px-5 py-2 rounded-md ml-8' target={"new"} href={"https://drive.google.com/file/d/1gONrUmzH1nvmaQxpETHKQ3Xa86zhwfM7/view?usp=sharing"}>Resume</a></m.li>
            </m.ul>
          </nav>
          <div className='overflow-hidden'>
          <m.div
          initial="start"
          variants={fadein}
          whileInView="end"
          className='text-center overflow-hidden p-5'>
            <div className='overflow-hidden'>
            <m.h2 
              variants={rollin}
              initial={"start"}
              whileInView="end"
              // animate={"end"}
            className='text-5xl text-orange-600 font-medium py-2 md:text-6xl'>Efe  Atogun</m.h2>
            </div>
            <h3 className=' dark:text-gray-300 text-2xl py-2'>Developer and creative designer.</h3>
            <p className=' dark:text-gray-500 text-md py-2 text-gray-600 leading-8 md:max-w-md m-auto'>I'm a Freelancer providing services for programming needs. Jion me down below and let's get cracking!</p>
          </m.div>
          </div>
          <m.div 
          initial="start"
          variants={con}
          whileInView="end"
          className=' dark:text-gray-300 flex gap-10 text-3xl justify-center py-8 text-gray-600'>
              <div className='overflow-hidden'>
            <m.div
            variants={rollin}
            initial={"start"}
            whileInView={"end"}
            className='overflow-hidden'>
              <a href='https://github.com/ATOGUNEFE' target={"new"} >
                <AiFillGithub />
              </a>
            </m.div>
              </div>
            <div className='overflow-hidden'>
            <m.div
            variants={rollin}
            initial={"start"}
            whileInView={"end"}
            className='overflow-hidden'>
              <a target={"new"}  href="https://instagram.com/efe.xx_xx?igshid=YmMyMTA2M2Y=">
             <AiFillInstagram />
              </a>
            </m.div>
            </div>
            <div className='overflow-hidden'>
            <m.div
            variants={rollin}
            initial={"start"}
            animate={"end"}
            whileInView={"end"}
            className='overflow-hidden'>
              <a target={"new"}  href="https://twitter.com/AtogunE">
           <AiFillTwitterCircle />
              </a>
            </m.div>
            </div>
            <div className='overflow-hidden'>
            <m.div
            variants={rollin}
            initial={"start"}
            whileInView={"end"}
            className='overflow-hidden'>
              <a target={"new"} href="https://wa.me/08054739919">
           <SiWhatsapp />
              </a>
            </m.div>
            </div>
          </m.div>
          <m.div 
          // drag
          whileHover={{
            width: "20rem",
            height: '20rem',
            border:"4px solid gray"
          }}
          // whileTap={{
          //   width: "20rem",
          //   height: '20rem',
          //   border:"4px solid gray"
          // }}
           
          className="relative mt-4 w-60 h-60 bg-gradient-to-b mx-auto from-orange-600 rounded-full overflow-hidden md:h-70 md:w-70">
          <m.div
          variants={fadein}
          initial={"start"}
          whileInView="end"
          >
          <Image src={icon1} 
             alt="Picture of the author"
    
           />

          </m.div>
          </m.div>
        </section>
        {/* new section */}
        <section>
          <m.div 
          variants={con}
          initial={"start"}
          whileInView={"end"}
          className='item-center p-5'>
          <div className='overflow-hidden'>
            <m.h3 
            variants={rollin}
            initial="start"
            whileInView={"end"}
            className=' dark:text-gray-300 text-3xl py-3 font-medium'>Services I offer</m.h3>
          </div>
          <div className='overflow-hidden'>
            <m.p  
            variants={rollin}
            initial="start"
            whileInView={"end"}
            className='text-md text-gray-500 leading-8 py-2 md:max-w-5xl'>
              Since the beginning of my journey as a freelance designer and developer, i've done remote work for <span className='text-orange-600'>agancies</span> consulted for <span className='text-orange-600'>startups </span>
              and collaborated with talented people to create degital products for both bussiness and consumer use.
            </m.p>
          </div>
          <div className='overflow-hidden'>
            <m.p  
            variants={rollin}
            initial="start"
            whileInView={"end"}
            className='text-md text-gray-500 '>
             I offer a wide range of serivice inclucing <span className='text-orange-500'>
              brand design, programming
               <span className='font-bold'>
                {`${' {web development}'}`}
                </span> 
                , product designs.
              </span> 
            </m.p>
          </div>
          </m.div>
          <m.div 
           variants={con}
           initial={"start"}
           whileInView={"end"}
          className='xl:flex px-5 gap-6 overflow-hidden'>
           <m.div 
             variants={fadein}
             initial={"start"}
             whileHover={{scale: 1.05,position: "relative"}}
             whileInView={"end"}
            className="text-center shadow-lg p-10 basis-1/2  rounded-xl my-10">
              <div className='text-center justify-center m-auto flex items-center'>
             <Image
             height={100}
              src={design} alt="img" />
              </div>
              <h3 className='pb-2 text-gray-500 pt-8 text-lg font-bold'>Classic Designs</h3>
              <p className='py-2 text-gray-500 md:text-sm'>Creating elegant designs suited for your business 
              or personal need following 
              core design thoery. Design is an essential part of any project, from web design to advertising campaigns. It helps to create visually appealing and engaging content that can capture the attention of viewers.</p>
              <h4 className='py-4   text-orange-600'>DesignTools</h4>
              <div className='py-2 flex  text-gray-500 md:py-3'>
                <p className="text-sm text-left  flex-1">
                Photoshop
                </p>
                <SiAdobephotoshop className='flex-1 text-right' />
                <div className="rang flex-1 flex text-xs text-gray-100 w-full rounded-sm bg-gray-200">
                <p className='w-5/6 items-center justify-center flex h-full bg-green-500 rounded-sm'>90%</p>
                </div>
                </div>
              <div className='py-3 flex text-gray-500 md:py-3'>
                <p className="text-sm text-left  flex-1">
                Figma
                </p>
                <SiFigma className='flex-1 text-right'/>
                <div className="rang flex-1 flex text-xs text-gray-100 w-full rounded-sm bg-gray-200">
                <p className='w-5/6 items-center justify-center flex h-full bg-green-500 rounded-sm'>90%</p>
                </div>
               </div>
              <div className='py-2 flex text-gray-500 md:py-3'>
                <p className="text-sm text-left flex-1">
                illustrator
                </p>
                <SiAdobeillustrator  className='flex-1 text-lg text-right' />
                <div className="rang text-xs text-gray-100 flex-1 rounded-sm bg-gray-200">
                  <p className='w-4/6 items-center justify-center flex h-full bg-yellow-500 rounded-sm'>83%</p>
                </div>
                </div>
            </m.div>
            <m.div 
             variants={fadein}
             initial={"start"}
             whileInView={"end"}
             whileHover={{scale: 1.05,position: "relative"}}
            className="text-center shadow-lg p-10 basis-1/2  rounded-xl my-10">
              <div className='text-center justify-center m-auto flex items-center'>
             <Image
             height={100}
              src={code} alt="img" />
              </div>
              <h3 className='pb-2 text-gray-500 pt-8 text-lg font-bold'>Web Development</h3>
              <p className='py-2 text-gray-500 md:text-sm'>creating fully customized websites for clients. This could include e-commerce stores, blogs, and portfolios depending on the clients’ needs. You can offer monthly packages or one-time services to ensure the project is completed in a timely manner.</p>
              <h4 className='py-4   text-orange-600'>Skills</h4>
              <div className='py-2 flex  text-gray-500 md:py-3'>
                <p className="text-sm text-left  flex-1">
                Javascript
                </p>
                <IoLogoJavascript className='flex-1 text-right' />
                <div className="rang flex-1 flex text-xs text-gray-100 w-full rounded-sm bg-gray-200">
                <p className='w-5/6 items-center justify-center flex h-full bg-green-500 rounded-sm'>90%</p>
                </div>
                </div>
              <div className='py-3 flex text-gray-500 md:py-3'>
                <p className="text-sm text-left  flex-1">
                React.js
                </p>
                <SiReact className='flex-1 text-right'/>
                <div className="rang flex-1 flex text-xs text-gray-100 w-full rounded-sm bg-gray-200">
                <p className='w-5/6 items-center justify-center flex h-full bg-green-500 rounded-sm'>90%</p>
                </div>
               </div>
              <div className='py-2 flex text-gray-500 md:py-3'>
                <p className="text-sm text-left flex-1">
                Node.js
                </p>
                <FaNodeJs  className='flex-1 text-lg text-right' />
                <div className="rang text-xs text-gray-100 flex-1 rounded-sm bg-gray-200">
                  <p className='w-4/6 items-center justify-center flex h-full bg-yellow-500 rounded-sm'>83%</p>
                </div>
                </div>
            </m.div>
            {/* <m.div 
             variants={fadein}
             initial={"start"}
             whileInView={"end"}
            className="text-center shadow-lg p-10 basis-1/3  rounded-xl my-10">
              <div className='text-center justify-center m-auto flex items-center'>
             <Image
             height={100}
              src={consulating} alt="img" />
              </div>
              <h3 className='pb-2 text-gray-500 pt-8 text-lg font-medium'>Classic Designs</h3>
              <p className='py-2 text-gray-500 md:text-sm'>Creating elegant designs suited for your business 
              or personal need following 
              core design thoery.</p>
              <h4 className='py-4   text-orange-600'>Skills</h4>
              <div className='py-2 flex  text-gray-500 md:py-3'>
                <p className="text-sm text-left  flex-1">
                Javascript
                </p>
                <IoLogoJavascript className='flex-1 text-right' />
                <div className="rang flex-1 flex text-xs text-gray-100 w-full rounded-sm bg-gray-200">
                <p className='w-5/6 items-center justify-center flex h-full bg-green-500 rounded-sm'>90%</p>
                </div>
                </div>
              <div className='py-3 flex text-gray-500 md:py-3'>
                <p className="text-sm text-left  flex-1">
                React.js
                </p>
                <SiReact className='flex-1 text-right'/>
                <div className="rang flex-1 flex text-xs text-gray-100 w-full rounded-sm bg-gray-200">
                <p className='w-5/6 items-center justify-center flex h-full bg-green-500 rounded-sm'>90%</p>
                </div>
               </div>
              <div className='py-2 flex text-gray-500 md:py-3'>
                <p className="text-sm text-left flex-1">
                Node.js
                </p>
                <FaNodeJs  className='flex-1 text-lg text-right' />
                <div className="rang text-xs text-gray-100 flex-1 rounded-sm bg-gray-200">
                  <p className='w-4/6 items-center justify-center flex h-full bg-yellow-500 rounded-sm'>83%</p>
                </div>
                </div>
            </m.div> */}
          </m.div>
        </section>
        <section>
        <m.div 
          variants={con}
          initial={"start"}
          whileInView={"end"}
          className='item-center p-5'>
          <div className='overflow-hidden'>
            <m.h3 
            variants={rollin}
            initial="start"
            whileInView={"end"}
            className=' dark:text-gray-300 text-3xl py-3 font-medium'>Portfolios</m.h3>
          </div>
          {/* <div className='overflow-hidden'>
            <m.p  
            variants={rollin}
            initial="start"
            whileInView={"end"}
            className='text-md text-gray-500 leading-8 py-2 md:max-w-5xl'>
              Since the beginning of my journey as a freelance designer and developer, i've done remote work for <span className='text-orange-600'>agancies</span> consulted for <span className='text-orange-600'>startups </span>
              and collaborated with talented people to create degital products for both bussiness and consumer use.
            </m.p>
          </div> */}
          <div className='overflow-hidden'>
            <m.p  
            variants={rollin}
            initial="start"
            whileInView={"end"}
            className='text-md text-gray-500 '>
             see some  designs and <span className='text-orange-500'>
              website
              </span> 
            </m.p>
          </div>
          </m.div>
            <div className='flex flex-col gap-10 py-20 md:flex-row md:flex-wrap '>
              <m.div
              variants={fadein}
              initial={"start"}
              whileInView={"end"}
              whileHover={{scale:1.3, position: "relative", zIndex: 1}}
              className='basis-1/3 flex-1'>
                <Image src={web1} className="rounded-lg object-cover " alt='pt' />
              </m.div>
              <m.div
              variants={fadein}
              initial={"start"}
              whileInView={"end"}
              whileHover={{scale:1.3, position: "relative", zIndex: 1}}
              className='basis-1/3 flex-1'>
                <Image src={web2} className="rounded-lg object-cover " alt='pt'  />
              </m.div>
              <m.div
              variants={fadein}
              initial={"start"}
              whileInView={"end"}
              whileHover={{scale:1.3, position: "relative", zIndex: 1}}
              className='basis-1/3 flex-1'>
                <Image src={web3} className="rounded-lg object-cover " alt='pt'  />
              </m.div>
              <m.div
              variants={fadein}
              initial={"start"}
              whileInView={"end"}
              whileHover={{scale:1.3, position: "relative", zIndex: 1}}
              className='basis-1/3 flex-1'>
                <Image src={web4} className="rounded-lg object-cover " alt='pt'  />
              </m.div>
              
            </div>
        </section>
      </main>
      </div>
    </div>
  )
}
