class ChangeClasses
{
    /**
     * Change class attributes visibilty
     * by adding or removing predefined classes
     * or delete the elements, if not needed.
    */
   
    changeClass()
    {
        const questionContainer = document.getElementById("question-container");
        const nameForm = document.getElementById("userForm");
        nameForm.remove();
        questionContainer.classList.add('visible');
        questionContainer.classList.remove('hidden');
    }
}