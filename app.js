document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("#copy").innerHTML = "Copy to Clipbooard!";
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector("#hex-code").value = "#" + randomColor;
    if (randomColor == "000000") {
        document.querySelector("h1").style.color = "white";
    }
    else {
        document.querySelector("h1").style.color = "black";
    }
})

document.querySelector("#copy").addEventListener("click", function () {
    let copyText = document.querySelector("#hex-code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.querySelector("#copy").innerHTML = "Copied!";
})

document.querySelector("#enterCode").addEventListener("click", function () {
    document.querySelector("#copy").innerHTML = "Copy to Clipbooard!";
    const color = document.querySelector("#hex-code").value;
    if ((color.length == 4) || (color.length == 5) || (color.length == 7)) {
        for (let i = 1; i < color.length; ++i) {
            if ((color[i] >= 0 && color[i] <= 9) || (color[i] >= 'a' && color[i] <= 'f') || (color[i] >= 'A' && color[i] <= 'F')) {
                continue;
            }
            else {
                alert("Error not a HEX value!!!");
                break;
            }
        }
    }
    else {
        alert("Error not a HEX value!!!");
    }
    if (color == "#000000") {
        document.querySelector("h1").style.color = "white";
    }
    else {
        document.querySelector("h1").style.color = "black";
    }
    document.body.style.backgroundColor = color;
})