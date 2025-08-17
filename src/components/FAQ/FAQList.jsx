import React, { useState } from 'react'
import FAQItem from './FAQItem'
import faqData from './data/faqData'
import Heading from '../Heading/Heading'
import { BiCollapseAlt } from "react-icons/bi";
import { BiExpandAlt } from "react-icons/bi";

const FAQList = () => {

    const [openId, setOpenId] = useState(null);
    const [expandAll, setExpandAll] = useState(false);

    const toggleItem = (id) => {
        if(expandAll) {
            setExpandAll(false);
        }
        setOpenId((prevId) => {
            if(prevId === id) {
                return null;
            }
            return id;
        })
    }

    const toggleExpandAll = () => {
        setExpandAll((prev) => !prev);
        setOpenId(null);
    }

  return (
    <div className='container mx-auto px-10 py-20 sm:px-6 lg:px-8'>
        <div className='text-3xl lg:text-5xl'>
            <Heading highlight="Our" heading="FAQ's"/>
        </div>
        
         <div className='flex flex-col sm:flex-row justify-end items-center mb-1 gap-4'>
            
            <div className='flex items-center space-x-4 -mt-5'>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-2 rounded-lg hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg text-white text-xl cursor-pointer flex items-center gap-2' onClick={toggleExpandAll}>
                    {expandAll ? <BiCollapseAlt /> : <BiExpandAlt />}
                    <span>{expandAll ? "Collapse All" : "Expand All"}</span>
                </button>
                
            </div>
        </div> 
         
         <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-amber-100 dark:border-amber-800 transition-all duration-300 overflow-hidden my-12'>
            {faqData.map((item) => (
                <FAQItem key={item.id} item={item} onClick={toggleItem} isOpen={expandAll || openId === item.id}/>
            ))}
            
        </div> 
    </div>
  )
}

export default FAQList
