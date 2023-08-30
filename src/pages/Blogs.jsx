import React from 'react'
import BlogsCard from '../compenents/BlogsCard'

const Blogs = () => {
  return (
    <div className='bg-[#F8F8F9] grid grid-cols-1 mx-auto laptop:grid-cols-3 gap-6 p-[50px] mt-[50px]' >
      {
        arr.map((el)=>(
            <BlogsCard title={el.title} desc={el.desc} image={el.image} date={el.date} />
        ))
      }
    </div>
  )
}

export default Blogs


const arr = [
    {
        image : 'https://i.postimg.cc/0jqtW1pW/card.png',
        date : 'OCT 12 2022',
        title : 'Want To Amplify your Organization Productivty',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/7Z4L8q83/2.png',
        date : 'JAN 15 2022',
        title : 'Three security tactics for every IT leader',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/c4RscPgr/3.png',
        date : 'FEB 10 2023',
        title : 'CEO activism can attract best talend',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/B6P3PzfZ/4.png',
        date : 'DEC 12 2022',
        title : 'Whats new in Asana Aug 2022 Edition',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/D039Jyc5/Screenshot-2023-08-30-130749.png',
        date : 'MAY 09 2021',
        title : 'Want to survive Pandemic pivot How it is',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/0jqtW1pW/card.png',
        date : 'OCT 12 2022',
        title : 'Want To Amplify your Organization Productivty',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/7Z4L8q83/2.png',
        date : 'JAN 15 2022',
        title : 'Three security tactics for every IT leader',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/c4RscPgr/3.png',
        date : 'FEB 10 2023',
        title : 'CEO activism can attract best talend',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/B6P3PzfZ/4.png',
        date : 'DEC 12 2022',
        title : 'Whats new in Asana Aug 2022 Edition',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    {
        image : 'https://i.postimg.cc/D039Jyc5/Screenshot-2023-08-30-130749.png',
        date : 'MAY 09 2021',
        title : 'Want to survive Pandemic pivot How it is',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur nostrum, at autem impedit magni laudantium, repellat quasi perferendis vero neque ipsa reiciendis error nemo '
    },
    
    
  ]
  