import home_page from './home_page';
import tabs from './tabs';
import clearDOM from './clearDOM'
import contact_page from './contact'
import menu_page from './menu'

let tabLabels = ["Home","Contact","Menu"];
tabs(tabLabels);

const addListerners = () => {
  let listenHome = document.getElementById("tab-0");
  listenHome.addEventListener("click", function(){
    clearDOM();
    home_page();
  });
  let listenContact = document.getElementById("tab-1");
  listenContact.addEventListener("click", function(){
    clearDOM();
    contact_page();
  });
  let listenMenu = document.getElementById("tab-2");
  listenMenu.addEventListener("click", function(){
    clearDOM();
    menu_page();
  });
  return true;
};

addListerners();
clearDOM();
home_page();
