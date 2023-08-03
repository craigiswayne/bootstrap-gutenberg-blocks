import { __ } from '@wordpress/i18n';
import {
	PanelBody, SelectControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {breakpoints, textDomain} from '../core';

const containerSizes = breakpoints.map( i => {
	return {...i, ...{value: i.suffix ? `container-${i.suffix}` : 'container' }}
});
containerSizes.push({label: __( 'Fluid', textDomain ), value: 'container-fluid'});

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, clientId, setAttributes,} ) {
	let { size } = attributes;

	const { hasChildBlocks } = useSelect( ( select ) => {
		const { getBlockOrder } = select( 'core/block-editor' );
		return {
			hasChildBlocks: getBlockOrder( clientId ).length > 0,
		};
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Container Settings', textDomain ) }>
					<SelectControl
						label={ __( 'Size', textDomain ) }
						value={ size }
						options={ containerSizes }
						onChange={ ( value ) => {
							setAttributes( {
								size: value,
							} );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<InnerBlocks
					renderAppender={
						hasChildBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
				/>
			</div>
		</>
	);
}
