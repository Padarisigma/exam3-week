import React from 'react'
import foto2 from '../assets/Group 97.png'
import fotoo3 from '../assets/Group (14).png'
import fotoo4 from '../assets/Ellipse 38.png'
import foto1 from '../assets/MYbhN8KaaEc.png'
import foto3 from '../assets/MYbhN8KaaEc (1).png'
import foto4 from '../assets/MYbhN8KaaEc (2).png'
import foto5 from '../assets/MYbhN8KaaEc (3).png'
import foto6 from '../assets/MYbhN8KaaEc (4).png'
import foto7 from '../assets/MYbhN8KaaEc (5).png'
import fotoo5 from '../assets/small-bookmark 1.png'
import fotoo6 from '../assets/facebook-logo (1).png'
import fotoo7 from '../assets/linkedin-logo 1.png'
import foto8 from '../assets/Group 97.png'
import foto9 from '../assets/MYbhN8KaaEc (3).png'
import foto10 from '../assets/MYbhN8KaaEc (4).png'
import foto11 from '../assets/MYbhN8KaaEc (5).png'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Howto = () => {
  const {t, i18n} = useTranslation();
    const i18= i18n.language
    const info=[
      {
        id:'1',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto1,
      },
      {
        id:'2',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto3,
      },
      {
        id:'3',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto4,
      },
      {
        id:'4',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto5,
      },
      {
        id:'5',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto6,
      },
      {
        id:'6',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto7,
      },
      {
        id:'7',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto5,
      },
      {
        id:'8',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto6,
      },
      {
        id:'9',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto7,
      },
      {
        id:'10',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto5,
      },
      {
        id:'11',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto6,
      },
      {
        id:'12',
        title: {tj:'Гурӯҳҳои беҳтарини савдоҳои крипто' , ru:'ЛУЧШИЕ КРИПТО-ТОРГОВЫЕ ГРУППЫ', en: 'BEST CRYPTO TRADING GROUPS'},
        description: {
          tj:"Одатан, се намуди асосии савдо мавҷуд аст - кӯтоҳмуддат, миёнамудат ва дарозмуддат. Дар саноат ду намуди асосии криптовалюта вуҷуд дорад - кӯтоҳмуддат ва дарозмуддат." , 
          ru:"Обычно существует три основных типа торговли — краткосрочная, среднесрочная и долгосрочная. В индустрии существуют только два основных типа криптовалюты — краткосрочные и долгосрочные.",
           en: "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term."
          },
        image: foto7,
      }
    ]
  const {id}=useParams()  
  return (
    <>
    <section className='flex flex-col py-[20px] gap-[20px] w-[80%] m-auto '>
    <p className='uppercase pb-[30px] text-[#161920]'>home / blog / <span>hot to choose cool watches</span></p>
    <div className='sm:w-[60%] flex flex-col gap-[30px] m-auto'>
      <p className='text-[25px] text-[#161920] font-medium'>{info.find(item => item.id===id ).title[i18]}</p>
      <div className='flex items-center gap-[10px]'>
        <div className='flex gap-[5px]'>
        <img src={fotoo3} alt="" />
        <img src={fotoo3} alt="" />
        <img src={fotoo3} alt="" />
        <img src={fotoo3} alt="" />
        <img src={fotoo3} alt="" />
        </div>
        <p className='text-[18px] text-[#01044D]'>484 Reviews</p>
      </div>
      <div className='flex items-center gap-[20px]'>
                  <img src={foto2} alt="" />
                  <div >
                    <p className='text-[14px] text-[#161920] font-medium'>AMAZMARKETS</p>
                    <p className='text-[#889196] text-[14px'>October 2, 2019, 4 claps</p>
                  </div>
      </div>
      <p className='text-[24px] text-[#889196] border-l-[3px] rounded-[5px] px-[20px] border-solid border-[#ED7212]'>{info.find(item => item.id===id ).description[i18]}</p>
    </div>
    <img src={info.find(item => item.id===id ).image} alt="" />
    </section>

    <section className='w-[80%]  m-auto flex flex-col gap-[30px]'>
      <div className='flex sm:w-[60%] m-auto flex-col gap-[20px]'>
        <p className='font-medium text-[#161920] text-[25px]'>{t('blog.header.text5')}</p>
        <p className='text-[18px] text-[#889196] '> {t('blog.header.text6')}</p>
      </div>
      <div className='flex sm:w-[60%] m-auto flex-col gap-[20px]'>
        <p className='font-medium text-[#161920] text-[25px]'>{t('blog.header.text7')}</p>
        <p className='text-[18px] text-[#889196] '> {t('blog.header.text8')}</p>
        <p className='text-[18px] text-[#889196] '>{t('blog.header.text9')}</p>
      </div>

      <div className='flex sm:w-[60%] m-auto flex-col gap-[20px]'>
        <p className='font-medium text-[#161920] text-[25px]'>{t('blog.header.text10')}</p>
        <p className='text-[18px] text-[#889196] '> {t('blog.header.text11')}</p>
      </div>
      <div className='flex sm:w-[60%] m-auto flex-col gap-[20px]'>
        <p className='font-medium text-[#161920] text-[25px]'>{t('blog.header.text12')}</p>
        <p className='text-[18px] text-[#889196] '>{t('blog.header.text13')}</p>
      </div>

      <div className='flex sm:w-[60%] m-auto flex-col gap-[20px]'>
        <p className='font-medium text-[#161920] text-[25px]'>{t('blog.header.text14')}</p>
        <p className='text-[18px] text-[#889196] '>{t('blog.header.text15')}</p>
      </div>

      <div className='flex sm:w-[60%] m-auto flex-col   gap-[20px]'>
      <div className='flex flex-col sm:flex-row  justify-between border-b-2 py-[15px] border-solid gap-[30px] sm:gap-[0px] border-gray-300 sm:items-center'>
        <div className='flex gap-[10px] items-center'>
          <img src={fotoo4} alt="" />
          <div className='flex flex-col gap-[10px]'>
            <p className='text-[14px] text-[#161920]'>23 claps</p>
            <p className='text-[14px] text-[#889196]'>Applause from you and 3 others</p>
          </div>
        </div>
        <div className='flex gap-[10px]'>
        <img src={fotoo6} alt="" className='w-[30px]'/>
        <img src={fotoo7} alt="" className='w-[30px]'/>
        <img src={fotoo5} alt="" />

        </div>
      </div>
      <div className='border-3 border-solid border-[#FD8D2A] text-[#FD8D2A] bg-transparent text-center py-[15px]'>
        Write your comment
      </div>
      </div>
    </section>

    <section className='w-[80%] flex flex-col gap-[30px] py-[100px] m-auto '>
      <p className='text-[35px] text-[#161920] text-center'>Learn More</p>
      <div className='grid sm:grid-cols-3 gap-[30px]'>
        <div className='flex flex-col  gap-[30px] items-start'>
              <aside>
                <img src={foto9} alt="" />
              </aside>
              <aside className='flex flex-col gap-[10px]'>
                <p className='text-[20px] text-[#161920] font-semibold'>CRYPTO TRADING RECOMMENDATIONS</p>
                <p className='text-[16px] text-[#889196] '>Usually, there are three main types of trade – short, medium 
      and long term. In the industry, there are only two main types 
      of cryptocurrency, short-term and long-term.</p>
                <div className='flex items-center gap-[20px]'>
                  <img src={foto8} alt="" />
                  <div className='flex flex-col gap-[10px]'>
                    <p className='text-[14px] text-[#161920] font-medium'>AMAZMARKETS</p>
                    <p className='text-[#889196] text-[14px'>October 2, 2019, 4 claps</p>
                  </div>
                </div>
              </aside>
            </div>
            <div className='flex flex-col  gap-[30px] items-start'>
              <aside>
                <img src={foto10} alt="" />
              </aside>
              <aside className='flex flex-col gap-[10px]'>
                <p className='text-[20px] text-[#161920] font-semibold'>CRYPTO TRADING RECOMMENDATIONS</p>
                <p className='text-[16px] text-[#889196] '>Usually, there are three main types of trade – short, medium 
      and long term. In the industry, there are only two main types 
      of cryptocurrency, short-term and long-term.</p>
                <div className='flex items-center gap-[20px]'>
                  <img src={foto8} alt="" />
                  <div className='flex flex-col gap-[10px]'>
                    <p className='text-[14px] text-[#161920] font-medium'>AMAZMARKETS</p>
                    <p className='text-[#889196] text-[14px'>October 2, 2019, 4 claps</p>
                  </div>
                </div>
              </aside>
            </div>
            <div className='flex flex-col  gap-[30px] items-start'>
              <aside>
                <img src={foto11} alt="" />
              </aside>
              <aside className='flex flex-col gap-[10px]'>
                <p className='text-[20px] text-[#161920] font-semibold'>CRYPTO TRADING RECOMMENDATIONS</p>
                <p className='text-[16px] text-[#889196] '>Usually, there are three main types of trade – short, medium 
      and long term. In the industry, there are only two main types 
      of cryptocurrency, short-term and long-term.</p>
                <div className='flex items-center gap-[20px]'>
                  <img src={foto8} alt="" />
                  <div className='flex flex-col gap-[10px]'>
                    <p className='text-[14px] text-[#161920] font-medium'>AMAZMARKETS</p>
                    <p className='text-[#889196] text-[14px'>October 2, 2019, 4 claps</p>
                  </div>
                </div>
              </aside>
            </div>
      </div>
      
    </section>
    </>
  )
}

export default Howto