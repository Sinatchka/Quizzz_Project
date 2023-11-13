<!DOCTYPE html>
<html>
<head>
    <title>practicing some php</title>
    <meta charset="UTF-8">
</head>

<body>
    <style>
        body {
            display: grid;
            place-items: center;
            height: 100vh;
            font-family: sans-serif;
        }
    </style>
    <h1>Recommended Movies</h1>
    
    <ul>
        <?php foreach ($filteredItems as $item) : ?>
            <li>
                <a href="<?= $item['purchaseUrl'] ?>">
                    Movie: <?= $item['name'] . "/ Release Date: " . $item['releaseYear'] . " / Director: " . $item['director'] ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>


</body>


</html>