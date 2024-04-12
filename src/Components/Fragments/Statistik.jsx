import Progress from "../Elements/Progress";
const Statistik = () => {
    return (
        <div className="w-4/6  mt-10 h-1/2 flex flex-col">
            <Progress P={'Kerja Praktek'}></Progress>
            <Progress className="w-1/3" presentase="33%" P={'Seminar KP'} className2={'mt-5'}></Progress>
            <Progress className={'w-2/3'} presentase="50%" P={'Seminar Proposal'} className2={'mt-5'}></Progress>
            <Progress className={'w-3/3'} presentase="100%" P={'Seminar Proposal'} className2={'mt-5'}></Progress>
        </div >
    );
}

export default Statistik