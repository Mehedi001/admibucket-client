import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";



const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://admibucket-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data.slice(0,4)))
    }, [])

    return (
       <Slide direction="right">
         <div className="my-12 mx-auto">
            <h1 className="text-center my-8 text-[#187E89] text-4xl font-bold">Student Review</h1>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {
                reviews.map(review=> <div
                    key={review.id}
                    className="flex w-80 h-72 text-center flex-col justify-center items-center p-12 rounded-md text-gray-500 bg-gray-300"
                    >
                        <img className="rounded-full w-20" src={review.photo} alt="" />
                        <p className="italic">Student:{review.name}</p>
                    <p className="font-bold text-sm text-gray-400 mt-4">{review.rating} ★★★★★</p>
                    <p className="font-bold ">{review.review}</p>
                    
                </div>)
            }
            </div>
        </div>
       </Slide>
    );
};

export default Review;