const darkToggle = document.getElementById("dark_mode");

    darkToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkToggle.textContent = "Light Mode";
        } else {
            darkToggle.textContent = "Dark Mode";
        }
    });
