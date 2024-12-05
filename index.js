
//// DEBUG ////
document.onkeydown = function (e) {
    if (e.key == "a") {
        document.querySelector('.text-container').classList.toggle('closed');
    }
}

//// SHOWER ////
document.querySelectorAll('[content][target]').forEach((el)=>{
    const target = document.querySelectorAll(el.getAttribute('target'));
    const template = /* @type {HTMLTemplateElement} */ (document.querySelector(el.getAttribute('content')));
    console.log(el)
    for(const t of target)t.classList.add('closeable',"closed");
    el.onclick = function() {
        for(const t of target) (async()=>{
            t.classList.add('closed');
            await new Promise(r=>setTimeout(r, 500));
            t.replaceChildren(template.content.cloneNode(true));
            t.classList.remove('closed');
        })()
    }
})

//// Sound ////
document.getElementById('muteSvg').onclick = function() {
    this.style.display = 'none';
    document.getElementById('NomuteSvg').style.display = 'block';
}

document.getElementById('NomuteSvg').onclick = function() {
    this.style.display = 'none';
    document.getElementById('muteSvg').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM complètement chargé !");
    });