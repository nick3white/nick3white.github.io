import type { JSXNode } from "@builder.io/qwik";
import { component$, Slot, useSignal, useStore } from "@builder.io/qwik";
import { useDocumentHead, type RequestHandler } from "@builder.io/qwik-city";
// import type {  } from "@qwik-city";
import Me from "~/media/me.png?jsx";
import Halloween from "~/media/halloween.png?jsx";
import RaceBeforeRace from "~/media/rb4r.png?jsx";
import MappingMovement from "~/media/mapping-movement.png?jsx";
import { css } from "~/styled-system/css";
import { match } from "assert";

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
    ["JavaScript", ["Svelte", "React", "Next", "node", "(and many more)"]],
    ["Data & Scripting", ["Python", "Pandas", "bash"]],
    [
        "Dev Ops / Sysadmin",
        ["Linux", "Apache / LAMP", "Serverless / JAMstack", "CI/CD"],
    ],
    ["Database", ["MySQL", "PostgreSQL", "Prisma", "Redis"]],
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
    const { frontmatter } = useDocumentHead();
    const schelector = useSignal(1);
    const schemes = ["dark", "light", "synth", "vapor"];
    const scheme = schemes[schelector.value];
    return (
        <main
            class={
                css({
                    scrollBehavior: "smooth !important",
                    "& .resume": {
                        display: "flex",
                        alignItems: "flex-start",
                        padding: "16px",
                        "& .sidebar": { flex: 1 },
                        "& .resume-content header": {
                            position: "sticky",
                            top: "16px",
                            // background: "rgba(37,37,37,0.3)",
                            // backdropBlur: "50px",
                            // backdropSaturate: "180%",
                            backdropFilter: "blur(16px) saturate(180%)",
                        },
                        "& address": {
                            position: "relative",
                            "& .block-link": {
                                position: "absolute",
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                paddingInline: "64px",
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                opacity: 0,
                                fontSize: "32px",
                                transition: "250ms",

                                backdropFilter: "blur(0px)",
                                "&:hover": {
                                    backdropFilter: "blur(16px)",
                                    opacity: 1,
                                },
                            },
                        },
                    },
                }) +
                " " +
                scheme
            }
        >
            <div class="resume">
                {/* sidebar  */}
                <aside class="sidebar">
                    <section class="me-img">
                        <Me />
                    </section>
                    <section class="lists">
                        <h3 class="list-title">Skills</h3>
                        <dl class="skills-list">
                            {skills.map((list, idx: number) => (
                                <>
                                    <div class="skill-wrap">
                                        <dt key={`list-${idx}`}>{list[0]}</dt>
                                        <div class="skill-liner">
                                            {list[1].map((l, i: number) => (
                                                <dd key={`dd-${i}`}>
                                                    {l}
                                                    {/* {l.charAt(0).toUpperCase() + */}
                                                    {/*     l.slice(1)} */}
                                                </dd>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </dl>
                        <h3 class="list-title">Recent Work</h3>
                        <dl
                            class={
                                css({
                                    "& img": {
                                        objectFit: "contain",
                                    },
                                }) + " sample-list"
                            }
                        >
                            {samples.map((sample, idx) => (
                                <a
                                    key={idx}
                                    href={sample[1]}
                                    class="llines"
                                    target="_blank"
                                >
                                    <dt>{sample[0]}</dt>
                                    <dd>{sample[2]}</dd>
                                </a>
                            ))}
                        </dl>
                    </section>
                </aside>
                {/* resume  */}
                <article class="resume-content">
                    <header>
                        <h1>Nick White</h1>
                        <button
                            onClick$={() =>
                                (schelector.value =
                                    schelector.value === schemes.length - 1
                                        ? 0
                                        : schelector.value + 1)
                            }
                        >
                            ok
                        </button>
                        <address>
                            <p class="nllines">{frontmatter.email}</p>
                            <p class="nllines">{frontmatter.phone}</p>
                            <p class="nllines chicago">Chicago</p>
                            <a href="#contact" class="block-link">
                                Contact
                            </a>
                        </address>
                    </header>
                    <section>
                        <Slot />
                    </section>
                </article>
            </div>
            <div
                id="contact"
                class={css({
                    minHeight: "100vh",
                })}
            >
                <hr />
                email me
            </div>
        </main>
    );
});
