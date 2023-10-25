import { Slide } from "react-awesome-reveal";



const Banner = () => {
    return (
        <div>
            {/* Search Button  */}
            <div className="form-control mt-2">
                <div className="input-group flex justify-center lg:pr-4 lg:justify-end">
                    <input type="text" placeholder="Search Colleges…" className="input input-bordered border-[#187E89] placeholder:text-[#187E89] text-[#187E89]" />
                    <button className="btn btn-square bg-[#187E89] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center ">
                <Slide>
                    <div>
                        <img className="w-11/12 mx-auto" src="https://i.ibb.co/bzGHwhr/bannerBG.png" alt="" />
                    </div>
                </Slide>
                <Slide direction="right">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-8xl uppercase">Welcome to <br /> <span className="font-bold text-[#187E89]">ADMIBUCKET</span></h1>
                        <p className="text-[#848484]  lg:text-md leading-tight pt-4" >Discover your dream college with our comprehensive booking site!  Easily explore and <br /> compare colleges worldwide, access detailed information about academic programs, <br /> campus facilities, and admission requirements.  </p>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Banner;