import "../input.css";
import { useEffect } from "react"; // Import useEffect

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
    <div className="bg-black">
    <div className="container mx-auto">
      <div className="flex justify-center lg:justify-end h-20">
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
