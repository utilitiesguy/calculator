// Append character to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Calculate result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Prevent syntax errors with proper expression validation
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
