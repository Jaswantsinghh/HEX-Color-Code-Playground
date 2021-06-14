document.querySelector("#btn").addEventListener("click", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector("#hex-code").value = "#" + randomColor;
})

document.querySelector("#copy").addEventListener("click", function () {
    let copyText = document.querySelector("#hex-code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("copied the code: " + copyText.value);
})

document.querySelector("#enterCode").addEventListener("click", function () {
    const color = document.querySelector("#hex-code").value;
    document.body.style.backgroundColor = color;
})