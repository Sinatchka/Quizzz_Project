class Main {

    /**
     * important properties needed for the application 
     */
    
    display = null;
    content = null;
    i = null;
    quizData = null;

    topicQuestions = null;
    questionsCount = null;
    randomQuestionNumber = null;
    currentQuestion = null;

    optionChoosen = false;
    endOfTheQuiz = false;

    user = null;

    /**
     * the Paramater passed to Constructor 
     * and Constructor will be called directly
     * from the class
     * @param { number } i 
     */

    constructor(i) {
        this.i = i;
        this.display = new Display('#quiz-main-container');
        this.content = new ContentData();
        this.quizData = this.content.getQuizData();
    }



    /**
     * Execute the quiz program
     * 

     */
    executeProgram(userName) {
        this.user = new User(userName);
        this.user.saveToLocalStorage();

        this.display.showTopic(this.quizData[this.i].topic);

        this.getQuestionsContent();
        /*
            to shorten the next two lines we can write ot like this: 
            $('#next-question-btn).on('click', () => {}); 
        */
        const nextBtn = document.querySelector('#next-question-btn');
        nextBtn.addEventListener('click', () => {
            this.validateInputs();
            if (this.optionChoosen === true) {
                this.checkAnswer();
                this.getQuestionsContent();

            }
            else
                this.display.displayErrors('At least one Option must be selected!');

            this.optionChoosen = false;
        })
        this.displayOnPage();
    };



    /**
        * validate that an input 
        * is checked and save the 
        * value as true or false
    */
    validateInputs() {
        var inputs = document.querySelectorAll('.option');

        inputs.forEach(input => {
            if (input.checked)
                this.optionChoosen = true
        });
    }



    /**
     * get the content of the questions.
     */

    getQuestionsContent() {
        if (this.endOfTheQuiz === true) // or i can just write if (this.endOfTheQuiz) then
            this.display.endOfTheQuiz(this.user.getUser());
        else {
            this.topicQuestions = this.quizData[this.i];
            console.log(this.topicQuestions);

            this.questionsCount = this.topicQuestions.questions.length;
            console.log('questions count', this.questionsCount)
            this.randomQuestionNumber = this.randomizer(this.questionsCount);
            console.log(this.randomQuestionNumber);
            this.currentQuestion = this.topicQuestions.questions[this.randomQuestionNumber];

            console.log('getQuestionsContent', this.currentQuestion);

            this.getNextQuestion();
        }
    }



    /**
     * get the next Question
     * and display the results 
     * on the page
     */

    getNextQuestion() {
        var nextQuestionBtn = document.getElementById('next-question-btn');

        if (this.questionsCount >= 1) {
            this.displayOnPage();
            this.sliceCurrentQuestion();
        }

        if (this.questionsCount === 1) {
            if (this.i === (this.quizData.length - 1)) {
                nextQuestionBtn.innerText = 'End of the quiz';
                this.endOfTheQuiz = true;
            }

            else
                nextQuestionBtn.innerText = 'Next Topic';

            this.i = this.i + 1
            // or in short ++this.i;
        }

        else
            nextQuestionBtn.innerText = 'Next Question';
    }


    /**
         * Display topic, questions and options
         * on the page.
         * 
    */

    displayOnPage() {
        this.display.showTopic(this.quizData[this.i].topic);
        this.display.showQuestion(this.currentQuestion.question);
        this.display.showOptions(this.currentQuestion);
    }


    /**
        * Slice the displayed question
        * from the topic questions.
     */
    sliceCurrentQuestion() {
        (this.topicQuestions.questions).splice(this.randomQuestionNumber, 1);
    }



    /**
     * return random number
     * between 0 and the length(count)
     * of the QuizData questions
     * @param {number} number 
     * @returns {number}
     */
    randomizer(number) {
        return Math.floor(Math.random() * number);
    }



    /**
     * to check if the Answer is right
     * it will save all entered options from users side in an array (userAnswer)
     * by looping through the options and reaching for the value of attribute (data.answer)
     * and get what key does it hold
     * and then it will creat new array (tmp)
     * check if there is only one right answer or more for the current question. 
     * and save correct answers of the current question in it tmp array 
     */

    checkAnswer() {
        const inputs = document.querySelectorAll('.option');
        let userAnswer = [];
        inputs.forEach(input => {
            let key = input.getAttribute('data-answer');
            if (input.checked)
                userAnswer.push(key);
        });
        let tmp = [];
        if (Array.isArray(this.currentQuestion.answer))
            tmp = this.currentQuestion.answer;
        else
            tmp = [this.currentQuestion.answer];
        if (this.equalArrays(userAnswer, tmp))
            this.user.addScore();
    }


    /**
     * this methode will compare between the 2 arrays
     * they will be passed to its parameters 
     * if both aren't arrays or they don't have an equal length 
     * then it will return false
     * and if the user answers aren't included in the right answers array 
     * it will also return false
     * otherwise return true
     * @param { Array } arr1
     * @param { Array } arr2
     */

    equalArrays(arr1, arr2) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length)
            return false;
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i]))
                return false;
        }
        return true;
    }

    /**
     * save the users name to the localStorage
     * @param { String } name 
     */
    saveNameToLocalStorage(name) {
        localStorage.setItem("Username", JSON.stringify(name));
    }
}

