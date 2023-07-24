import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";


const Review = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data.slice(0,4)))
    }, [])
    return (
        <div className="my-12">
            <h1 className="text-center my-8 text-[#187E89] text-4xl font-bold">Student Review</h1>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {
                reviews.map(review=> <div
                    key={review.id}
                    className="flex w-80 flex-col justify-center items-center p-12 rounded-md text-gray-500 bg-gray-300"
                    >
                        <img className="rounded-full w-20" src={user?.photoURL} alt="" />
                        <p className="italic">Student:{review.name}</p>
                    <p className="font-bold text-sm text-gray-400">5 ★★★★★</p>
                    <p className="font-bold ">{review.review}</p>
                    
                </div>)
            }
            </div>
        </div>
    );
};

export default Review;