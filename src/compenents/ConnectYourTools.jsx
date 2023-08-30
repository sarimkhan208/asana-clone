import React from 'react'
import Card from './Card'
import './carousel.css'

const ConnectYourTools = () => {
    
  return (
    <div className=' bg-[#FFFFFF] px-[25px] py-[60px] laptop:p-[60px]' >
      
        <div className='laptop:pr-[50%] font-helvetica mb-[50px]' >
            <span className='text-[#1F2D1F] font-semibold leading-4 text-[12px] tracking-widest' >BRING YOUR WORK TOGETHER</span>
            <h4 className='text-[33px] leading-8 tracking-wider font-medium my-[20px]'>Connect your tools to Asana</h4>
            <p className=' text-[222B37] text-[18px] leading-6 font-[500] tracking-wider' >
                We have more than <span className='underline underline-offset-4' >200+ integrations,</span> so you can use your favorite work tools to communicate, collaborate, and coordinate work in one place, from start to finish.
            </p>
        </div>

        <div className='car scroll-smooth flex items-center justify-start overflow-x-auto scrollbar-hide' >
            <div className='slider' >
                {
                    sliderArr.map((el)=>(
                        <div className='mx-[15px]' ><Card color={el.color} title={el.title} desc={el.desc} image={el.image} /></div>
                    ))
                }
            </div>
        </div>



    </div>
  )
  
}

export default ConnectYourTools


const sliderArr = [
    {
        title : 'Zoom',
        desc : 'For Accordiam turn action items from the meeting into task in Asana right from zoom',
        image : 'https://luna1.co/Zoom_icon.svg',
        color : 'bg-[#1073ED]'
    },
    {
        title : 'Adobe Creative Cloud',
        desc : 'For Communication see Asana taskget feed back and more right from your adobe app',
        image : 'https://luna1.co/178ea7.png',
        color : 'bg-[#151920]'
    },
    {
        title : 'Goodle Calender',
        desc : 'For time management assign your google taks in to goodle calender to see deadline',
        image : 'https://assets.asana.biz/m/691a9a927b4f9ebc/original/Google-Calendar-Icon.png',
        color : 'bg-[#4989F5]'
    },
    {
        title : 'Harvest',
        desc : 'For time tracking track time to record building hours and create invoice in Asana',
        image : 'https://luna1.co/b9f2bc.png',
        color : 'bg-[#F17410]'
    },

    {
        title : 'Dropbox',
        desc : 'For file sahring attach file from dropbox to Asana task from Asana task phone',
        image : 'https://luna1.co/1dc630.png',
        color : 'bg-[#0C2481]'
    },
    {
        title : 'Slack',
        desc : 'For communiction add desing to comment on Asana or more in slack',
        image : 'https://luna1.co/dc739c.png',
        color : 'bg-[#783680]'
    },
    {
        title : 'Google Drive',
        desc : 'For File sharing attach file from google task to Google Drive from task pane',
        image : 'https://assets.asana.biz/m/20dc2db38fc18a72/original/Drive-Icon.png',
        color : 'bg-[#12A05B]'
    },
    {
        title : 'Jira Cloud ',
        desc : 'For coordination create jira issue and track without leaving Asana',
        image : 'https://assets.asana.biz/transform/857dc749-9b94-43b4-8d5b-5be063d92cc5/jiradatasync',
        color : 'bg-[#1970D9]'
    },
    {
        title : 'Salesforce',
        desc : 'For coordinate collaborate from Asana task for pre sales need on sales force',
        image : 'https://luna1.co/f3917e.png',
        color : 'bg-[#0496D0]'
    },
    {
        title : 'Gmail',
        desc : 'For coordinate turn email into task Asana right from your gmail box',
        image : 'https://assets.asana.biz/m/44dd010734ab89d2/original/Gmail-Icon.png',
        color : 'bg-[#C9493B]'
    },
    {
        title : 'One Drive',
        desc : 'For file sahring attach Asana for your file sharing',
        image : 'https://luna1.co/620957.png',
        color : 'bg-[#035DAB]'
    },
    {
        title : 'Zoom',
        desc : 'For Accordiam turn action items from the meeting into task in Asana right from zoom',
        image : 'https://luna1.co/Zoom_icon.svg',
        color : 'bg-[#1073ED]'
    },
    {
        title : 'Adobe Creative Cloud',
        desc : 'For Communication see Asana taskget feed back and more right from your adobe app',
        image : 'https://luna1.co/178ea7.png',
        color : 'bg-[#151920]'
    },
    {
        title : 'Goodle Calender',
        desc : 'For time management assign your google taks in to goodle calender to see deadline',
        image : 'https://assets.asana.biz/m/691a9a927b4f9ebc/original/Google-Calendar-Icon.png',
        color : 'bg-[#4989F5]'
    },
    {
        title : 'Harvest',
        desc : 'For time tracking track time to record building hours and create invoice in Asana',
        image : 'https://luna1.co/b9f2bc.png',
        color : 'bg-[#F17410]'
    },

    {
        title : 'Dropbox',
        desc : 'For file sahring attach file from dropbox to Asana task from Asana task phone',
        image : 'https://luna1.co/1dc630.png',
        color : 'bg-[#0C2481]'
    },
    {
        title : 'Slack',
        desc : 'For communiction add desing to comment on Asana or more in slack',
        image : 'https://luna1.co/dc739c.png',
        color : 'bg-[#783680]'
    },
    {
        title : 'Google Drive',
        desc : 'For File sharing attach file from google task to Google Drive from task pane',
        image : 'https://assets.asana.biz/m/20dc2db38fc18a72/original/Drive-Icon.png',
        color : 'bg-[#12A05B]'
    },
    {
        title : 'Jira Cloud ',
        desc : 'For coordination create jira issue and track without leaving Asana',
        image : 'https://assets.asana.biz/transform/857dc749-9b94-43b4-8d5b-5be063d92cc5/jiradatasync',
        color : 'bg-[#1970D9]'
    },
    {
        title : 'Salesforce',
        desc : 'For coordinate collaborate from Asana task for pre sales need on sales force',
        image : 'https://luna1.co/f3917e.png',
        color : 'bg-[#0496D0]'
    },
    {
        title : 'Gmail',
        desc : 'For coordinate turn email into task Asana right from your gmail box',
        image : 'https://assets.asana.biz/m/44dd010734ab89d2/original/Gmail-Icon.png',
        color : 'bg-[#C9493B]'
    },
    {
        title : 'One Drive',
        desc : 'For file sahring attach Asana for your file sharing',
        image : 'https://luna1.co/620957.png',
        color : 'bg-[#035DAB]'
    },

    

]


