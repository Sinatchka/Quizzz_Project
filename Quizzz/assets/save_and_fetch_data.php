<?php 
// first we connect to the sqlite database
$database = new SQLite3('quizDatabase.sqlite');

// check if the request method is POST
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    //retrieve the data from POST Request:
    $name = $_POST['name'];
    $score = $_POST['score'];

    // now we insert the new Data into the Database, into TABLE users 
    $query = "INSERT INTO users (user, score) VALUES (:user, :score)";
    $stmt = $database->prepare($query);
    $stmt->bindValue(':user', $name, SQLITE3_TEXT);
    $stmt->bindValue(':score', $score, SQLITE3_INTEGER);
    $result = $stmt->execute();

    if($result){
        //if the data insertion was successful
        $resposeData['success'] = true;
    } else {
        //if Data insertion failed 
        $resposeData['success'] = false;
        $resposeData['message'] = 'Data insertion failed.';
    }
}

// retrieve all names and scores from the database
//retrieves all rows from users table
$query = "SELECT * user, score FROM users";
$result = $database->query($query);

$existingData =  [];
while ($row = $result->fetchArray(SQLITE3_ASSOC)){
    $existingData[] = $row;
}

//combine the new and existing Data
$resposeData = [
    'You:' => ['user' => $name, 'score' => $score],
    'Others' => $existingData
];

//send the Response as JSON
header('Content-Type: application/json');
echo json_encode($resposeData);

//close the database connection
$database->close();

?>



