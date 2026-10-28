import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const contentDiv = document.getElementById("content");

//Load the home page as the initial load
loadHome(contentDiv);

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", function() {
        loadHome(contentDiv);
    });

menuBtn.addEventListener("click", function() {
        loadMenu(contentDiv);
    });

aboutBtn.addEventListener("click", function() {
        loadAbout(contentDiv);
    });