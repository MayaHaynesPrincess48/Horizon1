/* eslint-disable react/no-unescaped-entities */
import { easeInOut, motion } from "framer-motion";
import hero_gradient from "../assets/hero_gradient.png";
import pattern_dotted from "../assets/pattern_dotted.png";
import StartupCarousel from "./StartupCarousel";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import SecondaryLinkButton from "./ui/SecondaryLinkButton";
import Badge from "./ui/Badge";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        aria-label="Hero"
        className="relative flex flex-col items-center justify-center gap-[80px] overflow-hidden bg-[#F4F6FB] px-[20px] pb-[20px] pt-[40px] md:gap-[40px] lg:px-[40px] lg:pb-[40px]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={hero_gradient}
            alt="Hero Gradient"
            className="absolute top-[700px] w-full object-cover sm:top-[700px] sm:h-[350px] md:top-[690px] md:h-[430px] lg:top-[380px] lg:h-[580px] xl:top-[230px] xl:h-[750px]"
          />
          <img
            src={pattern_dotted}
            alt="Pattern Dotted"
            className="absolute top-[300px] h-[400px] w-full object-cover sm:h-[500px] md:hidden md:h-[600px] lg:opacity-[0.6]"
          />
        </div>
        <div className="relative mx-auto max-w-8xl">
          <div className="grid grid-cols-1 items-center gap-x-[5px] gap-y-2 pt-10 sm:gap-y-6 md:mt-8 lg:mb-[40px] lg:grid-cols-12 lg:pt-0">
            <div className="flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-6">
              <div className="flex flex-col justify-center gap-[24px] lg:px-[40px] xl:px-[60px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.44, 0, 0, 1],
                    },
                  }}
                  viewport={{
                    amount: "some",
                    once: true,
                  }}
                >
                  <Badge text="Coming in Beta" className="mx-auto md:mx-0" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: easeInOut,
                    },
                  }}
                  viewport={{
                    amount: "some",
                    once: true,
                  }}
                  className="text-center text-[45px] font-[600] leading-[105%] tracking-[-2px] text-black md:text-left md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px]"
                >
                  <span className="text-violet-500">Insightful trends</span> to
                  discover real opportunities
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.44, 0, 0, 1],
                    },
                  }}
                  viewport={{
                    amount: "some",
                    once: true,
                  }}
                  className="text-center text-lg text-gray-700 md:text-left"
                >
                  Step into a new era of strategic decision-making. Horizon
                  empowers businesses in the marketing space with unparalleled
                  data analytics.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 100,
                      stiffness: 300,
                      mass: 1,
                      delay: 0.3,
                    },
                  }}
                  viewport={{
                    amount: "some",
                    once: true,
                  }}
                  className="flex flex-col items-center justify-center gap-4 md:flex-row lg:max-w-[350px]"
                >
                  <SecondaryLinkButton
                    to="https://github.com/NabsCodes"
                    target="_blank"
                    ariaLabel="Discover more"
                    linkClassName="w-full"
                    spanClassName="whitespace-nowrap"
                    svgClassName="hidden"
                  >
                    Discover more
                  </SecondaryLinkButton>
                  <PrimaryLinkButton
                    to="https://github.com/NabsCodes"
                    target="_blank"
                    ariaLabel="Get early access"
                    linkClassName="w-full"
                    spanClassName="whitespace-nowrap"
                    svgClassName="transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
                  >
                    Get early access
                  </PrimaryLinkButton>
                </motion.div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="w-auto overflow-hidden rounded-[20px] lg:mt-0 lg:w-[65rem]">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 100,
                      stiffness: 300,
                      mass: 1,
                      delay: 0.3,
                    },
                  }}
                  viewport={{
                    amount: "some",
                    once: true,
                  }}
                  decoding="async"
                  sizes="1015px"
                  width={3045}
                  height={1980}
                  srcSet="https://framerusercontent.com/images/LOAbXWznJsNNcwIB7dPlbgv3E.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/LOAbXWznJsNNcwIB7dPlbgv3E.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/LOAbXWznJsNNcwIB7dPlbgv3E.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/LOAbXWznJsNNcwIB7dPlbgv3E.jpg 3045w"
                  src="https://framerusercontent.com/images/LOAbXWznJsNNcwIB7dPlbgv3E.jpg"
                  alt="Screenshot of the main dashboard with gradients as background"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <StartupCarousel />
      </section>
    </>
  );
};

export default Hero;
