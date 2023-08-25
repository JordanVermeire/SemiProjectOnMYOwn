const pressMeBtn = document.getElementById("pressmebtn");
const background = document.getElementById("background");
const feistyBtn = ['feisty1', 'feisty2', 'feisty3', 'feisty4', 'feisty5', 'feisty6', 'feisty7', 'feisty8', 'feisty9'];
let prevFeisty = null;
let clickCount = 0;
const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#000000'];

function changeColor(color) {
    if (color === '#ff0000' || color === '#0000ff' || color === '#4b0082' || color === '#000000') {
        background.style.backgroundColor = color;
        document.body.style.color = '#ffffff'; // Change text color to white 
    } else {
        background.style.backgroundColor = color;
        document.body.style.color = '#000000'; // Change text color to black 
    }
}

pressMeBtn.addEventListener('click', function () {
    if (clickCount < colors.length) {
        changeColor(colors[clickCount]);
        
        // Hide the previous feisty message
        if (prevFeisty) {
            prevFeisty.style.display = "none";
        }

        // Show the corresponding feisty message
        const currFeistyMsg = document.getElementById(feistyBtn[clickCount]);
        currFeistyMsg.style.display = "block";
        prevFeisty = currFeistyMsg; // Update the previous message
    } else {
        // Lock the color to black after 7 clicks
        changeColor('#000000');
        
        // Show the final feisty message
        const finalFeistyMessage = document.getElementById(feistyBtn[8]);
        finalFeistyMessage.style.display = "block";
        prevFeisty = finalFeistyMessage; // Update the previous message
    }

    clickCount++;
});


