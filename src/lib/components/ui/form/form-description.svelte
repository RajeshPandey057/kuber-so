<script lang="ts">
	import { cn, type WithoutChild } from '@/utils';
	import * as FormPrimitive from 'formsnap';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChild<FormPrimitive.DescriptionProps> = $props();
</script>

<FormPrimitive.Description
	bind:ref
	data-slot="form-description"
	class={cn('text-sm text-muted-foreground', className)}
	{...restProps} />
