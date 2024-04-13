// IsiTabel.jsx
const IsiTabel = ({ className = 'text-abu font-inter font-semibold ml-10', namaSurah, tanggalSetoran, status, showCatatan, catatan, margin0, margin1 = 'ml-96', margin2 = 'ml-36', margin3 = 'ml-36' }) => {
    return (
        <div className={` w-full h-10 flex ${className}`}>
            <div className={`w-40 h-full  ${margin0} items-center flex`}>
                <p className="font-inter">{namaSurah}</p>
            </div>
            <div className={`w-40 h-full  ${margin1}  flex items-center justify-center`}>
                <p>{tanggalSetoran}</p>
            </div>
            {showCatatan && (
                <div className={`w-40 h-full ${margin2} flex items-center justify-center`}>
                    <p>{catatan}</p>
                </div>
            )}
            <div className={`w-40 h-full ${margin3} flex items-center justify-center `}>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default IsiTabel
