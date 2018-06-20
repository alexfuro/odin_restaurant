import home_page from './home_page';
import tabs from './tabs';
import clearDOM from './clearDOM'
import contact from './contact'

let tabLabels = ["Home","Contact","Menu"];
tabs(tabLabels);
home_page();
clearDOM();
contact();
