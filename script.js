const keys = document.querySelectorAll(".key");
const insert = document.getElementById("insert");


window.addEventListener("keydown", (Evnt) => {

    insert.innerHTML = `
    <div class="key"> ${Evnt.key === " " ? "Space" : Evnt.key}
    <small>event.key</small></div>
    <div class="key"> ${Evnt.keyCode}
    <small>event.keycode</small></div>
    <div class="key"> ${Evnt.code}
    <small>event.code</small></div>
    `
})