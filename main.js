const UpdateValue = (e,val) => {

    if(e.type === "number"){ 
        e.value = e.value > 255 ? 255 : e.value < 0 || e.value == "" ? 0 : e.value
    }

    document.querySelector(`#${val}`).value = e.value
    document.querySelector(`#screen`).style.backgroundColor = `rgb(${sliRed.value},${sliGreen.value},${sliBlue.value})`

    rgbVal.innerHTML = `rgb(${sliRed.value},${sliGreen.value},${sliBlue.value})`
    hexVal.innerHTML = `#${ToHex(sliRed.value)}${ToHex(sliGreen.value)}${ToHex(sliBlue.value)}`
}

const ToHex = (text) => {
    let hex = parseInt(text).toString(16)
    return hex.length == 1 ? "0" + hex : hex
}