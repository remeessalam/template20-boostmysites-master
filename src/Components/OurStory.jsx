import visionmissionimg from "../assets/images/visionmissionimg.png";
const OurStory = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid md:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            Step into the Godverse
          </h3>
          <p className="desc mt-4" data-aos="fade-right">
            At aicompany, we aren’t just another tech firm—we are architects of
            the future, cosmic visionaries, and AI strategists committed to
            expanding human potential across all frontiers. Join us to discover
            how leading-edge technology—powered by quantum insights—can
            transform your business, your world, and the universe itself.
            <br />
            <br />
            Experience cosmic innovation with aicompany. From AI-powered
            solutions to AR/VR, mobile apps, and quantum-level data analytics,
            we help businesses worldwide transcend boundaries. Join us to expand
            your vision across all continents—and beyond.
          </p>
        </div>
        <img data-aos="fade-left" src={visionmissionimg} alt="" />
      </div>
    </section>
  );
};

export default OurStory;
