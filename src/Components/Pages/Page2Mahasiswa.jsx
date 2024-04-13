import IsiTabel from '../Elements/IsiTabel';
import Navbar2 from "../Fragments/Navbar2";
const Page2Mahasiswa = ({ className }) => {
    return (
        <div className=' h-screen w-screen z-10'>
            <Navbar2></Navbar2>
            <div className=" w-full h-10 ">
                <p className="font-inter font-semibold ml-10">Daftar Setoran Surah</p>
            </div>
            <div className={` w-full h-8 flex  ${className}`}>
                <div className="w-40 h-full mr-auto ml-20">
                    <p className="font-inter font-semibold  ">Nama Surah</p>
                </div>
                <div className="w-40 h-full  ml-80 flex items-center justify-center">
                    <p>Tanggal</p>
                </div>
                <div className="w-40 h-full  ml-70 flex items-center justify-center">
                    <p>Catatan</p>
                </div>
                <div className="w-40 h-full  ml-16 flex items-center justify-center">
                    <p>Status</p>
                </div>
            </div>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"} showCatatan={true} catatan={"-"} margin0={"ml-20 mr-auto"} margin1={"ml-80"} margin2={"ml-70"} margin3={"ml-16"}></IsiTabel>
        </div>
    );
}

export default Page2Mahasiswa