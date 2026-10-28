import cocktailsImg from "./cocktails.jpg";

export const loadHome = (contentDiv) => {
    contentDiv.textContent = '';

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to The Gates of Hell";
    contentDiv.appendChild(h1);

    const h3 = document.createElement("h3");
    h3.textContent = "Come one, come all to the one and only, the gauche but fabulous, the tacky but chic, Rodin's The Gates of Hell";
    contentDiv.appendChild(h3);

    const img = document.createElement("img");
    img.src = cocktailsImg;
    contentDiv.appendChild(img);
}