<script lang="ts">
	import { cn, type WithoutChild } from '@/utils';
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	data-slot="accordion-content"
	class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
	{...restProps}>
	<div class={cn('pt-0 pb-4', className)}>
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
