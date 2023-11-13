/* this class will be responsible
    for showing everything on the screen */

/* i don't have to call every html element alone
it's enough to call just the main container 
and from there we can reach all the other elenments 
inside it, using their classes  */

/* now instead of searching for the elements in the whole DOM
we are searching only in the main Quiz Container */

/*this.#quizcontainer.querySelector('.question').innerText = question;
this.#quizcontainer.querySelector('.options-container') = options;*/

class Display {

    quizcontainer = null;
    
    constructor(selector){
        this.selector = selector;
        this.quizcontainer = document.querySelector(this.selector);
    }


    /**
     * display the topic of the quiz.
     * 
     * @param { string } topic 
     */
    showTopic(topic)
    {
        this.quizcontainer.querySelector('.topic').innerText = topic;
    }


    /**
     * Display the question.
     * 
     * @param { string } question 
     */

    showQuestion(question)
    {
        this.quizcontainer.querySelector('.question').innerText = question;
    }



    /**
     * Display the options for 
     * each question.
     * 
     * @param { object } question 
     */
    showOptions(question) {
        let options = '';
        Object.keys(question.options).forEach(key => {
            options += `
                <div>
                <label>
                    <input class="option" type="${question.type}" name="option" data-answer = "${key}" >
                    ${question.options[key]}
                </label>
                </div>
                `;
        })
        this.quizcontainer.querySelector('#options-container').innerHTML = options;
    }


    /**
     * Display the end of the 
     * quiz template and remove
     * all unneeded elements.
     */
    endOfTheQuiz(user)
    {
        this.quizcontainer.querySelector('.result').innerText= user;
        this.quizcontainer.querySelector('.topic').remove();
        this.quizcontainer.querySelector('.question').remove();
        this.quizcontainer.querySelector('#options-container').remove();
        this.quizcontainer.querySelector('#next-question-btn').remove();
        this.quizcontainer.querySelector('#highscores-table-btn').classList.remove('hidden');
        this.quizcontainer.querySelector('#highscores-table-btn').classList.add('visible', 'btn');
        this.quizcontainer.querySelector('#reset-btn').classList.remove('hidden');
        this.quizcontainer.querySelector('#reset-btn').classList.add('visible', 'btn');
       /* if (localStorage.getItem("questions") != null) 
            localStorage.removeItem("questions"); */
    }
    /**
     * Display errors to the user interface
     * in an error container and hide them
     * after 2 seconds.
     * 
     * @param { string } errorMessage 
     */
    displayErrors(errorMessage) 
    {
        this.quizcontainer.querySelector('#error').classList.remove('hidden');
        this.quizcontainer.querySelector('#error').classList.add('visible');
        this.quizcontainer.querySelector('#error').innerText = errorMessage;
        setTimeout(() => {
            this.quizcontainer.querySelector('#error').classList.remove('visible');
            this.quizcontainer.querySelector('#error').classList.add('hidden');
        }, 5000);
    }

}
