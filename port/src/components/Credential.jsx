import "../input.css";
import profileImg from "./me.jpg";
import htmlicon from "./photoSkills/html.png";
import nosqlicon from "./photoSkills/nosql-database.png";
import css from "./photoSkills/css.png";
import JavaScript from "./photoSkills/JavaScript.png";
//
import reactjs from "./photoSkills/react-js.png";
import tailwind from "./photoSkills/tailwind-logo.png";
import antd from "./photoSkills/antd.png";
import axios from "./photoSkills/axios.png";
import firebase from "./photoSkills/firebase.png";
import express from "./photoSkills/express.png";
import mongoose from "./photoSkills/mongoose.png";
//
import swagger from "./photoSkills/swagger.png";
import postman from "./photoSkills/postman.png";
import jira from "./photoSkills/jira.png";
import auth0 from "./photoSkills/auth0.png";
import GitHub from "./photoSkills/GitHub.png";
import render from "./photoSkills/render.png";
import bitbuk from "./photoSkills/bitbuk.png";

function Credential({ id }) {
  return (
    <div className="bg-black ">
      <div id={id} className="sm:w-1/2 sm:w-3/4 mx-auto pt-10 pb-10">
        <div className="flex flex-col lg:flex  lg:flex-row  ">
            {/* Personal info */}
          <div className=" lg:w-1/2 2xl:w-4/12 p-5  lg:border-r lg:boder-white ">
          <p className="text-center text-white font-bold text-3xl mb-5">
          Personal info
            </p>
            <div className="flex justify-center">
              <img src={profileImg} alt="profileImg" className="shadow-lg shadow-indigo-500/50 h-[300px] mt-5 lg:h-[300px] xl:h-[450px] " />
            </div>
            <div className="mt-5 text-center lg:text-left">
              <p className="text-white">Nickname : Dunk</p>
              <p className="text-white">Phone number : 082-563-9991</p>
              <p className="text-white">Email : mergeofficial@hotmail.com</p>
            </div>
          </div>
          {/* Skills */}
          <div className=" lg:w-1/2  2xl:w-8/12 sm:pl-5 sm:pt-5  sm:pr-0  ">
            <p className="text-center text-white font-bold text-3xl mb-5">
              SKILLS
            </p>
            <div className="flex flex-col 2xl:flex  2xl:flex-row ">
              <div className="2xl:w-1/2 mb-5">
                <p className="text-center text-white  text-xl ">
                  Expert Programming Languages
                </p>
                {/* rows 1 */}
                <div className=" grid grid-cols-4 gap-2 p-5 pb-16">
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={htmlicon}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">HTML</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={nosqlicon}
                      alt="nosqlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">No SQL</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={css}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">CSS</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={JavaScript}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">JS</p>
                  </div>
                </div>
                {/* split */}
                <p className="text-center text-white  text-xl">
                  Library and Framworks
                </p>
                {/* rows 1  */}
                <div className=" grid grid-cols-4 gap-2 p-5 ">
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={reactjs}
                      alt="htmlicon"
                      className="h-[35px] w-[60px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">ReactJS</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={tailwind}
                      alt="nosqlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Tailwind</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={antd}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Antd</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={axios}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Axios</p>
                  </div>
                </div>
                {/* rows 2 */}
                <div className="grid grid-cols-3 gap-10 px-5">
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={firebase}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Firebase</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={express}
                      alt="htmlicon"
                      className="h-[35px] w-full mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Express</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 pt-5 sm:p-5 rounded-md ">
                    <img
                      src={mongoose}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto "
                    />
                    <p className="text-white text-center text-xs sm:text-base">Mongoose</p>
                  </div>
                </div>
                
              </div>
              {/* split */}
              <div className="2xl:w-1/2 ">
                <p className="text-center text-white  text-xl">Others</p>
                {/* rows 1 */}
                <div className=" grid grid-cols-4 gap-2 p-5 ">
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={swagger}
                      alt="htmlicon"
                      className="h-[35px] w-full mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Swagger</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={postman}
                      alt="nosqlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Postman</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={jira}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Jira</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={auth0}
                      alt="htmlicon"
                      className="h-[35px] w-[50px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Auth0</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={GitHub}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">GitHub</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={render}
                      alt="htmlicon"
                      className="h-[35px] w-[50px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">Render</p>
                  </div>
                  <div className="backdrop-blur-sm backdrop-blur-sm bg-white/10 p-5 rounded-md">
                    <img
                      src={bitbuk}
                      alt="htmlicon"
                      className="h-[35px] w-[35px] mx-auto"
                    />
                    <p className="text-white text-center text-xs sm:text-base">bitbuket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credential;
