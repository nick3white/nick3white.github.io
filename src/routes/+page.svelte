<script>
    let hilited = 99
    const text = [
        ['presence of an enormous map', 'Deft and dextrous', 'manipulation of technology'],
        ['physical page-turning experience', 'Incisive and innovative', 'view into the core of complexity'],
        ['at either end of the data', 'Bold and focused', 'goal-oriented vision'],
    ]
</script>
<hr id="sec-0" />
<article>
    {#each text as tex, idx}
        <section class={hilited === idx ? 'hilited' : hilited < 99 ? 'blurrr' : '' } on:mouseenter={() => hilited = idx} on:mouseleave={() => hilited = 99}>
            <h2>{tex[0]}</h2>
            <p>{tex[2]}</p>
        </section>
    {/each}
</article>
<hr id="sec-1" />
<article>
    experience
</article>
<hr id="sec-2" />
<article>
    jerbs
</article>
<hr id="sec-3" />
<article>
    interests
</article>
<hr id="sec-4" />
<article>
    edu
</article>
<hr id="sec-5" />
<article>
    contact
</article>
<style>
    article {
        width: 95vw;
        margin: auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    section {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    section, h2, p {
        transition: 300ms;
    }
     h2, p {
        padding: 0;
        margin: 0;
    }
    h2 {
        font-size: min(17vw, 100px);
        /* line-height: min(30vw, 200px); */
        padding: 0;
        margin: 0;
        filter: blur(1px);
    }
    p {
        /* position: absolute; */
        font-family: 'styrene';
        font-size: min(9vw, 77px);
        filter: blur(77px);
    }
    .hilited p, .hilited h2 {
        filter: blur(0);

    }
    .blurrr {
        filter: blur(99px);
    }
</style>
