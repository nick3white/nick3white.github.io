import{Q as n,E as l,S as o}from"./q-bb6ca9f2.js";import{F as s,m,a,C as t,q as e}from"./q-660534cd.js";const u=s(m(()=>a(()=>import("./q-50432b83.js"),["build/q-50432b83.js","build/q-660534cd.js","build/q-bb6ca9f2.js"]),"s_0vphQYqOdZI")),c=()=>t(n,{children:[e("head",null,null,[e("meta",null,{charSet:"utf-8"},null,3,null),e("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),e("script",null,{dangerouslySetInnerHTML:`
                        (function() {
                            function setTheme(theme) {
                                document.documentElement.className = theme;
                                localStorage.setItem('theme', theme);
                            }

                            var theme = localStorage.getItem('theme');
                            console.log(theme);

                            if (theme) {
                                setTheme(theme);
                            }
                        })();

                        window.addEventListener('load', function() {

                            if (localStorage.getItem('theme')){
                                const btnId = 'theme-btn-' + localStorage.getItem('theme')
                                let activeButton = document.getElementById(btnId) 
                                activeButton.classList.add("visible");
                                activeButton.classList.remove('invisible');

                            } else {
                                const themeButtonContainer = document.getElementById('theme-button-container')
                                const themeButtons = themeButtonContainer.querySelectorAll('#theme-button-container > button');
                                
                                for (let themeButton of themeButtons) {
                                    themeButton.classList.add('visible');
                                    themeButton.classList.remove('invisible');
                                }
                            }
                        });
                    `},null,3,null),t(u,null,3,"vp_0")],1,null),e("body",null,{lang:"en"},[t(l,null,3,"vp_1"),t(o,null,3,"vp_2")],1,null)]},1,"vp_3");export{c as s_tntnak2DhJ8};