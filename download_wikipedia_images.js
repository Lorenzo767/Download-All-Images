var download = (url) => {fetch(url)
.then(response => response.blob())
.then(blob => {
    var blobURL = URL.createObjectURL(blob);
    var a_tag = document.createElement("a");
    a_tag.href = blobURL;
    a_tag.style = "display: none";
    var filename = url.substring(url.lastIndexOf('/') + 1);
    a_tag.download = filename;
    document.body.appendChild(a_tag);
    a_tag.click();
    document.body.removeChild(a_tag);
    URL.revokeObjectURL(blobURL);
}) };

var a_tags = document.getElementsByClassName("image"); // Change the class name for whichever class name a website uses for its images to download its images
for (let i = 0; i < a_tags.length; i++) {
    actual_link = a_tags[i].firstElementChild.getAttribute("src");
    download(actual_link);
}