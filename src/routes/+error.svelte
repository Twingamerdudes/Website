<script>
    import {page} from '$app/stores'
</script>

<div>
    {#if $page.status === 404}
        <h1>404</h1>
        <p>We could't find the page you were looking for
            <br>
            Maybe this will help:
        </p> 
        <img src="SecondChannelLogoTransparent.png" alt="My second channel logo" class="img">
    {:else if $page.status === 410}
        <h1>410</h1>
        <p>Sorry to tell you this, but this website doesn't exist anymore...</p>
        <p class="sad">😢</p>
    {:else if $page.status === 502}
        <h1>502<br><b>Bad gateway</b>
        <p>
            Looks like the servers are having trouble
        </p> </h1>
    {/if}
</div>

<style>
    p{
        text-align: center;
        font-size: 1rem;
    }
    b{
        font-size: 1.5rem;
    }
    .sad{
        font-size: 2rem;
    }
    .img{
        width: 10rem;
        height: auto;
        padding-left: 26.5rem;
    }
</style>