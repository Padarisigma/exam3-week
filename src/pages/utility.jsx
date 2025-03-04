import React from "react";
import { useTranslation } from "react-i18next";
import sec1 from '../assets/Group 895.png'
import sec2 from '../assets/Group 990.png'
import sec3 from '../assets/Subtract.png'
import sec4 from '../assets/Line 57.png'
import pp1 from '../assets/photo_2020-01-21_19-07-40 (5).png'
import pp2 from '../assets/photo_2020-01-21_19-07-40 (6).png'
import pp3 from '../assets/photo_2020-01-21_19-07-40 (7).png'
import pp4 from '../assets/photo_2020-01-21_19-07-40 (8).png'
import sec5 from '../assets/bulb 1 (1).png'
import secc10 from '../assets/Ellipse 311.png'
import secc11 from '../assets/Ellipse 311 (1).png'
import secc12 from '../assets/Group 380.png'
import foto5 from '../assets/Group 455.png'
import foto8 from '../assets/Group 763.png'
import foto9 from '../assets/image 20.png'
import foto11 from '../assets/Group 1003.png'
import foto12 from '../assets/Group 1014.png'

const Utility = () => {
  const { t } = useTranslation();

  return (
    <div>
    <section className='bg-[#0C0D12] pt-[50px]'>
            <div className='w-[90%] sm:w-[80%] m-auto flex flex-col sm:flex-row justify-between gap-[50px] items-center'>
              <aside className='flex sm:w-[50%] text-center sm:text-left flex-col items-center sm:items-start gap-[30px]'>
                <p className='text-[35px] text-[#FEFEFE] font-semibold  '>Utility Bills for Amazon 
                Account Verification</p>
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
       

       <section className=" w-[90%] sm:w-[80%] py-[80px] m-auto">
        <p className="text-[35px] text-[#161920] text-center font-medium ">Documents ready to send out</p>
        <div className="flex flex-col sm:flex-row  items-center justify-center gap-[10px]">
       <div className=" hidden sm:flex flex-col gap-[20px]">
        <div className=" flex gap-[15px] items-center bg-white shadow-md p-[20px] rounded-[10px]">
          <img src={sec5} alt="" />
          <p className="text-[18px] text-[#161920]">Electricity Bill</p>
        </div>
        <div className="flex gap-[15px] relative left-[-30px] items-center bg-white shadow-md p-[20px] rounded-[10px]">
          <img src={sec5} alt="" />
          <p className="text-[18px] text-[#161920]">Electricity Bill</p>
        </div>
        <div className="flex gap-[15px] items-center bg-white shadow-md p-[20px] rounded-[10px]">
          <img src={sec5} alt="" />
          <p className="text-[18px] text-[#161920]">Electricity Bill</p>
        </div>
       </div>
       <img src={foto5} alt="" />
       <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[15px] items-center bg-white shadow-md p-[20px] rounded-[10px]">
          <img src={sec5} alt="" />
          <p className="text-[18px] text-[#161920]">Electricity Bill</p>
        </div>
        <div className="flex sm:relative right-[-40px] gap-[15px] items-center bg-white shadow-md p-[20px] rounded-[10px]">
          <img src={sec5} alt="" />
          <p className="text-[18px] text-[#161920]">Electricity Bill</p>
        </div>
        <div className="flex gap-[15px] items-center bg-white shadow-md p-[20px] rounded-[10px]">
          <img src={sec5} alt="" />
          <p className="text-[18px] text-[#161920]">Electricity Bill</p>
        </div>
       </div>
        </div>
       </section>
      
      <div className="flex w-[90%] m-auto sm:w-[80%] flex-col items-center justify-center  bg-gray-50 ">
        <div className="flex flex-col gap-[40px] sm:gap-[0px] items-center py-[50px] sm:flex-row ">
          <div className="flex gap-[20px] sm:w-[50%]">
            <img src={pp1} alt="" />
            <div className="hidden sm:flex flex-col gap-[17px]">
              <img src={pp2} alt="" />
              <img src={pp3} alt="" />
              <img src={pp4} alt="" />
            </div>
          </div>
          <div className="sm:w-[40%]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Leave a request to get your utility bill
            </h2>
            <p className="text-gray-600 mb-6">
              It will take you less than sixty seconds. A member of our team
              will contact you shortly after.
            </p>

            <div className="mb-4">
              <label className="text-gray-700 block text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="text-gray-700 block text-sm mb-1">
                Telephone number or Login
              </label>
              <input
                type="text"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Send Button */}
            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">
              Send
            </button>
          </div>
        </div>
      </div>

      <section className="sm:w-[80%] m-auto py-[60px] flex flex-col sm:flex-row  items-center justify-between ">
        <div className="sm:w-[50%] flex flex-col gap-[30px] p-6">
          <h2 className="text-[30px] font-semibold text-gray-800 ">
            Invoices for Amazon from a US supplier with a call{" "}
          </h2>
          <p className="text-gray-600 text-[18px]">
            You will receive complete documents in English ready to send out..
          </p>
          <button className="w-[50%] bg-orange-500 text-white py-[12px] rounded-md font-medium">
            Get an invoice{" "}
          </button>
        </div>
        <div className="">

        <img src={foto8} />
        </div>
      </section>


      <section className="flex  flex-col sm:flex-row  py-[60px] gap-[50px] sm:gap-[0px] w-[90%]  sm:w-[80%] m-auto items-center justify-between">
        <div className="lg:w-1/2 flex flex-col gap-[30px]">
          <h2 className="text-[35px] font-semibold text-gray-800 ">
            Invoices from a US supplier{" "}
          </h2>
          <p className="text-gray-600 text-[21px]">
            This is an officially registered US wholesale supplier: The whole
            process will take place within the US law and complying with all
            Amazon requirements.
            <br />
            <br />
            You receive invoices with all the instructions in 1-2 days after
            ordering. The supplier can also answer Amazon call on invoices.
          </p>
        </div>
        <img src={foto9} />
      </section>

      <section>
        <h2 className="text-3xl px-10 lg:px-0 font-semibold text-gray-800 mt-20 text-center">
          Documents ready to send out
        </h2>
        <p className="mt-2 text-center lg:px-[35%] px-10">
          If you receive an invoice request, then you can do more than just
          unlocking your account.
        </p>
        <div className="flex flex-col lg:flex-row gap-10 mt-10 px-10 justify-center">
          <div className="lg:w-[20%] text-center justify-center items-center">
            <img src={foto11} className="w-[30%] m-auto" />
            <p className="text-[#889196]">
              Invoice is requested to verify your account or in connection with
              some violations.
            </p>
          </div>
          <div className="lg:w-[20%] mt-10 text-center justify-center items-center">
            <img src={foto11} className="w-[30%] m-auto" />
            <p className="text-[#889196]">
              Invoice is requested to verify your account or in connection with
              some violations.
            </p>
          </div>
          <div className="lg:w-[20%] mt-10 text-center justify-center items-center">
            <img src={foto11} className="w-[30%] m-auto" />
            <p className="text-[#889196]">
              Invoice is requested to verify your account or in connection with
              some violations.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col py-[100px] sm:flex-row  w-[80%] m-auto items-center justify-between ">
        <div className="sm:w-[50%]">

        <img src={foto12}  />
        </div>
        <div className="sm:w-[40%] flex flex-col gap-[30px] ">
          <h2 className="text-3xl font-semibold text-gray-800 ">
            We will answer an Amazon call on invoices
          </h2>
          <p className="text-gray-600 text-[21px]">
            In 90% of cases, Amazon call suppliers on invoices. If the company
            doesn’t manage to contact the supplier, then you will receive an
            email that Amazon was “unable to verify the supplier”.
          </p>
        </div>
      </section>

      <div className="flex flex-col  w-[90%] sm:w-[80%] m-auto  items-center justify-between  bg-gray-50 ">
        <div className="flex flex-col gap-[50px] sm:gap-[0px] items-center justify-between py-[100px] sm:flex-row ">
          
          <div className="sm:w-[40%]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Leave a request to get your utility bill
            </h2>
            <p className="text-gray-600 mb-6">
              It will take you less than sixty seconds. A member of our team
              will contact you shortly after.
            </p>

            <div className="mb-4">
              <label className="text-gray-700 block text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="text-gray-700 block text-sm mb-1">
                Telephone number or Login
              </label>
              <input
                type="text"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Send Button */}
            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">
              Send
            </button>
          </div>
          <div className="flex gap-[20px] sm:w-[50%]">
          <div className="hidden sm:flex flex-col gap-[17px]">
              <img src={pp2} alt="" />
              <img src={pp3} alt="" />
              <img src={pp4} alt="" />
            </div>
            <img src={pp1} alt="" />
            
          </div>
        </div>
      </div>



      <div className='relative z-20 w-[90%] sm:w-[80%] m-auto flex flex-col gap-[40px]'>
                      <p className='text-[35px] text-[#161920] text-center'>What our clients say</p>
                      <div className='flex flex-col gap-[30px] items-center'>
                          <div className='flex justify-between items-center gap-[40px]'>
                            <div className='sm:flex hidden  items-start gap-[20px]'>
                              <img src={secc10} alt="" />
                              <div>
                                  <p className='text-[#EB6108] text-[50px] leading-[40px] '>“</p>
                                  <p className='text-[18px] text-[#889196] pb-[20px]'>I have to say, "amazmarkets" gets over an A+ rating from me. I will be recommending this company and team to everyone. Thanks again!</p>
                                  <p className='text-[16px] font-medium text-[#161920]'>Steven Cody</p>
                              </div>
                          </div>
                          <div className='flex items-start gap-[20px]'>
                              <img src={secc11} alt="" />
                              <div>
                                  <p className='text-[#EB6108] text-[50px] leading-[40px] '>“</p>
                                  <p className='text-[18px] text-[#889196] pb-[20px]'>I have to say, "amazmarkets" gets over an A+ rating from me. I will be recommending this company and team to everyone. Thanks again!</p>
                                  <p className='text-[16px] font-medium text-[#161920]'>Steven Cody</p>
                              </div>
                          </div>  
                          </div>
                          
                          <img src={secc12} alt="" />
                      </div>
                  </div>
    </div>
    
  );
};

export default Utility
