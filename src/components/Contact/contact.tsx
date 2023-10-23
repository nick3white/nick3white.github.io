import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Topbutton } from "../TopButton/topbutton";

export const Contact = component$(() => {
    return (
        <section
            class={css({
                position: "relative",
                border: "var(--border)",
                height: "100vh",
                display: "flex",

                alignItems: "flex-end",
                justifyContent: "center",
                // background: "var(--bg-color-1)",
                // backgroundAttachment: "fixed",
                "& form": {
                    width: "50vw",
                    height: "37vh",
                    marginBottom: "10vh",
                    display: "flex",
                    flexDirection: "column",

                    lg: {
                        flexDirection: "row",
                    },
                    alignItems: "space-evenly",
                    justifyContent: "space-evenly",
                    gap: "16px",
                    "& .left, .right": {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "space-evenly",
                        justifyContent: "space-evenly",
                        gap: "16px",
                    },
                    "& input, textarea, button": {
                        background: "rgb(var(--bg-1))",
                        border: "var(--border)",
                        boxShadow: "var(--shadow)",
                        color: "var(--fg-color-1)",
                        padding: "16px",
                        "&::placeholder": {
                            color: "rgba(var(--fg-1), 0.77)",
                        },
                    },
                    "& button": {
                        cursor: "pointer",
                    },
                },
            })}
        >
            <article id="contact">
                <form
                    method="POST"
                    action="https://formsubmit.co/4c5fb5bc125c9ac8405bf2fbe9a6a4a2"
                >
                    <div class="left">
                        <input
                            class="name"
                            type="name"
                            name="name"
                            placeholder="Enter name..."
                            required
                        />
                        <input
                            class="email"
                            type="email"
                            name="email"
                            placeholder="Enter email..."
                            required
                        />
                    </div>
                    <div class="right">
                        <textarea
                            class="message"
                            name="message"
                            cols={30}
                            rows={10}
                            placeholder="Add a message..."
                            required
                        ></textarea>
                        <button class="submit">Say hi!</button>
                    </div>
                </form>
            </article>
            <Topbutton />
        </section>
    );
});
