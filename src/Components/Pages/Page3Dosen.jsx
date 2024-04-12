import React from "react"
import Navbar from "../Fragments/Navbar"
import Dropdown from "../Elements/Dropdown"
import DropdownDate from "../Elements/DropdownDate"
import Button from "../Elements/Button"
const Page3Dosen = () => {
    return (
        <div className=' h-screen w-screen z-10 '>
            <Navbar></Navbar>
            <div className="w-full  h-full flex flex-col items-center">
                <div className=" w-1/3 h-full flex flex-col items-center">
                    <div className=" w-full h-1/2 flex flex-col items-center mt-4">
                        <div className='bg-white w-1/2 h-fit'>
                            <img className='ml-5' src="/images/Userbox.png" alt="" />
                        </div>
                        <div className=' flex flex-col items-center justify-center font-inter font-medium'>
                            <p>Abdul</p>
                            <p>1225011287</p>
                        </div>
                    </div>
                    <div>
                        <Dropdown options={["An-Naba", "An-naziat", "abasa"]} className={''}>
                            Surah
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown options={['Selesai', 'Mengulang']} className={'mt-4 z-10'}>Status</Dropdown>
                    </div>
                    <div>
                        <DropdownDate></DropdownDate>
                    </div>
                    <div>
                        <input type="text" placeholder="  Catatan" className="w-80 h-12 bg-white rounded-md border z-10 border-abumuda mt-4 " />

                    </div>
                    <Button className="bg-black font-inter text-white w-64 h-12 mt-4">Simpan</Button>
                </div>
            </div>
        </div>
    )
}

export default Page3Dosen