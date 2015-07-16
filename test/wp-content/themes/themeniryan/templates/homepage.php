<?php 
/*

Template Name: Homepage

*/

include('includes/header.php');

?>

<h1>Sample ni ryan</h1>

<h1>Menu</h1>

<?php 
$defaults = array( 
 'container_class' => 'my-container-class', 
 'container_id'    => 'my-container-id',
 'menu_class'      => 'my-menu', 
 'menu_id'         => 'my-menu-id',
 'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
);
wp_nav_menu( $defaults ); 
?>

<?php echo get_field('welcome'); ?>

<h1>Ryans Photo</h1>
<?php $args = array(
	'posts_per_page'   => -1,
	'post_type'        => 'ryans_photo',
	'post_status'      => 'publish',
);
$posts_array = get_posts( $args ); 
foreach($posts_array as $ryans_photo) {
	echo '<br/>';
	echo '<h1>'.$ryans_photo->post_title.'</h1>';
	$photo = get_field('photo',$ryans_photo->ID);
	echo '<img src="'.$photo['url'].'"  width="300px"/>';
	echo '<p>Captiom: '.get_field('caption',$ryans_photo->ID).'</p>';
}

?>

<?php 
include('includes/footer.php');
?>