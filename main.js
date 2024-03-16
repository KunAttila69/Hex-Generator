const UpdateValue = (e,val) => {
    document.querySelector(`#${val}`).innerHTML = e.value
    color.style.backgroundColor = `rgb(${sliRed.value},${sliGreen.value},${sliBlue.value})`
}