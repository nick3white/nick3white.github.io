<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { themes } from '$lib';
	import '$css/themes.css';
	import '$css/css.css';
	const fonts = ['Argon', 'Neon', 'Xenon'];
	const randoTheme = themes[Math.floor(Math.random() * themes.length)];
	const randoFont = fonts[Math.floor(Math.random() * fonts.length)];
	onMount(async () => {
		await import('$lib/theme-selector');
	});
	const res = {
		jobz: {
			'Newberry Library': {
				dates: ['2019', 'present'],
				duties: [
					'Provided data scripting support for a major Digital Asset Management System upgrade, extracting, transforming, and loading the library’s 1.5 million complex data records.',
					'Maintained the web infrastructure for the Library’s digital initiatives and programs, including server migrations, database administration, and revitalizations of decades-old content.',
					'Spearheaded the transition to a cloud-first infrastructure model; providing much-needed relief from resource limitations; implemented DevOps strategies throughout digital workflows.',
					'Full stack development lead on numerous digital humanities projects, helping scholars and students create engaging experiences, portals, galleries, and exhibits.',
					"Developed tools, scripts, and projects to provide walkways over the library's weaknesses, improving emphasizing future planning, interoperability, and readability."
				]
			},
			'Chicago Public Library': {
				dates: ['2017', '2020'],
				duties: [
					'Served as project manager for the large-scale digitization projects of rare and delicate Special Collections materials. ',
					'Collaborated with reference librarians to develop tools to help them use their data side-projects to aid their patrons: ',
					'Transformed a 20-year-old Access database on an air-gapped computer into a searchable web front end usable at the reference desk on a USB drive.',
					'Reworked a complex and jury-rigged excel & VBA-based workflow, that allowed a librarian to post her work on the Library’s CMS, to a much more standard csv-to-JSON-to-HTML script.',
					"Created the CPL Digital Collections website, using React, PHP, and Jekyll, integrating seamlessly with the library's CMS, ILS, and other enterprise software.",
					"Developed security and digital forensics workflows used for 'born digital' acquisitions to the four Special Collections in the CPL system."
				]
			},
			'Freelance Data Consulting & Web Development': {
				dates: ['2014', '2017'],
				duties: [
					'Provided consulting, in the form of presentations and analysis reports, for data projects, from how to manage sliding-scale sizing in clothing data, to the benefits and drawbacks of various PIMs and search engines (including SOLR, ElasticSearch).',
					'Provided strategy recommendations for large-scale ETL projects.',
					'Developed new websites and revitalized old ones using PHP and JavaScript (Angular and jQuery).'
				]
			},
			'Codifyd (previously BMI)': {
				dates: ['2011', '2014'],
				duties: [
					'Led teams of data modelers and data analysts to build metadata schemas for large B2B companies (MSC, RS Components), sculpting custom models for a wide range of products, many of which had life-or-death data precision and accuracy needs.',
					'Consulted for clients all over the US and the UK on data strategy, delivering presentations to small C-Level groups and entire company “all staffs.”',
					'Served as a sales engineer, providing client-facing “back end” communication to speak directly to clients’ tech teams.',
					'Served on the R&D team, providing expertise and datasets for software testing for data software; used this time to transition my expertise from “simply data” to actual coding.'
				]
			}
		},
		skillz: {
			'Scripting and development': [
				'Python, JavaScript (React JS, Svelte JS). ',
				'MySQL, PostgreSQL,SQLite, Redis, Apache, Nginx.',
				'Linux, Bash & Zsh, Infrastructure-as-Code, CI/CD (via GitHub, Vercel, Supabase, AWS).'
			],
			'Team lead experience': [
				'Coaching and training of junior developers. ',
				'Led teams of data nerds to delivering millions of clean data records each year.',
				'Provide expertise on infrastructure and platform (ie tech) to aid management decision-making.'
			]
		},
		pubz: [
			[
				[
					'“Movement and Place in Mapping Movement” (Article, 2023) ',
					'https://medium.com/@nick33white/design-theory-movement-and-place-in-mapping-movement-375110749b73'
				],
				[
					'“Marble Runs, Clown Cars, and Metadata Schemas” (DLF Conference Presentation, 2023) ',
					''
				],
				[
					'“The Collective Wisdom Handbook” (Book, 2021) ',
					'https://collectivewisdomproject.org.uk'
				],
				['“IIIF and the Problem with CSS Image Cropping” (Article, 2019) ', ''],
				['“The Time Machine” (Chicago Code4Lib Conference Presentation, 2019)', '']
			],
			[
				['“FOSS: What and Why” (2020)', ''],
				['“Digital Humanities Careers” (2021)', ''],
				['“From Socrates to Stack Exchange: Why Share Knowledge” (2022)', ''],
				['“Tools for Fast Prototyping” (2024)', ''],
				['“Postcards: Are they the peak of human technology?” (2024)', ''],
			]
		],
		intz: {
			'Technology ':
				'Enthusiastic about keeping up with technological trends and innovations; engaged with the community to learn how people are leveraging new technologies in legacy and critical codebases, whether that’s understanding the most recent security breaches (omg xz!), or building web components for library assets. ',
			'Music ':
				'Eclectic tastes from 50s jazz to Simpsonwave, from to Afrofuture funk to shoegaze. ',
			'Arts & Literature ':
				'Perpetually engaged with non-representational theory (Gilles Deleuze, Guy Debord) and immersed in the phenomenology of literature (J.L. Borges), art (Maurice Blanchot), and life (Alphonso Lingis).'
		}
	};
</script>

<div class="bg"></div>
<main style="--rando-font: {randoFont}">
	<article>
		<section class="title-section">
			<div class="title-text">
				<h4 class="title-top">a little</h4>
				<h3 class="title">Resume</h3>
				<h4 class="title-bottom">for</h4>
				<h1 class="name">Nick White</h1>
			</div>
		</section>
		<section class="body-text">
			<h2>Employment History</h2>
			<dl>
				{#each Object.keys(res.jobz) as job}
					<dt>{job}</dt>
					<dd class="dates">
						{res.jobz[job].dates[0]} -
						{res.jobz[job].dates[1]}
					</dd>
					{#each res.jobz[job].duties as dut}
						<dd>{dut}</dd>
					{/each}
				{/each}
			</dl>
		</section>
		<section class="body-text">
			<h2>Skills</h2>
			<dl>
				{#each Object.keys(res.skillz) as skillset}
					<dt>{skillset}</dt>
					{#each res.skillz[skillset] as skill}
						<dd>{skill}</dd>
					{/each}
				{/each}
			</dl>
		</section>
		<section class="body-text">
			<h2>Publications &amp; Presentations</h2>

			<dl>
				{#each res.pubz as pubset, i}
					<dt>
						{#if i === 0}
							Articles &amp; Conferences
						{:else}
							Job Talks
						{/if}
					</dt>

					{#each pubset as pub}
						<dd>
							{#if pub[1]}
								<a href={pub[1]} target="_blank">{pub[0]}</a>
							{:else}
								{pub[0]}
							{/if}
						</dd>
					{/each}
				{/each}
			</dl>
			<p>
				<a href="https://nick3white.github.io/portfolio" target="_blank"
					>Please enjoy this clickable anchor tag which will carry you off to see a portfolio of the
					web dev work I've done recently, too.</a
				>
			</p>
		</section>
		<section class="body-text">
			<h2>Interests</h2>
			<dl>
				{#each Object.entries(res.intz) as int}
					<dt>{int[0]}</dt>
					<dd>{int[1]}</dd>
				{/each}
			</dl>
		</section>
    <div class="citation">
      <p>
Wallpaper artists are all in their filenames.  If there's no indication where it came from in the filename, it's because I don't know where it came from. :(
      </p>
      <p>
      They're mostly by Masashi Wakui.
      </p>
    </div>
	</article>
</main>

<theme-selector {themes} defaultTheme={randoTheme}></theme-selector>

<style>
	main {
		color: rgb(var(--foreground));
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		font-family: var(--rando-font);
		position: relative;
		backdrop-filter: blur(10px);
	}
	.bg {
		background-image: var(--wallpaper);
		background-size: cover;
		background-position: center;
		z-index: 0;
		content: '';
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	article,
	.title-section {
		background-image: var(--wallpaper);
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
	}
	article {
		padding-block: 22rem;
    position: relative;
		width: min(555px, 90vw);
	}
	.body-text,
	.title-text, .citation {
		background: rgba(var(--background), 0.87);
		backdrop-filter: blur(10px) saturate(3.3);
	}
	.title-section {
		height: 22rem;
		position: sticky;
		top: -11rem;
		z-index: 10;
	}
	.title-text {
		position: sticky;
		top: -1rem;
		padding: 0 2rem 1rem 2rem;
		margin: 0;
		& .title-top,
		.title,
		.title-bottom,
		.name {
			margin-block: 0;
		}
		.title-top {
			margin-inline: 2rem;
		}
		.title-bottom {
			margin-inline: 3rem;
		}
		.title {
			margin-inline: 1rem;
		}
	}
	.name,
	.title {
		position: sticky;
	}
	.name {
		margin-bottom: 10px !important;
		top: 3rem;
		font-size: clamp(1.25rem, -0.2875rem + 6.8333vw, 3.3rem);
	}
	.title {
		top: 7rem;
		font-size: clamp(1rem, 0.625rem + 1.6667vw, 1.5rem);
	}
	.body-text {
		margin-bottom: 76px;
		padding-bottom: 11px;
	}
	h2,
	dt {
		position: sticky;
		padding-inline: 2rem;
		margin: 0;
		background: rgba(var(--color7));
		color: rgba(var(--color0));
	}
	h2 {
		top: 11rem;
	}
	dt {
		top: 13rem;
	}
	.dates {
		position: sticky;
		padding-inline: 2rem;
		margin: 9px 0;
		top: 14.3rem;
		backdrop-filter: blur(20px);
	}
	dd:not(.dates) {
		font-size: 1.1rem;
		line-height: 2rem;
		border-inline: 2px solid rgba(var(--color3), 0.5);
		margin: 2rem 1rem;
		padding: 0 1rem;
	}
	.body-text p {
		font-size: 1.1rem;
		line-height: 2rem;
		margin: 2rem 1rem;
		padding: 0 1rem;
	}
	.body-text :is(p, dd):has(a) {
		background-image: linear-gradient(
			to right,
			rgba(var(--foreground), 0.1) 0 50%,
			rgba(var(--foreground), 0.2) 50% 100%
		);
		background-size: 200% 100%;
		background-position: -100% 0;
		transition: 200ms;
	}
	.body-text :is(p, dd):has(a):hover {
		background-position: 0 0;
	}
	.body-text a {
		display: inline-block;
		height: 100%;
		width: 100%;
		text-decoration: none;
		color: inherit;
	}
	.body-text a:hover {
	}
	img {
		width: 100%;

		padding-inline: 2rem;
		object-fit: contain;
	}
	img {
		margin-bottom: 33px;
	}
  .citation {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 11px;
    display: flex;
    flex-direction: column;
    gap: 11px;
& p {
      padding: 0;
      margin: 0;
    }
  }
</style>
