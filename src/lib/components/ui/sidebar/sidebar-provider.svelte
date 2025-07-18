<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { cn, type WithElementRef } from '@/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { SIDEBAR_COOKIE_NAME, SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants.js';
	import { setSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		open = $bindable(true),
		onOpenChange = () => {},
		class: className,
		style,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	} = $props();

	// Initialize state from local storage on mount
	$effect.pre(() => {
		if (globalThis.window !== undefined) {
			const storedValue = localStorage.getItem(SIDEBAR_COOKIE_NAME);
			if (storedValue !== null) {
				open = storedValue === 'true';
			}
		}
	});

	const sidebar = setSidebar({
		open: () => open,
		setOpen: (value: boolean) => {
			open = value;
			onOpenChange(value);

			// This persists the sidebar state in local storage.
			if (globalThis.window !== undefined) {
				localStorage.setItem(SIDEBAR_COOKIE_NAME, String(open));
			}
		}
	});
</script>

<svelte:window onkeydown={sidebar.handleShortcutKeydown} />

<Tooltip.Provider delayDuration={0}>
	<div
		data-slot="sidebar-wrapper"
		style="--sidebar-width: {SIDEBAR_WIDTH}; --sidebar-width-icon: {SIDEBAR_WIDTH_ICON}; {style}"
		class={cn(
			'group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar',
			className
		)}
		bind:this={ref}
		{...restProps}>
		{@render children?.()}
	</div>
</Tooltip.Provider>
