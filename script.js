function onDayClick(event) { //this is an event listener, so it'll receive as parameter an event 
    //we clicked a day! how do we know which one?
    
    let previouslySelectedDay = document.querySelector('.selected');

    if (previouslySelectedDay !== null) {
        previouslySelectedDay.classList.remove("selected");
    }
    
    previouslySelectedDay.classList.remove('selected')
    

    let clickedDayNode = event.target
    
    
    clickedDayNode.classList.add('selected') //now we're selecting the days and they stay selected
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