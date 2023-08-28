import React from 'react'

const TitleCompo = ({title,desc,id}) => {
  return (
    <div className='my-[22px]' key={id} >
        <div className='text-[#0D0E10] text-[12px] mb-2 font-helvetica font-semibold tracking-wider' >{title}</div>
        <div className='text-[#757575] text-[10px] font-helvetica tracking-widest font-semibold' >{desc}</div>
    </div>
)
}

export default TitleCompo
