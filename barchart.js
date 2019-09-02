const queueSize = getNumberOfCustomer();

function getNumberOfCustomer() {
    return Math.floor(Math.random()*36);
}

function getBars(){
    let myBars = document.querySelectorAll(".bar");
    let myBarsArray = Array.from(myBars);
    return myBarsArray;
}

function setBarsHeight(){
    let myBars = getBars();
    for(let i=0; i<myBars.length; i++){
        myBars[i].style.height = getNumberOfCustomer()*5+'px';
    }
}

function updateBarList(){
    var node = document.createElement("DIV");
    node.classList.add("bar");
    node.style.height = getNumberOfCustomer()+'px';
    document.getElementById("container").appendChild(node);
    let elem = document.querySelector('.bar');
    elem.parentNode.removeChild(elem);
}

setBarsHeight();

setInterval(updateBarList, 1000);


// getBars();