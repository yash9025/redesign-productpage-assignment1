import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="bg-[#01052f] w-full relative flex flex-col py-5 overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className='min-h-[90vh] flex items-center relative'>
                <img
                    src={smallBG}
                    alt="Background"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-10]"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div>

                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row-reverse md:mt-6 lg:mt-0 lg:items-center lg:justify-between px-4 max-w-[1538px] mx-auto">
                    {/* Content Section */}
                    <div className="lg:w-1/2 lg:pr-8">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize text-white">
                            <span className="text-primary">AI Front Office</span> <br />
                            for Healthcare Agents
                        </h1>
                        <p className="text-lg my-8 font-light leading-relaxed">
                            Create your <span className="text-primary font-bold">AI Store</span> in just 2 minutes! <br />
                            Scale effortlessly with <span className="font-bold text-primary">Digital Marketing</span>.
                        </p>
                        <HcfSignupPopup 
                            popupButtonStatus 
                            buttonChildren={
                                <Button block variant='solid' className='rounded-[5px] max-w-[200px]'>
                                    Get Started
                                </Button>
                            } 
                        />
                        <div className="text-white flex gap-12 mt-8 flex-wrap">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold">
                                    2100<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">Qualified Doctors</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold">
                                    1000<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">Hospitals</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold">
                                    800<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">Treatment Plans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;