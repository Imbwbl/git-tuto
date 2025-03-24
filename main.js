let site = document.querySelector("#site")

document.querySelector('#exercises-button').addEventListener('click', function() {
    site.classList.toggle('hide');
})

function copy(e) {
    navigator.clipboard.writeText(e.innerText)
}