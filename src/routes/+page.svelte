<script lang="ts">
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Twingamerdudes site" />
</svelte:head>

<section>
	<h1>
		<b>Welcome to my site!</b>
		<h2>
			We do programming stuff here
		</h2>
		<p>This site is just here so you can view my projects
			and so I can make posts about what I'm doing.
		</p>
		<p>Maybe you should check out the <a href="/about">About Me</a> or the <a href="/blog">Blog</a> as well</p>

		<p>Contact: twingamerdudes@gmail.com</p>
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	h2 {
		font-size: 1rem;
	}
	p{
		font-size: 1rem;
	}
</style>
