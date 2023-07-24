import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import './ReviewForm.css'


const ReviewForm = () => {
    const { id } = useParams();
    const [review, setReview] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/colleges/${id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const college=form.college.value;
        const name = form.name.value;
        const review =form.review.value;
        const id = form.id.value;
        const newReview = { name, college, id, review}
        

        fetch('http://localhost:3000/reviews', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newReview)
                        })

                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Review Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Thank you'
                                    })
                                    form.reset('');
                                }
                            })
            
            
    }

    return (
        <div>
            <Helmet>
                <title>Admibucket | Review</title>
            </Helmet>
            <form onSubmit={handleReview} className="form">
            <div className="form-group">
                    
                    <input  className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] " hidden readOnly value={review._id} name="id"  type="text" />
                </div>
            <div className="form-group">
                    <label htmlFor="name">Selected College</label>
                    <input disabled className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] "  required="" readOnly value={review.collegeName} name="college"  type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Candidate Name</label>
                    <input required="" readOnly value={user?.displayName} name="name" id="name" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Your Review</label>
                    <input required="" placeholder="Write Review" name="review" id="subject" type="text" />
                </div>
                
                <button type="submit" className="form-submit-btn">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;