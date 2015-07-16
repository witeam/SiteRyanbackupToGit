<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mb_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|ye;Lq>3dSo$Ora^^WBs,7vS7dMlhJYa1v-l-eJfjy]u/3;$F4oA(_?:tSG!NB= ');
define('SECURE_AUTH_KEY',  '%{c7*|;-su%c~&>1zjU.v|T-u,Cr9By-Gs7-fs)Z[KE|H5{C[|^ts?-WaJM-?c:Y');
define('LOGGED_IN_KEY',    'F@aIJONnIb<G9K5oSH#H~f(=%+>aap|@ZdY|Mf{tb|2!_QI9Oag&HK>Vk?h8zl24');
define('NONCE_KEY',        '-r}egO:GM2)R>Js?I>4{v`@Q|wJs^lmw!b|?_dh]UVsYj~e,a4SL2F.j p+!m^O#');
define('AUTH_SALT',        '1237kaw&F6x:vJ|`:r %tsjmpa-,@G)Z{teWiM 6`Qb}v<hp7:(g<-5}suSW3y *');
define('SECURE_AUTH_SALT', 'br_,#=n>N[e+?4}8Y1qV5)w1{`7QNa5.<aIzR>/rbw?]IO^=9+Ktu:&e8p#FOqtn');
define('LOGGED_IN_SALT',   '{<Bq41poDsjk;Lr QjhHQ+Sz?IKA-8t-M&F*++f`;tTv,6~^h|>hEZ0e!}VNqzdL');
define('NONCE_SALT',       '._LR~&W+bb@l{FNxkDnAG|U|GrW.~+$FtChuv%qC6W2:/^lB{TtZc:H9RK]_#~}H');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'rm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
