import React from 'react'

const TitleCompoWithIcon = ({title,desc,color,icon: IconComponent}) => {

  return (
    <div className='my-[22px] cursor-pointer'>
        <div className='text-[12px] mb-1 font-helvetica font-semibold tracking-wider flex' > <div className={`mr-2 mt-[2px]  text-[18px]`}><IconComponent className={`text-${color}`} /></div> {title}</div>
        <div className='text-[#757575] text-[10px] font-helvetica tracking-widest font-semibold' >{desc}</div>
    </div>
  )
}

export default TitleCompoWithIcon
