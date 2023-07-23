import Colleges from "../../Pages/Colleges/Colleges";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <hr className="hr-main my-6 "/>
            <Colleges></Colleges>
            <hr className="hr-main my-6 "/>
            
        </div>
    );
};

export default Home;