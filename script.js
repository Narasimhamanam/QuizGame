<script>
    const questions = [
      {
        question: "Which of the following is an application of machine learning?",
        options: ["Sentiment analysis", "Traffic prediction", "Speech and face recognition", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Which machine learning algorithm is based on the idea of bagging?",
        options: ["Decision tree", "Random forest", "Classification", "Regression"],
        answer: "Random forest"
      },
      {
        question: "Which of the following is a common class of problems in machine learning?",
        options: ["Regression", "Classification", "Clustering", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Which of the following is not a supervised learning algorithm?",
        options: ["Linear regression", "Logistic regression", "K-means clustering", "Support vector machine"],
        answer: "K-means clustering"
      },
      {
        question: "Which evaluation metric is commonly used for classification tasks when class imbalance is present?",
        options: ["Mean Squared Error (MSE)", "Accuracy", "F1-score", "R-squared"],
        answer: "F1-score"
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    let userAnswers = [];

    const questionDiv = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    const scoreDiv = document.getElementById("score");
    const resultDiv = document.getElementById("result");
    const totalQ = document.getElementById("total");

    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");
    const submitBtn = document.getElementById("submit");

    totalQ.textContent = questions.length;
    displayQuestion();

    function displayQuestion() {
      const q = questions[currentQuestion];
      questionDiv.innerText = `Q${currentQuestion + 1}: ${q.question}`;
      optionsDiv.innerHTML = "";

      q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");

        if (userAnswers[currentQuestion] === option) {
          button.classList.add("selected");
        }

        button.addEventListener("click", () => {
          userAnswers[currentQuestion] = option;
          document.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("selected"));
          button.classList.add("selected");
        });

        optionsDiv.appendChild(button);
      });

      updateScoreDisplay();
    }

    function updateScoreDisplay() {
      scoreDiv.textContent = `Answered: ${userAnswers.filter(Boolean).length}/${questions.length}`;
    }

    nextBtn.addEventListener("click", () => {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
      }
    });

    submitBtn.addEventListener("click", () => {
      score = 0;
      questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
          score++;
        }
      });

      resultDiv.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      submitBtn.disabled = true;
    });
  </script>
</body>
</html>
