const child = document.querySelector(".child");
let count = 0;
const move = (child) => {
    setTimeout(() => {
        if(count < 1416) {
            count += 8;
            child.style.left = `${count}px`;
            move(child);
        }
    }, 10)
}
move(child);