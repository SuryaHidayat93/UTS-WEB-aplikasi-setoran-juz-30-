import Navbar from "../Fragments/Navbar";
import Progress from "../Elements/Progress";
const Page3Mahasiswa = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <Progress P={'Kerja Praktek'} presentase="50%" className2="mt-5"></Progress>
                <Progress P={'Seminar KP'} presentase="33%" className2="mt-5" className="w-1/3"></Progress>
                <Progress P={'Seminar Proposal'} presentase="50%" className2="mt-5" className="w-2/3"></Progress>
                <Progress P={'Seminar Hasil'} presentase="100%" className2="mt-5" className="w-3/3"></Progress>
            </div>
        </div>

    );
}

export default Page3Mahasiswa