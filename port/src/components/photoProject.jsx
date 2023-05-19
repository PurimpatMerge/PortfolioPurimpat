import "../input.css";
import React from "react";

import fireforest from "./projectGallery/fireforest.PNG";
import guessNumber from "./projectGallery/guessnumber.PNG";
import meal from "./projectGallery/meal.PNG";
import music from "./projectGallery/music.PNG";
import scmtool from "./projectGallery/scmtool.PNG";
import spr from "./projectGallery/SPR.PNG";
import poolvilla from "./projectGallery/Poolvilla.JPG";
import booking from "./projectGallery/booking.JPG";
import carRental from "./projectGallery/carRental.png";

function PhotoGallery({id}) {
  const projects = [
      { image: poolvilla, title: "Booking poolvilla (Web App APIs)", link: "https://merge-poolvilla.onrender.com/" },
      { image: booking, title: "Advance calendar (Web App & APIs)", link: "https://merge-poolvilla.onrender.com/" },
      { image: carRental, title: "Car Rental (APIs assistance)"},
      { image: music, title: "Music collections (Web App)", link: "https://drive.google.com/file/d/1ZtQNfs1oXdtB3Zaj2bdnZFA7osx8O5DF/view" },
      { image: spr, title: "Project Repo (Web App)" },
      { image: scmtool, title: "SCM Tool (Trainer)", link: "https://www.facebook.com/watch/?v=371635971185844&ref=sharing" },
    { image: fireforest, title: "Fire Forest Notification (Mobile)", link: "https://www.facebook.com/groups/arduino.thai/permalink/4729221560453917/" },
    { image: guessNumber, title: "Guess Number (Mobile)", link: "https://www.facebook.com/watch/?v=1227869504304955&ref=sharing" },
    { image: meal, title: "Restaurant Meals (Mobile)", link: "https://drive.google.com/file/d/1zzBrqlurkxNWFUPBed0XWqkO2g8ssC6q/view" },
  ];

  return (
    <div id={id} className="bg-black flex pb-10  mt-60 ">
      <div className="container mx-auto pt-10">
        <p className="text-white text-3xl sm:text-4xl font-bold tracking-wide text-center py-10" style={{ textShadow: '2px 2px 4px rgba(1, 0, 0, 1)' }}>
        These showcased projects
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <a key={index} target="_blank" rel="noopener noreferrer" href={project?.link}>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg hover:scale-105 hover:opacity-75  transition duration-300"
                    src={project.image}
                    alt={project.image}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
