import { __ } from '@wordpress/i18n';
export const textDomain = 'cw-bootstrap-blocks'

export const breakpoints = [
	{
		suffix: '',
		label: __('Default', textDomain)
	},
	{
		suffix: 'sm',
		label: __('Small', textDomain)
	},
	{
		suffix: 'md',
		label: __('Medium', textDomain)
	},
	{
		suffix: 'lg',
		label: __('Large', textDomain)
	},
	{
		suffix: 'xl',
		label: __('XL', textDomain)
	},
	{
		suffix: 'xxl',
		label: __('XXL', textDomain)
	}
];
