import "../input.css";
import { useEffect } from "react"; // Import useEffect
import resume from "./purimpatResume.pdf";

function NavBar() {
  // Add an event listener to handle scroll-to-section behavior
  useEffect(() => {
    const handleScrollToSection = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    };

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", handleScrollToSection);
    });

    return () => {
      // Clean up event listeners when component is unmounted
      links.forEach((link) => {
        link.removeEventListener("click", handleScrollToSection);
      });
    };
  }, []);

  return (
    <div className="bg-black fixed w-full z-20">
      <div className="md:container mx-auto ">
        <div className="flex justify-center lg:justify-between h-20">
          <div className="my-auto pt-2">

              <a href={resume} download="purimpatResume.pdf">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm sm:text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 animate-blink">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Download Resume
          </span>
        </button>
      </a>
          </div>
          <div className="flex justify-around w-full lg:w-3/4 xl:w-1/2 my-auto">
            <div>
              <a
                href="#sectionA"
                className="text-white text-sm sm:text-xl  lg:text-3xl hover:text-fuchsia-700 duration-150 nav-link"
              >
                Personal details
              </a>
            </div>
            <div>
              <a
                href="#sectionB"
                className="text-white text-sm sm:text-xl  lg:text-3xl hover:text-fuchsia-700 duration-150 nav-link"
              >
                Experience & Education
              </a>
            </div>
            <div>
              <a
                href="#sectionC"
                className="text-white text-sm sm:text-xl  lg:text-3xl hover:text-fuchsia-700 duration-150 nav-link"
              >
                Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
