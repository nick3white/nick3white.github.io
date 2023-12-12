import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

function expando(e: Event) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.classList[0]);
    const hider = e.target;
    if (hider.classList.contains("exp")) {
        hider.classList.remove("exp");
    } else {
        hider.classList.add("exp");
    }
}
export default component$(() => {
    return (
        <main
            class={css({
                background: "#333c",
                height: "100vh",
                width: "75vw",
                margin: "200px auto",
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                "& article": {
                    margin: 0,
                    width: "400px",
                    height: "400px",
                    border: "1px solid #cccc",
                    background: "#333c",
                    position: "relative",
                    "& .content": {
                        position: "absolute",
                        opacity: 0.001,
                    },
                    "&.exp": {
                        // opacity: "0.9999",
                        position: "fixed",
                        width: "100vw",
                        height: "100vh",
                        zIndex: 6,
                        transition: "300ms",
                        "& .content": {
                            display: "block",
                            transition: "300ms",
                            transitionDelay: "300ms",
                            opacity: 0.999,
                        },
                    },
                },
            })}
        >
            <article onClick$={(e) => expando(e)}>
                <section class="content">
                    Adipisicing quas enim ratione quam quis natus? Odio error
                    ipsam facere cum ratione magnam amet! Similique commodi nisi
                    tenetur nesciunt animi Vitae blanditiis eaque perspiciatis
                    perferendis accusantium, delectus? Itaque animi
                </section>
            </article>
            <article onClick$={(e) => expando(e)}>
                <section class="content">
                    Adipisicing quas enim ratione quam quis natus? Odio error
                    ipsam facere cum ratione magnam amet! Similique commodi nisi
                    tenetur nesciunt animi Vitae blanditiis eaque perspiciatis
                    perferendis accusantium, delectus? Itaque animi
                </section>
            </article>
            <article onClick$={(e) => expando(e)}>
                <section class="content">
                    Adipisicing quas enim ratione quam quis natus? Odio error
                    ipsam facere cum ratione magnam amet! Similique commodi nisi
                    tenetur nesciunt animi Vitae blanditiis eaque perspiciatis
                    perferendis accusantium, delectus? Itaque animi
                </section>
            </article>
            <article onClick$={(e) => expando(e)}>
                <section class="content">
                    Adipisicing quas enim ratione quam quis natus? Odio error
                    ipsam facere cum ratione magnam amet! Similique commodi nisi
                    tenetur nesciunt animi Vitae blanditiis eaque perspiciatis
                    perferendis accusantium, delectus? Itaque animi
                </section>
            </article>
        </main>
    );
});
