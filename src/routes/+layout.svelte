<script>
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { initFlowbite } from 'flowbite';
	onMount(() => {
		initFlowbite();
	});
</script>

<slot />
