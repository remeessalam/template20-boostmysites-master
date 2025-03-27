import { coreValues } from "../util/constant";
import RoundedHeader from "./RoundedHeader";

const CoreValues = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper flex gap-10 flex-col justify-center items-center">
        <RoundedHeader title="Why Choose Us" />
        <h1 data-aos="fade-up" className="main-title">
          Our Core Values
        </h1>
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {coreValues.map((obj) => (
            <div
              data-aos="fade-up"
              key={obj.id}
              className="w-full h-full p-5 border dark:border-primary rounded-xl"
            >
              <div className="flex justify-between w-full items-center">
                <h1 className="text-2xl font-medium dark:text-primary">
                  {obj.title}
                </h1>
                <img src={obj.icon} alt="" />
              </div>
              <p className="desc max-w-[25rem]">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
