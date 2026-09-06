```javascript
// ------------------------------
// Current Year
// ------------------------------

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// ------------------------------
// Last Modified Date
// ------------------------------

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// ------------------------------
// Hamburger Menu
// ------------------------------

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
```
