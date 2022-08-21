import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }: {params:any}) {
  if (params.slug === 'Welcome') {
    return {
      content: `<script lang="ts">
    
      </script>
      
      <svelte:head>
          <title>Welcome</title>
          <meta name="description" content="Welcome Post" />
      </svelte:head>
      
      <div class="post">
          <h1>Welcome!👋</h1>
          <p>This is the first blog!
              Here I will post updates about videos, projects and life in general!</p>
          <p>This is a pretty short post, however most posts I make will be longer then this.</p>
          <p>Anyways, have I amazing day, I will see you in my next video, livestream, devlog, or blog post now I guess.
              Peace!
          </p>
      </div>
      
      <style>
          p{
              text-align: center;
          }
      </style>`
    };
  }
 
  throw error(404, 'Not found');
}