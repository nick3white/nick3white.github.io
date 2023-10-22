import { component$, type JSXNode } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";
import Me from "~/media/me.png?jsx";
import Halloween from "~/media/halloween.png?jsx";
import RaceBeforeRace from "~/media/rb4r.png?jsx";
import MappingMovement from "~/media/mapping-movement.png?jsx";
import { Header } from "~/components/Header/header";

const skills: [string, string[]][] = [
    ["JavaScript", ["Svelte", "React", "Qwik", "node", "(and many more)"]],
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
    return (
        <main
            id="top"
            class={css({
                scrollBehavior: "smooth",
                display: "flex",
                gap: "32px",
                padding: "16px",
                "& aside": {
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    position: "sticky",
                    top: "16px",
                },
                "& h3": {
                    borderBottom: "2px solid  rgba(var(--fg-1), 0.5)",
                    marginBottom: "6px",
                },
                "& article": {
                    position: "relative",
                    flex: 3,
                },
                "& .skill-sublist": {
                    position: "relative",
                    paddingLeft: "16px",
                    "& dd": {
                        pointerEvents: "none",
                        opacity: 0.001,
                        position: "absolute",
                        top: "100%",
                        left: "4px",
                        padding: "8px",
                        width: "100%",
                        background: "var(--bg-color-1)",
                        border: "1px solid rgba(var(--fg-1), 0.5)",
                        zIndex: 100,
                        transition: "250ms",
                    },
                    "& dt:hover + dd": {
                        opacity: 0.99,
                    },
                },
                "& .sample-link": {
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid rgba(var(--fg-1), 0.5)",
                    marginBottom: "16px",
                    transition: "250ms",
                    "&:hover": {
                        border: "1px solid rgba(var(--fg-1), 1)",
                    },
                },
                "& .sample-link dt": {
                    padding: "0px 8px",
                },
                "& .sample-link dd": {
                    padding: "4px",
                },
                "& .me": {
                    width: "100%",
                },
            })}
        >
            <aside>
                <section class="me">
                    <Me />
                </section>
                <section class="skill-lists">
                    <h3>Skills</h3>
                    <ul>
                        {skills.map((list, idx) => (
                            <li key={`skill-${idx}`} class="skill-sublist">
                                <dl>
                                    <dt>{list[0]}</dt>
                                    <dd>
                                        {list[1].map((li, i) => (
                                            <li key={`subskill-${i}`}>{li}</li>
                                        ))}
                                    </dd>
                                </dl>
                            </li>
                        ))}
                    </ul>
                </section>
                <section class="samples">
                    <h3>Recent Projects</h3>
                    <dl>
                        {samples.map((sample, idx) => (
                            <a
                                key={`sample-${idx}`}
                                class="sample-link"
                                href={sample[1]}
                                target="_blank"
                            >
                                <dt>{sample[0]}</dt>
                                <dd>{sample[2]}</dd>
                            </a>
                        ))}
                    </dl>
                </section>
            </aside>
            <article
                class={css({
                    "& ul, li, h2, h3": {
                        paddingInline: "64px",
                        listStyleType: "none",
                    },
                })}
            >
                <Header />
                <h2>Software Developer / Front End</h2>

                <li>
                    Extensive experience executing and iterating designs using
                    JavaScript, React JS, Svelte JS, and more, emphasizing
                    usability, appeal, and accessibility{" "}
                </li>
                <li>
                    Extensive experience developing utilities and scripts for
                    use in large scale data projects, for both data
                    transformation and data analysis
                </li>
                <li>
                    Experience performing DevOps and Sys Admin tasks including
                    linux server admin, serverless & CI/CD technologies, and
                    maintaining off the shelf software
                </li>
                <li>
                    Experience with database management, using Redis, MySQL,
                    PostgreSQL, SQLite, and others, from the command line and
                    from within ORMs
                </li>
                <li>
                    Experience as principal/primary developer as well as with
                    mentorship of junior developers
                </li>

                <h2>Work History</h2>

                <h3>Newberry Library</h3>

                <li>
                    Built and rebuilt 10+ projects as the principal developer,
                    focusing on replicating the wonderful aspects of traditional
                    library and learning experiences, while still providing
                    novel, innovative experiences.
                </li>
                <li>
                    Provided the back end support, through scripting (python &
                    bash) and heavy lifting, for a major DAMS upgrade project,
                    gathering, transforming, manipulating, and massaging
                    millions of records coming from various decaying sources,
                    with an emphasis on reusability - the next DAMS upgrade will
                    be much easier.
                </li>
                <li>
                    Maintained the web infrastructure for decades of the
                    Newberry's Digital Initiatives, from server migrations,
                    database administration, and branding overhauls to old
                    projects, to cron jobs to update my Slack status based on
                    time of day. In the last year, I've been transforming the
                    library's digital infrastructure to a cloud-first model; I
                    believe that approach outsources the library's most
                    problematic points of weakness.
                </li>

                <h3>Chicago Public Library</h3>

                <li>
                    Built bespoke tools for reference librarians to enable them
                    to search and discover their passion projects in order to
                    share the resources, and their passions, with patrons
                </li>
                <li>
                    Managed large scale digitization projects from conception to
                    launch, including the grant writing, staffing, and planning
                    in between
                </li>
                <li>
                    Created web portals for digital content, from digital
                    collections, to born-digital gifts to the Special
                    Collections, with an emphasis on building rock solid tools
                    that would survive without maintenance, using Ruby and
                    Jekyll SSG tools
                </li>

                <h3>Freelance Web Development</h3>

                <li>
                    Pretty standard freelance web dev: built sites for clients,
                    or updated existing ones; some projects were 10 year old
                    behemoths for which I just used PHP and CSS, while others
                    were new creations, for which I used everything from Django
                    to Angular (which was new at the time!){" "}
                </li>

                <h3>Codifyd</h3>

                <li>
                    Handled data remediation, transformation, and restructuring
                    for large scale projects, delivering millions of cleaned
                    records yearly
                </li>
                <li>
                    Consulted nationally and internationally on data science,
                    data architecture, and how to both communicate data, and to
                    listen to it
                </li>
                <li>
                    Worked with clients with millions of products and thousands
                    of employees, as well as with companies small scale
                    companies (which were usually more fun!)
                </li>

                <h2>Interests</h2>

                <h3>Technology</h3>
                <li>
                    **Qwik** JS has got me thinking about how (and when!) I
                    deliver JS to the client; while it may not make a difference
                    to efficiency (depending on the bundle), but it helps to
                    keep from getting too abstract in my thinking.
                </li>
                <li>
                    I've been making websites since they were just HTML, so
                    playing with **HTMX** reminds me of that era. JavaScript
                    makes it feel like everything is imaginary except JS; HTMX
                    reminds me of the before times.
                </li>
                <li>
                    Playing around with **Lit** - and working with web
                    components generally - feels like you're Gambit from the
                    X-Men. I love their versatility - though, to be honest, I
                    haven't found a great use case in my work.
                </li>

                <h3>Non-Technology</h3>
                <li>
                    I'm always excited to have conversations about **music**. I
                    have pretty wide tastes, from 50s jazz, 60s experimental
                    music, 70s dub, 80s hardcore, 90s indie, 00s IDM, to
                    Simpsonwave in the 2010s, there's always something
                    interesting going on.
                </li>
                <li>
                    **Arts & Literature** may seem like they're far afield, but
                    they inform the foundations of my approaches.
                    Non-representational Theory (Gilles Deleuze, Guy Debord) and
                    phenomenology (Maurice Blanchot, Alphonso Lingis) are a
                    couple of specific areas of interest.
                </li>
            </article>
        </main>
    );
});

export const head: DocumentHead = {
    title: "Nick White, Front End Dev",
    meta: [
        {
            name: "description",
            content: "A resume site",
        },
    ],
};
