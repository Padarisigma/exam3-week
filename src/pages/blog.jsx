import React from 'react'
import foto1 from '../assets/MYbhN8KaaEc.png'
import foto3 from '../assets/MYbhN8KaaEc (1).png'
import foto4 from '../assets/MYbhN8KaaEc (2).png'
import foto2 from '../assets/Group 97.png'
import foto5 from '../assets/MYbhN8KaaEc (3).png'
import foto6 from '../assets/MYbhN8KaaEc (4).png'
import foto7 from '../assets/MYbhN8KaaEc (5).png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Blog = () => {
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
  return (
  <>
   <section className='w-[80%] m-auto py-[20px]'>
    <p className='uppercase text-[#161920]'>home <span>/blog</span></p>
    <div className='flex flex-col sm:items-center gap-[40px]'>
      <p className='uppercase text-[#161920] font-semibold mt-[40px] text-center text-[55px]'>{t('blog.header.text1')}</p>
    <div className='flex flex-col sm:flex-row gap-[20px]'>
      <button className='py-[10px] px-[36px] text-[white] border-2 border-solid border-[#ED7212] bg-[#ED7212] rounded-[5px]'>{t('blog.header.text2')}</button>
      <button className='py-[10px] px-[36px] border-2 border-solid border-[#ED7212] text-[#ED7212] rounded-[5px]'>{t('blog.header.text2')}</button>
      <button className='py-[10px] px-[36px] border-2 border-solid border-[#ED7212] text-[#ED7212] rounded-[5px]'>{t('blog.header.text2')}</button>

      <button className='py-[10px] px-[36px] border-2 border-solid border-[#ED7212] text-[#ED7212] rounded-[5px]'>{t('blog.header.text2')}</button>

      <button className='py-[10px] px-[36px] border-2 border-solid border-[#ED7212] text-[#ED7212] rounded-[5px]'>{t('blog.header.text2')}</button>

      <button className='py-[10px] px-[36px] border-2 border-solid border-[#ED7212] text-[#ED7212] rounded-[5px]'>{t('blog.header.text2')}</button>

    </div>
    </div>

    <div className='flex flex-col mt-[30px] gap-[20px]'>
      <p className='text-[18px] text-[#4F5F75] border-b-1 py-[5px] border-solid border-gray-400'>Last added</p>
      {info.slice(0,1).map((el)=>{
          return  <div key={el.id} className='flex flex-col sm:flex-row  justify-between gap-[50px] items-start'>
          <aside>
            <img src={el.image} alt="" />
          </aside>
          <aside className='flex flex-col gap-[20px]'>
          <Link to={'/blog/' + el.id} ><p className='text-[20px] text-[#161920] font-semibold hover:text-red-500'>{el.title[i18]}</p></Link>
            <p className='text-[16px] text-[#889196] sm:w-[500px]'>{el.description[i18]}</p>
            <div className='flex items-center gap-[20px]'>
              <img src={foto2} alt="" />
              <div className='flex flex-col gap-[10px]'>
                <p className='text-[14px] text-[#161920] font-medium'>AMAZMARKETS</p>
                <p className='text-[#889196] text-[14px'>October 2, 2019, 4 claps</p>
              </div>
            </div>
          </aside>
        </div>
      })}
    </div>



    <div className='flex flex-col mt-[20px] gap-[40px]'>
      <p className='text-[18px] text-[#4F5F75] border-b-1 py-[5px] border-solid border-gray-400'>All stories</p>
      <div className='flex flex-col gap-[40px] sm:gap-[0px] sm:flex-row justify-between items-center'>
      {info.slice(1,3).map((el)=>{
          return  <div key={el.id} className='flex flex-col  gap-[30px] items-start'>
          <aside>
            <img src={el.image} alt="" />
          </aside>
          <aside className='flex flex-col gap-[20px]'>
          <Link to={'/blog/' + el.id} ><p className='text-[20px] text-[#161920] font-semibold hover:text-red-500'>{el.title[i18]}</p></Link>
            <p className='text-[16px] text-[#889196] sm:w-[500px]'>{el.description[i18]}</p>
            <div className='flex items-center gap-[20px]'>
              <img src={foto2} alt="" />
              <div className='flex flex-col gap-[10px]'>
                <p className='text-[14px] text-[#161920] font-medium'>AMAZMARKETS</p>
                <p className='text-[#889196] text-[14px'>October 2, 2019, 4 claps</p>
              </div>
            </div>
          </aside>
        </div>
      })}
      </div>



      <div className='grid sm:grid-cols-3 grid-rows-3 gap-[30px]'>
        {info.slice(3).map((el)=>{
          return <div className='flex flex-col  gap-[30px] items-start'>
          <aside>
            <img src={el.image} alt="" />
          </aside>
          <aside className='flex flex-col gap-[10px]'>
          <Link to={'/blog/' + el.id} ><p className='text-[20px] text-[#161920] font-semibold hover:text-red-500'>{el.title[i18]}</p></Link>
            <p className='text-[16px] text-[#889196] '>{el.description[i18]}</p>
            <div className='flex items-center gap-[20px]'>
              <img src={foto2} alt="" />
              <div className='flex flex-col gap-[10px]'>
                <p className='text-[14px] text-[#161920] font-medium'>AMAZMARKETS</p>
                <p className='text-[#889196] text-[14px'>October 2, 2019, 4 claps</p>
              </div>
            </div>
          </aside>
        </div>
        })}
 </div>
      
    </div>

    <div className='sm:flex hidden flex-col sm:flex-row justify-center py-[60px] gap-[30px]'>
      <div className='border-3 border-solid border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        -
      </div>
      <div className='border-3 ml-[20px] border-solid bg-[#ED7212] text-white border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        1
      </div>
      <div className='border-3 text-[#ed7212] border-solid border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        2
      </div>
      <div className='border-3 text-[#ed7212] border-solid border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        3
      </div>
      <div className='border-3 text-[#ed7212] border-solid border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        4
      </div>
      <div className='border-3 text-[#ed7212] border-solid border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        ...
      </div>
      <div className='border-3 mr-[20px] text-[#ed7212] border-solid border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        15
      </div>
      <div className='border-3 text-[#ed7212]  border-solid border-[#ED7212] w-[60px] h-[60px] rounded-[7px] flex justify-center items-center '>
        -
      </div>
    </div>
    
   </section>
  </>
  )
}

export default Blog