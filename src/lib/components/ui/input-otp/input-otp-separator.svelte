<script lang="ts">
	import type { WithElementRef } from '@/utils';
	import DotIcon from '@lucide/svelte/icons/dot';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} data-slot="input-otp-separator" role="separator" {...restProps}>
	{#if children}
		{@render children?.()}
	{:else}
		<DotIcon />
	{/if}
</div>
