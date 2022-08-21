<script lang="ts">
	let files:string[] = ["overhauled-dissenter-styl.fla" , 
	"allmadnesssprites.fla", 
	"Animators Sheet.fla", 
	"Blood_sheet_V2.fla", 
	"Gunsheetlol-V2.0.fla",
	"mc7.5.fla",
	"mc-9-5-sheet.fla",
	"mcfluidiniumprosprites.fla"]
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog" />
</svelte:head>

<div class="collection">
	<h1>
		Collection
		<p style="text-align: center; font-size: 1rem;">My Collection of Madness Combat sprites
			<br>
			(btw you need adobe flash/animate to open any of these files. Another thing to mention is that is isn't the entire thing.
		The entire thing is like 1GB).</p>
		{#each files as file}
			<a href="{file}" download>{file}</a>
			<br>
		{/each}
	</h1>
</div>

<style>
	a{
		font-size: 1.3rem;
	}
</style>
