import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllColleges = () => {
    const [colleges, setColleges] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto my-12 w-11/12 lg:w-9/12">
            {
                colleges && colleges.map(college => 
                <div className="border-b-2 lg:border-b-0 p-2 lg:border-e-2 " key={college.id}>
                    <div>
                    <img className=" h-[400px] w-[600px] rounded-md" src={college.collegeIMG} alt="" />
                    </div>
                    <div className=" my-4">
                    <h1 className="text-4xl text-[#187E89] font-bold">{college.collegeName}</h1>
                    <p className="font-bold mt-4">Research History: <span className="font-normal">{college.researchHistory}</span></p>
                    <p className="font-bold">Events: <span className="font-normal">{college.events}</span></p>
                    <p className="font-bold">Sports: <span className="font-normal">{college.sports}</span></p>
                    <p className="font-bold">Admission Date: <span className="font-normal text-xl text-green-600">{college.admissionDate}</span></p>
                    </div>
                    <Link to={`/colleges/${college._id}`} className="rounded-md  border text-green-600  px-2 py-1 border-green-600 hover:bg-green-600  hover:text-white">Details</Link>
                </div>)
            }
            
        </div>
    );
};

export default AllColleges;