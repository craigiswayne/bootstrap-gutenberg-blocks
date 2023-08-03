<?php
/**
 * Block content.
 * Defined in wp_bootstrap_blocks_get_template() which requires this template.
 *
 * @var $attributes array
 * @var $content string
 */
$visual_css_classes = ($attributes['size'] ?? '');
?>
<div <?= get_block_wrapper_attributes(['class' => $visual_css_classes]); ?>><?= $content; ?></div>
