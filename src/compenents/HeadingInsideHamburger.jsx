import React from 'react'

const HeadingInsideHamburger = ({title,fontSize}) => {
  return (
    <div className={`text-[#0D0E10] text-[${fontSize}] font-helvetica font-semibold tracking-widest pb-[10px] border-b-[1px] border-[#EEEBEA]`} >
        {title}
    </div>
  )
}

export default HeadingInsideHamburger
