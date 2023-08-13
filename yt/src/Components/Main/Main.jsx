import { FaBell, FaCamera, FaMagnifyingGlass, FaMicrophone } from "react-icons/fa6"
import Video from "../Videos/Videos"
const Main = () =>{
    return(
        <div>
            <div className="bg-white fixed h-24 ml-[320px] w-[1230px] ">
            <input className=' ml-[30px] mt-3 p-3 rounded-l-full w-[560px] border-[1px]' type="text" name="" id="" placeholder="Search"/>
            <button className=" rounded-r-full border-[1px] p-4 bg-slate-50 absolute top-3"><FaMagnifyingGlass/></button>
            <button className="rounded-full p-4 ml-14 bg-slate-100"><FaMicrophone/></button>
            <button className='rounded-full p-4 ml-52 hover:bg-slate-100' ><FaCamera/></button>
            <button className='rounded-full p-4 ml-5 hover:bg-slate-100'><FaBell/></button>
            </div>
            <div className='mt-52'>
            <Video />
            </div>
        </div>
        
    )
}
export default Main