import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

import Edit from './edit';
import metadata from './block.json';
import { container } from '../icons';

registerBlockType( metadata.name, {
	icon: container,
	edit: Edit,
	save() {
		return <InnerBlocks.Content />;
	},
} );
