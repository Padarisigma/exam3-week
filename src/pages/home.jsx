import React from 'react'
import sec1 from '../assets/Group 895.png'
import sec2 from '../assets/Group 990.png'
import sec3 from '../assets/Subtract.png'
import sec4 from '../assets/Line 57.png'
import sec5 from '../assets/image 29.png'
import sec6 from '../assets/image 30.png'
import sec7 from '../assets/image 31.png'
import sec8 from '../assets/Group 385.png'
import sec9 from '../assets/verified-account 1.png'
import sec10 from '../assets/conversation 1.png'
import sec11 from '../assets/shield (4) 1.png'
import sec12 from '../assets/Polygon 15.png'
import sec13 from '../assets/Group 408.png'
import sec14 from '../assets/wifi 1.png'
import sec15 from '../assets/deal 1.png'
import sec16 from '../assets/money-bag 1.png'
import sec17 from '../assets/Polygon 17.png'
import sec18 from '../assets/Group 775.png'
import sec19 from '../assets/Polygon 16.png'
import sec20 from '../assets/back 10.png'
import sec21 from '../assets/Polygon 19.png'
import secc1 from '../assets/Group 370.png'
import secc2 from '../assets/Group 371.png'
import secc3 from '../assets/Group 372.png'
import secc4 from '../assets/Group 373.png'
import secc5 from '../assets/Group 495.png'
import secc6 from '../assets/Group 500.png'
import secc7 from '../assets/Group 767.png'
import secc8 from '../assets/Polygon 16 (1).png'
import secc9 from '../assets/1231242112 1.png'
import secc10 from '../assets/Ellipse 311.png'
import secc11 from '../assets/Ellipse 311 (1).png'
import secc12 from '../assets/Group 380.png'
import last1 from '../assets/information 1.png'
import last2 from '../assets/Polygon 19 (1).png'
import last3 from '../assets/Polygon 20.png'
import last4 from '../assets/Polygon 21.png'
import { useTranslation } from 'react-i18next';

const Home = () => {
     const {t}=useTranslation()
  return (
    <> 
    <section className='bg-[#0C0D12] pt-[50px]'>
        <div className='w-[90%] sm:w-[80%] m-auto flex flex-col sm:flex-row justify-between gap-[50px] items-center'>
          <aside className='flex sm:w-[50%] text-center sm:text-left flex-col items-center sm:items-start gap-[30px]'>
            <p className='text-[35px] text-[#FEFEFE] font-semibold  '>{t('Example.headerHome.text1')}</p>
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
    <section className=' sm:w-[95%] m-auto flex flex-col gap-[60px] items-center py-[70px]'>
        <p className='text-[25px] sm:text-[40px] text-[#161920] font-medium text-center'>{t('Example.section1.text1')}</p>
        <div className='grid sm:grid-cols-3 gap-[40px] sm:gap-[0px] sm:w-[70%] m-auto'>
            <div className='flex flex-col items-center gap-[10px]'>
                <p className='text-[25px] text-[#161920]'>{t('Example.section1.text2')}</p>
                <div className='text-[#889196] text-[18px] flex flex-col items-center gap-[20px] py-[30px] px-[50px] rounded-[10px] bg-white'>
                    <img src={sec5} alt="" />
                    <p>Amazon.com</p>
                    <p>Amazon.ca</p>
                    <p>Amazon.com.mx</p>
                    <p>Amazon.com.br</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[10px]'>
                <p className='text-[25px] text-[#161920]'>{t('Example.section1.text3')}</p>
                <div className='text-[#889196] text-[18px] flex flex-col items-center gap-[20px] py-[30px] px-[50px] rounded-[10px] bg-white'>
                    <img src={sec6} alt="" />
                    <p>Amazon.com</p>
                    <p>Amazon.ca</p>
                    <p>Amazon.com.mx</p>
                    <p>Amazon.com.br</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[10px]'>
                <p className='text-[25px] text-[#161920]'>{t('Example.section1.text2')}</p>
                <div className='text-[#889196] text-[18px] flex flex-col items-center gap-[20px] py-[30px] px-[50px] rounded-[10px] bg-white'>
                    <img src={sec7} alt="" />
                    <p>Amazon.com</p>
                    <p>Amazon.ca</p>
                    <p>Amazon.com.mx</p>
                    <p>Amazon.com.br</p>
                </div>
            </div>
        </div>
    </section>

    <section className='w-[80%] m-auto py-[80px] flex flex-col relative z-20 gap-[100px] '>
        <div className='flex flex-col sm:flex-row justify-between gap-[50px] sm:gap-[0px] sm:items-start relative z-20 '>
            <div className='flex flex-col items-center gap-[30px]'>
                <p className='text-[70px] text-[#161920] leading-[60px]'>13</p>
                <p className='text-[28px] text-[#161920] text-center'>{t('Example.section2.text1')}</p>
            </div>
            <div className='flex flex-col items-center gap-[30px]'>
                <p className='text-[70px] text-[#161920] leading-[60px]'>175+</p>
                <p className='text-[28px] text-[#161920] text-center'>{t('Example.section2.text2')}</p>
            </div>
            <div className='flex flex-col items-center gap-[30px]'>
                <p className='text-[70px] text-[#161920] leading-[60px]'>180+</p>
                <p className='text-[28px] text-[#161920] text-center'>{t('Example.section2.text3')} </p>
            </div>
            <div className='flex flex-col items-center gap-[30px]'>
                <p className='text-[70px] text-[#161920] leading-[60px]'>30+</p>
                <p className='text-[28px] text-[#161920] text-center'>{t('Example.section2.text4')}</p>
            </div>
        </div>
        <div className='flex flex-col  gap-[40px] relative z-20'>
            <p className='text-[35px] text-[#161920] text-center font-semibold mb-[20px]'>{t('Example.section3.text')}</p>
            <div className='bg-white sm:bg-[#FAFAFA] border-1 rounded-[10px] border-solid border-gray-400 pt-[30px]  '>
                <p className='text-[#889196] text-[18px] ml-[35px]'>Selling</p>
                <table className=' bg-white w-[100%] table sm:hidden  text-center'>
                <tr className='block sm:hidden text-left '>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Business name</th>
                                <td >Flagman_Shop</td>
                            </tr>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Market</th>
                            <td> 🌎 US</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Type</th>
                            <td> Pro account</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Account age</th>
                            <td> 2019</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Reviews</th>
                            <td> 6 reviews</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Ratio</th>
                            <td> 100% police</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Price</th>
                            <td> $1000</td>
                            </tr>
        
                            <tr>
                            
                            <td className='text-[#64ABFF] py-[10px] text-center' colSpan={2}> Move info </td>
                            </tr>
                            
                            </tr>
                            <tr className='block bg-[#FAFAFA] sm:hidden text-left '>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Business name</th>
                                <td >Flagman_Shop</td>
                            </tr>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Market</th>
                            <td> 🌎 US</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Type</th>
                            <td> Pro account</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Account age</th>
                            <td> 2019</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Reviews</th>
                            <td> 6 reviews</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Ratio</th>
                            <td> 100% police</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Price</th>
                            <td> $1000</td>
                            </tr>
        
                            <tr>
                            
                            <td className='text-[#64ABFF] py-[10px] text-center' colSpan={2}> Move info </td>
                            </tr>
                            
                            </tr>
                            <tr className='block sm:hidden text-left '>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Business name</th>
                                <td >Flagman_Shop</td>
                            </tr>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Market</th>
                            <td> 🌎 US</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Type</th>
                            <td> Pro account</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Account age</th>
                            <td> 2019</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Reviews</th>
                            <td> 6 reviews</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Ratio</th>
                            <td> 100% police</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Price</th>
                            <td> $1000</td>
                            </tr>
        
                            <tr>
                            
                            <td className='text-[#64ABFF] py-[10px] text-center' colSpan={2}> Move info </td>
                            </tr>
                            
                            </tr>
                            <tr className='block bg-[#FAFAFA] sm:hidden text-left '>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Business name</th>
                                <td >Flagman_Shop</td>
                            </tr>
                            <tr >
                            <th className='px-[20px] py-[10px]'>Market</th>
                            <td> 🌎 US</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Type</th>
                            <td> Pro account</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Account age</th>
                            <td> 2019</td>
                            </tr>
                            <tr>
                            <th className='px-[20px] py-[10px]'>Reviews</th>
                            <td> 6 reviews</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Ratio</th>
                            <td> 100% police</td>
                            </tr>
        
                            <tr>
                            <th className='px-[20px] py-[10px]'>Price</th>
                            <td> $1000</td>
                            </tr>
        
                            <tr>
                            
                            <td className='text-[#64ABFF] py-[10px] text-center' colSpan={2}> Move info </td>
                            </tr>
                            
                            </tr>
                </table>
                <table className=' bg-white w-[100%] hidden sm:table  text-center'>
                    <tr className='text-[#889196]   text-[16px] h-[60px]  bg-[#FAFAFA]'>
                        <th>Business name</th>
                        <th>Market</th>
                        <th>Type</th>
                        <th>Account age</th>
                        <th>Reviews</th>
                        <th>Ratio</th>
                        <th>Price</th>
                        <th>Account Details</th>
                    </tr>

                    <tr className='text-[#161920]  text-[16px] h-[60px] border-b-1 border-solid border-gray-400 bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                    <tr className='text-[#161920]   border-b-1 border-solid border-gray-400 text-[16px] h-[60px]  bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                    <tr className='text-[#161920]  border-b-1 border-solid border-gray-400 text-[16px] h-[60px]  bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                    <tr className='text-[#161920]  border-b-1 border-solid border-gray-400 text-[16px] h-[60px]  bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                    <tr className='text-[#161920]  border-b-1 border-solid border-gray-400 text-[16px] h-[60px]  bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                    <tr className='text-[#161920]  border-b-1 border-solid border-gray-400 text-[16px] h-[60px]  bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                    <tr className='text-[#161920]  border-b-1 border-solid border-gray-400 text-[16px] h-[60px]  bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                    <tr className='text-[#161920]  text-[16px] h-[60px]  bg-white font-medium'>
                        <td >Flagman_Shop</td>
                        <td> 🌎 US</td>
                        <td> Pro account</td>
                        <td> 2019</td>
                        <td> 6 reviews</td>
                        <td> 100% police</td>
                        <td> $1000</td>
                        <td className='text-[#64ABFF]'> Move info </td>
                    </tr>
                </table>
            </div>
                <div className='flex flex-col sm:flex-row  gap-[20px] items-center'>
                    <button className='sm:w-[50%] border-2 border-solid border-[#EB6108] text-[#EB6108] py-[10px] rounded-[7px]'>To learn more about the process click here - </button>
                    <button className='sm:w-[50%] border-2 border-solid border-[#EB6108] text-[#EB6108] py-[10px] rounded-[7px]'>Interested in Selling Account Visit page - </button>
                </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between gap-[40px] relative z-20 items-center'>
    <aside className='sm:w-[50%]'>
        <img src={sec8} alt="" />
    </aside>
    <aside className='sm:w-[50%] flex flex-col gap-[40px]'>
        <p className='text-[35px] text-[#161920] font-semibold'>
            {t("Example.section4.text1")}
        </p>
        <div className='flex bg-white p-[30px] rounded-[20px] shadow-xl items-start gap-[20px]'>
            <img src={sec9} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>
                    {t("Example.section4.text2")}
                </p>
                <p className='text-[#889196] text-[18px]'>
                    {t("Example.section4.text3")}
                </p>
            </div>
        </div>
        <div className='flex bg-white p-[30px] rounded-[20px] shadow-xl items-start gap-[20px]'>
            <img src={sec10} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>
                    {t("Example.section4.text4")}
                </p>
                <p className='text-[#889196] text-[18px]'>
                    {t("Example.section4.text5")}
                </p>
            </div>
        </div>
        <div className='flex bg-white p-[30px] rounded-[20px] shadow-xl items-start gap-[20px]'>
            <img src={sec11} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>
                    {t("Example.section4.text6")}
                </p>
                <p className='text-[#889196] text-[18px]'>
                    {t("Example.section4.text7")}
                </p>
            </div>
        </div>
    </aside>
</div>



        <img src={sec12} alt="" className='absolute bottom-[250px] right-[-30px] sm:right-[-150px]' />
    </section>


    <section className='w-[80%] m-auto realtive top-0 flex flex-col-reverse sm:flex-row justify-between gap-[40px] py-[80px] relative z-20 items-center'>
    <aside className='sm:w-[50%] relative z-20 flex flex-col gap-[25px]'>
        <p className='text-[35px] text-[#161920] font-semibold'>{t("Example.section5.text1")}</p>
        <p className='text-[25px] text-[#889196]'>{t("Example.section5.text2")}</p>
        <div className='flex flex-col sm:flex-row  bg-white p-[30px] rounded-[20px]  text-center sm:text-left items-center sm:items-start gap-[20px]'>
            <img src={sec16} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>{t("Example.section5.text1")}</p> 
                <p className='text-[#889196] text-[18px]'>{t("Example.section5.text3")}</p>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row text-center sm:text-left items-center bg-white p-[30px] rounded-[20px]  sm:items-start gap-[20px]'>
            <img src={sec15} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>{t("Example.section5.text1")}</p>
                <p className='text-[#889196] text-[18px]'>{t("Example.section5.text3")}</p>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row text-center sm:text-left items-center  bg-white p-[30px] rounded-[20px]  sm:items-start gap-[20px]'>
            <img src={sec14} alt="" />
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#161920] text-[25px]'>{t("Example.section5.text1")}</p>
                <p className='text-[#889196] text-[18px]'>{t("Example.section5.text3")}</p>
            </div>
        </div>
    </aside>
    <aside className='sm:w-[50%]'>
        <img src={sec13} alt="" />
    </aside>
    <img src={sec17} className='absolute top-[30px] w-[200px] left-[-150px]' alt="" />
</section>




<section className='w-[80%] m-auto realtive top-0 flex flex-col sm:flex-row justify-between gap-[40px] py-[120px] relative z-20 items-center'>
    <aside className='sm:w-[50%] relative z-20'>
        <img src={sec18} alt="" />
    </aside>
    <aside className='sm:w-[50%] relative z-20 flex flex-col gap-[25px]'>
        <p className='text-[35px] text-[#161920] font-semibold'>{t("Example.section6.text1")}</p>
        
        <div className='flex flex-col gap-[20px]'>
            <p className='text-[25px] text-[#161920] font-medium'>{t("Example.section6.text2")}</p>
            <p className='text-[16px] text-[#889196] '>{t("Example.section6.text3")}</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <p className='text-[25px] text-[#161920] font-medium'>{t("Example.section6.text4")}</p>
            <p className='text-[16px] text-[#889196] '>{t("Example.section6.text5")}</p>
        </div>
    </aside>

    <img src={sec19} className='absolute top-[40px] w-[900px] right-[20] sm:right-[-120px]' alt="" />
</section>
{/* sdelal */}


<section className='w-[90%] sm:w-[50%] m-auto relative top-0 py-[70px] flex flex-col gap-[30px]'>
    <p className='text-[35px] text-[#161920] font-medium text-center'>{t("Example.section7.text1")}</p>
    <div className='flex justify-between relative z-20 items-center shadow-md py-[20px] px-[30px] rounded-[10px] bg-white'>
        <p className='text-[20px] text-[#161920]'>{t("Example.section7.text2")}</p>
        <img src={sec20} alt="" />
    </div>
    <div className='flex justify-between items-center shadow-md py-[20px] px-[30px] rounded-[10px] bg-white'>
        <p className='text-[20px] text-[#161920]'>{t("Example.section7.text3")}</p>
        <img src={sec20} alt="" />
    </div>
    <img src={sec21} alt="" className='absolute top-[110px] left-[-40px]' />
</section>
   {/* sdelal */}

   <section className='relative py-[70px] flex flex-col gap-[40px] my-[50px]'>
    <div className='w-[90%] sm:w-[80%] m-auto flex flex-col realtive z-20 gap-[50px] items-center'>
        <p className='text-[35px] realtive z-20 text-[#161920]'>{t("Example.section8.title")}</p>
        <div className='grid bg-white py-[40px] sm:py-[0px] sm:bg-transparent sm:grid-cols-4 gap-[70px] sm:gap-[40px] realtive z-20 top-0'>
            <div className='flex flex-col gap-[10px] items-center text-center'>
                <img src={secc1} alt="" />
                <p className='text-[18px] text-[#161920]'>{t("Example.section8.step1")}</p>
                <p className='text-[16px] text-[#889196]'>{t("Example.section8.step1desc")}</p>
            </div> 
            <div className='flex flex-col gap-[10px] items-center text-center'>
                <img src={secc2} alt="" />
                <p className='text-[18px] text-[#161920]'>{t("Example.section8.step2")}</p>
                <p className='text-[16px] text-[#889196]'>{t("Example.section8.step2desc")}</p>
            </div> 
            <div className='flex flex-col gap-[10px] items-center text-center'>
                <img src={secc3} alt="" />
                <p className='text-[18px] text-[#161920]'>{t("Example.section8.step3")}</p>
                <p className='text-[16px] text-[#889196]'>{t("Example.section8.step3desc")}</p>
            </div> 
            <div className='flex flex-col gap-[10px] items-center text-center'>
                <img src={secc4} alt="" />
                <p className='text-[18px] text-[#161920]'>{t("Example.section8.step4")}</p>
                <p className='text-[16px] text-[#889196]'>{t("Example.section8.step4desc")}</p>
            </div> 
        </div>
        <img src={secc5} className='absolute top-[215px] hidden sm:block left-[355px] realtive z-20' alt="" />
        <img src={secc6} className='absolute top-[180px] hidden sm:block left-[680px] realtive z-20' alt="" />
        <img src={secc7} className='absolute top-[215px] hidden sm:block left-[980px] realtive z-20' alt="" />
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
    <img src={secc8} alt="" className='absolute top-0 hidden sm:block' />
</section>
{/* sdelal */}


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
    <div className='flex justify-between relative z-20 items-center shadow-md py-[20px] px-[30px] rounded-[10px] bg-white'>
        <div className='flex items-start gap-[20px]'>
            <img src={last1} alt="" />
            <div className='flex flex-col gap-[5px]'>
                <p className='text-[20px] text-[#161920]'>{t("Example.section8.step2")}</p>
                <p className='text-[16px] text-[#161920]'>{t("Example.section8.step2desc")}</p>
            </div>
        </div>
        <img src={sec20} alt="" />
    </div>
    <div className='flex justify-between relative z-20 items-center shadow-md py-[20px] px-[30px] rounded-[10px] bg-white'>
        <div className='flex items-start gap-[20px]'>
            <img src={last1} alt="" />
            <div className='flex flex-col gap-[5px]'>
                <p className='text-[20px] text-[#161920]'>{t("Example.section8.step3")}</p>
                <p className='text-[16px] text-[#161920]'>{t("Example.section8.step3desc")}</p>
            </div>
        </div>
        <img src={sec20} alt="" />
    </div>
    <div className='flex justify-between relative z-20 items-center shadow-md py-[20px] px-[30px] rounded-[10px] bg-white'>
        <div className='flex items-start gap-[20px]'>
            <img src={last1} alt="" />
            <div className='flex flex-col gap-[5px]'>
                <p className='text-[20px] text-[#161920]'>{t("Example.section8.step4")}</p>
                <p className='text-[16px] text-[#161920]'>{t("Example.section8.step4desc")}</p>
            </div>
        </div>
        <img src={sec20} alt="" />
    </div>
    <img src={last2} className='absolute top-[60px] right-[10px] sm:right-[-50px]' alt="" />
    <img src={last3} className='absolute top-[300px] hidden sm:block right-[-180px]' alt="" />
    <img src={last4} className='absolute bottom-[20px] left-[-80px]' alt="" />
</section>

    </>
   
    
  )
}

export default Home