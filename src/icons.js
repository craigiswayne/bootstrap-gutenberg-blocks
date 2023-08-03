/**
 * Icons backport from @wordpress/icons package to not have a dependency to @wordpress/primitives.
 * Source: https://github.com/WordPress/gutenberg/tree/trunk/packages/icons/src/library
 *
 * Vertical alignment icons backport from Gutenberg.
 * Source: https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/block-vertical-alignment-control/icons.js
 */
import { Path, SVG } from '@wordpress/components';

export const container = (
	<SVG xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
		<Path d="M60 120l228 71.2L516 120 288 48.8 60 120zM278.5 1.5c6.2-1.9 12.9-1.9 19.1 0l256 80C566.9 85.6 576 98 576 112v16 0 21.2L292.8 237.7c-3.1 1-6.4 1-9.5 0L0 149.2V128 112C0 98 9.1 85.6 22.5 81.5l256-80zm23.9 266.8L576 182.8v46.5l-52.8 16.5c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5L576 262.8V400c0 14-9.1 26.4-22.5 30.5l-256 80c-6.2 1.9-12.9 1.9-19.1 0l-256-80C9.1 426.4 0 414 0 400V262.8l43.2 13.5c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20L0 229.2V182.8l273.7 85.5c9.3 2.9 19.3 2.9 28.6 0zm-185.5-2.6c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l64 20c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20l-64-20zm352 30.5c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-64 20c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5l64-20zm-224 9.5c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l38.5 12c9.3 2.9 19.3 2.9 28.6 0l38.5-12c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-38.5 12c-3.1 1-6.4 1-9.5 0l-38.5-12z"/>
	</SVG>
);

export const row = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3-range" viewBox="0 0 16 16">
		<Path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
		<Path d="M7 10a1 1 0 0 0 0-2H1v2h6zm2-3h6V5H9a1 1 0 0 0 0 2z" />
	</SVG>
);
