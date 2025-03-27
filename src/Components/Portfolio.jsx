import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { appPortfolio, webPortfolio } from "../util/constant";
import RoundedHeader from "./RoundedHeader";
import { Link } from "react-router-dom";
const animation = { duration: 60000, easing: (t) => t };

const Portfolio = ({ page }) => {
  const isWeb = page === "web-development";
  //   const isApp = page === "app-development";

  const displayedWebPortfolio = isWeb || !page ? webPortfolio : [];
  const displayedAppPortfolio = !isWeb || !page ? appPortfolio : [];

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": { slides: { perView: 1, spacing: 30 } },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": { slides: { perView: 1, spacing: 30 } },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="my-[5rem]">
      <div className="">
        <div data-aos="fade-up" data-aos-offset="-200">
          <div className=" flex justify-center w-full">
            <RoundedHeader title={"Portfolio"} />
          </div>

          {displayedWebPortfolio.length > 0 && (
            <>
              <h3 className="main-title text-center my-10" data-aos="fade-up">
                Web Projects
              </h3>
              <div ref={sliderRef} className="keen-slider ">
                {displayedWebPortfolio.map((obj) => (
                  <Link
                    to={obj.link}
                    key={obj.id}
                    className="keen-slider__slide border-4 dark:bg-darkblack border-primary/40 rounded-xl bg-custom-gradient object-cover"
                  >
                    <img
                      src={obj.img}
                      alt={obj.title}
                      className="rounded-t-xl hover:scale-105 transition-all duration-300 lg:max-h-[316px] w-full 2xl:max-h-[467px] object-cover"
                    />
                    <div className="px-3 mt-3 pb-5">
                      <h4 className="small-heading dark:text-white text-center">
                        {obj.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {displayedAppPortfolio.length > 0 && (
            <>
              <h3 className="main-title text-center my-16" data-aos="fade-up">
                App Projects
              </h3>
              <div ref={sliderRef2} className="keen-slider">
                {displayedAppPortfolio.map((obj) => (
                  <Link
                    to={obj.link}
                    key={obj.title}
                    className="keen-slider__slide border-4 dark:bg-darkblack border-primary/40 rounded-xl bg-custom-gradient"
                  >
                    <img
                      src={obj.img}
                      alt={obj.title}
                      className="rounded-t-xl hover:scale-105 transition-all duration-300 lg:max-h-[316px] w-full 2xl:max-h-[467px] object-cover"
                    />
                    {/* <div
                      className={`lg:max-h-[316px] 2xl:max-h-[467px] 2xl:min-h-[467px] flex items-end w-full overflow-hidden`}
                    >
                    </div> */}
                    <div className="px-3 mt-3 pb-5 max-h-[96px]">
                      <h4 className="font-semibold dark:text-white text-xl text-center">
                        {obj.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
