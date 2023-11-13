class User {
    user = {
        name: null,
        score: 0
    };

    highScores = [];


    constructor(name) {
        this.user.name = name;
    }

    getUser(){
        return this.user.name +' ,you reached end of the Quiz! your score is: ' + this.user.score;
    }



    /**
     * this method will all 1 to the score 
     * and then save it to localStorage
     */
    addScore() {
        this.user.score++;
        this.saveToLocalStorage();
    }


    /**
     * 1- this method will get the content of quiz-highscore-List in LocalStorag (if there is any)
     *    and will store it in highScores Array
     * 
     * 2- then it will convert it if it comes from localStorage(if it's not an array)
     *    cuz localStorage saves only string 
     * 
     * 3- it will then find if the same user name is already saved in the array
     *    then it will save it in currentUser
     * 
     * 4- then it will update the user if it's already existing 
     *    get index of existing User
     *    and if index of currentUser is already saved in the array 
     *    then it will replace the saved users information with the new one's
     *    or add a new user
     * 
     * 5- and then stringify the array and add it to the localStorage
     */

    /* saveToLocalStorage() {
        if (localStorage.getItem('quiz-highscore-list'))
            this.highScores = localStorage.getItem('quiz-highscore-list');

        if (!Array.isArray(this.highScores))
            this.highScores = JSON.parse(this.highScores);

        const sameUserInHighScores = this.highScores.find(user => user.name === this.user.name);

        // Notice: be aware of get the SAME user because of only using the name to identify the User
        if (sameUserInHighScores) {
            const sameUserInHighScoresIndex = this.highScores.findIndex(user => user.name === this.user.name);
            this.highScores.splice(sameUserInHighScoresIndex, 1, this.user);

        } else {
            this.highScores.push(this.user);
        }

        localStorage.setItem('quiz-highscore-list', JSON.stringify(this.highScores));
    } */

    saveToLocalStorage() {
        if (localStorage.getItem('quiz-highscore-list'))
            this.highScores = localStorage.getItem('quiz-highscore-list');

        if (!Array.isArray(this.highScores))
            this.highScores = JSON.parse(this.highScores);

        const sameUserInHighScores = this.highScores.find(user => user.name === this.user.name);

        // Notice: be aware of get the SAME user because of only using the name to identify the User
        if (sameUserInHighScores) {
            if (this.user.score > sameUserInHighScores.score ){
                const sameUserInHighScoresIndex = this.highScores.findIndex(user => user.name === this.user.name);
                console.log('sameUserInHighScores',sameUserInHighScores);
                console.log('sameUserInHighScoresIndex',sameUserInHighScoresIndex);
                this.highScores.splice(sameUserInHighScoresIndex, 1, this.user);

            }
        } else {
            this.highScores.push(this.user);
        }
    

        localStorage.setItem('quiz-highscore-list', JSON.stringify(this.highScores));
    }
}
