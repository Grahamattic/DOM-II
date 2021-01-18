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
    

