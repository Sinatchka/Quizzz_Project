/**
 * on start the quiz button
 * 
 * the Parameter passed into Main new instance will 
 * be then passed to the Constructor in Main 
 * reset-btn will restart the quiz 
 * highscores-btn should send the name and score
 * of the user to the server and bring all the data back
 * and show it to the viewer.
 */
const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', (event) =>{
    let nameInput = document.getElementById("username").value;
    let display = new Display('#quiz-main-container');

    if (nameInput == ''){
        display.displayErrors('Username cannot be left empty!');
        event.preventDefault();
     } else {
        event.preventDefault();

        let main = new Main(0);
        main.saveNameToLocalStorage(nameInput);
        let changeClasses = new ChangeClasses();
        changeClasses.changeClass();

        main.executeProgram(nameInput);
            
        }
    }
);


const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', ()=>{
    window.location.href = 'index.html';
});

const highscoresButton = document.getElementById('highscores-table-btn');
highscoresButton.addEventListener('click', ()=>{
    /*
    here comes the name of user and the score
    */

    //and then we call the funtion that will execute the ajax request
    // and we pass the needed information to send to the database
    sendQuizDataToServer(userName,UserScore)
} )
