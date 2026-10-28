import cocktailsImg from "./cocktails.jpg";

export const loadMenu = (contentDiv) => {
    contentDiv.textContent = '';

    const h1 = document.createElement("h1");
    h1.textContent = "Drink Menu";
    contentDiv.appendChild(h1);

    const p1 = document.createElement("p1");
    p1.textContent = "Moonbeam & Tonic";
    contentDiv.appendChild(p1);

    const p2 = document.createElement("p2");
    p2.textContent = "Witches Brew Martini";
    contentDiv.appendChild(p2);

    const img = document.createElement("img");
    img.src = cocktailsImg;
    contentDiv.appendChild(img);
}