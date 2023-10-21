import "./Banner.css"

const Banner = () => {
    return (
        <div className="w-full h-[500px] banner flex flex-col text-center">
            <h1 className="text-3xl md:text-5xl text-white font-semibold">You are welcome <br /> to <br /> our tech and electronics site</h1>
            <p className="text-lg md:text-2xl font-semibold text-white mt-3">We build different sites for various renowned brands. We strive to provide <br /> the highest level of service to our clients.</p>
            
        </div>
    );
};

export default Banner;