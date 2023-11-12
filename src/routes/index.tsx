import { component$, type JSXNode } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";
import Halloween from "~/media/halloween.png?jsx";
import RaceBeforeRace from "~/media/rb4r.png?jsx";
import MappingMovement from "~/media/mapping-movement.png?jsx";

type SocialMediaLink = {
    platform: string;
    url: string;
};

const socialMediaLinks: SocialMediaLink[] = [
    {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/nick-white-511000288/",
    },
    {
        platform: "medium",
        url: "https://medium.com/@nick33white",
    },
    {
        platform: "github",
        url: "https://github.com/nick3white/",
    },
    {
        platform: "codepen",
        url: "https://codepen.io/nick3white",
    },
];
const skills: [string, string[]][] = [
    ["JavaScript", ["Svelte", "React", "Qwik", "Node", "(and many more)"]],
    ["Data & Scripting", ["Python", "Pandas", "Bash"]],
    [
        "Dev Ops / Sysadmin",
        ["Linux", "Apache / LAMP", "IaC, IaaS, BaaS", "CI/CD"],
    ],
    ["Database", ["MySQL", "PostgreSQL", "Prisma", "Redis"]],
];
type Publication = {
    title: string;
    type: string;
    year: number;
    description: string;
    url?: string;
};

const publications: Publication[] = [
    {
        title: "Movement and Place in Mapping Movement",
        type: "Article",
        year: 2023,
        description:
            "In the development of the Mapping Movement rebuild, I used place and movement to recreate something of the book-experience, while also evoking the spirit of the Mapping Movement project.",
        url: "https://medium.com/@nick33white/design-theory-movement-and-place-in-mapping-movement-375110749b73",
    },
    {
        title: "The Collective Wisdom Handbook",
        type: "Book",
        year: 2021,
        description:
            "Covers the history, practice, best practices, and technology used crowdsourcing transcriptions in cultural heritage institutions. Written by me and 20 of my closest friends.",
    },
    {
        title: "IIIF and the Problem with CSS Image Cropping",
        type: "Article",
        year: 2019,
        description:
            "Explains the challenges of CSS image handling and how to use IIIF to solve them.",
        url: "https://medium.com/@digitalnewberry/iiif-and-the-problem-with-css-image-cropping-651cfeb5593b",
    },
    {
        title: "FOSS: What and Why",
        type: "Job Talk",
        year: 2020,
        description:
            "Overview of what FOSS means, what open source is, and their value, both ethically and practically",
    },
    {
        title: "Digitial Initiatives Career Talk",
        type: "Job Talk",
        year: 2021,
        description:
            "Presented to a number of college classes, a summary of what we do and how we do it.",
    },
    {
        title: "From Socrates to Stack Exchange",
        type: "Job Talk",
        year: 2022,
        description:
            "Covering the general applications and use cases of various languages, covering Bash (and Linux generally), Python, and JavaScript",
    },
    {
        title: "The Time Machine",
        type: "Conference Paper, Code4Lib Chicago",
        year: 2019,
        description:
            "Covers technology used for the Time Machine project, from crowdsourcing transcription, to Gatsby & the importance of SSG to libraries",
    },
];
type WorkSample = [string, string, JSXNode];

export default component$(() => {
    const mapmov = <MappingMovement />;
    const hallo = <Halloween />;
    const rb4r = <RaceBeforeRace />;
    const samples: WorkSample[] = [
        [
            "Halloween",
            "https://digital.newberry.org/collection-stories/halloween",
            hallo,
        ],
        ["Race B4 Race", "https://digital.newberry.org/rb4r", rb4r],
        ["Mapping Movement", "https://mappingmovement.newberry.org/", mapmov],
    ];
    return (
        <main
            class={css({
                scrollBehavior: "smooth",
                display: "flex",

                flexDirection: "column-reverse",
                lg: {
                    flexDirection: "row",
                },

                marginInline: "clamp(8px, 1vh, 16px)",
                paddingInline: "clamp(8px, 1vh, 16px)",
                gap: "32px",
                "& aside": {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    zIndex: "200",
                    height: "100%",
                    top: "16px",
                    marginInline: "clamp(8px, 1vh, 16px)",
                    // paddingInline: "clamp(8px, 1vh, 16px)",
                    lg: {
                        paddingInline: 0,
                        marginInline: 0,
                    },
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
                    // paddingLeft: "16px",
                    "& dd": {
                        pointerEvents: "none",
                        opacity: 0.001,
                        position: "absolute",
                        top: "100%",
                        left: "4px",
                        padding: "8px",
                        width: "100%",
                        background: "rgb(var(--bg-1))",
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
                "& article h2": {
                    borderBottom: "var(--border)",
                    boxShadow: "var(--shadow-soft)",
                },
                "& dt, dd, .socials li": {
                    marginInline: "clamp(8px, 1vh, 32px)",
                    paddingInline: "clamp(8px, 1vh, 32px)",
                },
                "& dt": {
                    borderBottom: "2px solid rgba(var(--fg-1), 0.3)",
                },
                "& dt, .socials li": {
                    textShadow: "var(--text-shadow-soft)",
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    marginBlock: "3px",
                },
                "& .socials li": {
                    background:
                        "linear-gradient(to right,rgba(var(--fg-1),.3),rgba(var(--fg-1),.3)),linear-gradient(to right,rgba(var(--fg-1),1),rgba(var(--fg-1),1))",
                    backgroundSize: "100% .1rem,0 .1rem",
                    backgroundPosition: "100% 100%,0 100%",
                    backgroundRepeat: "no-repeat",
                    transition: "background-size .3s",
                    "&:hover": {
                        backgroundSize: "0 .1rem,100% .1rem",
                    },
                },
                "& dd": {
                    border: "1px solid rgba(var(--splash),0.33)",
                    "& em": {
                        paddingRight: "11px",
                        fontStyle: "italic",
                        fontSize: "1.1rem",
                    },
                    "& a": {
                        color: "var(--splash-color-alt)",
                        textShadow: "var(--text-shadow-alt-soft)",
                        transition: "200ms",
                        borderBottom: "var(--text-underline)",
                        "&:hover": {
                            textShadow: "var(--text-shadow-alt)",
                        },
                    },
                },
            })}
        >
            <aside>
                <section class="socials">
                    <h3>Socials</h3>
                    <ul>
                        {socialMediaLinks.map((social) => {
                            // const linkgcc = socialMediaLinks[platform] as string;
                            return (
                                <li key={social.platform}>
                                    <a href={social.url}>{social.platform}</a>
                                </li>
                            );
                        })}
                    </ul>
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
                        marginInline: "clamp(8px, 1vh, 32px)",
                        paddingInline: "clamp(8px, 1vh, 32px)",
                        listStyleType: "none",
                    },
                    "& h2": {
                        fontSize: "clamp(1.66rem, 6vw, 3rem)",
                        lineHeight: "clamp(1.66rem, 6vw, 3rem)",
                    },
                    "& li": {
                        marginBlock: "8px",
                        border: "1px solid rgba(var(--splash),0.33)",
                    },
                    "& h3": {
                        fontSize: "clamp(1.33rem, 5vw, 2rem)",
                        lineHeight: "clamp(1.33rem, 5vw, 2rem)",
                    },
                })}
            >
                <section>
                    <h2
                        class={css({
                            position: "relative",
                            "& .normo": {
                                fontSize: "clamp(1.66rem, 6vw, 3rem)",
                                lineHeight: "clamp(1.66rem, 6vw, 3rem)",
                                opacity: 0.99,
                                transition: "250ms",
                            },
                            "&:hover .normo": {
                                opacity: 0,
                            },
                            "& .hido": {
                                fontSize: "clamp(0.85rem, 4vw, 2rem)",
                                lineHeight: "clamp(0.85rem, 4vw, 2rem)",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                position: "absolute",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                // left: "clamp(1.77rem, 6vw, 3rem)",
                                opacity: 0,
                                transition: "250ms",
                            },
                            "&:hover .hido": { opacity: 1 },
                        })}
                    >
                        <span class="normo">Developer</span>
                        <span class="hido">Front End + Data Magic</span>
                    </h2>

                    <li>
                        Extensive experience executing and iterating designs
                        using JavaScript, React JS, Svelte JS, and more,
                        emphasizing usability, appeal, and accessibility{" "}
                    </li>
                    <li>
                        Extensive experience developing utilities and scripts
                        for use in large scale data projects, for both data
                        transformation and data analysis
                    </li>
                    <li>
                        Experience performing DevOps and Sys Admin tasks
                        including linux server admin, serverless & CI/CD
                        technologies, and maintaining off the shelf software
                    </li>
                    <li>
                        Experience with database management, using Redis, MySQL,
                        PostgreSQL, SQLite, and others, from the command line
                        and from within ORMs
                    </li>
                    <li>
                        Experience as principal/primary developer as well as
                        with mentorship of junior developers
                    </li>
                </section>
                <section>
                    <h2>Work History</h2>

                    <h3>Newberry Library</h3>

                    <li>
                        Built and rebuilt 10+ projects as the principal
                        developer, focusing on replicating the wonderful aspects
                        of traditional library and learning experiences, while
                        still providing novel, innovative experiences.
                    </li>
                    <li>
                        Provided the back end support, through scripting (python
                        & bash) and heavy lifting, for a major DAMS upgrade
                        project, gathering, transforming, manipulating, and
                        massaging millions of records coming from various
                        decaying sources, with an emphasis on reusability - the
                        next DAMS upgrade will be much easier.
                    </li>
                    <li>
                        Maintained the web infrastructure for decades of the
                        Newberry's Digital Initiatives, from server migrations,
                        database administration, and branding overhauls to old
                        projects, to cron jobs to update my Slack status based
                        on time of day. In the last year, I've been transforming
                        the library's digital infrastructure to a cloud-first
                        model; I believe that approach outsources the library's
                        most problematic points of weakness.
                    </li>
                </section>
                <section>
                    <h3>Chicago Public Library</h3>

                    <li>
                        Built bespoke tools for reference librarians to enable
                        them to search and discover their passion projects in
                        order to share the resources, and their passions, with
                        patrons
                    </li>
                    <li>
                        Managed large scale digitization projects from
                        conception to launch, including the grant writing,
                        staffing, and planning in between
                    </li>
                    <li>
                        Created web portals for digital content, from digital
                        collections, to born-digital gifts to the Special
                        Collections, with an emphasis on building rock solid
                        tools that would survive without maintenance, using Ruby
                        and Jekyll SSG tools
                    </li>
                </section>
                <section>
                    <h3>Freelance Web Development</h3>
                    <li>
                        Pretty standard freelance web dev: built sites for
                        clients, or updated existing ones; some projects were 10
                        year old behemoths for which I just used PHP and CSS,
                        while others were new creations, for which I used
                        everything from Django to Angular (which was new at the
                        time!){" "}
                    </li>
                </section>
                <section>
                    <h3>Codifyd</h3>

                    <li>
                        Handled data remediation, transformation, and
                        restructuring for large scale projects, delivering
                        millions of cleaned records yearly
                    </li>
                    <li>
                        Consulted nationally and internationally on data
                        science, data architecture, and how to both communicate
                        data, and to listen to it
                    </li>
                    <li>
                        Worked with clients with millions of products and
                        thousands of employees, as well as with companies small
                        scale companies (which were usually more fun!)
                    </li>
                </section>
                <section>
                    <h2>Publications (&amp;c)</h2>
                    <dl>
                        {publications.map((p) => (
                            <>
                                <dt>{p.title}</dt>
                                <dd>
                                    <em>
                                        {p.url ? (
                                            <a
                                                href={p.url}
                                                target="_blank"
                                                class="art-link"
                                            >
                                                {p.type}
                                            </a>
                                        ) : (
                                            p.type
                                        )}
                                        .
                                    </em>
                                    {p.year}. {p.description}
                                </dd>
                            </>
                        ))}
                    </dl>
                </section>
                <section>
                    <h2>Interests</h2>

                    <h3>Technology</h3>
                    <li>
                        <b>Qwik</b> JS has got me thinking about how (and when!)
                        I deliver JS to the client; while it may not make a
                        difference to efficiency (depending on the bundle), but
                        it helps to keep from getting too abstract in my
                        thinking.
                    </li>
                    <li>
                        I've been making websites since they were just HTML, so
                        playing with <b>HTMX</b> reminds me of that era.
                        JavaScript makes it feel like everything is imaginary
                        except JS; HTMX reminds me of the before times.
                    </li>
                    <li>
                        Playing around with <b>Lit</b> - and working with web
                        components generally - feels like you're Gambit from the
                        X-Men. I love their versatility - though, to be honest,
                        I haven't found a great use case in my work.
                    </li>
                </section>
                <section>
                    <h3>Non-Technology</h3>
                    <li>
                        I'm always excited to have conversations about{" "}
                        <b>music</b>. I have pretty wide tastes, from 50s jazz,
                        60s experimental music, 70s dub, 80s hardcore, 90s
                        indie, 00s IDM, to Simpsonwave in the 2010s, there's
                        always something interesting going on.
                    </li>
                    <li>
                        <b>Arts & Literature</b> may seem like they're far
                        afield, but they inform the foundations of my
                        approaches. Non-representational Theory (Gilles Deleuze,
                        Guy Debord) and phenomenology (Maurice Blanchot,
                        Alphonso Lingis) are a couple of specific areas of
                        interest.
                    </li>
                </section>
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
