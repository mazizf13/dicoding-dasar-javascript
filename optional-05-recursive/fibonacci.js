function fibonacci(n) {
    const fibo = (n) => {
        if (n <= 1) {
            return n;
        }
        return fibo(n-1) + fibo(n-2);
    };

    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(fibo(i));
    }
    return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
