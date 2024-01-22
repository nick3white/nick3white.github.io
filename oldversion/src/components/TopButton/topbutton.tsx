import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Topbutton = component$(() => {
    return (
        <a
            href="#top"
            class={css({
                position: "absolute",
                bottom: "16px",
                right: "16px",
                border: "7px solid rgba(var(--splash), 0.44)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "55px",
                height: "55px",
                transition: "250ms",
                "& i": {
                    borderTopColor: "rgba(var(--splash), 0.44)",
                    borderRightColor: "rgba(var(--splash), 0.44)",
                    borderBottomColor: "transparent",
                    borderLeftColor: "transparent",
                    width: "22px",
                    height: "22px",
                    borderWidth: "7px 7px 0 0",
                    borderStyle: "solid",
                    transform: "rotate(-45deg)",
                    transition: "250ms",
                },
                "& p": {
                    lineHeight: "12px",
                    fontWeight: "bold",
                    transition: "250ms",
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                },
                "&:hover": {
                    border: "11px solid rgba(var(--splash), 0.11)",
                    "& p": {
                        opacity: 1,
                    },
                    "& i": {
                        borderTopColor: "rgba(var(--splash), 0.11)",
                        borderRightColor: "rgba(var(--splash), 0.11)",
                    },
                },
            })}
        >
            <i />
            <p>back to top</p>
        </a>
    );
});
