<?php

if ( ! function_exists( 'eruma_go_setup' ) ) :
function eruma_go_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
}
endif; // eruma_go_setup
add_action( 'after_setup_theme', 'eruma_go_setup' );

function eruma_go_scripts() {
    wp_enqueue_style( 'semantic-ui-css', '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', false );
    wp_enqueue_style( 'eruma-go-bundled-style', get_template_directory_uri() . '/dist/style.css' );
	wp_enqueue_style( 'eruma-go-style', get_stylesheet_uri() );
    
    wp_enqueue_script('eruma-go-manifest', get_template_directory_uri() . '/dist/manifest.js', '', '', true);
    wp_enqueue_script('eruma-go-vendor', get_template_directory_uri() . '/dist/vendor.js', '', '', true);
    wp_enqueue_script('eruma-go-bundle', get_template_directory_uri() . '/dist/bundle.js', '', '', true);
    $wnm_custom = array('stylesheet_directory_uri' => get_stylesheet_directory_uri());
    wp_localize_script('eruma-go-bundle', 'directory_uri', $wnm_custom);
}
add_action('wp_enqueue_scripts', 'eruma_go_scripts');