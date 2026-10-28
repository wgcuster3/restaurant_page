import cocktailsImg from "./cocktails.jpg";

export const loadAbout = (contentDiv) => {
    contentDiv.textContent = '';
    
    const h1 = document.createElement("h1");
    h1.textContent = "About The Gates of Hell";
    contentDiv.appendChild(h1);

    const h3 = document.createElement("h3");
    h3.textContent = "Contact Rodin@gatesofhell.biz";
    contentDiv.appendChild(h3);

    const img = document.createElement("img");
    img.src = cocktailsImg;
    contentDiv.appendChild(img);
}