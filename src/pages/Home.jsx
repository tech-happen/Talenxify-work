import React, { useState } from "react";
import hero from "../assets/img/cuate.png";
import HomeLayout from "../components/layout/HomeLayout";
import Button from "../components/Button";
import Partners from "../components/Partners";
import Work from "../components/Work";
import WorkCard from "../components/WorkCard";
import RecruiterCard from "../components/RecruiterCard";

const Home = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {};
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const recruiter = [
    "When you hire exceptional talent, it elevates the overall performance of your team, leading to better results and collaboration.",
    "Talented employees are often more adaptable, allowing your organization to navigate changes and grow in a dynamic environment.",
    "Having top talent gives your organization a competitive edge in the market, setting you apart from competitors.",
    "Skilled professionals contribute to higher efficiency and productivity, helping your team achieve its goals faster.",
    "Talented individuals bring fresh ideas and perspectives, driving innovation and enhancing problem-solving.",
  ];
  const talent = [
    "Recruiters have networks that give you access to the best candidates, including passive job seekers.",
    "Recruiters handle the screening, interviews, and initial vetting, allowing you to focus on your core tasks.",
    "They understand industry-specific needs and can match the right talent with the right opportunities.",
    "Recruiters ensure you hire someone with not just the right skills but also the right cultural fit for your team.",
    "With recruitment experts managing the process, you’ll experience fewer delays and faster hiring decisions.",
  ];
  return (
    <HomeLayout title="Home - Talenxify">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row lg:gap-x-16 items-center justify-between px-4 lg:px-8 md:my-16 w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[450px] text-center lg:text-left animate-slide-in-left py-8 px-4">
          <h1 className="leading-[7rem]">
            <span className="block text-[48px] leading-[1.25] text-primaryColor">
              Your go-to platform for hiring exceptional
            </span>

            <span className="block text-green-500 text-[66px] sm:text-[76px] md:text-[86px] lg:text-[96px]">
              TALENT
            </span>
          </h1>
          <div className="flex justify-center lg:justify-start mx-auto lg:mx-0 my-8 gap-x-[22px] w-full max-w-[354px]">
            <Button
              href={"/signup"}
              className="bg-primaryColor text-white uppercase w-[50%] max-w-[166px]"
              text="signup"
            />
            <Button
              href={"/login"}
              className="bg-white text-primaryColor uppercase w-[50%]"
              text="login"
            />
          </div>
        </div>

        <div className="w-full flex justify-center flex-grow">
          <img
            src={hero}
            alt="Hero"
            className="w-full sm:h-[500px] object-contain"
          />
        </div>
      </section>

      {/* Partner Section */}
      <section className="my-16 px-4 lg:px-8 w-full max-w-[1440px] mx-auto">
        <h2 className="flex flex-col text-center text-secondaryColor">
          <span className="text-[10px]">LOYAL PARTNERS</span>
          <span className="text-[36px] md:text-[48px]">OUR TOP PARTNERS</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Partners img={"/icons/enforca.svg"} />
          <Partners img={"/icons/enforca.svg"} />
          <Partners img={"/icons/enforca.svg"} />
          <Partners img={"/icons/enforca.svg"} />
          <Partners img={"/icons/enforca.svg"} />
        </div>
      </section>

      {/* How it works Section */}
      <section className="my-16 px-4 lg:px-8 w-full max-w-[1440px] mx-auto">
        <h2 className="flex flex-col text-center text-secondaryColor">
          <span className="text-[10px]">FEATURES SERVICES</span>
          <span className="text-[36px] md:text-[48px]">HOW IT WORKS</span>
        </h2>
        <div className="">
          <div className="flex flex-col sm:flex-row items-center gap-4 my-4">
            <Work
              bgImage="bg-[url('/images/frame1.png')]"
              title="talent matching"
              caption="Talenxify uses advanced algorithms to match recruiters with the best talent for their specific needs. Our system analyzes skills, experience, and job requirements to ensure that you are only presented with candidates who are the perfect fit for your role, saving time and streamlining the hiring process."
            />
            <Work
              className="hidden sm:block"
              bgImage="bg-[url('/images/frame2.svg')]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 my-4">
            <Work
              className="hidden sm:block"
              bgImage="bg-[url('/images/frame3.svg')]"
            />
            <Work
              bgImage="bg-[url('/images/frame4.png')]"
              title="collaboration"
              caption="With built-in communication and project management tools, Talenxify allows recruiters and potential hires to collaborate effortlessly. Share updates, schedule interviews, and review portfolios in one platform, ensuring that all interactions are smooth and organized."
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 my-4">
            <Work
              bgImage="bg-[url('/images/frame5.svg')]"
              title="talent pool"
              caption="Access a diverse and highly skilled global talent pool on Talenxify. Whether you're looking for developers, designers, or digital marketers, our platform gives you access to professionals from around the world, offering flexibility and the ability to tap into remote talent across different time zones."
            />
            <Work
              className="hidden sm:block"
              bgImage="bg-[url('/images/frame6.svg')]"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-start sm:items-start justify-around gap-[20px] my-16">
          <WorkCard title="10K+" caption="Active Job Seekers" />
          <WorkCard title="25%" caption="Save 75% in Talent Cost" />
          <WorkCard title="3+" caption="Companies using Talenxify" />
        </div>
      </section>

      {/*Recruiter and Talents Section */}
      <section className="px-4 lg:px-8 py-[67.5px] bg-[rgba(255,255,255,0.8)] bg-[url('/images/recruiter.svg')] bg-blend-hue bg-cover">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="max-w-[542px] mx-auto">
            <h2 className="flex flex-col text-center text-secondaryColor text-[36px] md:text-[40px]">
              Breaching the gap between Recruiters and Talents
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center sm:items-stretch justify-center my-[25px] gap-8">
            <RecruiterCard title="FOR RECRUITERS" data={recruiter} />
            <RecruiterCard title="FOR TALENTS" data={talent} />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="px-4 lg:px-8 py-[100px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="max-w-[542px] mx-auto">
            <h2 className="flex flex-col text-center text-secondaryColor text-[36px] md:text-[40px]">
              Be on the lookout & Join Our Waitlist
            </h2>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-[23px] md:gap-[12px] items-center justify-center my-[25px]"
            >
              <input
                type="email"
                required
                name="email"
                onChange={handleChange}
                className="w-full max-w-[569px] border-2 border-primaryColor outline-none rounded-full py-[12px] px-[31px]"
              />
              <button className="bg-primaryColor text-white w-[200px] text-center py-[12px] rounded-full border-2 border-primaryColor">
                JOIN WAITLIST
              </button>
            </form>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;
