import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Simple Calculator",
        desc: "Its a simple calculator can do addition, multiplication, substraction etc",
        img: "/SC.PNG",
        tags: [" typescript", "javascript"],
    },
    {
        id: 1,
        title: "Number Guessing Game",
        desc: "Its a CLI number guessing game using typscript anf javascript foa a web dev gaming",
        img: "/NGG.PNG",
        tags: ["typescript", "javascript"],

    },
]

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-x-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'></div>
      {data.map((el) => (<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}

      
    </div>
  )
}

export default projects
