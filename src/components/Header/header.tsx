import { component$ } from "@builder.io/qwik";
import { ThemeSelector } from "../ThemeSelector/themeselector";
import { css } from "~/styled-system/css";
import Me from "~/media/NickWhite.jpg?jsx";

export const Header = component$(() => {
    return (
        <header
            class={css({
                position: "sticky",
                top: "16px",
                gap: "32px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                zIndex: 2000,
                border: "var(--border)",
                borderRadius: "var(--border-radius)",
                textShadow: "var(--text-shadow)",
                boxShadow: "var(--shadow)",
                backdropFilter: "blur(16px)",
                margin: "16px",
                "& .main": {
                    flex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingInline: "32px",
                },
                "& .picto": {
                    display: "none",
                    lg: { display: "block" },
                    margin: "16px",
                    flex: 1,
                },
            })}
        >
            <div class="picto">
                <Me />
            </div>
            <div class="main">
                <ThemeSelector />
                <h1
                    class={css({
                        fontSize: "clamp(2rem, 7vw, 3.3rem)",
                        lineHeight: "clamp(2rem, 7vw, 3.3rem)",
                    })}
                >
                    Nick White
                </h1>
                <address
                    class={css({
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        // width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        "& a": {
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            opacity: 0,
                            fontSize: "33px",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        "& a, p": {
                            transition: "500ms",
                        },
                        "&:hover p": {
                            opacity: 0,
                        },
                        "&:hover a": {
                            opacity: 1,
                        },
                    })}
                >
                    <p>312.292.8607</p>
                    <p>nick33white at gmail point com</p>
                    <p>Chicago</p>
                    <a href="#contact">Contact</a>
                </address>
            </div>
        </header>
    );
});
