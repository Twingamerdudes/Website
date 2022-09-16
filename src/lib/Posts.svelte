<script lang="ts">
import Post from "$lib/Post.svelte";
</script>

<div class="Posts">
	<Post title="Update" 
	description="<p>Here's a little short...</p>" 
	link="/blog/Update">
	</Post>
	<Post title="How I remade the python operators!" description="
	<p>Hello everyone. Today, I decid...</p>"
	link="/blog/MathLibary"
	></Post>
	<br>
    <Post title="Welcome" description="
	<p>This is the first blog!
		Here I will post updates...</p>"
	link="/blog/Welcome"
	></Post>
</div>

<style>
	p{
		text-align: center;
	}
</style>