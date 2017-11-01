<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

    // The prefix to use when naming tables. This can be no more than 5 characters.
    'tablePrefix' => '',
    '*' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => 'root',
        'database' => 'costello'
    ),
    '.com' => array(
        'server' => '127.0.0.1',
        'user' => 'costell4_craft',
        'password' => '9&()TVm_@Jtc',
        'database' => 'costell4_craft'
    ),
);