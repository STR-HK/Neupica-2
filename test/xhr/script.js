let xhr = new XMLHttpRequest()
xhr.onerror = function (e) {
    console.log(e)
}
xhr.onreadystatechange = function () {
    if (xhr.readyState == 0) {
        console.log("0 UNSENT")
        console.log(xhr.status)
    } else if (xhr.readyState == 1) {
        console.log("1 OPENED")
        console.log(xhr.status)
    } else if (xhr.readyState == 2) {
        console.log("2 HEADERS_RECEIVED")
        console.log(xhr.status)
    } else if (xhr.readyState == 3) {
        console.log("3 LOADING")
        console.log(xhr.status)
    } else if (xhr.readyState == 4) {
        console.log("4 DONE")
        console.log(xhr.status)
    }
}
xhr.open(
    "GET",
    "https://avatars.agithubusercontent.com/u/99663138?s=60&v=4",
    false
)
// xhr.responseType = "blob"
xhr.onload = function () {
    let blob = new Blob([this.response])
    document.getElementById("img").src = URL.createObjectURL(blob)
}

try {
    xhr.send(null)
} catch (e) {
    console.log(e)
}

document.addEventListener("error", (e) => {
    console.log(e)
})
