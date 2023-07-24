/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const MyColleges = () => {
    const { user } = useContext(AuthContext);
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/usermail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setColleges(data);
            })
    }, [user?.email])
    return (
        <div className='lg:px-8 py-4 lg:py-8'>

                <div className="my-4 text-center">
                    <h1 className="text-3xl  font-semibold text-[#10575f] underline">Total College Booked: {colleges.length} </h1>
                    <p className="font-thin text-gray-700">Check your activity</p>
                </div>
                

                {
                    colleges.length > 0 ?
                    <div className="bg-white h-screen rounded-xl  my-12">
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
                                                <td >{college.college}</td>
                                                <td><Link to={`/colleges/${college.id}`} className="rounded-md  border text-green-600  px-1 py-1 border-green-600 hover:bg-green-600  hover:text-white">Details</Link></td>
                                                <td><Link to={`/review/${college.id}`} className="rounded-md  border text-green-600  px-2 py-1 border-green-600 hover:bg-green-600  hover:text-white">Give Review</Link></td>

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
                </div> : <div className="  p-10 h-screen">
                        <div className=" flex flex-col justify-center items-center gap-4">
                            <h1 className="text-3xl font-bold text-black">You Don't Booked Any College</h1>
                            <Link className="btn border-0 text-white bg-[#187E89] hover:bg-[#10575f]" to='/admission'>Booked College</Link>
                        </div>
                    </div>
                }

            </div>
    );
};

export default MyColleges;