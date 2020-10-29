const toggleSwitch = document.querySelector("input[type='checkbox']");
const toggleText = document.querySelector("#toggle-container span");
const toggleIcon = document.querySelector("#toggle-container i");
const imagesContainer = document.querySelectorAll(".image-container img");

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

function switchTheme() {
    let isDarkMode = toggleSwitch.checked,
        theme      = isDarkMode ? DARK_THEME : LIGHT_THEME;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Elements
    toggleText.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
    isDarkMode ? 
        toggleIcon.classList.replace("fa-sun", "fa-moon") 
        : 
        toggleIcon.classList.replace("fa-moon", "fa-sun");
    
    // Images
    for (const image of imagesContainer) {
        image.src = isDarkMode ? image.src.replace(LIGHT_THEME, DARK_THEME) : image.src.replace(DARK_THEME, LIGHT_THEME)
    }
}

toggleSwitch.addEventListener("change", switchTheme);

if(localStorage.getItem("theme") && localStorage.getItem("theme") === DARK_THEME){
    toggleSwitch.checked = true;
    switchTheme();
}