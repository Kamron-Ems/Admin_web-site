import { MdDashboard, MdOutlineMessage, MdLogout } from "react-icons/md"
import { SiSimpleanalytics } from "react-icons/si"
import { LiaToolsSolid } from "react-icons/lia"
import { IoSettingsSharp } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"


const variants = {
  expanted: {width: "20%"},
  nonExpanded: { width: "5%" }
}

const navItems = [
  {
    name: "Dashboard",
    icon: MdDashboard,
  },
  {
    name: "Analytics",
    icon: SiSimpleanalytics,
  },
  {
    name: "Meassage",
    icon: MdOutlineMessage,
  },
  {
    name: "Tools",
    icon: MdDashboard,
  },
  {
    name: "Settings",
    icon: IoSettingsSharp,
  },
]

function Sidebar() {

  const [activeNavIndex , setActiveNavIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(()=>{

    const handleResize = ()=>{
      const width = window.innerWidth;
      if(width <= 768) {
        setIsExpanded(false);
      }else {
        setIsExpanded(true);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return ()=>{
      window.removeEventListener('resize', handleResize);
    }


  }, [])

  return (
    <motion.section
      animate = {isExpanded ? "expanted" : "nonExpanded"}
      variants = {variants}
      className= {` w-1/5 bg-gray-950 h-screen flex flex-col justify-between items-center gap-10 relative `+ (isExpanded ? `py-8 px-6` : `py-6 px-8`)}
    >
      <div
        className="flex flex-col justify-center items-center gap-8 "
      >

        {
          isExpanded ? 
            (<div id='logo-box'>
              <h1 className="text-red-600 font-bold text-4xl" >DEBUG  
                <span className="italic text-yellow-500" > Entity</span> 
            </h1></div>):
            ( <div
                className="flex justify-center items-center"
              >
                <h1 className="text-red-600 font-bold text-3xl ">D</h1>
                <span className="italic text-yellow-500 text-3xl" >E</span>
            </div> )
        }

        {/* Nav Links  */}

        <div id="navlinks-box" 
        className="flex flex-col justify-center item-start gap-5 w-full mt-5 "
      >
        {
          navItems.map((item, index)=>(
            <div
              key={item.name} id="link-box"
              className={`flex justify-start items-center gap-4 w-full cursor-pointer rounded-xl `+(activeNavIndex === index ? ' bg-yellow-500 text-black ':
                'text-white ') + (isExpanded ? ' px-6 py-2 ': ' p-2 ')
              }
              onClick={()=>setActiveNavIndex(index)}
            >
            
              <div
                className="bg-yellow-300 text-black p-2 rounded-full "
              >
                <item.icon className="md:w-6 w-4 h-4 md:h-6"/>
              </div>
              <span className={`text-lg`+(isExpanded ? ' flex ' : ' hidden ')} >{item?.name}</span>
            </div>  
          ))
        }
      </div>
      </div>

      {/* Close and open Nav Section Icon */}
      <div
        id="expanded-icon"
        className="bg-yellow-500 text-black p-2 rounded-full cursor-pointer absolute -right-4 bottom-20 md:bottom-40 md:flex hidden "
        onClick={()=>setIsExpanded(!isExpanded)}
      >
        <FaArrowRight/>
      </div>

      {/* Logout button */}
      <div
        id="logout-box"
        className="w-full flex  flex-col justify-start items-center gap-4 cursor-pointer "
      >
        <div className="bg-slate-700 w-full h-[0.5px] "></div>
        <div className="flex justify-center items-center gap-2" >
          <MdLogout className="text-white h-6 w-6 " />
          <span className={"text-white text-lg"+ (isExpanded? ' flex ' : " hidden ") } >Logout</span>
        </div>
      </div>
    </motion.section>
  )
}

export default Sidebar
Sidebar

