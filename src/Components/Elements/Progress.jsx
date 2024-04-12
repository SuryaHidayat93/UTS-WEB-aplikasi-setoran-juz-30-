const Progress = ({ className = 'w-1/2', presentase = '50%', P, className2 }) => {
    return (
        <div className={`w-full h-10 ${className2} flex`}>
            <div className=" w-1/4 h-full flex items-center justify-end">
                <p className="mr-5 font-inter font-medium">{P}</p>
            </div>
            <div className=" w-8/12 h-full rounded-xl border border-black bg-abumuda">
                <div className={`h-full ${className} bg-abu rounded-xl`}></div>
            </div>

            <div className="w-1/12 h-10 bg-white flex items-center justify-center">
                <p className="font-inter font-medium">
                    {presentase}
                </p>
            </div>
        </div>
    );
}

export default Progress