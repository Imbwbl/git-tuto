document.querySelector('#exercises-button').addEventListener('click', function() {
    document.querySelector("#site").classList.toggle('hide');
})

function copy(e) {
    navigator.clipboard.writeText(e.innerText)
}