<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    
    $title = $faker->sentence(3);
    
    return [
        'user_id'       => rand(1,5),
        'title'         => $title,
        'description'   => $faker->text(300)
    ];
});
