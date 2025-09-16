import b1 from '../../public/b1.gif';
import b2 from '../../public/b2.gif';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center overflow-hidden">
            <img 
                className="w-full md:w-1/2 h-[40vh] md:h-[50vh] object-cover object-center" 
                src={b1} 
                alt="banner1" 
            />
            <img 
                className="w-full md:w-1/2 h-[40vh] md:h-[50vh] object-cover object-center" 
                src={b2} 
                alt="banner2" 
            />
        </div>
    );
};

export default Banner;
