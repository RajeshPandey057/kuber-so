import { Tooltip as TooltipPrimitive } from 'bits-ui';

const Root = TooltipPrimitive.Root;
const Provider = TooltipPrimitive.Provider;
const Portal = TooltipPrimitive.Portal;

export {
	Root,
	Provider,
	Portal,
	//
	Root as Tooltip,
	Provider as TooltipProvider,
	Portal as TooltipPortal
};

export { default as Trigger, default as TooltipTrigger } from './tooltip-trigger.svelte';
export { default as Content, default as TooltipContent } from './tooltip-content.svelte';
