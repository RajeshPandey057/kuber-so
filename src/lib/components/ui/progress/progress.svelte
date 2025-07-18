<script lang="ts">
	import { cn, type WithoutChildrenOrChild } from '@/utils';
	import { Progress as ProgressPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		max = 100,
		value,
		indeterminate = false,
		...restProps
	}: WithoutChildrenOrChild<ProgressPrimitive.RootProps> & {
		indeterminate?: boolean;
	} = $props();
</script>

<ProgressPrimitive.Root
	bind:ref
	data-slot="progress"
	class={cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', className)}
	{value}
	{max}
	{...restProps}>
	<div
		data-slot="progress-indicator"
		class={cn(
			'h-full bg-primary transition-all',
			indeterminate ? 'animate-bounce-progress w-1/3' : 'w-full flex-1'
		)}
		style={indeterminate
			? undefined
			: `transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`}>
	</div>
</ProgressPrimitive.Root>

<style>
	@keyframes bounce-progress {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(200%);
		}
	}

	:global(.animate-bounce-progress) {
		animation: bounce-progress 1.5s ease-in-out infinite;
	}
</style>
