import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";


const AdmissionForm = () => {

    const { id } = useParams();
    const [college, setColleges] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/colleges/${id}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])


    const handleAdmission = (event) => {
        event.preventDefault();
        const form = event.target;
        const college=form.college.value;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const number = form.number.value;
        const address = form.address.value;
        const birthday = form.birthday.value;
        const photo = form.photo.value;
        const id = form.id.value;
        const _id= ( 'ObjectId' + ' ' + (id));
        const newStudent = { name, email, college, _id, photo, subject, number, address, birthday };
        

        fetch('http://localhost:3000/admission', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newStudent)
                        })

                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Admission Form Fill up Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Thank you'
                                    })
                                    form.reset('');
                                }
                            })
            
            
    }

    return (
        <div className="form-container mx-auto my-14">
            <Helmet>
                <title>Admibucket | Admission Form</title>
            </Helmet>
            <div className="logo-container">
                Admission Form
            </div>

            <form onSubmit={handleAdmission} className="form">
            <div className="form-group">
                    
                    <input  className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] " hidden readOnly value={college._id} name="id"  type="text" />
                </div>
            <div className="form-group">
                    <label htmlFor="name">Selected College</label>
                    <input disabled className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] "  required="" readOnly value={college.collegeName} name="college"  type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Candidate Name</label>
                    <input required="" readOnly value={user?.displayName} name="name" id="name" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject Name</label>
                    <input required="" placeholder="Subject name" name="subject" id="subject" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required="" readOnly value={user?.email} name="email" id="email" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Candidate Phone Number</label>
                    <input required="" placeholder="Candidate Phone Number" name="number" id="number" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input required="" placeholder="Address" name="address" id="address" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Candidate Birthday</label>
                    <input className="border px-2 py-3 rounded-md" required="" placeholder="Candidate Birthday" name="birthday" id="birthday" type="date" />
                </div>
                <div className="form-group">
                    <label htmlFor="photo">Photo URL</label>
                    <input placeholder="Enter your Photo link" defaultValue={user?.photoURL} name="photo" id="photo" type="text" />
                </div>


                <button type="submit" className="form-submit-btn">Apply Now</button>
            </form>

        </div>
    );
};

export default AdmissionForm;