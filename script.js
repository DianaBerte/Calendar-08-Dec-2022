//GLOBAL VARIABLES - the memory of our calendar:

/*basically, it'd be a LIST OF APPOINTMENTS - OBJECTS, bc a calendar can have a list of appointments for each day.


let appointmentsForDay1 = [
    {time: "9:00", title: "Epicode lecture"},
    {time: "12:30", title: "lunch"},
];*/

let appointments = [
    [{time: "9:00", title: "Epicode lecture"}, {time: "12:30", title: "lunch"}], //list of appointments for day 1
    [], //day 2
    [], //day 3
    ///... and so on, for 30 days
]

function visualizeAppointments (event) {
    let selectedDay = event.target.innerText;
    selectedDayNumber = parseInt(selectDay);
    let index = selectedDayNumber - 1;
    let appointmentsForSelectedDay = appointments[index]

    for (let appointment of appointmentsForSelectedDay) {
        let appointmentLi = document.createElement('li');

        appointmentLi.innerText = `${}`

        document.getElementById("appointments-list").appendChild(appointmentLi)

    }
}

function selectDay(event) { //this is an event listener, so it'll receive as parameter an event 
    //we clicked a day! how do we know which one?
    
    let previouslySelectedDay = document.querySelector('.selected');

    if (previouslySelectedDay !== null) {
        previouslySelectedDay.classList.remove("selected");
    }
    
    previouslySelectedDay.classList.remove('selected')
    

    let clickedDayNode = event.target
    
    
    clickedDayNode.classList.add('selected') //now we're selecting the days and they stay selected
}

function onDayClick(event) {
    selectDay(event)
    visualizeAppointments(event);
}


function onLoadActions() {
    //TODO Highlight Extension
    
    for (let day = 1; day <= 30; day++) {
        let dayNode = document.createElement('div') //step 1: create the element div
        
        dayNode.classList.add('day') //step 2: this is for the style
        dayNode.innerText = day //still step 2
        dayNode.addEventListener("click", onDayClick) //without () when adding event listener

        document.getElementById('days-container').appendChild(dayNode) // step 3: append it
    }
}

window.onload = onLoadActions