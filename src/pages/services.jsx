import React from 'react'
import sec1 from '../assets/Group 895.png'
import sec2 from '../assets/Group 991.png'
import sec3 from '../assets/Subtract.png'
import sec4 from '../assets/Line 57.png'
import analytics from '../assets/analysis 1.png'
import aacc from '../assets/account 1.png'
import aacc1 from '../assets/Group 655.png'
import aacc2 from '../assets/Polygon 35.png'
import message from '../assets/Group (15).png'
import secc9 from '../assets/1231242112 1.png'
import secc10 from '../assets/Ellipse 311.png'
import secc11 from '../assets/Ellipse 311 (1).png'
import secc12 from '../assets/Group 380.png'
import { useTranslation } from 'react-i18next';
const Services = () => {
  const {t}=useTranslation()
  return (
    <>
    <section className='bg-[#0C0D12] pt-[50px]'>
        <div className='w-[90%] sm:w-[80%] m-auto flex flex-col sm:flex-row justify-between gap-[50px] items-center'>
          <aside className='flex sm:w-[50%] text-center sm:text-left flex-col items-center sm:items-start gap-[30px]'>
            <p className='text-[35px] text-[#FEFEFE] font-semibold  '>{t('complex.text1')}</p>
            <p className='text-[25px] text-[#FEFEFE]'>{t('complex.text2')}</p>
            <div className='flex gap-[10px] mb-[40px] items-center bg-[#ED7212] py-[10px] px-[25px] rounded-[7px] border-0'>
                <img src={sec3} alt="" />
                <p className='text-[20px] text-[white]'>GET STARTED</p>
            </div>
            <img src={sec1} alt="" />
        </aside>
        <aside className='sm:w-[50%]'>
            <img src={sec2} alt="" />
        </aside>  
        </div>
        <div className='flex flex-col items-center gap-[10px]'>
            <p className='text-[white]'>SCROLL</p>
            <img src={sec4} alt="" />
        </div>
        
    </section>

        <section className='w-[90%] sm:w-[80%] relative top-0 z-20 m-auto flex flex-col gap-[30px] py-[100px]'>
          <p className='text-[35px] text-center mb-[20px] font-medium text-[#161920]'>What We Offer</p>
          <div className='grid sm:grid-cols-3 relative top-0 z-20 grid-rows-2 gap-[30px]'>
            <div className='bg-white rounded-[10px] shadow-lg flex flex-col gap-[20px] items-center p-[25px] '>
              <img src={analytics} alt="" />
              <p className='text-[25px] text-[#161920] font-medium'>{t('complex.text3')}</p>
              <ul className='text-[#889196] w-[290px] text-[18px] flex flex-col gap-[20px] list-disc '>
                <li>{t('complex.text4')}</li>
                <li>{t('complex.text5')}</li>
                <li>{t('complex.text6')}</li>
              </ul>
            </div>
            <div className='bg-white rounded-[10px] shadow-lg flex flex-col gap-[20px] items-center p-[25px] '>
              <img src={analytics} alt="" />
              <p className='text-[25px] text-[#161920] font-medium'>{t('complex.text3')}</p>
              <ul className='text-[#889196] w-[290px] text-[18px] flex flex-col gap-[20px] list-disc '>
              <li>{t('complex.text4')}</li>
                <li>{t('complex.text5')}</li>
                <li>{t('complex.text6')}</li>
                <li>{t('complex.text5')}</li>
                
              </ul>
            </div>
            <div className='bg-white rounded-[10px] shadow-lg flex flex-col gap-[20px] items-center p-[25px] '>
              <img src={analytics} alt="" />
              <p className='text-[25px] text-[#161920] font-medium'>{t('complex.text3')}</p>
              <ul className='text-[#889196] w-[290px] text-[18px] flex flex-col gap-[20px] list-disc '>
              <li>{t('complex.text4')}</li>
                <li>{t('complex.text5')}</li>
                <li>{t('complex.text6')}</li>
                <li>{t('complex.text7')}</li>
                <li>{t('complex.text8')}</li>
                <li>{t('complex.text9')}</li>
              </ul>
            </div>
            <div className='bg-white rounded-[10px] shadow-lg flex flex-col gap-[20px] items-center p-[25px] '>
              <img src={analytics} alt="" />
              <p className='text-[25px] text-[#161920] font-medium'>{t('complex.text3')}</p>
              <ul className='text-[#889196] w-[290px] text-[18px] flex flex-col gap-[20px] list-disc '>
              <li>{t('complex.text4')}</li>
                <li>{t('complex.text5')}</li>
                <li>{t('complex.text6')}</li>
              </ul>
            </div>
            <div className='bg-white rounded-[10px] shadow-lg flex flex-col gap-[20px] items-center p-[25px] '>
              <img src={analytics} alt="" />
              <p className='text-[25px] text-[#161920] font-medium'>{t('complex.text3')}</p>
              <ul className='text-[#889196] w-[290px] text-[18px] flex flex-col gap-[20px] list-disc '>
                <li>{t('complex.text66')}</li>
                <li>{t('complex.text4')}</li>
                <li>{t('complex.text5')}</li>
                <li>{t('complex.text6')}</li>
                <li>{t('complex.text66')}</li>
              </ul>
            </div>
            <div className='bg-white rounded-[10px] shadow-lg flex flex-col gap-[20px] items-center p-[25px] '>
              <img src={analytics} alt="" />
              <p className='text-[25px] text-[#161920] font-medium'>{t('complex.text3')}</p>
              <ul className='text-[#889196] w-[290px] text-[18px] flex flex-col gap-[20px] list-disc '>
              <li>{t('complex.text66')}</li>
                <li>{t('complex.text4')}</li>
                <li>{t('complex.text5')}</li>
                <li>{t('complex.text6')}</li>
                <li>{t('complex.text66')}</li>
                <li>{t('complex.text77')}</li>
              </ul>
            </div>
          </div>


          <div className='flex flex-col sm:flex-row  relative top-0 z-20 justify-between items-center py-[90px] gap-[30px]'>
            <aside>
              <img src={aacc1} alt="" />
            </aside>
            <aside className='sm:w-[50%] flex flex-col gap-[40px] '>
              <p className='text-[35px] text-[#161920]  font-semibold'>{t('complex.text10')}</p>
              <div className='grid grid-cols-2  gap-x-[20px] gap-y-[30px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={aacc} alt="" />
                <p>{t('complex.text11')}</p>
              </div>
              </div>
            </aside>
          </div>


          <div className='flex relative top-0 z-20 flex-col gap-[30px]'>
            <p className='text-[35px] text-[#161920] text-center font-medium'>{t('complex.text12')}</p>
            <div className='grid sm:grid-cols-4 gap-[30px]'>
              <div className='bg-white shadow-lg py-[25px] flex rounded-[10px] flex-col items-center gap-[15px]'>
                <img src={message} alt="" />
                <p className='text-[18px] text-[#161920] font-normal'>{t('complex.text13')}</p>
                <p className='text-[15px] text-[#889196] text-center '>{t('complex.text14')} </p>
              </div>
              <div className='bg-white shadow-lg py-[25px] flex rounded-[10px] flex-col items-center gap-[15px]'>
                <img src={message} alt="" />
                <p className='text-[18px] text-[#161920] font-normal'>{t('complex.text13')}</p>
                <p className='text-[15px] text-[#889196] text-center '>{t('complex.text14')} </p>
              </div>
              <div className='bg-white shadow-lg py-[25px] flex rounded-[10px] flex-col items-center gap-[15px]'>
                <img src={message} alt="" />
                <p className='text-[18px] text-[#161920] font-normal'>{t('complex.text13')}</p>
                <p className='text-[15px] text-[#889196] text-center '>{t('complex.text14')} </p>
              </div>
              <div className='bg-white shadow-lg py-[25px] flex rounded-[10px] flex-col items-center gap-[15px]'>
                <img src={message} alt="" />
                <p className='text-[18px] text-[#161920] font-normal'>{t('complex.text13')}</p>
                <p className='text-[15px] text-center text-[#889196] '>{t('complex.text14')} </p>
              </div>
              
            </div>
          </div>
          <img src={aacc2} className='absolute hidden sm:block top-[1200px] w-[830px] right-[-150px] ' alt="" />
        </section>


        <section className=' flex flex-col gap-[60px] py-[70px]'>
          <div className='bg-[#FCFCFC] relative z-20'>
                  <div className='flex flex-col-reverse gap-[60px] sm:flex-row w-[90%] sm:w-[80%] m-auto py-[50px] justify-between items-center sm:gap-[30px]'>
                      <aside className='sm:w-[50%]'>
                          <img src={secc9} alt="" />
                      </aside>
                      <aside className='sm:w-[50%] flex flex-col gap-[30px]'>
                          <p className='text-[35px] text-[#161920] font-semibold'>{t("Example.section8.leaveRequest.title")}</p>
                          <p className='text-[23px] text-[#889196]'>{t("Example.section8.leaveRequest.description")}</p>
                          <div className='flex flex-col gap-[5px]'>
                              <label htmlFor="inp1" className='text-[18px] text-[#889196]'>{t("Example.section8.leaveRequest.emailLabel")}</label>
                              <input type="text" id='inp1' placeholder='info@email.com' className='border-b-1 py-[10px] outline-none border-solid text-[18px] border-gray-400' />
                          </div>
                          <div className='flex flex-col gap-[5px]'>
                              <label htmlFor="inp2" className='text-[18px] text-[#889196]'>{t("Example.section8.leaveRequest.phoneLabel")}</label>
                              <input type="text" id='inp2' placeholder='info@email.com' className='border-b-1 py-[10px] outline-none border-solid text-[18px] border-gray-400' />
                          </div>
                          <div className='flex flex-col gap-[5px]'>
                              <label htmlFor="inp3" className='text-[18px] text-[#889196]'>{t("Example.section8.leaveRequest.messageLabel")}</label>
                              <input type="text" id='inp3' placeholder='info@email.com' className='border-b-1 py-[10px] outline-none border-solid text-[18px] border-gray-400' />
                          </div>
                          <button className='bg-[#ED7212] rounded-[7px] text-white py-[15px]'>{t("Example.section8.leaveRequest.buttonText")}</button>
                      </aside>
                  </div>
              </div>
          
              <div className='relative z-20 w-[90%] sm:w-[80%] m-auto flex flex-col gap-[40px]'>
                  <p className='text-[35px] text-[#161920] text-center'>{t("Example.section8.clientsSay.title")}</p>
                  <div className='flex flex-col gap-[30px] items-center'>
                      <div className='flex justify-between items-center gap-[40px]'>
                          <div className='sm:flex hidden items-start gap-[20px]'>
                              <img src={secc10} alt="" />
                              <div>
                                  <p className='text-[#EB6108] text-[50px] leading-[40px]'>“</p>
                                  <p className='text-[18px] text-[#889196] pb-[20px]'>{t("Example.section8.clientsSay.client1")}</p>
                                  <p className='text-[16px] font-medium text-[#161920]'>{t("Example.section8.clientsSay.client1Name")}</p>
                              </div>
                          </div>
                          <div className='flex items-start gap-[20px]'>
                              <img src={secc11} alt="" />
                              <div>
                                  <p className='text-[#EB6108] text-[50px] leading-[40px]'>“</p>
                                  <p className='text-[18px] text-[#889196] pb-[20px]'>{t("Example.section8.clientsSay.client2")}</p>
                                  <p className='text-[16px] font-medium text-[#161920]'>{t("Example.section8.clientsSay.client2Name")}</p>
                              </div>
                          </div>
                      </div>
                      <img src={secc12} alt="" />
                  </div>
              </div>
        </section>
        </>
  )
}

export default Services