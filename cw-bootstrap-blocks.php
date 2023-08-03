<?php
/**
 * Plugin Name:       CW Bootstrap Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cw-bootstrap-blocks
 *
 * @package           craigiswayne
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function craigiswayne_cw_bootstrap_blocks_block_init() {
	$build_dir = __DIR__.'/build';
	$directories_in_build_dir = array_diff(scandir($build_dir), ['.','..']);
	foreach ($directories_in_build_dir as $dir){
		$potential_block_dir = $build_dir.'/'.$dir;
		if(!file_exists($potential_block_dir.'/block.json')){
			continue;
		}
		register_block_type( $potential_block_dir );
	}
}
add_action( 'init', 'craigiswayne_cw_bootstrap_blocks_block_init' );
