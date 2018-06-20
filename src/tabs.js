const tabs = (newLabels) => {
  const makeTab = (label, index) => {
    let newTab = document.createElement("li");
    newTab.innerText = label;
    newTab.setAttribute("class", "tab");
    newTab.setAttribute("id", "tab-" + index);
    newTab.setAttribute("style", "background: white; list-style: none; display: inline-block; height: 56px; padding: 10px 20px;");
    return newTab;
  };
  const makeTabs = (labels) => {
    let newTabs = [];
    labels.forEach(function(label, index){
      newTabs.push(makeTab(label, index));
    });
    return newTabs;
  };
  const makeTabList = (tabs) => {
    let newTabList = document.createElement("ul");
    tabs.forEach(function(tab){
      newTabList.appendChild(tab);
    });
    return newTabList;
  };
  const showTabs = (tabList) => {
    let container = document.getElementById("content");
    container.appendChild(tabList);
    return true;
  };
  let newTabs = makeTabList(makeTabs(newLabels));
  return showTabs(newTabs);
};

export default tabs;
