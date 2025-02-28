// Function to set theme
function setTheme(isLight) {
    if (isLight) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Function to toggle theme
function toggleTheme(e) {
    setTheme(e.target.checked);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('#switch input[type="checkbox"]');
    if (themeSwitch) {
        // Get stored theme or use system preference
        const storedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        
        // Set initial state
        const isLight = storedTheme === 'light';
        themeSwitch.checked = isLight;
        setTheme(isLight);

        // Add event listener for theme switching
        themeSwitch.addEventListener('change', toggleTheme);
    }
}); 