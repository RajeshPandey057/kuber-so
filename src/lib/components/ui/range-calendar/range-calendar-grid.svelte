<script lang="ts">
	import { cn } from '@/utils';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: RangeCalendarPrimitive.GridProps = $props();
</script>

<RangeCalendarPrimitive.Grid
	bind:ref
	class={cn('mt-4 flex w-full border-collapse flex-col gap-1', className)}
	{...restProps} />
