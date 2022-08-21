<script lang="ts">
	let projects:string[][] = [["Stickman Fights X (cancelled)", "https://twingamerdudes.itch.io/stickman-fights-x-demo"], ["This Website", ""], ["XGen", "https://gamebanana.com/tools/7964"], ["Montyverse", "https://gamebanana.com/mods/365697"], ["cpl", "https://github.com/Twingamerdudes/Copilot-Language"], ["Razel", "https://twingamerdudes.itch.io/razel"]]
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About Twingamerdudes" />
</svelte:head>

<div class="content">
	<h1>About me</h1>

	<p>
		Welcome to my site! I am a programmer who
		also teachs other people programming!
	</p>


	<p>
		I have also made some projects! Check them out below:
	</p>

	{#each projects as project}
		{#if project[1] != ""}
			<a href={project[1]} style="list-style-type: none;">{project[0]}</a>
			<br>
		{:else}
		<li style="color: rgba(255, 255, 255, 0.7); list-style-type: none;">{project[0]}</li>
		{/if}
		<br>
	{/each}
	<p>I also have a <a href="https://github.com/Twingamerdudes">GitHub</a> if you wanna check that out</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: 1rem auto 0 auto;
	}
	:root{
		text-align: center;
	}
</style>
