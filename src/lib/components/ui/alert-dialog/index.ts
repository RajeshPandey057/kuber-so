import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

const Root = AlertDialogPrimitive.Root;
const Portal = AlertDialogPrimitive.Portal;

export {
	Root,
	Portal,

	//
	Root as AlertDialog,
	Portal as AlertDialogPortal
};

export { default as Title, default as AlertDialogTitle } from './alert-dialog-title.svelte';
export { default as Action, default as AlertDialogAction } from './alert-dialog-action.svelte';
export { default as Cancel, default as AlertDialogCancel } from './alert-dialog-cancel.svelte';
export { default as Footer, default as AlertDialogFooter } from './alert-dialog-footer.svelte';
export { default as Header, default as AlertDialogHeader } from './alert-dialog-header.svelte';
export { default as Trigger, default as AlertDialogTrigger } from './alert-dialog-trigger.svelte';
export { default as Overlay, default as AlertDialogOverlay } from './alert-dialog-overlay.svelte';
export { default as Content, default as AlertDialogContent } from './alert-dialog-content.svelte';
export {
	default as Description,
	default as AlertDialogDescription
} from './alert-dialog-description.svelte';
