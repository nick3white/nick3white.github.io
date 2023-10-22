import{Q as n,E as l,S as o}from"./q-270ac1e6.js";import{k as s,h as m,_ as a,j as t,S as e}from"./q-7bb323a3.js";const i=s(m(()=>a(()=>import("./q-f8df3c0b.js"),["build/q-f8df3c0b.js","build/q-7bb323a3.js","build/q-270ac1e6.js"]),"s_0vphQYqOdZI")),c=()=>t(n,{children:[e("head",null,null,[e("meta",null,{charSet:"utf-8"},null,3,null),e("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),e("script",null,{dangerouslySetInnerHTML:`
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
                    `},null,3,null),t(i,null,3,"vp_0")],1,null),e("body",null,{lang:"en"},[t(l,null,3,"vp_1"),t(o,null,3,"vp_2")],1,null)]},1,"vp_3");export{c as s_tntnak2DhJ8};
