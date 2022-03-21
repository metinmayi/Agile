export function registerUser() {
    const form = document.querySelector(".registerForm");
    // All of the inputs on the page.
    const formInputs = document.querySelectorAll("input");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        // Checks that password and repeat password are a match.
        if (formInputs[1].value !== formInputs[2].value) {
            const errorParagraph = document.createElement("p");
            errorParagraph.setAttribute("id", "errorParagraph");
            errorParagraph.append(
                "Dina lösenord matchade inte varandra. Försök igen"
            );
            form.appendChild(errorParagraph);
            return;
        }

        // Attempts to register the user
        try {
            const response = await fetch(
                "http://localhost:3000/users/register",
                {
                    method: "POST",
                    mode: "cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: formInputs[0].value,
                        password: formInputs[1].value,
                    }),
                }
            );
            const successParagraph = document.createElement("p");
            successParagraph.setAttribute("id", "successParagraph");
            successParagraph.append(
                "Din registrering lyckades. Du kommer omdirigeras till Login sidan alldeles strax"
            );
            form.appendChild(successParagraph);
            setTimeout(() => {
                window.location.href = response.url;
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    });
}
