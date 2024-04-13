import IsiTabel from "../Elements/IsiTabel"
const Tabel2 = ({ className = 'text-abu font-inter font-semibold', }) => {
    return (
        <div className=" w-full h-1/2  mt-10 ml h-full">
            <div className=" w-full h-10 ml-10">
                <p className="font-inter font-semibold">Daftar Setoran Surah</p>
            </div>
            <div className={` w-full h-8 ml-10 flex ${className}`}>
                <div className="w-40 h-full ">
                    <p className="font-inter font-semibold ">Nama Surah</p>
                </div>
                <div className="w-40 h-full  ml-96 flex items-center justify-center">
                    <p>Tanggal Setoran</p>
                </div>
                <div className="w-40 h-full  ml-36 flex items-center justify-center">
                    <p>Status</p>
                </div>
            </div>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
            <IsiTabel className="mt-0 border-t border-abumuda font-medium font-inter ml-10" namaSurah={"An-Naba'"} tanggalSetoran={"24-10-2022"} status={"Selesai"}></IsiTabel>
        </div>
    )
}

export default Tabel2