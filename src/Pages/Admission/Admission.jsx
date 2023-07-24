import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Admission = () => {
    const [colleges, setColleges] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        
        <div className="bg-white h-screen rounded-xl  my-12">
            <h1 className="text-2xl text-center lg:text-4xl underline font-bold text-[#187E89] mb-12">Available Colleges: {colleges?.length}</h1>
                        <div className="overflow-x-auto">
                            <table className="table table-compact w-9/12 mx-auto ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>College Name</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        colleges && colleges.map((college, i) =>
                                            <tr key={college._id}>
                                                <th>{i + 1}</th>
                                                <td >{college.collegeName}</td>
                                                <td><Link to={`/colleges/${college._id}`} className="rounded-md  border text-green-600  px-1 py-1 border-green-600 hover:bg-green-600  hover:text-white">Details</Link></td>
                                                <td><Link to={`/admission/${college._id}`} className="rounded-md  border text-green-600  px-2 py-1 border-green-600 hover:bg-green-600  hover:text-white">Book Now</Link></td>

                                            </tr>
                                )
                                    }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

    );
};

export default Admission;