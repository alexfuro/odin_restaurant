const clearDOM = () => {
  let toClear  = document.getElementById("content");

  while(toClear.children.length>1){
    toClear.removeChild(toClear.lastChild);
  }
  return true;
};

export default clearDOM;
