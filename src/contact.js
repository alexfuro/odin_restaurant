const contact_page = () => {
  const heading = () => {
    let newHeading = document.createElement("h1");
    newHeading.innerText = "Contact Us";
    return newHeading;
  };
  const contact_info = () => {
    let newInfo = document.createElement("p");
    newInfo.innerText = "La Esquina can be contacted at: Twitter: @laesquina";
    return newInfo;
  };
  const DOMmanip = () =>{
    let container = document.getElementById("content");
    container.appendChild(heading());
    container.appendChild(contact_info());
    return true;
  };
  return DOMmanip() ;
};

export default contact_page;
