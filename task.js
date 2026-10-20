let calculate = document.getElementById("calculate");

calculate.addEventListener("click", solveTask);

function solveTask() {
    let a = document.getElementById("a").valueAsNumber;
    let result = document.getElementById("result");

    if (!Number.isFinite(a)) {
        result.value = "Введите число";
        return;
    }

    let x;

    if (a < 10) {
        x = a ** 4;
    } else if (a > 61) {
        x = a;
    } else {
        x = a - Math.sin(a ** 2);
    }

    result.value = x;
}
