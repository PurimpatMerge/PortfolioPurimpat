import "../input.css";

function NextSec({id}) {
  return (
      <div id={id} className="container mx-auto flex justify-center text-center overflow-hidden ">
    <div className="flex h-[400px] sm:h-[320px] justify-center items-center flex-col px-10 relative">

      <span className="pulse"></span>
      <p className="text-white text-2xl sm:text-4xl font-bold tracking-wide   " style={{ textShadow: '2px 2px 4px rgba(1, 0, 0, 1)' }}>
        Full-Stack Developer skilled in </p>
      <p className="text-white text-2xl sm:text-3xl font-bold tracking-wide " style={{ textShadow: '2px 2px 4px rgba(1, 0, 0, 1)' }}>
        API development, clean code, performance, solutions and web application development with modern frameworks.
      </p>
    </div>
      </div>
  );
}

export default NextSec;
