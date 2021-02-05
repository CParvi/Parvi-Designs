var textInput, noteName, textEntered, target, promo; //Declare variables

promo = document.getElementById('promo');
noteName = document.getElementById('noteName'); //Element that holds note

function writeLabel(e) { //Declare function
	if (le) { //If event object not present
		e = window.event; //Use IE5-8 fallback
	}
	target = event.target || event.srcElement; //Get target of event
	textEntered = e.target.value; //Value of that element
	noteName.textContent = textEntered; //Update note text
}

//This is where the record / pause controls and functions go...
//See right hand page

if (document.addEventListener) { //If event listener supported
	document.addEventListener('click', function(e) { //For any click document
		recorderControls(e); //Call recorderControls()
	}, false); //Capture during bubble phase
	//If input event fires on username input call writeLabel()
	textInput.addEventListener('input', writeLabel, false);
} else { //Otherwise
	document.attachEvent('onclick', function(e) { //IE fallback: any click
		recorderControls(e); //Calls recorderControls()
	});
	//If keyup event fires on username input call writeLabel()
	textInput.attachEvent('onkeyup', writeLabel, false);
}

function recorderControls(e) { //Declare recorderControls()
	if (!e) { //If event object not present
		e = window.event; //Use IE5-8 fallback
	}
	target = event.target || event.srcElement; //Get the target element
	if (event.preventDefault) { //If preventDefault() supported
	e.preventDefault(); //Stop default action
	} else { //Otherwise
	event.returnValue = false; //IE fallback: stop default action
}

switch(target.getAttribute('data-state')) { //Get the data-state attribute
	case 'record': //If its value is record
		record(target); //Call the record() function
		break;
	case 'stop': //If its value is stop
		stop(target); //Call the stop() function
		break; //Exit function to where called
		//More buttons could go here...
	}
};

function record(target) { //Declare function
	target.setAttribute('data-state', 'stop'); //Set the data-state attr to stop
	target.textContent = 'stop'; //Set text to 'stop'
}

function stop(target) {
	target.setAttribute('data-state', 'record'); //Set data-state attr to record
	target.textContent = 'record'; //Set text to 'record'
}