<script lang="ts">
	import { cn } from '@/utils';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: RangeCalendarPrimitive.HeaderProps = $props();
</script>

<RangeCalendarPrimitive.Header
	bind:ref
	class={cn(
		'flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium',
		className
	)}
	{...restProps} />
