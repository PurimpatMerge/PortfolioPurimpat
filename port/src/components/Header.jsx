import "../input.css";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <div className="flex h-[600px] sm:h-[920px] mx-auto ">
      <div className="w-4/5 mx-auto flex flex-col justify-center text-center">
        <div className="mb-5  ">
          <p className="text-purple-500 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:my-10 ">
            PURIMPAT WAORAKAICHARUPHAK
          </p>
        </div>
        <div className="mb-5">
          <p className=" text-xl md:text-2xl lg:text-4xl font-bold">
            Target Position: Full-stack Web Application Developer
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="flex justify-between w-2/4  lg:w-1/4">
            <p className="text-5xl font-bold  ">{'{'}</p>
            <SocialIcon
              url="https://www.instagram.com/ddpurimpat/"
              bgColor="#000000"
              target="_blank"
              className="social-icon"
              style={{ height: 50, width: 50 }}
              onMouseEnter={(e) => {
                e.target.classList.add("bounce-animation");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("bounce-animation");
              }}
            />
            <SocialIcon
              url="https://github.com/PurimpatMerge"
              bgColor="#000000"
              target="_blank"
              className="social-icon"
              style={{ height: 50, width: 50 }}
              onMouseEnter={(e) => {
                e.target.classList.add("bounce-animation");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("bounce-animation");
              }}
            />
            <SocialIcon
              url="https://www.facebook.com/dunk.purimpat.5"
              bgColor="#000000"
              target="_blank"
              className="social-icon "
              style={{ height: 50, width: 50 }}
              onMouseEnter={(e) => {
                e.target.classList.add("bounce-animation");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("bounce-animation");
              }}
            />
            <p className="text-5xl font-bold ">{'}'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
