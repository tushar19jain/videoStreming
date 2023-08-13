import { useState } from "react"
import { FaArrowDown, FaBagShopping, FaBars, FaClock, FaGamepad, FaHouse, FaLeaf, FaMusic, FaNewspaper, FaRecordVinyl, FaThumbsUp, FaTimeline, FaVideo, FaYoutube ,FaPlay, FaLightbulb, FaGear, FaFlag, FaCircleQuestion, FaReply} from 'react-icons/fa6'
const Sidenav = () =>{
    const [triger,setNav] = useState(false);
    const triggerNav = () =>{setNav(!triger)}
    return(
        <div>
            <FaBars onClick={triggerNav} className='text-2xl ml-5 mt-3 inline-block gap-9 fixed hover:absolute'/>
            {
                triger ? 
                <div>
                     <ul className='mt-20 pl-5  '>
                        <li className='text-md pb-2 hover:bg-gray-100 hover:font-semibold cursor-pointer w-fit p-3 rounded-xl'><FaHouse/>Home</li>
                        <li className='text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-fit p-3 rounded-xl'><FaVideo/>Your Video</li>
                        <li className='text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-fit p-3 rounded-xl'><FaClock/>History</li>
                        <li className=' text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-fit p-3 rounded-xl'><FaThumbsUp/>Liked</li>
                        <li className=' text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-fit p-3 rounded-xl'><FaArrowDown/>Show more</li>
                    </ul>
                </div>
                :
                <div>
                <ul className='mt-20 pl-5 fixed hover:absolute bg-white'>
                    <li className='flex gap-5 text-center text-md pb-3 bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaHouse/>Home</li>
                    <li className='flex gap-3 text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-60 p-3 rounded-xl'><FaVideo/>Your Video</li>
                    <li className='flex gap-3 text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-60 p-3 rounded-xl'><FaClock/>History</li>
                    <hr  className='w-fit'/>
                    <li className='flex gap-3 text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-60 p-3 rounded-xl'><FaThumbsUp/>Liked</li>
                    <li className='flex gap-3 text-md pb-2 hover:font-semibold hover:bg-gray-100 cursor-pointer w-60 p-3 rounded-xl'><FaArrowDown/>Show more</li>
                    <hr  className='w-52 h-3'/>
                    <h1 className="text-md font-semibold pl-3 pt-3">Explore</h1>
                    <li className='flex gap-5 text-center text-md pb-3   hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaLeaf/>Trending</li>
                    <li className='flex gap-5 text-center text-md pb-3   hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaBagShopping/>Shopping</li>
                    <li className='flex gap-5 text-center text-md pb-3   hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaMusic/>Music</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaVideo/>Films</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaRecordVinyl/>Live</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaGamepad/>Gaming</li>
                    <li className='flex gap-5 text-center text-md pb-3|  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaNewspaper/>News</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaPlay/>Sports</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaLightbulb/>Learning</li>
                    <hr  className='w-52 h-3'/>
                    <li className='flex gap-5 text-center text-md pb-3|  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaGear/>Setting</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaFlag/>Report history</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaCircleQuestion/>Help</li>
                    <li className='flex gap-5 text-center text-md pb-3  hover:bg-gray-100 hover:font-semibold cursor-pointer w-60 p-3 rounded-xl'><FaReply/>Feedback</li>
                </ul>
            </div>
            }        
        </div>
    )
}
export default Sidenav