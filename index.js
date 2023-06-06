// import { DateTime } from 'luxon';
import setListenersToNavigationBar from './modules/navigation_bar.js';
import Books from './modules/books_constructor.js';
const { DateTime } = require('luxon');

/* --start dates--*/
const currentDate = DateTime.now().toLocaleString(DateTime.DATE_MED);
const dateTimeAttribute = DateTime.now().toString(DateTime.DATE_SHORT);
const currentTime = document.getElementById('currentTime');
currentTime.datetime = dateTimeAttribute;
currentTime.innerText = `${currentDate}`;

/* --Ends dates--*/
// nav-bar
setListenersToNavigationBar();

// object constructor

const booksCollection = new Books();
booksCollection();