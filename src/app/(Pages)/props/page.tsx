import React from 'react'
import FlipCard from '../css/page'


function Prop() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
     <h1 className="  bg-green-400 text-black px-4 py-2 text-4xl rounded-lg mb-4">Tailwind Test</h1>
     {/* First example  */}
     {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img
    className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
    src="https://images.pexels.com/photos/28974077/pexels-photo-28974077/free-photo-of-close-up-of-two-polar-bears-on-rocky-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt=""
    width={384}
    height={512}
  />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
     </figure> */}


     {/* Second example */}
     <FlipCard title = "Hitesh"/>
     <FlipCard title='Sheroz'/>


    </div>

  )
}  
export default Prop
