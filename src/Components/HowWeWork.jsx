import { useNavigate } from "react-router-dom";
import backgroundimg from "../assets/images/backgroundimg.png";
import backgroundwhiteimg from "../assets/images/backgroundwhiteimg.png";
import howweworkimg from "../assets/images/howweworkimg.jpeg";
import { useTheme } from "../Context/ThemeContext";

const HowWeWork = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <div>
      <div className=" relative overflow-hidden paddingtop paddingbottom">
        <div className="absolute inset-0 z-0">
          <img
            src={isDarkMode ? backgroundimg : backgroundwhiteimg}
            alt=""
            className="w-full h-full object-contain opacity-30"
          />
        </div>

        <div className="wrapper relative z-10">
          <div className="text-center mb-12">
            <h1 className="main-title" data-aos="fade-up">
              Invest in your Goals with aicompany
            </h1>
            <p className="desc" data-aos="fade-up">
              Organize your team's media lists in one tool and see how each
              contact engages with your campaigns.
            </p>
          </div>

          <section className="grid md:grid-cols-2 gap-10">
            <div className="">
              <img
                src={howweworkimg}
                alt="Innovation concept"
                className="w-full rounded-lg"
                data-aos="fade-right"
              />
            </div>
            <div className=" h-full flex flex-col gap-5">
              <h2
                className="text-[32px] font-bold text-primary"
                data-aos="fade-right"
              >
                How We Work
              </h2>
              <p className="desc" data-aos="fade-right">
                At aicompany, we collaborate closely with clients to understand
                their unique goals and challenges, developing tailored
                strategies that leverage quantum-level AI solutions. Our agile
                design and development process ensures adaptive, user-centric
                experiences, followed by rigorous testing to guarantee
                performance and security. Post-deployment, we provide continuous
                support, ensuring our solutions evolve in tandem with your
                business growth.
              </p>
              <button
                onClick={() => navigateTo("/contact-us")}
                data-aos="fade-right"
                className="primary-btn w-fit"
              >
                Get Started
              </button>
            </div>
          </section>

          <section className="my-16">
            <h2
              className="text-[32px] font-bold text-primary mb-6"
              data-aos="fade-up"
            >
              Looking Toward the Future
            </h2>
            <p className="desc" data-aos="fade-up">
              At aicompany, our vision is to be the most advanced AI-driven
              ecosystem that bridges the real and digital worlds. We are
              committed to empowering businesses, innovators, and cosmic
              explorers with quantum-level AI solutions that redefine how we
              live, work, and connect—on Earth and beyond. As we look toward the
              future, we aim to expand our services across various domains,
              including governance, fintech, healthcare, robotics, energy,
              education, space exploration, and defense. Our goal is to ensure
              that Web 3.0 becomes the foundation of self-evolving digital
              ecosystems across these sectors, driving innovation and fostering
              growth in an ever-evolving technological landscape.
            </p>
          </section>

          <section>
            <h2
              className="text-[32px] font-bold text-primary mb-6"
              data-aos="fade-up"
            >
              Let's Create Something Exceptional
            </h2>
            <p className="desc" data-aos="fade-up">
              At aicompany, we believe that exceptional achievements are born
              from visionary collaborations. By merging your unique aspirations
              with our quantum-level AI expertise, we can co-create
              groundbreaking solutions that captivate audiences across galaxies.
              Let's embark on this cosmic journey together and transform your
              ideas into reality.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
