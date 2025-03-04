import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo (20).png'
import { useTranslation } from 'react-i18next';
import face from '../assets/facebook-logo (1).png'
import insta1 from '../assets/instagram-logo (1).png'
import amaz from '../assets/AMAZMARKET (2) 2.png'
import inst2 from '../assets/instagram-logo (2).png'
import link from '../assets/linkedin-logo 1.png'
import group from '../assets/Group 115.png'
import burger from '../assets/menu (1) 1.png'
import {Modal} from 'antd'
const Layout = () => {
    const [open, setOpen]=useState(false)
    const {i18n}=useTranslation()
    const {t}=useTranslation()
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
        setOpen(false)
    }
  return (
    <>
<Modal  open={open}  onCancel={()=>setOpen(false)} footer={null}>
<ul className='flex flex-col  py-[20px] gap-[20px] items-center list-none text-[#889196] text-[19px]'>
           <NavLink to='/' onClick={()=>setOpen(false)}  style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none",})}><li >{t('Example.navbar.text1')}</li></NavLink>
           <NavLink to='/buyacc' onClick={()=>setOpen(false)} style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text2')}</li></NavLink>
           <NavLink to='/services' onClick={()=>setOpen(false)} style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text3')}</li></NavLink>
           <NavLink to='/blog' onClick={()=>setOpen(false)} style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text4')}</li></NavLink>
           <NavLink to='/utility' onClick={()=>setOpen(false)} style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text5')}</li></NavLink>
           <div className='flex gap-[20px] text-white'>
      <button onClick={()=>TranslateClick('tj')}  className='hover:text-[#EB6108] text-[#889196]'>TJ</button>
      <button onClick={()=>TranslateClick('ru')} className='hover:text-[#EB6108] text-[#889196]'>RU</button>
      <button onClick={()=>TranslateClick('en')} className='hover:text-[#EB6108] text-[#889196] '>EN</button>
    
   </div>
        </ul>
      </Modal>

    <header className='bg-[#222F3E] '>
     <nav className='w-[80%] m-auto flex items-center justify-between py-[20px]'>
        <img src={logo} alt="" />
        <ul className='hidden  sm:flex gap-[40px] items-center list-none text-[#889196] text-[19px]'>
           <NavLink to='/' style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text1')}</li></NavLink>
           <NavLink to='/buyacc' style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text2')}</li></NavLink>
           <NavLink to='/services' style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text3')}</li></NavLink>
           <NavLink to='/blog' style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text4')}</li></NavLink>
           <NavLink to='/utility' style={({ isActive }) => ({ color: isActive ? '#EB6108' : '#889196', textDecoration:"none"  })}><li >{t('Example.navbar.text5')}</li></NavLink>
           <div className='flex gap-[20px] text-white'>
      <button onClick={()=>TranslateClick('tj')} className='hover:text-[#EB6108] text-[#889196]'>TJ</button>
      <button onClick={()=>TranslateClick('ru')} className='hover:text-[#EB6108] text-[#889196]'>RU</button>
      <button onClick={()=>TranslateClick('en')} className='hover:text-[#EB6108] text-[#889196] '>EN</button>
    
   </div>
        </ul>
        <img src={burger} onClick={()=> setOpen(true)} className='sm:hidden block' alt="" />
     </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer className='mt-[30px]'>
        <div className='bg-black text-[white] flex justify-center py-[15px]'> 
            <p>{t('Example.footer.text1')}</p>
        </div>
        <section className='w-[90%] sm:w-[80%] m-auto flex flex-col sm:flex-row text-center sm:text-left items-center sm:items-start justify-between gap-[30px] py-[50px]'>
            <div className='text-[16px] text-[#161920] flex flex-col sm:items-start gap-[20px]'>
                <img src={amaz} alt="" />
                <p>{t('Example.footer.text2')}</p>
                <p>{t('Example.footer.text3')}</p>
                <p>{t('Example.footer.text4')}</p>
                <p>{t('Example.footer.text5')}</p>
            </div>
            <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[10px]'>
                  <p className='text-[22px] text-[#161920] font-semibold'>{t('Example.footer.text6')}</p>
                <p className='text-[#889196] text-[16px'>support@gmail.com</p>  
                </div>
                
                <div className='flex flex-col gap-[20px] sm:items-start'>
                    <p className='text-[22px] text-[#161920] font-semibold'>{t('Example.footer.text7')}</p>
                    <div className='flex gap-[20px] items-center'>
                        <img src={insta1} alt="" />
                        <img src={face} alt="" />
                        <img src={link} alt="" />
                        <img src={inst2} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] sm:items-start'>
                <p className='text-[22px] text-[#161920] font-semibold'> {t('Example.footer.text8')}</p>
                <div className='border-1 flex flex-col sm:flex-row gap-[30px]  border-solid border-gray-300 rounded-[10px] mb-[10px] '>
                    <input type="text" placeholder='Enter ypur email to stay updated' className='px-[15px] outline-none w-[300px] text-gray-500' />
                    <button className='bg-[#ED7212] text-white px-[30px] py-[10px]'>Submit</button>
                </div>
                <img src={group} alt="" />
            </div>
        </section>
        <div className='py-[20px]'>
            <p className='text-[16px] text-[#161920] text-center'>AmazMarket © 2020 - All Rights Reserved</p>
        </div>
        
    </footer>
    </>
  )
}

export default Layout