// JS DOM Assignment - Div Creation

function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');

    // Add width and height with "px" units
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';

    // Set the text content
    newDiv.textContent = text;

    // Append the new div to the container div
    document.getElementById('container').appendChild(newDiv);
}

// Example usage
createDiv(200, 100, 'Hello, this is a new div!');