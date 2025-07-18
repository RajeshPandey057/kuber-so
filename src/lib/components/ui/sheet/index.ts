import { Dialog as SheetPrimitive } from 'bits-ui';

const Root = SheetPrimitive.Root;
const Portal = SheetPrimitive.Portal;

export {
	Root,
	Portal,

	//
	Root as Sheet,
	Portal as SheetPortal
};

export { default as Close, default as SheetClose } from './sheet-close.svelte';
export { default as Trigger, default as SheetTrigger } from './sheet-trigger.svelte';
export { default as Overlay, default as SheetOverlay } from './sheet-overlay.svelte';
export { default as Content, default as SheetContent } from './sheet-content.svelte';
export { default as Header, default as SheetHeader } from './sheet-header.svelte';
export { default as Footer, default as SheetFooter } from './sheet-footer.svelte';
export { default as Title, default as SheetTitle } from './sheet-title.svelte';
export { default as Description, default as SheetDescription } from './sheet-description.svelte';
