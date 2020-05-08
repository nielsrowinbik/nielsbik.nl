// Listen to preference changes. The event only fires in inactive tabs, so theme changes aren't applied twice.
const syncBetweenTabs = () => {
    window.addEventListener("storage", (e) => {
        const root = document.documentElement;
        if (e.key === "preference-theme") {
            if (e.newValue === "light") enableTheme("light", false);
            else if (e.newValue === "dark") enableTheme("dark", false);
        }
    });
};

// Add a listener in case OS-level preference changes.
const listenToOSChanges = () => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQueryList.addListener((m) => {
        const root = document.documentElement;
        if (m.matches !== true) {
            if (!root.classList.contains("theme-light")) {
                enableTheme("light");
            }
        } else {
            if (!root.classList.contains("theme-dark")) enableTheme("dark");
        }
    });
};

// Add a listener in case used decides to switch on the spot..
const listenToButtonClicks = () => {
    const button = document.getElementById("toggle-theme");

    button.addEventListener("click", (e) => switchTheme());
};

const getFromLocalStorage = () => {
    const pref = localStorage.getItem("preference-theme");
    const lastChanged = localStorage.getItem("preference-theme-last-change");
    let now = new Date();
    now = now.getTime();
    const minutesPassed = (now - lastChanged) / (1000 * 60);

    if (minutesPassed < 120 && pref === "light") return "light";
    else if (minutesPassed < 120 && pref === "dark") return "dark";
    else return undefined;
};

// If no preference was set, check what the OS pref is.
const getFromOS = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDark.matches) return "dark";

    const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
    if (prefersLight.matches) return "light";

    return undefined;
};

// Compute the opposite of a given theme.
const getOppositeTheme = (theme) => (theme === "dark" ? "light" : "dark");

// Save a theme to local storage.
const saveToLocalStorage = (value) => {
    const now = new Date().getTime();
    localStorage.setItem("preference-theme", value);
    localStorage.setItem("preference-theme-last-change", now);
};

// Enable a theme and save it if specified.
const enableTheme = (newTheme = "light", save = true) => {
    const root = document.documentElement;
    const otherTheme = getOppositeTheme(newTheme);

    root.classList.add("theme-" + newTheme);
    root.classList.remove("theme-" + otherTheme);

    if (save) saveToLocalStorage(newTheme);
};

// Utility function to switch to the opposite theme and save the change.
const switchTheme = () =>
    enableTheme(getOppositeTheme(getFromLocalStorage() || getFromOS()));

// Find if user has set a preference and react to changes
syncBetweenTabs();
listenToOSChanges();
listenToButtonClicks();
enableTheme(getFromLocalStorage() || getFromOS());
