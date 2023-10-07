import type { JSXNode } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";
import { useDocumentHead, type RequestHandler } from "@builder.io/qwik-city";
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
    const schelector = 0;
    const schemes = ["dark", "light", "unicorn", "synth", "flora"];
    const scheme = schemes[schelector];
    return (
        <main
            class={
                css({
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "16px",
                    "& .sidebar": { flex: 1 },
                }) +
                " " +
                scheme
            }
        >
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
                    <address>
                        <a
                            href={`mailto:${frontmatter.email}`}
                            class="llines"
                            target="_blank"
                        >
                            {frontmatter.email}
                        </a>
                        <a
                            href={`tel:+1${frontmatter.phone}`}
                            class="llines"
                            target="_blank"
                        >
                            {frontmatter.phone}
                        </a>
                        <a
                            href="http://youarelistening.to/chicago"
                            class="llines chicago"
                            target="_blank"
                        >
                            Chicago
                            <p class="tooltip">
                                Not my project, I just think it's cool.
                            </p>
                        </a>
                    </address>
                </header>
                <section>
                    <Slot />
                </section>
            </article>
        </main>
    );
});
