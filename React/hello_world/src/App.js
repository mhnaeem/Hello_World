import React from "react";
import "./index.css"

function App() {
  return (
    <div>

      <div class="heading">
        <h1 class="main-heading">
          <span class="remove">Hi I'm </span>
          <span class="color1">Muh</span>
          <span class="color2">amm</span>
          <span class="color3">ad</span>
          <span class="color4">Ham</span>
          <span class="color5">mad</span>
        </h1>
      </div>

      <div class="second-part">
        <p>You can find more information about me at ->
          <a
            href="https://www.cs.mun.ca/~mhnaeem"
            class="link">https://www.cs.mun.ca/~mhnaeem
          </a>
        </p>

        <h3 class="project-heading">
          Hello World Project:
        </h3>

        <p>This is just a fun project, I am trying to add a hello world program in all the programming languages and frameworks I come in contact with.</p>
      </div>

    </div>
  )
}

export default App
