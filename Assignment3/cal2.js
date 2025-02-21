function Solve(val) {
    var display = document.getElementById('res');
    display.value += val;
}

function Result() {
    var expression = document.getElementById('res').value;
    try {
        var result = eval(expression.replace('x', '*'));
        document.getElementById('res').value = result;
    } catch {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    var display = document.getElementById('res');
    display.value = display.value.slice(0, -1);
}

// Keyboard functionality
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});
