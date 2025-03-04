import React from 'react'
import sec1 from '../assets/Group 895.png'
import sec2 from '../assets/Group 990.png'
import sec3 from '../assets/Subtract.png'
import sec4 from '../assets/Line 57.png'
import sec8 from '../assets/Group 1015.png'
import sec9 from '../assets/verified-account 1.png'
import sec10 from '../assets/conversation 1.png'
import sec11 from '../assets/shield (4) 1.png'
import one from '../assets/Group 424.png'
import one2 from '../assets/Group 425.png'
import one3 from '../assets/Group 426.png'
import one4 from '../assets/Group 427.png'
import ones1 from '../assets/Group 659.png'
import ones2 from '../assets/Group 664.png'
import ones3 from '../assets/Group 665.png'
import ones4 from '../assets/Group 666.png'
import ones5 from '../assets/Group 667.png'
import ones6 from '../assets/Group 668.png'
import ones7 from '../assets/Polygon 77.png'
import ones8 from '../assets/Group 1013.png'
import secc8 from '../assets/Polygon 16 (1).png'
import secc9 from '../assets/1231242112 1.png'
import secc10 from '../assets/Ellipse 311.png'
import secc11 from '../assets/Ellipse 311 (1).png'
import secc12 from '../assets/Group 380.png'
import last1 from '../assets/information 1.png'
import last2 from '../assets/Polygon 19 (1).png'
import sec20 from '../assets/back 10.png'
import dop from '../assets/Group 509.png'
import { useTranslation } from 'react-i18next';

const Buyacc = () => {
  const {t}=useTranslation()
  return (
    <>
    <section className='bg-[#0C0D12] pt-[50px]'>
            <div className='w-[90%] sm:w-[80%] m-auto flex flex-col sm:flex-row justify-between gap-[50px] items-center'>
              <aside className='flex sm:w-[50%] text-center sm:text-left flex-col items-center sm:items-start gap-[30px]'>
                <p className='text-[35px] text-[#FEFEFE] font-semibold  '>{t('utility.last')}</p>
                <p className='text-[25px] text-[#FEFEFE]'>{t('Example.headerHome.text2')}</p>
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

        <section className='w-[85%] m-auto flex py-[100px] flex-col sm:flex-row justify-between gap-[40px] relative z-20 items-center'>
    <aside className='sm:w-[55%]'>
        <img src={sec8} alt="" className='sm:absolute top-[-80px] left-[-230px]' />
    </aside>
    <aside className='sm:w-[45%] flex flex-col gap-[50px]'>
        <p className='text-[35px] text-[#161920] font-semibold'>
            {t('Page2.section8.step1')}
        </p>
        <div className='flex bg-white p-[30px] rounded-[20px] shadow-xl items-start gap-[20px]'>
            <img src={sec9} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>
                    {t('Page2.section8.step2')}
                </p>
                <p className='text-[#889196] text-[18px]'>
                    {t('Page2.section8.step2desc')}
                </p>
            </div>
        </div>
        <div className='flex bg-white p-[30px] rounded-[20px] shadow-xl items-start gap-[20px]'>
            <img src={sec10} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>
                    {t('Page2.section8.step3')}
                </p>
                <p className='text-[#889196] text-[18px]'>
                    {t('Page2.section8.step3desc')}
                </p>
            </div>
        </div>
        <div className='flex bg-white p-[30px] rounded-[20px] shadow-xl items-start gap-[20px]'>
            <img src={sec11} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>
                    {t('Page2.section8.step4')}
                </p>
                <p className='text-[#889196] text-[18px]'>
                    {t('Page2.section8.step4desc')}
                </p>
            </div>
        </div>
    </aside>
</section>

<section className="w-[90%] sm:w-[80%] m-auto flex flex-col lg:flex-row justify-between py-[100px]">
    <div className="lg:w-[50%]">
        <h1 className="text-3xl font-bold mb-4">
            {t('Page2.section8.leaveRequest.title')}
        </h1>
        <p className="text-gray-600 mb-8">
            {t('Page2.section8.leaveRequest.description')}
        </p>
        <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-3">
                <img src={one} className="w-14" />
                <p>{t('Page2.section8.leaveRequest.step1')}</p>
            </div>
            <div className="flex items-start gap-3">
                <img src={one2} className="w-14" />
                <p>{t('Page2.section8.leaveRequest.step2')}</p>
            </div>
            <div className="flex items-start gap-3">
                <img src={one3} className="w-14" />
                <p>{t('Page2.section8.leaveRequest.step3')}</p>
            </div>
            <div className="flex items-start gap-3">
                <img src={one4} className="w-14" />
                <p>{t('Page2.section8.leaveRequest.step4')}</p>
            </div>
        </div>
    </div>
    <div className="bg-white border-gray-200 border p-[30px] bg-linear-to-b from-[#EFF5F9] to-[#FEFFFF] rounded-lg sm:w-[37%]">
        <h2 className="text-2xl font-bold mb-6">
            {t('Page2.section8.evaluationTool.title')}
        </h2>
        <div className="">
            <div>
                <label className="block mb-3 font-medium">
                    {t('Page2.section8.evaluationTool.registrationDate')}
                </label>
                <div className="flex gap-1 border-black border-2 justify-evenly rounded-sm">
                    <button className="p-[5px] bg-white rounded-md">2019</button>
                    <button className="p-[5px] bg-black text-white">2018</button>
                    <button className="p-[5px] bg-white rounded-md">2017</button>
                    <button className="p-[5px] bg-white rounded-md">2016</button>
                    <button className="p-[5px] bg-white rounded-md">2015</button>
                    <button className="p-[5px] bg-white rounded-md">
                        {t('Page2.section8.evaluationTool.earlier')}
                    </button>
                </div>
            </div>

            <div>
                <label className="block font-medium mt-3">
                    {t('Page2.section8.evaluationTool.feedbackAmount')}
                </label>
                <div className="flex gap-1 border-2 justify-evenly rounded-sm">
                    <button className="p-[5px] bg-white rounded-md">50</button>
                    <button className="p-[5px] px-3 bg-black text-white">
                        {t('Page2.section8.evaluationTool.feedbackAmountMore')}
                    </button>
                    <button className="p-[5px] bg-white rounded-md">100+</button>
                    <button className="p-[5px] bg-white rounded-md">500+</button>
                    <button className="p-[5px] bg-white rounded-md">1000+</button>
                </div>
            </div>

            <div>
                <label className="block mt-5 font-medium">
                    {t('Page2.section8.evaluationTool.marketplaceLocation')}
                </label>
                <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                    <button className="bg-black text-white p-[5px] sm:px-20">
                        {t('Page2.section8.evaluationTool.usa')}
                    </button>
                    <button className="p-[5px] px-20">
                        {t('Page2.section8.evaluationTool.europe')}
                    </button>
                </div>
            </div>

            <div>
                <label className="block mt-5 font-medium">
                    {t('Page2.section8.evaluationTool.policyViolation')}
                </label>
                <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                    <button className="bg-black text-white p-[5px] sm:px-22">
                        {t('Page2.section8.evaluationTool.yes')}
                    </button>
                    <button className="p-[5px] px-20">
                        {t('Page2.section8.evaluationTool.no')}
                    </button>
                </div>
            </div>

            <div>
                <label className="block mt-5 font-medium">
                    {t('Page2.section8.leaveRequest.emailLabel')}
                </label>
                <input
                    type="email"
                    placeholder={t('Page2.section8.leaveRequest.emailPlaceholder')}
                    className="w-full p-3 mt-2 border rounded-md outline-none"
                />
            </div>

            <button className="w-full bg-[#EC6D0F] mt-5 text-white py-3">
                {t('Page2.section8.leaveRequest.buttonText')}
            </button>
        </div>
    </div>
</section>


<section className='w-[80%] m-auto flex flex-col sm:flex-row items-center relative py-[120px] z-20 top-0 justify-between '>
    <aside className='relative z-20 '> 
        <img src={ones8} alt="" />
    </aside>
    <aside className='flex relative z-20 flex-col gap-[20px]'>
        <p className='text-[35px] text-[#161920] font-medium'>
            {t('Page2.section8.stepByStepExplanation')}
        </p>
        <div className='flex gap-[20px] items-center'>
            <img src={ones1} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[25px] text-[#161920] font-normal'>
                    {t('Page2.section8.step1Title')}
                </p>
                <p className='text-[#889196] text-[15px]'>
                    {t('Page2.section8.step1Description')}
                </p>
            </div>
        </div>
        <div className='flex gap-[20px] items-center'>
            <img src={ones2} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[25px] text-[#161920] font-normal'>
                    {t('Page2.section8.step2Title')}
                </p>
                <p className='text-[#889196] text-[15px]'>
                    {t('Page2.section8.step2Description')}
                </p>
            </div>
        </div>
        <div className='flex gap-[20px] items-center'>
            <img src={ones3} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[25px] text-[#161920] font-normal'>
                    {t('Page2.section8.step3Title')}
                </p>
                <p className='text-[#889196] text-[15px]'>
                    {t('Page2.section8.step3Description')}
                </p>
            </div>
        </div>
        <div className='flex gap-[20px] items-center'>
            <img src={ones4} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[25px] text-[#161920] font-normal'>
                    {t('Page2.section8.step4Title')}
                </p>
                <p className='text-[#889196] text-[15px]'>
                    {t('Page2.section8.step4Description')}
                </p>
            </div>
        </div>
        <div className='flex gap-[20px] items-center'>
            <img src={ones5} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[25px] text-[#161920] font-normal'>
                    {t('Page2.section8.step5Title')}
                </p>
                <p className='text-[#889196] text-[15px]'>
                    {t('Page2.section8.step5Description')}
                </p>
            </div>
        </div>
        <div className='flex gap-[20px] items-center'>
            <img src={ones6} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[25px] text-[#161920] font-normal'>
                    {t('Page2.section8.step6Title')}
                </p>
                <p className='text-[#889196] text-[15px]'>
                    {t('Page2.section8.step6Description')}
                </p>
            </div>
        </div>
    </aside>
    <img src={ones7} className='absolute top-[10px] right-[-30px]' alt="" />
</section>





     <section className='relative py-[70px]  flex flex-col gap-[40px]  my-[50px]'>
                 <div className='w-[80%] m-auto relative z-20 flex flex-col gap-[20px] items-center'>
                  <p className='text-[35px] text-[#161920] font-medium'>Details that will be changed <br />
                  during an account transfer</p>
                  <p className='text-[25px] text-[#889196]'>The deal usually takes 5 days.</p>
                  <div className='flex flex-col sm:flex-row justify-between gap-[40px]'>
                    <div className='flex flex-col gap-[20px] items-center'>
                      <img src={dop} alt="" />
                      <p className='text-[#161920] text-[18px]'>Business details</p>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center'>
                      <img src={dop} alt="" />
                      <p className='text-[#161920] text-[18px]'>Business details</p>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center'>
                      <img src={dop} alt="" />
                      <p className='text-[#161920] text-[18px]'>Business details</p>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center'>
                      <img src={dop} alt="" />
                      <p className='text-[#161920] text-[18px]'>Business details</p>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center'>
                      <img src={dop} alt="" />
                      <p className='text-[#161920] text-[18px]'>Business details</p>
                    </div>
                  </div>
                 </div>
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
                 <img src={secc8} alt="" className='absolute top-0 hidden sm:block'/>
                 
             </section>
     
             <section className='w-[90%] sm:w-[55%] m-auto flex relative top-0 flex-col  gap-[30px] py-[80px]'>
                 <p className='text-[35px] relative z-20 text-[#161920] font-medium text-center'>{t("Example.section8.title")}</p>
                 <div className='flex justify-between relative z-20 items-center shadow-md py-[20px] px-[30px] rounded-[10px] bg-white'>
                     <div className='flex items-start gap-[20px]'>
                         <img src={last1} alt="" />
                         <div className='flex flex-col gap-[5px]'>
                             <p className='text-[20px] text-[#161920]'>{t("Example.section8.step1")}</p>
                             <p className='text-[16px] text-[#161920]'>{t("Example.section8.step1desc")}</p>
                         </div>
                     </div>
                     <img src={sec20} alt="" />
                 </div>
                 <img src={last2} className='absolute top-[60px] right-[10px] sm:right-[-50px]' alt="" />
             </section>
    </>
  )
}

export default Buyacc