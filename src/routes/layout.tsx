import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Me from "~/media/me.png?jsx";
import Halloween from "~/media/halloween.png?jsx";
import PostcardGallery from "~/media/postcard-gallery.png?jsx";
import MappingMovement from "~/media/mapping-movement.png?jsx";

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

const skills = [
  ["svelte js", "react js", "next js", "node"],
  ["linux", "apache/lamp", "serverless & CI/CD"],
  ["mysql", "postgresql", "prisma", "redis"],
  ["python", "pandas", "bash"],
];

const samples = [
  [
    "Halloween",
    "https://digital.newberry.org/collection-stories/halloween",
    <Halloween />,
  ],
  [
    "Postcard Gallery",
    "https://digital.newberry.org/postcard-gallery",
    <PostcardGallery />,
  ],
  [
    "Mapping Movement",
    "https://mappingmovement.newberry.org/",
    <MappingMovement />,
  ],
];
export default component$(() => {
  return (
    <main>
      <aside class="sidebar">
        <section class="me-img">
          <Me />
        </section>

        <section class="border-2 p-3 m-3 border-slate-50">
          <h3 class="list-title">Skills</h3>
          <ul class="skills">
            {skills.map((list, idx) => (
              <li key={idx}>
                {list.map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </li>
            ))}
          </ul>
          <h3 class="list-title">Samples of Recent Work</h3>
          <ul class="samples">
            {samples.map((sample, idx) => (
              <a key={idx} href={sample[1]} class="llines" target="_blank">
                <li class="sample-list-item">
                  {sample[0]}
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
