import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface PageProps {
    idx: number;
    data: {
        name: string;
        content: {
            category: string;
            list: [string, string | string[]][];
        }[];
    };
}
export const Page = component$<PageProps>((props) => {
    const { name, content } = props.data;
    console.log(props);
    return (
        <article
            id={"sec-" + (props.idx + 1)}
            class={css({
                height: "100vh",
                display: "flex",
                padding: "16px",
                position: "relative",
                "& section": {
                    flex: 1,
                },
                "& h1": {
                    fontSize: "5vh",
                },
            })}
        >
            <section>
                <h1>{name}</h1>
                <ul>
                    {content.map((cont) => (
                        <li key={cont.category}>
                            <ul>
                                <li class={css({ fontSize: "28px" })}>
                                    {cont.category}
                                </li>
                                {cont.list.map((li, i) => (
                                    <li
                                        key={i}
                                        class={css({
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            // border: "1px solid rgb(var(--fg-1))",
                                            "& .detail, .standard": {
                                                // flex: 1,
                                                transition: "300ms",
                                            },
                                            "& .standard": {
                                                fontSize: "20px",
                                                padding: "6px 10px",
                                                margin: "1px",
                                                border: "1px solid rgba(var(--fg-1),0.3)",
                                            },
                                            "& .detail": {
                                                position: "absolute",
                                                top: "16px",
                                                right: "16px",
                                                // height: "16px",
                                                bottom: "16px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "50%",
                                                textAlign: "right",
                                                filter: "blur( 16px )",
                                                fontSize: "5vh",
                                                color: "rgba(var(--fg-1), 0)",
                                            },
                                            "&:hover .standard, :focus .standard":
                                                {
                                                    border: "1px solid rgba(var(--fg-1),1)",
                                                    background: "",
                                                },
                                            "&:hover .detail, :focus .detail": {
                                                color: "rgba(var(--fg-1), 1)",
                                                filter: "blur(0.01px)",
                                            },
                                        })}
                                    >
                                        <span class="standard">{li[0]}</span>
                                        <div class="detail">
                                            {Array.isArray(li[1])
                                                ? li[1].map((l, idx) => (
                                                      <p key={idx}>{l}</p>
                                                  ))
                                                : li[1]}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
});
