<script lang="ts">
	import { cn } from '@/utils';
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: MenubarPrimitive.SeparatorProps = $props();
</script>

<MenubarPrimitive.Separator
	bind:ref
	data-slot="menubar-separator"
	class={cn('-mx-1 my-1 h-px bg-border', className)}
	{...restProps} />
