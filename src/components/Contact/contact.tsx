import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Contact = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        border: "var(--border)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& form": {
          width: "50vw",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "16px",
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
        "& a": {
          position: "absolute",
          top: "22px",
          right: "22px",
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
            // "&:before": {
            //   content: "",
            //   right: 0,
            //   top: "-3px",
            //   position: "absolute",
            //   height: "4px",
            //   boxShadow: "inset 0 0 0 32px",
            //   transform: "rotate(-45deg)",
            //   width: "23px",
            //   transformOrigin: "right top",
            // },
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
        },
      })}
    >
      <article id="contact">
        <form
          method="POST"
          action="https://formsubmit.co/4c5fb5bc125c9ac8405bf2fbe9a6a4a2"
        >
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
          <textarea
            class="message"
            name="message"
            cols={30}
            rows={10}
            placeholder="Add a message..."
            required
          ></textarea>
          <button class="submit">Say hi!</button>
        </form>
        <a href="#top" class={css({})}>
          <i />
          <p>back to top</p>
        </a>
      </article>
    </section>
  );
});
