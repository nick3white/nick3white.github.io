class ThemeSelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    const style = document.createElement("style");

    style.textContent = `
            :host {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              display: flex;
              gap: 3px;
              padding: 3px;
              z-index: 3;

            }
            #dark-mode {
              border: 0;
              --color-light: rgba(var(--background), 1);
              --color-dark: rgba(var(--foreground), 1));
              background-color: rgba(0,0,0,0);
            }

            .dark .icon-sun, .icon-moon {
              display: block;
            }
            .dark .icon-moon, .icon-sun {
              display: none;
            }
            .theme-btn {
              flex: 1;
              border: 1px solid var(--background);
              background-size: cover;
              background-position: center;
              display: block;
              height: 50px;
              position: relative;
            }
            .theme-btn:focus , .theme-btn:hover  {
              border: 1px solid var(--foreground);
            }
            #dark-mode {
              background: rgba(var(--background), 0.5);
              & path {
                stroke: rgba(var(--foreground), 1);
                fill: rgba(var(--foreground), 1);
                color: rgba(var(--foreground),1)
              }
            }
            .swatches {
              width: 100%;
              display: flex;
              flex-direction: column;
              list-style-type: none;
              margin: 0;
              padding: 0;

            }
            .swatch {
              margin: 0;
              padding: 0;
              height: 30px;
              width: 100%;
              background-color: var(--color);
            }
        `;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    let themes;
    if (this.hasAttribute("themes")) {
      themes = this.getAttribute("themes").split(",");
    }
    function setTheme(theme) {
      themes.forEach((t) => document.body.classList.remove(t));
      if (theme) {
        document.body.classList.add(theme);
      }
    }

    let defaultLightTheme, defaultDarkTheme, defaultTheme;
    if (this.hasAttribute("defaultLightTheme")) {
      defaultLightTheme = this.getAttribute("defaultLightTheme");
    }
    if (this.hasAttribute("defaultDarkTheme")) {
      defaultDarkTheme = this.getAttribute("defaultDarkTheme");
    }
    if (this.hasAttribute("defaultTheme")) {
      defaultTheme = this.getAttribute("defaultTheme");
    }
    const dmButton = document.createElement("button");
    dmButton.setAttribute("id", "dark-mode");
    dmButton.addEventListener("click", () => setDarkMode());
    dmButton.classList.add("theme-btn", "dark-mode");
    dmButton.innerHTML = `<i class="icon-moon">
      <svg width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" fill="none" >
        <path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z"  stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </i>
    <i class="icon-sun">
      <svg width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="var(--foreground, #333)">
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="var(--foreground, #333)" stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round"  fill="var(--foreground), #333)"></path>
      </svg>
    </i>`;

    function setDarkMode() {
      // console.log(JSON.stringify(e, null, 2));
      // const dmBtn = document.getElementById('#dark-mode');
      // dmBtn.classList.toggle('dark');
      document.body.classList.toggle("dark");
      dmButton.classList.toggle("dark");

      let isDark = document.body.classList.contains("dark");
      localStorage.setItem("darkmode", isDark.toString());
    }
    this.shadowRoot.appendChild(dmButton);

    themes.forEach((theme) => {
      const button = document.createElement("button");
      button.setAttribute("id", theme);
      button.classList.add("theme-btn", theme);
      button.style.backgroundImage = `url('/images/${theme}_thumb.webp')`;

      button.addEventListener("click", () => setTheme(theme));

      // const swatches = document.createElement('ul');

      // swatches.classList.add('swatches');
      // swatches.classList.add(theme);

      // Array.from({ length: 9 }).forEach((_, i) => {
      // 	const swatch = document.createElement('li');
      // 	swatch.classList.add('swatch');
      // 	swatch.setAttribute('style', `--color: rgb(var(--color${i}));`);
      // 	swatches.appendChild(swatch);
      // });
      // button.appendChild(swatches);
      this.shadowRoot.appendChild(button);
    });

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const isDarkMode = localStorage.getItem("darkmode") === "true";
    const hardSetLightMode = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;

    if (prefersDark || isDarkMode) {
      document.body.classList.add("dark");
      this.classList.add("dark");
    } else if (hardSetLightMode) {
      document.body.classList.remove("dark");
      this.classList.remove("dark");
    }
    setTheme(defaultTheme);
  }
}
customElements.define("theme-selector", ThemeSelector);
