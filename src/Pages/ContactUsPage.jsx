import { useForm } from "react-hook-form";
import MapComponent from "../Components/MapComponent";
import { useState } from "react";
import { companyDetails } from "../util/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    if (spinner) return;
    setSpinner(true);

    var emailBody = "Name: " + values.fullName + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phoneNumber + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    var payload = {
      to: companyDetails.email,
      name: companyDetails?.name || "GodversAi",
      subject: values.subject,
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="min-h-screen dark:bg-darkblack text-white flex flex-col items-center justify-center pt-[7rem] px-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h1 className="main-title mb-8" data-aos="fade-right">
              Get in Touch
            </h1>
            <div className="space-y-4 desc" data-aos="fade-right">
              <p>Phone: {companyDetails.phone}</p>
              <p>Email: {companyDetails.email}</p>
              <p>Office Address: {companyDetails.address}</p>
              <p>Website: www.aicompany.com</p>
            </div>
          </div>

          <MapComponent />
        </div>

        <div className="w-full max-w-2xl mx-auto paddingbottom">
          <h2 className="main-title mb-8 text-center" data-aos="fade-up">
            Schedule a Consultation
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                data-aos="fade-right"
                {...register("fullName", { required: "Full Name is required" })}
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}

              <input
                data-aos="fade-left"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                data-aos="fade-right"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}

              <input
                data-aos="fade-left"
                {...register("subject", { required: "Subject is required" })}
                type="text"
                placeholder="Subject"
                className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <textarea
              data-aos="fade-up"
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
              rows="5"
              className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            <button
              type="submit"
              // data-aos="fade-up"
              className={`w-full ${
                spinner && `opacity-25 cursor-not-allowed`
              } bg-primary hover:bg-sky-800 text-white py-3 rounded transition-colors`}
            >
              {spinner ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
