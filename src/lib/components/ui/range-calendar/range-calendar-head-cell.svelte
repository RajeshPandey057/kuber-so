<script lang="ts">
	import { cn } from '@/utils';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: RangeCalendarPrimitive.HeadCellProps = $props();
</script>

<RangeCalendarPrimitive.HeadCell
	bind:ref
	class={cn(
		'w-(--cell-size) rounded-md text-[0.8rem] font-normal text-muted-foreground',
		className
	)}
	{...restProps} />
