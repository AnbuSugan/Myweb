import React from "react";

const Header = () => {
  return (
    <div class="col mt-4 p-5 ">
      <h1 class="text-center fs-2 mt-5 ">Anbarasu.D</h1>
      <p class="text-center fs-6 mt-2">Software Developer</p>
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="Project">
            Project
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="Youtube">
            Youtube
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            href="Contact"
            tabindex="-1"
            aria-disabled="true"
          >
            Contact{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
