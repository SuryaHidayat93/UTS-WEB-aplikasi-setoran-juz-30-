const IsiInput = ({ className, Kelas, Nama, Progress, Semester, Date }) => {
    return (
        <div className={`w-3/3 h-1/2 ${className} font-inter`}>
            <button className="w-full h-10 bg-white flex justify-between items-center border-t border-abumuda">
                <div className="flex  w-1/6 justify-between">
                    <p className="text-abu">{Kelas}</p>
                    <p>{Nama}</p>
                </div>
                <div className="w-2/5 h-full  flex justify-between mr-12 items-center">
                    <div className="rounded-md border font-semibold ml-8 border-abumuda bg-white">
                        <p>{Progress}</p>
                    </div>
                    <div className=" font-semibold rounded-md border border-abumuda bg-white h-7 w-7 items-center flex justify-center">
                        <p>{Semester}</p>
                    </div>
                    <p>{Date}</p>
                    <img className="w-4 h-4" src="/images/more.png" alt="" />
                </div>
            </button>
        </div>
    );
}

export default IsiInput