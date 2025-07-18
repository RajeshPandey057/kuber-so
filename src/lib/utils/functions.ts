import { GIGABYTE, KILOBYTE, MEGABYTE } from './constants';
import { dateTime } from './libs';

export function getInitials(fullName: string) {
	if (!fullName || fullName.trim() === '') {
		return 'US';
	}
	const allNames = fullName.trim().split(' ');
	return ((allNames.at(0)?.charAt(0) ?? 'U') + (allNames.at(-1)?.charAt(0) ?? 'S')).toUpperCase();
}

export function getFileType(url: string | null | undefined): string {
	if (!url) return '';
	if (url.includes('.pdf')) return 'pdf';
	return 'image';
}
export const displaySize = (bytes: number): string => {
	if (bytes < KILOBYTE) return `${bytes.toFixed(0)} B`;

	if (bytes < MEGABYTE) return `${(bytes / KILOBYTE).toFixed(0)} KB`;

	if (bytes < GIGABYTE) return `${(bytes / MEGABYTE).toFixed(0)} MB`;

	return `${(bytes / GIGABYTE).toFixed(0)} GB`;
};

// Format date to readable string
export function formatDate(date: Date | string | null | undefined): string {
	if (!date) return 'N/A';
	return dateTime(date).format('ll');
}

// Get age from date of birth
export function getAge(birthDate: Date | string | null | undefined): string {
	if (!birthDate) return '';
	const age = dateTime().diff(dateTime(birthDate), 'year');
	return ` (${age} years)`;
}
// Generate or retrieve a unique UUID for the session
export function getSessionUUID(): string {
	const key = 'kuber-session-uuid';
	let uuid = localStorage.getItem(key);
	if (!uuid) {
		uuid = crypto.randomUUID();
		localStorage.setItem(key, uuid);
	}
	return uuid;
}
