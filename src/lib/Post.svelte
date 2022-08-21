<script lang="ts">
    export let title:string;
    export let description:string;
    export let link:string;
</script>

<div class="post">
    <h2><a href={link}>{title}</a></h2>
    <p>{@html description}</p>
</div>

<style>
    p,
    h2{
        text-align: center;
    }
    .post{
        background-color: rgba(77, 77, 77, 0.708);
        border: 5px solid rgba(77, 77, 77, 0.708);
    }
</style>