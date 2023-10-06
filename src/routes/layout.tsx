import type { JSXNode } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

// import type {  } from "@qwik-city";
import Me from "~/media/me.png?jsx";
import Halloween from "~/media/halloween.png?jsx";
import RaceBeforeRace from "~/media/rb4r.png?jsx";
import MappingMovement from "~/media/mapping-movement.png?jsx";
import { css } from "~/styled-system/css";

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

const skills: [string, string[]][] = [
    ["JavaScript", ["svelte", "react", "next", "node"]],
    ["Data & Scripting", ["python", "pandas", "bash"]],
    [
        "Dev Ops / Sysadmin",
        ["linux", "apache / lamp", "serverless / jamstack / CI/CD"],
    ],
    ["Database", ["mysql", "postgresql", "prisma", "redis"]],
];

type WorkSample = [string, string, JSXNode];

const samples: WorkSample[] = [
    [
        "Halloween",
        "https://digital.newberry.org/collection-stories/halloween",
        <Halloween />,
    ],
    ["Race B4 Race", "https://digital.newberry.org/rb4r", <RaceBeforeRace />],
    [
        "Mapping Movement",
        "https://mappingmovement.newberry.org/",
        <MappingMovement />,
    ],
];
export default component$(() => {
    return (
        <main class={css({ display: "flex", padding: "16px" })}>
            <aside class="sidebar">
                <section class="me-img">
                    <Me />
                </section>

                <section class={css({})}>
                    <h3 class="list-title">Skills</h3>
                    <dl class="skills">
                        {skills.map((list, idx: number) => (
                            <>
                                <dt key={`list-${idx}`}>{list[0]}</dt>
                                {list[1].map((l, i: number) => (
                                    <dd key={`dd-${i}`}>{l}</dd>
                                ))}
                            </>
                        ))}
                    </dl>
                    <h3 class="list-title">Samples of Recent Work</h3>
                    <ul
                        class={css({
                            "& img": {
                                width: "100%",
                                objectFit: "contain",
                            },
                        })}
                    >
                        {samples.map((sample, idx) => (
                            <a
                                key={idx}
                                href={sample[1]}
                                class="llines"
                                target="_blank"
                            >
                                <li class="sample-list-item">
                                    {sample[0]}
                                    <br />
                                    {sample[2]}
                                </li>
                            </a>
                        ))}
                    </ul>
                </section>
                <section class="interests"></section>
            </aside>

            <article class="resume-content">
                <header>
                    <h1>Nick White</h1>
                </header>
                <section>
                    <Slot />
                </section>
            </article>
        </main>
    );
});
