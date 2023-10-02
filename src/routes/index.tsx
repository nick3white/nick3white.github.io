import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Page } from "~/components/Page/page";
import { css } from "~/styled-system/css";
const menu = ["home", "xp", "jobs", "int", "contact"];
const data = [
    {
        name: "Experience",
        // blurb:
        //   "Technology is not a toolbox: you can't turn a hammer into pliers.  But you can turn JavaScript into a scripting language, Python into a web dev framework, or use bash to organize your photos.  Using the right tool for the job is important - but never lose track of how you can misuse technology to accomplish your goals.  Bend technology to your will.",
        content: [
            {
                category: "Front End Development",
                list: [
                    [
                        "Svelte JS",
                        "Svelte is currently my most comfortable framework, with 90% of my projects built in Svelte for the last 2 years",
                    ],
                    [
                        "React / Next JS",
                        "React is the industry standard so it's important to keep up on its development, even if I don't use it in final versions of projects",
                    ],
                    [
                        "Qwik JS",
                        "I love pursuing new technology, and Qwik brings very interesting innovations to Front End Development; it also provides a very fun new way of thinking about how you use JavaScript",
                    ],
                    [
                        "Astro",
                        "Astro is a great scaffolding tool for trying out new tech stacks, whether its a new database (eg SurrealDB), or a new Front End Framework or library ",
                    ],
                    [
                        "Bun",
                        "Is Bun the future?? Is it the greatest thing that's ever been written??? Or is it just yarn 2.0???  Who cares, technology is fun!!",
                    ],
                    [
                        "npm (pnpm) / node js",
                        "Sometimes the folks in HR don't know exactly what all the technology acronyms mean, and may not know that npm and node are built into basically all the above, and they just want to see the acronym in the list of technologies you know",
                    ],
                    [
                        "IIIF",
                        "If you know, you know.  IIIF is very cool, enabling astonishing image handling innovation; unfortunately most people outside of GLAM don't seem to know about it, and keep inventing other things to solve problems that IIIF solves",
                    ],
                ],
            },
            {
                category: "Data Science",
                list: [
                    [
                        "Python",
                        "My go-to scripting language.  If a bash script goes on longer than 3 lines, I switch to python.  It's weird to think that I've spent a year on a single python script - but it's the truth.  On the plus side: that script transformed millions of records from several data sources to a single, standardized data model",
                    ],
                    [
                        "Data Transformation, manipulation, massage",
                        "I honestly expected to spend my career as a massage therapist for data, but that was before I discovered front end development.  I still love data though - we go way back.",
                    ],
                    [
                        "SQL / noSQL",
                        "Very comfortable in MySQL, PostgreSQL, and Redis environments, and in getting mismatched and ugly data into those environments.",
                    ],
                    [
                        "Excel",
                        "If it seems beneath a 'data scientist' to use Excel, you may not understand how incredibly powerful it is.  And this is from a life long Office Products hater - but if you snub excel, you're only making your life harder.  Bonus points awarded if you can use Excel without a mouse - it *really* impresses your boss.",
                    ],
                    [
                        "Data Communication",
                        "As much as I hate to admit it, data don't always speak for themselves.  Understanding your data - and being able to communicate the concepts to stakeholders - is a skill I've honed",
                    ],
                ],
            },
        ],
    },
    {
        name: "Job History",
        content: [
            {
                category: "Newberry Library",
                list: [
                    [
                        "Web Development",
                        "Built and rebuilt 10+ projects as the only developer.  I focus on replicating all of the wonderful aspects of traditional library experiences, while still providing novel, innovative experiences",
                    ],
                    [
                        "Data",
                        "Provided the back end support, through scripting and heavy lifting, for a major DAMS upgrade project, gathering, transforming, manipulating, and massaging millions of records coming from various decaying sources, with an emphasis on reusability - the next DAMS upgrade will be much easier.",
                    ],
                    [
                        "System Administration",
                        "Maintained the web infrastructure for decades of the Newberry's Digital Initiatives, from server migrations, database administration, and branding overhauls to old projects, to cron jobs to update my Slack status based on time of day.",
                    ],
                ],
            },
            {
                category: "Chicago Public Library",
                list: [
                    [
                        "Digital Project Management",
                        "Managed large scale digitization projects from conception to launch, including the grant writing, staffing, and planning in between.",
                    ],
                    [
                        "Dev Ops / Reference support",
                        "Built bespoke tools for reference librarians to enable them to search and discover their passion projects in order to share the resources, and their passions, with patrons.",
                    ],
                    [
                        "Web Development",
                        "Created web portals for digital content, from digital collections, to born-digital gifts to the Special Collections, with an emphasis on building rock solid tools that would survive without maintenance, using Ruby and Jekyll SSG tools.",
                    ],
                ],
            },
            {
                category: "Freelance",
                list: [
                    [
                        "Web Development",
                        "Pretty standard freelance web dev - built sites for clients, or updated existing sites.  Some projects were 10 year old behemoths for which I just used PHP and CSS, while others were new creations, for which I used everything from Django to Angular (which was new at the time!)",
                    ],
                ],
            },
            {
                category: "Codifyd",
                list: [
                    [
                        "Data",
                        "Handled data remediation, transformation, and restructuring for large scale projects, delivering millions of cleaned records yearly.",
                    ],
                    [
                        "Consulting",
                        "Consulted nationally and internationally on data science, data architecture, and how to both communicate - and listen to - data.",
                    ],
                    [
                        "Clients",
                        "Worked with clients as large as MSC and RS Components, and as small (but important!) as Spaenaur (Spaenaur was a favorite - not only were they incredibly nice, but they were also really interested in data!)",
                    ],
                ],
            },
        ],
    },
    {
        name: "Interests",
        content: [
            {
                category: "Technology",
                list: [
                    [
                        "Qwik JS",
                        "Change how you conceptualize your JS delivery ",
                    ],
                    [
                        "HTMX",
                        "Undermine your entire understanding of the front end",
                    ],
                    ["Leptos", "Dig down towards the metal with Leptos"],
                    [
                        "Lit",
                        "I always feel like the Xman Gambit when I use Web Components...",
                    ],
                ],
            },
            {
                category: "Music",
                list: [
                    ["50s Jazz", ["Bird", "Coltrane", "Mingus"]],
                    [
                        "60s Psych / Experimental",
                        ["Love", "Velvet Underground", "Hawkwind"],
                    ],
                    ["70s Dub", ["King Tubby", "Lee Scratch Perry"]],
                    [
                        "80s Hardcore",
                        ["Bad Brains", "Dead Kennedys", "Black Flag"],
                    ],
                    [
                        "90s Indie",
                        [
                            "Polvo",
                            "Appendix Out",
                            "Palace Brothers",
                            "The Secret Stars",
                        ],
                    ],
                    [
                        "00s More Indie & IDM",
                        ["Tarwater", "Com Truise", "SVIIB"],
                    ],
                    [
                        "10s Simpsonwave",
                        ["Was this actually made by humans?", "Allison"],
                    ],
                    ["20s All of the above", []],
                ],
            },
            {
                category: "Art & Literature",
                list: [
                    [
                        "Non-Representational Theory",
                        ["Guy Debord", "Gilles Deleuze"],
                    ],
                    ["Phenomenology", ["Maurice Blanchot", "Alphonso Lingis"]],
                ],
            },
        ],
    },
];

export default component$(() => {
    return (
        <div
            class={css({
                "& article": {
                    height: "100vh",
                    display: "flex",
                    background: "rgb(var(--bg-1))",
                    color: "rgb(var(--fg-1))",
                },
            })}
        >
            <article id="sec-0">
                <h1> N W </h1>
            </article>
            {data.map((datum, idx) => (
                <Page idx={idx} data={datum} key={idx} />
            ))}
            <article id="sec-4">
                <h1>Contact</h1>
            </article>
            <footer
                class={css({
                    background: "rgba(var(--bg-1), 0.87)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingInline: "8px",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "64px",
                    "& a": {
                        flex: 1,
                    },
                })}
            >
                {menu.map((me, idx) => (
                    <a key={idx} href={`#sec-${idx}`} class="llines">
                        {me}
                    </a>
                ))}
            </footer>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
