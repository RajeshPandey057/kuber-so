import { LinkPreview as HoverCardPrimitive } from 'bits-ui';

const Root = HoverCardPrimitive.Root;

export { Root, Root as HoverCard };

export { default as Content, default as HoverCardContent } from './hover-card-content.svelte';
export { default as Trigger, default as HoverCardTrigger } from './hover-card-trigger.svelte';
