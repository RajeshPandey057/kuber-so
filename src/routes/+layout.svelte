<script lang="ts">
	import Sonner from '@/components/ui/sonner/sonner.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="font-int flex h-screen flex-col">
	<main class="flex flex-1 flex-col">
		{@render children?.()}
	</main>
</div>
<Sonner richColors />
