function onLoadActions() {
    //TODO Highlight Extension
    
    for (let day = 1; day <= 30; day++) {
        let dayNode = document.createElement('div') //step 1: create the element div
        
        dayNode.classList.add('day') //step 2: this is for the style
        dayNode.innerText = day //still step 2

        document.getElementById('days-container').appendChild(dayNode) // step 3


    }
}

window.onload = onLoadActions