import React, { useRef } from 'react'

const FAQItem = ({item, onClick, isOpen}) => {

  const answerRef = useRef(null);

  return (
    <div className='border-b-1 border-amber-500 dark:border-amber-700 last:border-none' id={`faq-item-${item.id}`}>
      <button className='w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none group bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text rounded-lg transition-all duration-200' onClick={() => {
        onClick(item.id);
      }}>
        <span className='group-hover:text-transparent text-lg font-medium pr-6'>{item.question}</span>
        <div className='size-10 bg-gray-200 rounded-full dark:bg-gray-600 mr-3 flex justify-center items-center aspect-square'>
            <i className='bx  bx-plus'></i> 
        </div>
      </button>
      <div className='overflow-hidden transition-all duration-300' id={`answer-${item.id}`} ref={answerRef} style={{maxHeight: isOpen ? answerRef.current?.scrollHeight : 0}}>
        <div className='p-4 pt-0 pb-5 text-zinc-600'>
          <div className='overflow-y-auto rounded-lg max-h-[300px]'>
          {item.answer}
        </div>
        </div>
      </div>
    </div>
  )
}

export default FAQItem
