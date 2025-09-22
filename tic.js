let clickCount = 0;
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            clickCount++;
            box.textContent = (clickCount % 2 === 1) ? "O" : "X";
        document.querySelectorAll("box1")
        }
    });
});