import Colleges from "../../Pages/Colleges/Colleges";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <hr className="hr-main my-6 "/>
            <Colleges></Colleges>
            <hr className="hr-main my-6 "/>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;