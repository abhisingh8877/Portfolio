import React from 'react'
import Gyb_page from "../assets/other/project/Screenshot (472).png";
import ecommerce from "../assets/other/project/Screenshot (473).png";
import train_ticket from "../assets/other/project/ticket_booking_app.PNG";



const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:Gyb_page,
            web_link:"https://gyb.netlify.app/",
            Github_link:"https://github.com/abhisingh8877/gihub_gyb"
        },
        {
            id:2,
            src:ecommerce,
            web_link:"https://shoping-ecommerce-w6re.onrender.com/",
            Github_link:"https://github.com/abhisingh8877/shoping_ecommerce"
        },
        // {
        //     id:3,
        //     src:byteverse
        // },
       
        {
            id:3,
            src:train_ticket,
            web_link:"https://github.com/abhisingh8877/Train_ticket_frontend",
            Github_link:"https://github.com/abhisingh8877/Train_ticket_backend"

        },
        
    ]

    
  return (
    <div name="project"
    className="  pb-8 bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen ">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
           <div className="  pb-2">
               <p className="text-4xl font-bold inline mt-15
               border-b-4 border-gray-500">Project</p>
               <p className="py-6">Checkout some of my works</p>
           </div>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
            {
                portfolios.map(({id,src,web_link,Github_link})=>(
                   
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <a className="w-1/2 px-6 py-3  duration-200 hover:scale-105" href={`${web_link}`}>Demo</a>
                                    <a className="w-1/2 px-6 py-3  duration-200 hover:scale-105" href={`${Github_link}`}>Code</a>
                                </div>
                    </div>
                   
                ))
            }

               </div>
        </div>
      
    </div>
  )
}

export default Portfolio
