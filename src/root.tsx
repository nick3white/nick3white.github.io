import { component$ } from "@builder.io/qwik";
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <script
                    dangerouslySetInnerHTML={`
                        (function() {
                            function setTheme(theme) {
                                document.documentElement.className = theme
                                localStorage.setItem('theme', theme);
                            }

                            var theme = localStorage.getItem('theme');
                            console.log(theme);

                            if (theme) {
                                setTheme(theme);
                            } else {
setTheme('light')
}
                        })();

                        window.addEventListener('load', function() {

                            console.log("top of load function")
                            if (localStorage.getItem('theme')){
                                const btnId = 'theme-btn-' + localStorage.getItem('theme')
                                let activeButton = document.getElementById(btnId) 
                                activeButton.classList.add("visible");
                                activeButton.classList.remove('invisible');

                            } else {
                            console.log("manually adding light")
                                document.documentElement.className = 'light'
                                localStorage.setItem('theme', 'light');
                                const themeButtonContainer = document.getElementById('theme-button-container')
                                const themeButtons = themeButtonContainer.querySelectorAll('#theme-button-container > button');
                                
                                for (let themeButton of themeButtons) {
                                    themeButton.classList.add('visible');
                                    themeButton.classList.remove('invisible');
                                }
                            }
                        });
                    `}
                ></script>
                <RouterHead />
            </head>
            <body lang="en">
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    );
});
