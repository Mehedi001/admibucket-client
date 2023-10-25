import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const ReviewForm = () => {
    const { id } = useParams();
    const [review, setReview] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://admibucket-server.vercel.app/colleges/${id}`)
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
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newReview = { name, college, id, review, photo, rating}
        

        fetch('https://admibucket-server.vercel.app/reviews', {
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
        <div className="my-28 lg:my-0 lg:h-screen flex justify-center items-center ">
            <Helmet>
                <title> Review Form | Admibucket</title>
            </Helmet>
            <form onSubmit={handleReview} className="bg-gray-200 text-gray-600 rounded-md p-8 lg:p-36">
            <div className="">
                    
                    <input  className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] " hidden readOnly value={review._id} name="id"  type="text" />
                </div>
            <div className="">
                    
                    <input  className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] " hidden readOnly value={user?.photoURL} name="photo"  type="text" />
                </div>
            <div className="">
                    
                    <input disabled className="text-center text-xl mb-2 font-bold text-[#187E89] " readOnly value={review.collegeName} name="college"  type="text" />
                </div>
                <div className=" ">
                    
                    <input disabled className="text-xl mb-2 uppercase text-center" readOnly value={user?.displayName} name="name" id="name" type="text" />
                </div>
                <div className="w-full relative px-3 ">
                    <h1>Your Rating</h1>
                            <select name="rating" className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                            <div className="pointer-events-none absolute -inset-y-2 right-4 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 5"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                            
                        </div>
                <div className="flex flex-col mt-4 px-3">
                    <label htmlFor="subject">Your Review</label>
                    <input  className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required="" placeholder="Write Review" name="review" id="subject" type="text" />
                </div>
                
                <button type="submit" className="mt-8 btn text-white font-thin hover:bg-[#0b3e44] bg-[#187E89]">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;