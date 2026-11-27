document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("portfolioTheme");
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  if (button) {
    const updateIcon = () => {
      button.textContent = document.body.classList.contains("dark-theme") ? "☀" : "☾";
    };
    
    updateIcon();
    
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem(
        "portfolioTheme",
        document.body.classList.contains("dark-theme") ? "dark" : "light"
      );
      updateIcon();
    });
  }
});
