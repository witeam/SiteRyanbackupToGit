<?php

// Custom Field Columns
add_filter('manage_ryans_photo_posts_columns', 'ST4_columns_head_only_ryans_photo', 10);
add_action('manage_ryans_photo_posts_custom_column', 'ST4_columns_content_only_ryans_photo', 10, 2);
 
// Set Fields
function ST4_columns_head_only_ryans_photo($defaults) {
	unset($defaults['date']);
	$defaults['image'] = 'Image';
	$defaults['caption'] = 'Caption';
	//$defaults['date'] = 'Date';
	return $defaults;
}
// Set Value in Fields
function ST4_columns_content_only_ryans_photo($column_name, $post_ID) {
	if ($column_name == 'caption') {
		echo get_field('caption',$post_ID);
	}
	if ($column_name == 'image') {
		$photo = get_field('photo',$post_ID);
		echo '<img src="'.$photo['url'].'" width="50"/>';
	}
}
?>