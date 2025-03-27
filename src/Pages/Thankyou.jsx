import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className=" flex flex-col justify-between bg-primary/20">
      <div className="wrapper  h-full flex flex-col items-center py-[15rem] gap-3 text-black text-center">
        <h1 className="main-title">Thank You!</h1>
        <p className="desc !font-semibold">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4 text-black">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
