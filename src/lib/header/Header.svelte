<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a class="image" href="https://www.youtube.com/channel/UCadEWq_aCTBqD05iGgZfhiQ">
			<img src="ChannelLogo.jpg" alt="Twingamerdudes" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/blog'}>
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
			<li class:active={$page.url.pathname === '/collection'}>
				<a sveltekit:prefetch href="/collection">Collection</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 4em;
		height: 4em;
		margin-left: 60%;
		margin-top: 60%;
		border-radius: 50%;
		z-index: 100;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(77, 77, 77, 0.708);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		-webkit-transition: border-color 0.5s linear; /* Saf3.2+, Chrome */
		-moz-transition: border-color 0.5s linear; /* FF3.7+ */
		-o-transition: border-color 0.5s linear; /* Opera 10.5 */
		transition: border-color 0.5s linear;
	}

	a:hover {
		color: var(--accent-color);
		text-decoration: none;
		border-bottom: 3px solid rgba(255, 0, 0, 1);
		border-color:rgba(255, 0, 0, 1);
		border-width: 3px;
		border-radius: 3px;
		-webkit-transition: border-color 0.5s linear; /* Saf3.2+, Chrome */
		-moz-transition: border-color 0.5s linear; /* FF3.7+ */
		-o-transition: border-color 0.5s linear; /* Opera 10.5 */
		transition: border-color 0.5s linear;
	}
	.image{
		border-color: rgba(0, 0, 0, 0);
	}
	.image:hover{
		border-color: rgba(0, 0, 0, 0);
	}
</style>
