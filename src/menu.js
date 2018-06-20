const menu_page = () => {
  const heading = () => {
    let newHeading = document.createElement("h1");
    newHeading.innerText = "Our Menu";
    return newHeading;
  };
  const menu_info = () => {
    let newInfo = document.createElement("p");
    newInfo.innerText = "Our menu is excellent";
    return newInfo;
  };
  const DOMmanip = () =>{
    let container = document.getElementById("content");
    container.setAttribute("style", "background: #a71c0f;");
    container.appendChild(heading());
    container.appendChild(menu_info());
    return true;
  };
  return DOMmanip() ;
};

export default menu_page;
