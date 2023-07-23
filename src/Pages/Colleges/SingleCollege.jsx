import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleCollege = () => {
    const { id } = useParams();
    const [college, setColleges] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/colleges/${id}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <div className=" my-4 lg:my-36 flex flex-col lg:flex-row justify-center items-center w-11/12 lg:w-9/12 gap-12 mx-auto">
                <div>
                    <img className=" h-[500px] w-[800px] rounded-md" src={college.collegeIMG} alt="" />
                </div>
                <div className=" my-4 w-9/12">
                    <h1 className="text-4xl underline text-[#187E89] font-bold">{college.collegeName}</h1>
                    <p className="font-bold mt-4">Admission Process: <span className="font-normal">{college.admissionProcess}</span></p>
                    <p className="font-bold">Events Details: <span className="font-normal">{college.eventsDetails}</span></p>
                    <p className="font-bold">Research Works: <span className="font-normal ">{college.researchWorks}</span></p>
                    <p className="font-bold">Sports categories: <span className="font-normal">{college.sports}</span></p>
                </div>

            </div>
        </div>
    );
};

export default SingleCollege;