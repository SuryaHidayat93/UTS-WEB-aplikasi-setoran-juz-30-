const IsiTabel2 = ({ className = 'text-abu font-inter font-semibold', namaSurah, tanggalSetoran, status }) => {
    return (
        <div className={` w-full h-10 flex font-black${className}`}>
            <div className="w-40 h-full items-center ml-24 flex">
                <p className="font-inter">{namaSurah}</p>
            </div>
            {/* <div className="w-40 h-full  ml-96 flex items-center justify-center">
                <p>{tanggalSetoran}</p>
            </div> */}
            <div className="w-40 h-full  ml-auto flex items-center justify-center">
                <p>{status}</p>
            </div>
        </div>
    )
}

export default IsiTabel2