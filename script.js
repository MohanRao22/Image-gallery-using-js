const map = ["https://wallpaperaccess.com/full/2703791.jpg", "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg", "https://www.teahub.io/photos/full/1-12815_purplish-blue-landscape-wallpaper-purple-and-blue-landscape.jpg", "https://mocah.org/uploads/posts/343911-Neon-Scenery-Landscape-Digital-Art.jpg"];

let header = document.createElement("h1");
header.innerText = "Displaying Image via Js";
header.style.textAlign = "center";
header.style.textShadow = "1px 1px 2px red";
document.body.append(header);


let divBox = document.createElement("div");
divBox.style.border = "2px solid black";
document.body.append(divBox);


for (var img of map) {

    var imga = document.createElement("img");
    imga.setAttribute("src", img);
    imga.style.width = "300px";
    imga.style.height = "300px";
    imga.style.backgroundSize = "cover";
    imga.style.margin = "3px";
    divBox.append(imga);



}