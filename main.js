const UpdateValue = (e,val) => {

    if(e.type === "number"){ 
        e.value = e.value > 255 ? 255 : e.value < 0 || e.value == "" ? 0 : e.value
    }

    document.querySelector(`#${val}`).value = e.value
    screen.style.backgroundColor = `rgb(${sliRed.value},${sliGreen.value},${sliBlue.value})`
}

