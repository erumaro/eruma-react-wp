<?php
        
add_action('wp_enqueue_scripts', 'eruma_go_scripts');
function eruma_go_scripts() {
    wp_enqueue_script('eruma-go-manifest', get_template_directory_uri() . '/dist/manifest.js', true);
    wp_enqueue_script('eruma-go-vendor', get_template_directory_uri() . '/dist/vendor.js', true);
    wp_enqueue_script('eruma-go-bundle', get_template_directory_uri() . '/dist/bundle.js', true);
    $wnm_custom = array('stylesheet_directory_uri' => get_stylesheet_directory_uri());
    wp_localize_script('eruma-go-bundle', 'directory_uri', $wnm_custom);
}