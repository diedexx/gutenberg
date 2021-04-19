/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { edit as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';

const { name } = metadata;
export { metadata, name };

export const settings = {
	title: _x( 'Post Comment Edit Link', 'block title' ),
	description: __(
		'Displays a link to edit the comment in the WordPress Dashboard. This link is only visible to users with the edit comment capability.'
	),
	icon,
	edit,
};
