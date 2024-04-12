import Navbar2 from "../Fragments/Navbar2";
const Page2Mahasiswa = ({ className }) => {
    return (
        <div className=' h-screen w-screen z-10'>
            <Navbar2></Navbar2>
            <div className=" w-full h-10 ">
                <p className="font-inter font-semibold ml-10">Daftar Setoran Surah</p>
            </div>
            <div className={` w-full h-8 bg-slate-300 flex  ${className}`}>
                <div className="w-40 h-full mr-auto ml-20">
                    <p className="font-inter font-semibold bg-slate-400 ">Nama Surah</p>
                </div>
                <div className="w-40 h-full bg-slate-500 ml-80 flex items-center justify-center">
                    <p>Tanggal</p>
                </div>
                <div className="w-40 h-full  ml-70 flex items-center justify-center">
                    <p>Catatan</p>
                </div>
                <div className="w-40 h-full  ml-16 flex items-center justify-center">
                    <p>Status</p>
                </div>
            </div>
        </div>
    );
}

export default Page2Mahasiswa