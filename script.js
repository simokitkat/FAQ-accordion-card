const allQuestions = document.querySelectorAll(".question");

allQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    allQuestions.forEach(function (element) {
      if (element !== question) {
        element.classList.remove("active");
      }
    });
    this.classList.toggle("active");
  });
});
