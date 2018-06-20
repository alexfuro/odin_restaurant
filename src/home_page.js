const home_page = () => {
  const image = () => {
    let newImage = document.createElement("img");
    newImage.setAttribute("src","images/home_splash.jpg");
    return newImage;
  };
  const heading = () => {
    let newHeading = document.createElement("h1");
    newHeading.innerText = "La Esquina";
    return newHeading;
  };
  const caption = () => {
    let newCaption = document.createElement("p");
    newCaption.innerText = "La Esquina is a unique restaurant where flavorful"
     + " Latin, loving Italian  and exquisit Asian culinary meet into a flavor" +
     " experience extravaganza. So come on into the corner of flavor paradise.";
    return newCaption;
  };
  const DOMmanip = () =>{
    let container = document.getElementById("content");
    container.appendChild(heading());
    container.appendChild(image());
    container.appendChild(caption());
    return true;
  };
  return DOMmanip() ;
};

export default home_page;
