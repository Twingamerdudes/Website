<script lang="ts">
	import Posts from "$lib/Posts.svelte"
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog" />
</svelte:head>

<div class="blog">
	<h1>
		Blog
		<p style="text-align: center; font-size: 1rem;">Here you can hear me talk about stuff</p>
	</h1>
	<Posts></Posts>
</div>

<style>
</style>
