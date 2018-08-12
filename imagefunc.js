function displayNextImage() 
{
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img-about").src = images[x];
}

  function startTimer() 
{
    setInterval(displayNextImage, 7000);
}

var images = [], x = -1;
images[0] = "./images/bruno2.jpg";
images[1] = "./images/chef.jpg";
images[2] = "./images/about.jpg";
images[3] = "./images/bruno3.jpg"