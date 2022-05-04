

var btnMin = document.getElementById("minimize");
var btnMax = document.getElementById("maximize");
var btnClose = document.getElementById("close");



function addMulti(target, events, functionName) {
    events.forEach(element => {
        target.addEventListener(element, function() {
            functionName()
        })
    });
}


btnMin.addEventListener('mousedown', () => {
    btnMin.style.backgroundImage = "url(./tl/Minimize_Button_Active.svg)"
})
addMulti(btnMin, ['mouseup', 'mouseout'], () => {
    btnMin.style.backgroundImage = ""
})



btnMax.addEventListener('mousedown', () => {
    btnMax.style.backgroundImage = "url(./tl/Maximize_Button_Active.svg)"
})
addMulti(btnMax, ['mouseup', 'mouseout'], () => {
    btnMax.style.backgroundImage = ""
})



btnClose.addEventListener('mousedown', () => {
    btnClose.style.backgroundImage = "url(./tl/Close_Button_Active.svg)"
})
addMulti(btnClose, ['mouseup', 'mouseout'], () => {
    btnClose.style.backgroundImage = ""
})

new MutationObserver(function(mutations) {
    document.querySelector('#title').innerHTML = document.title
}).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
);


const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;
btnMin.addEventListener("click", (e)=>{
    ipc.send('minimizeApp')
})
btnMax.addEventListener("click", (e)=>{
    ipc.send('maximizeApp')
})
btnClose.addEventListener("click", (e)=>{
    ipc.send('closeApp')
})