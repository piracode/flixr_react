<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbczybs3rr95kv');

/** Database username */
define('DB_USER', 'ui61mvvoyms1b');

/** Database password */
define('DB_PASSWORD', '2~y:#cjzt@O3');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'cDE!,1GVv9YD= aV5eVH4BH|TAFl051 H1hEdJjP2tEiU<c<z6Y4hQ|(qXyTb2un');
define('SECURE_AUTH_KEY',  '<tlx<rH4&&iV`prWsylwTpH(Ga`Vb1,i;~H_Zbc2,cYB)$`>p:xove9W~|Gz!1Do');
define('LOGGED_IN_KEY',    'Uejb?+`-qj4)^A?6N>Y8(Stq0j$)VB1:s=.f~Ck%neSR+Zx!LS-WaE2qi=G_|8M4');
define('NONCE_KEY',        '$S`Bvz0*E8z/w~yl_X+~)7Y#m+,LVn5Q2j<|?*4FuaxF_aWca{L%J&-TDO2KEq95');
define('AUTH_SALT',        'Y<TtC!WOj<3G(Kg|gBFFyTQk=tx),>ED>E=M?>MmC3&#FXOdLF;o[TI;n56}!w/w');
define('SECURE_AUTH_SALT', 'qD-h:|[&;e/[DX~i +gWX5^R@_n<s|)|:VaqC h0Y{Ce97~<1I)4zscm1o8[)YMS');
define('LOGGED_IN_SALT',   '=udY &%^06Yu|FUgWGWuRflphVx;8}c!,c3b4rm8O3TEIdcb#dT.s/CQnd$?QG4#');
define('NONCE_SALT',       'cf<m74/i4K4Z#-g|OQvkSo!|UIyHtDlR8pf9Uq-t#W+-BigaN)fG_o%db3rPOr|t');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
