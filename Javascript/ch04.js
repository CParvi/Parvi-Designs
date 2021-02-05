var table = 3; //Unit of table
var operator = 'addition'; //Type of calculation (defaults to addition)
var i = 1; //Set counter to 1
var msg = ''; //Message
var workType = ['Filler', 'Simple Edit', 'Logo', 'Site Template', 'Photo Edit', 'Collaboration'];

if (operator === 'addition') {
	//Do addition
	while (i < 6) {
		msg += workType[i] + ' = ' + '$' + (i + table) + '<br />';
		i++;
	}
} else {
	//Do multiplication
	while (i < 6) {
		msg += workType[i] + ' = ' + '$' + (i * table) + '<br />';
		i++;
		}
	}
	
//Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;