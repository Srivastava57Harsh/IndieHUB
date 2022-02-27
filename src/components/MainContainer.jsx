import React, { useEffect } from "react";
import "./MainContainer.css";
import { FaUsers } from "react-icons/fa";
import AudioList from "./AudioList";

export default function MainContainer() {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  return (
    <div className="mainContainer">
      <div className="menuList">
        <p className=" font-semibold text-lg">#Trending</p>

        <p>
          <i>
            <FaUsers />
          </i>
          1.3M <span>Followers</span>
        </p>
      </div>
      <AudioList />
    </div>
  );
}
