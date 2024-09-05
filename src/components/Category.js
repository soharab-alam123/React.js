
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Category = () => {

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>whats on your mind</div>
                    <div className='flex'>
                        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft />
                        </div>
                        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="border flex max-w-[1200px] mx-auto justify-center items-center gap-2">
                    <div className="flex justify-center items-center cursor-pointer  border-red-300  h-[250px] w-[200px]">
                        <img src="images/North.png" alt="" />
                        <img src="images/Pizzas.png" alt="" />
                        <img src="images/Rolls.png" alt="" />
                        <img src="images/Chinese.png" alt="" />
                        <img src="images/burger.png" alt="" />
                        <img src="images/Briyani.png" alt="" />
                        <img src="images/Dosa.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category