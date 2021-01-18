// Your code goes here

// Events 1(mousedown), 2(mouseup), and 3(mousemove)

    // Grab the page header.
    let header = document.querySelector("header");

    // Event 1 -  mousedown on header.
    header.addEventListener('mousedown', () => {
        header.style.background = "#000000"});
    // Event 2 -  mouseup on header.
    header.addEventListener('mouseup', () => {
        header.style.background = '#669900'});
    // Event 3 -  reset background color on mousemove over header.
    header.addEventListener('mousemove', () => {
        header.style.background = '#ffffff'});


// Event 4(double click)

    // Grab the h1 heading
    let h1 = document.querySelector("h1");

    // Event 4 - rotate the h1 heading on double click.
    h1.addEventListener('dblclick', () => {
        h1.style.transform = "rotate(360deg)";
        h1.style.transition = "all 1s";
    });


// Event 5(mouseenter) and 6(mouseout)

    // Grab the bus image.
    let bus = document.querySelector(".intro img");

    // Event 5 - rotate the bus image on mouse enter.
    bus.addEventListener('mouseenter', () => {
        bus.style.transform = "rotate(360deg)";
        bus.style.transition = "all 2s";
    });

    // Event 6 - rotate the bus image on mouse out.
    bus.addEventListener('mouseout', () => {
        bus.style.transform = "rotate(0deg)";
        bus.style.transition = "all 2s";
    });
    

// Event 7(click)

    // Grab the intro h2 heading.
    let introH2 = document.querySelector(".intro h2");

    // Change the h2 heading background on click.
    introH2.addEventListener('click', () => {
        introH2.style.background = "#699000";
    });


// Event 8(mouseenter) and Event 9(mouseleave)

    // Grab the intro paragraph.
    let introP = document.querySelector(".intro p");

    // Event 8: change the intro paragraph backgound to black on mouseenter.
    introP.addEventListener('mouseenter', () => {
        introP.style.background = "#000000";
        introP.style.color = "#ffffff";
    });

    // Event 9: reset the paragraph background to white on mouseleave.
    introP.addEventListener('mouseleave', () => {
        introP.style.background = "#ffffff";
        introP.style.color = "#000000";
    });


// Event 10(dragstart) and Event 11(dragend)

    // Grab the gondola image.
    let gondolaImg = document.querySelector(".content-destination img");

    // Event 10 - enable dragging on the gondola image to enlarge.
    gondolaImg.addEventListener('dragstart', () => {
        gondolaImg.style.transform = "scale(2)";
        gondolaImg.style.transition = "all 2s";
    });

    // Event 11 - return the gondola image to its original size.
    gondolaImg.addEventListener('dragend', () => {
        gondolaImg.style.transform = "scale(1)";
        gondolaImg.style.transition = "all 2s";
    });


// Stop Propagation

let h4s = document.querySelectorAll("h4");
h4s.addEventListener('click', (event) => {
h4s.style.backgroundColor="#009933";
event.stopPropagation();
console.log("start")
});


// Prevent Default (Stop the navigation items from refreshing the page.)

let stopA = document.querySelector(".main-navigation");
stopA.addEventListener('click', (event) => {
event.preventDefault();
console.log('stopped!');
});
