import visionmissionimg from "../assets/images/visionmissionimg.png";
import { visionAndMission } from "../util/constant";
import userimg from "../assets/images/userimg.jpeg";
import { useNavigate } from "react-router-dom";
const VisionMission = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-[5rem]">
        <div className="flex flex-col gap-5">
          {visionAndMission.map((item, index) => (
            <div key={index} data-aos="fade-right">
              <h3 className="text-[32px] font-semibold dark:text-white text-darkblack">
                {item.title}
              </h3>
              <p className="desc mt-4">{item.description}</p>
            </div>
          ))}
          <div className="mt-10">
            <button
              data-aos="fade-right"
              onClick={() => navigateTo("/contact-us")}
              className="primary-btn"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigateTo("/services")}
              className="secondary-btn-white ml-4"
            >
              Our Services
            </button>
          </div>
        </div>
        <div
          className="relative w-full h-full min-h-[30rem] rounded-xl bg-left bg-cover bg-no-repeat "
          data-aos="fade-left"
          style={{ backgroundImage: `url(${visionmissionimg})` }}
        >
          <div
            data-aos="fade-left"
            className="absolute md:max-w-[30rem] mx-4 md:mx-0 bottom-5 md:-left-5 gap-5 rounded-xl flex p-5 bg-gradient-to-r from-blue-600 to-primary"
          >
            <img
              src={userimg}
              alt="user-image"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <p className="desc">
                <strong>Let’s Create Something Exceptional</strong> - Reach out
                to us today, and let’s start building something extraordinary
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
