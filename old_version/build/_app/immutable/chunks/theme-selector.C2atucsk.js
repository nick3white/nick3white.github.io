class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const o=document.createElement("style");o.textContent=`
            :host {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              display: flex;
              gap: 3px;
              padding: 3px;
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
        `,this.shadowRoot.appendChild(o)}connectedCallback(){let o;this.hasAttribute("themes")&&(o=this.getAttribute("themes").split(","));function a(t){o.forEach(e=>document.body.classList.remove(e)),t&&document.body.classList.add(t)}let s;this.hasAttribute("defaultLightTheme")&&this.getAttribute("defaultLightTheme"),this.hasAttribute("defaultDarkTheme")&&this.getAttribute("defaultDarkTheme"),this.hasAttribute("defaultTheme")&&(s=this.getAttribute("defaultTheme"));const r=document.createElement("button");r.setAttribute("id","dark-mode"),r.addEventListener("click",()=>d()),r.classList.add("theme-btn","dark-mode"),r.innerHTML=`<i class="icon-moon">
      <svg width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" fill="none" >
        <path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z"  stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </i>
    <i class="icon-sun">
      <svg width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="var(--foreground, #333)">
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="var(--foreground, #333)" stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round"  fill="var(--foreground), #333)"></path>
      </svg>
    </i>`;function d(){document.body.classList.toggle("dark"),r.classList.toggle("dark");let t=document.body.classList.contains("dark");localStorage.setItem("darkmode",t.toString())}this.shadowRoot.appendChild(r),o.forEach(t=>{const e=document.createElement("button");e.setAttribute("id",t),e.classList.add("theme-btn",t),e.style.backgroundImage=`url('/images/thumbs/${t}.webp')`,e.addEventListener("click",()=>a(t)),this.shadowRoot.appendChild(e)});const i=window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("darkmode")==="true",c=window.matchMedia("(prefers-color-scheme: light)").matches;i||n?(document.body.classList.add("dark"),this.classList.add("dark")):c&&(document.body.classList.remove("dark"),this.classList.remove("dark")),a(s)}}customElements.define("theme-selector",l);
