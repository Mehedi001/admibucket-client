


const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center ">
            <div>
                <img className="w-11/12 mx-auto" src="https://i.ibb.co/bzGHwhr/bannerBG.png" alt="" />
            </div>
            <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-8xl uppercase">Welcome to <br /> <span className="font-bold text-[#187E89]">ADMIBUCKET</span></h1>
                <p className="text-[#848484]  lg:text-md leading-tight pt-4" >Discover your dream college with our comprehensive booking site!  Easily explore and <br /> compare colleges worldwide, access detailed information about academic programs, <br /> campus facilities, and admission requirements.  </p>
            </div>
        </div>
    );
};

export default Banner;