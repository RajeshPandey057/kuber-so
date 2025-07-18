import { Drawer as DrawerPrimitive } from 'vaul-svelte';

const Portal: typeof DrawerPrimitive.Portal = DrawerPrimitive.Portal;

export {
	Portal,

	//
	Portal as DrawerPortal
};

export { default as Root, default as Drawer } from './drawer.svelte';
export { default as NestedRoot, default as DrawerNestedRoot } from './drawer-nested.svelte';
export { default as Content, default as DrawerContent } from './drawer-content.svelte';
export { default as Description, default as DrawerDescription } from './drawer-description.svelte';
export { default as Overlay, default as DrawerOverlay } from './drawer-overlay.svelte';
export { default as Footer, default as DrawerFooter } from './drawer-footer.svelte';
export { default as Header, default as DrawerHeader } from './drawer-header.svelte';
export { default as Title, default as DrawerTitle } from './drawer-title.svelte';
export { default as Trigger, default as DrawerTrigger } from './drawer-trigger.svelte';
export { default as Close, default as DrawerClose } from './drawer-close.svelte';
