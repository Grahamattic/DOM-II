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


