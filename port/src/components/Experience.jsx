import "../input.css";

function Experience() {
  return (
    <div className="px-5">
    <div  className="flex   mx-auto justify-center ">
      <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-violet-500 dark:bg-violet-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
              2023
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold">Education</h4>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
              Bachelor Degree, Software Engineering
            </p>
            <ul className="marker:text-violet-400 list-disc pl-5 space-y-3 text-slate-500">
              <li> Payap University First-className honors, GPA: 3.56</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-violet-500 dark:bg-violet-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
              2022
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold">Experience</h4>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
              Manao software
            </p>
            <ul className="marker:text-violet-400 list-disc pl-5 space-y-3 text-slate-500">
              <li>Developed and optimized backend APIs NoSQL for the Manao Meals project.</li>
              <li>Collaborated in an Agile development environment, following Scrum methodology.</li>
              <li>Optimized CRUD operations and database queries to improve system performance.</li>
              <li>Implemented scheduled tasks using Firebase Cloud Messaging for timely notifications.</li>
              <li>Created Swagger documentation for streamlined API testing.</li>
              <li>Implemented token-based authentication for enhanced security and access control.</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-violet-500 dark:bg-violet-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
              2021-2022
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold">Project</h4>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            hand-on
            </p>
            <ul className="marker:text-violet-400 list-disc pl-5 space-y-3 text-slate-500">
              <li>Booking web appilcation user and admin (Full stack).</li>
              <li>Car Rental web appilcation user and admin (only back-end).</li>
              <li>Seminar about session based token (jwt).</li>
              <li>Fire forest notification (mobile app).</li>
              <li>Crestaurant meal (mobile app).</li>
              <li>SCM presentation how to use tools.</li>
            </ul>
          </div>
        </li>

      </ol>
    </div>
     </div>
  );
}

export default Experience;
