import React from "react";
import IsiInput from "../Elements/IsiInput";
const Tabel1 = ({ className }) => {
    return (
        <div className={`w-3/3 h-1/2 ${className} font-inter`}>
            <div className="w-full h-10 bg-white flex justify-between items-center">
                <div className="flex  w-1/6 justify-between">
                    <p className="text-abu">Kelas</p>
                    <p>Nama</p>
                </div>
                <div className="w-2/5 h-full  flex justify-between mr-16 items-center">
                    <p className="ml-5">Progress</p>
                    <p>Semester</p>
                    <p className="mr-5">Date</p>
                    <div className="w-4 h-4"></div>
                </div>
            </div>
            <IsiInput Kelas={"A"} Nama={"Abdul"} Progress={"25%"} Semester={"3"} Date={"24-10-2022"} />
        </div>
    );
}

export default Tabel1;
