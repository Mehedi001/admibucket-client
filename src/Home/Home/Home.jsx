import { Helmet } from "react-helmet-async";
import Colleges from "../../Pages/Colleges/Colleges";
import Review from "../../Pages/Review/Review";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ResearchLink from "./ResearchLink/ResearchLink";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Home | Admibucket</title>
            </Helmet>

            <Banner></Banner>
            <hr className="hr-main my-0 "/>
            <Colleges></Colleges>
            <hr className="hr-main my-6 "/>
            <Gallery></Gallery>
            <hr className="hr-main my-6 "/>
            <Review></Review>
            <hr className="hr-main my-6 "/>
            <ResearchLink></ResearchLink>
            
        </div>
    );
};

export default Home;