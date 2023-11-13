<?php


$movies = [
    [
        'name' => 'the Lord of the Rings',
        'releaseYear' => 2001,
        'director' => 'Peter Jackson',
        'purchaseUrl' => 'http://example.com',
        'category' => ['fantasy', 'drama', 'horror']
    ],
    [
        'name' => 'Leon the Profissional',
        'releaseYear' => 1995,
        'director' => 'Luc Besson',
        'purchaseUrl' => 'http://example.com',
        'category' => ['fantasy', 'drama', 'horror']
    ],
    [
        'name' => 'Harry Potter',
        'releaseYear' => 2001,
        'director' => 'Chris Columbus',
        'purchaseUrl' => 'http://example.com',
        'category' => ['fantasy', 'drama', 'horror']
    ],
    [
        'name' => 'The Hobbit',
        'releaseYear' => 2012,
        'director' => 'Peter Jackson',
        'purchaseUrl' => 'http://example.com',
        'category' => ['fantasy', 'drama', 'horror']
    ]
];

//fn = function

/**
 * PHP provide us some built-In Functions that will make the work easier.
 * so, instead of using the following lambda function(anonymous Function)
 * we can use the array_filter() PHP built-In function and it will take the same 
 * function parameters and will work just the same as the commented function beneath.
 */
/*  function filter ($items, $fn)
{
    $filterdItems = [];
    foreach ($items as $item) {
        if ($fn($item)) {
            $filterdItems[] = $item;
        }
    }
    return $filterdItems;
}; */

$filteredItems = array_filter($movies, function ($movie) {
    return $movie['name'] === "Harry Potter" ;
});

require "practicing.view.php";
