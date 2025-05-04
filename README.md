🚀 How to Use
Clone or download the repository.

Open index.html in any modern web browser.

Begin the quiz, select your answers, and submit before time runs out!

🔧 How It Works
1. Initial Setup
When the page loads, JavaScript initializes:

The first question is displayed.

The 15-minute countdown timer starts.

The progress bar begins at 100% and decreases with time.

2. Displaying Questions
The quiz consists of a questions array (10 questions total), each with:

A question string

Four options

One correct answer

The current question is shown in the #question div.

All answer options are rendered as clickable buttons.

3. User Interaction
When a user clicks an option:

Their choice is saved in the userAnswers array.

The selected option is visually marked with a green .selected class.

Users can navigate using:

Next and Previous buttons

Their answers persist as they move through questions.

A counter shows how many questions have been answered.

4. Timer and Progress Bar
The timer updates every second.

It shows time in MM:SS format in the top-right corner.

A progress bar (#time-bar) visually shrinks over time:

Turns yellow in the last 3 minutes

Turns red in the last 1 minute

If time reaches zero, the quiz auto-submits.

5. Submitting the Quiz
When Submit is clicked (or time runs out):

The script compares user answers to correct ones.

The total score is calculated.

The final score is shown in the #result section.

All buttons (Next, Previous, Submit) are disabled to prevent changes.

6. Auto Submit
If the user doesn't submit manually, the autoSubmit() function triggers:

Alerts the user that time is up.

Calls evaluateQuiz() to calculate and display the score.
