const experiences = [
{
name: "Beaches",
icon: "🌊",
description:
"Enjoy peaceful beaches, clear Pacific waters, and beautiful island scenery."
},
{
name: "Tongan Culture",
icon: "🇹🇴",
description:
"Experience strong family traditions, music, dance, language, and community."
},
{
name: "Traditional Food",
icon: "🥥",
description:
"Discover traditional dishes prepared with local ingredients and shared with family."
},
{
name: "Island Activities",
icon: "🐋",
description:
"Enjoy outdoor experiences such as swimming, boating, fishing, and whale watching."
},
{
name: "History",
icon: "📖",
description:
"Learn about Tonga's history, heritage, monarchy, and connections across the Pacific."
},
{
name: "Community",
icon: "🤝",
description:
"Experience the importance of family, respect, hospitality, and community life."
}
];

/* Footer information */
function displayFooterInformation() {


const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = `${new Date().getFullYear()}`;
}

if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}


}

/* Create experience cards */
function displayExperiences(items, containerId) {


const container = document.querySelector(`#${containerId}`);

if (!container) {
    return;
}

container.innerHTML = items.map((item) => `
    <article class="info-card">
        <div class="icon" aria-hidden="true">${item.icon}</div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
    </article>
`).join("");


}

/* Populate favorite dropdown */
function populateFavoriteSelect() {


const select = document.querySelector("#favorite-select");

if (!select) {
    return;
}

experiences.forEach((experience, index) => {

    const option = document.createElement("option");

    option.value = `${index}`;
    option.textContent = `${experience.name}`;

    select.appendChild(option);
});

const savedFavorite = localStorage.getItem("favoriteExperience");

if (savedFavorite !== null) {
    select.value = savedFavorite;
}


}

/* Save favorite experience */
function saveFavorite() {


const select = document.querySelector("#favorite-select");
const message = document.querySelector("#favorite-message");

if (!select || !message) {
    return;
}

if (select.value === "") {

    message.textContent =
        `Please choose an experience before saving.`;

    return;
}

const selectedExperience = experiences[Number(select.value)];

localStorage.setItem(
    "favoriteExperience",
    `${select.value}`
);

message.textContent =
    `${selectedExperience.name} has been saved as your favorite!`;


}

/* Mobile navigation */
function setupNavigation() {


const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (!menuButton || !navigation) {
    return;
}

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute(
        "aria-expanded",
        `${isOpen}`
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? `Close navigation menu`
            : `Open navigation menu`
    );
});


}

/* Contact form */
function setupContactForm() {


const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

if (!form || !message) {
    return;
}

form.addEventListener("submit", () => {

    localStorage.setItem(
        "lastContact",
        `${new Date().toLocaleString()}`
    );

    message.textContent =
        `Thank you for sharing your experience!`;
});


}

/* Run page functions */
displayFooterInformation();

setupNavigation();

displayExperiences(experiences, "highlight-container");

displayExperiences(experiences, "experience-container");

populateFavoriteSelect();

setupContactForm();

const favoriteButton =
document.querySelector("#favorite-button");

if (favoriteButton) {
favoriteButton.addEventListener(
"click",
saveFavorite
);
}