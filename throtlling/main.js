const btn = document.getElementById("button");

const throttling = (fun, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if(now - prev > delay) {
            prev = now;
            return fun(...args);
        }
    }
}

btn.addEventListener('click',
    throttling(() => {
        console.log("Button is clicked");
    }, 5000));
