<script>
    const links = [[ 'back to top', '#sec-0' ], ['experience', '#sec-1'], ['jobs', '#sec-2'], ['interests', '#sec-3'], ['edu', '#sec-4'], ['contact', '#sec-5']]
</script>

<footer>
{#each links as link}
<a href="{link[1]}" class="llines">{link[0]}</a>
{/each}
</footer>

    <style>
    footer {
        font-family: 'styrene';
        font-size: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: fixed;
        bottom: 20px;
        lefT: 0;
        right: 0;
    }
    </style>
