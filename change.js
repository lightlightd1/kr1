const change = document.getElementById("change");

change.addEventListener("click", change_all);

function change_all() {
    const surname = document.getElementById("surname");
    const firstName = document.getElementById("first-name");
    const patronymic = document.getElementById("patronymic");
    const gender = document.getElementById("gender");
    const passgiven = document.getElementById("passgiven");

    const passport = document.querySelector(".passport");

    if (surname.innerText.trim() === "Марченко") {
        passgiven.innerText = "GU MVD ROSSII PO MO";
        surname.innerText = "Marchenko";
        firstName.innerText = "Anna";
        patronymic.innerText = "Aleksandrovna";
        gender.innerText = "Female";

        passport.style.backgroundImage =
            "url('image/eng_pass.jpg')";
    } else {
        passgiven.innerText = "ГУ МВД РОССИИ ПО МО";
        surname.innerText = "Марченко";
        firstName.innerText = "Анна";
        patronymic.innerText = "Александровна";
        gender.innerText = "Жен";

        passport.style.backgroundImage =
            "url('image/pass.png')";
    }
}