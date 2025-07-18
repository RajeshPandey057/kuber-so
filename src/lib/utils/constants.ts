import { dev } from '$app/environment';

export const HOUR_IN_SECONDS = 60 * 55;
export const WEEK_IN_SECONDS = 60 * 60 * 24 * 7;
export const WEEK_IN_MILLISECONDS = 60 * 60 * 24 * 7 * 1000;
export const SESSION_TOKEN = 'kuber-session-token';
export const options = { path: '/', httpOnly: true, secure: !dev, age: WEEK_IN_SECONDS };
// Utilities for working with file sizes
export const BYTE = 1;
export const KILOBYTE = 1024;
export const MEGABYTE = 1024 * KILOBYTE;
export const GIGABYTE = 1024 * MEGABYTE;

// utilities for limiting accepted files
export const ACCEPT_IMAGE = 'image/*';
export const ACCEPT_VIDEO = 'video/*';
export const ACCEPT_AUDIO = 'audio/*';
export const ENDPOINT = 'https://kuber-ac-api.codust.dev';
