import Navbar2 from '../Fragments/Navbar2';
import IsiTabel2 from '../Elements/IsiTabel2';
const Page1Mahasiswa = ({ className = 'text-abu font-inter font-semibold' }) => {
    return (
        <div className=' h-screen w-screen z-10'>
            <Navbar2></Navbar2>
            <div className=" w-full h-10 ">
                <p className="font-inter font-semibold ml-10">Daftar Setoran Surah</p>
            </div>
            <div className={` w-full h-8 flex  ${className}`}>
                <div className="w-40 h-full mr-auto ml-20">
                    <p className="font-inter font-semibold ">Nama Surah</p>
                </div>
                {/* <div className="w-40 h-full  ml-96 flex items-center justify-center">
                    <p>Tanggal Setoran</p>
                </div> */}
                <div className="w-40 h-full  ml-36 flex items-center justify-center">
                    <p>Status</p>
                </div>
            </div>
            <IsiTabel2 className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba"} status={"Selesai"}></IsiTabel2>
            <IsiTabel2 className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba"} status={"Selesai"}></IsiTabel2>
            <IsiTabel2 className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba"} status={"Selesai"}></IsiTabel2>
            <IsiTabel2 className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba"} status={"Selesai"}></IsiTabel2>
        </div>
    );
};

export default Page1Mahasiswa