const fibonacci = () => {
    const num = parseInt(document.getElementById('input').value);

    if (isNaN(num) || num < 0) {
        document.getElementById('result').innerText = 'Enter a valid positive number';
        return;
    }

    let fib = [];
    for (let i = 0; i <= num; i++) {
        fib.push(fibFunc(i));
    }

    document.getElementById('result').innerText = `Fibonacci series: ${fib.join(', ')}`;
};

const fibFunc = (num) => {
    if (num <= 1) {
        return num;
    } else {
        return fibFunc(num - 1) + fibFunc(num - 2);
    }
};
