import { Popover as PopoverPrimitive } from 'bits-ui';

const Root = PopoverPrimitive.Root;
const Close = PopoverPrimitive.Close;

export {
	Root,
	Close,
	//
	Root as Popover,
	Close as PopoverClose
};

export { default as Content, default as PopoverContent } from './popover-content.svelte';
export { default as Trigger, default as PopoverTrigger } from './popover-trigger.svelte';
