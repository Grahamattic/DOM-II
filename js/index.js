// Your code goes here

// Events 1(mousedown), 2(mouseup), and 3(mousemove)

    // Grab the page header.
    let header = document.querySelector("header");

    // Event 1 -  mousedown on header.
    header.addEventListener('mousedown', () => {
        header.style.background = "#000000"});
    // Event 2 -  mouseup on header.
    header.addEventListener('mouseup', () => {
        header.style.background = '#ffffff'});
    // Event 3 -  reset background color on mousemove over header.
    header.addEventListener('mousemove', () => {
        header.style.background = '#ffffff'});

