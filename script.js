const start = document.getElementById("startbutton");
const reset = document.getElementById("resetbutton");
let topBar = document.querySelector(".titlebox");
let midBar = document.querySelector(".questionbox");
let answer1 = document.querySelector(".button1");
let answer2 = document.querySelector(".button2");
let answer3 = document.querySelector(".button3");
let answer4 = document.querySelector(".button4");

const questions = [
  {
    prompt: "What is the biggest state in the United States?",
    answer: "Alaska",
    options: ["California", "Texas", "Montana"],
  },
  {
    prompt: "What is the smallest state in the United States?",
    answer: "Rhode Island",
    options: ["Delware", "Hawaii", "Connecticut"],
  },
  {
    prompt: "Which state is Mt. Rushmore located in?",
    answer: "South Dakota",
    options: ["New York", "Montana", "North Dakota"],
  },
  {
    prompt: "How many states share a border with mexico?",
    answer: "Four",
    options: ["Seven", "One", "Two"],
  },
  {
    prompt: "What is the oldest town in Texas?",
    answer: "Nacogdoches",
    options: ["Austin", "Ysleta", "Goliad"],
  },
  {
    prompt: "Which state is the flattest state in the US?",
    answer: "Florida",
    options: ["Kansas", "Lousiana", "Colorado"],
  },
  {
    prompt: "How many US states are landlocked?",
    answer: "16",
    options: ["10", "6", "13"],
  },
  {
    prompt: "What state is called ‘The First State’?",
    answer: "Delaware",
    options: ["New York", "Pennsylvania", "Rhode Island"],
  },
  {
    prompt: "What is the highest point in the United States?",
    answer: "Denali",
    options: ["Mt. Olympia", "One World Trade Center", "Mt. Bona"],
  },
  {
    prompt: "Which state is closest to Africa?",
    answer: "Maine",
    options: ["Florida", "South Carolina", "Hawaii"],
  },
  {
    prompt: "Which state has the most water in terms of area?",
    answer: "Alaska",
    options: ["Michigan", "Texas", "Florida"],
  },
  {
    prompt: "What is the longest river in the United States?",
    answer: "Missouri River",
    options: ["Nile River", "Mississippi River", "Colorado River"],
  },
  {
    prompt: "What is the deepest lake in the US?",
    answer: "Crater Lake",
    options: ["Lake Superior", "Lake Tahoe", "Lake Chelan"],
  },
  {
    prompt: "What is the longest road in the United States?",
    answer: "Route 20",
    options: ["I10", "Route 50", "I80"],
  },
  {
    prompt: "What is the lowest point in the US?",
    answer: "Badwater Basin",
    options: ["Yellowstone", "Mojave Desert", "New Orleans"],
  },
];

start.addEventListener("click", startTrivia);
function startTrivia() {
  options.style.visibility = "visible";
  topBar.innerHTML = "1 of 15";
  midBar.innerHTML = questions[0].prompt;
  answer1.innerHTML = questions[0].options[0];
  answer2.innerHTML = questions[0].answer;
  answer3.innerHTML = questions[0].options[2];
  answer4.innerHTML = questions[0].options[1];
  start.remove();
}

let options = document.querySelector(".options");
let buttons = options.querySelectorAll("button");
let correctAnswers = 0;
let questionNum = 0;
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.innerHTML === questions[questionNum].answer) {
      correctAnswers++;
    }
    questionNum++;
  });
});

answer1.addEventListener("click", nextQuestion);
answer2.addEventListener("click", nextQuestion);
answer3.addEventListener("click", nextQuestion);
answer4.addEventListener("click", nextQuestion);

let i = 0;
function nextQuestion() {
  if (i < 15) {
    i++;
  }
  if (i === 1) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].answer;
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 2) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[2];
    answer2.innerHTML = questions[i].answer;
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 3) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[0];
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].answer;
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 4) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].answer;
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 5) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[0];
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].answer;
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 6) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[2];
    answer2.innerHTML = questions[i].answer;
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 7) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[0];
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].answer;
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 8) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].answer;
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 9) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[1];
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].answer;
  }
  if (i === 10) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[2];
    answer2.innerHTML = questions[i].answer;
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 11) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[0];
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].answer;
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 12) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].answer;
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 13) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].options[1];
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].answer;
  }
  if (i === 14) {
    topBar.innerHTML = `${i + 1} of 15`;
    midBar.innerHTML = questions[i].prompt;
    answer1.innerHTML = questions[i].answer;
    answer2.innerHTML = questions[i].options[2];
    answer3.innerHTML = questions[i].options[0];
    answer4.innerHTML = questions[i].options[1];
  }
  if (i === 15) {
    topBar.innerHTML = correctAnswers + "/15";
    if (correctAnswers === 15) {
      midBar.innerHTML = "Winner! US geography whiz!";
    } else if (correctAnswers >= 10 && correctAnswers < 15) {
      midBar.innerHTML = "You passed! US Geography intermediate!";
    } else if (correctAnswers >= 5 && correctAnswers < 10) {
      midBar.innerHTML = "You didn't pass :(  Keep trying you'll get it soon!";
    } else if (correctAnswers < 5) {
      midBar.innerHTML = "You failed :( Better hit those books hard!";
    }
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
  }
}

reset.addEventListener("click", () => {
  document.location.reload(true);
});
