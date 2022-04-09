"use strict";
const challenge_num = document.querySelector(".challenge-num");
const htmlContentSec = document.querySelector(".html-content");
const questionSec = document.querySelector(".challenge-desc-2");
const btnRun = document.querySelector(".btn-run");
const userMessage = document.querySelector(".user-message");
const btnBack = document.querySelector(".back");

const challenges = [
  {
    challenge: 1,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Hello world
          &lt;/<tag-name>p</tag-name>&gt;`,
    question: `From the above, select the element
        <span class="text-highlight">&lt;p&gt;</span>.`,
  },
  {
    challenge: 2,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; First Text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>
          <class-name>id="hello-text"</class-name>&gt; Hello world
          &lt;/<tag-name>p</tag-name>&gt;`,
    question: `From the above, select the element
        <span class="text-highlight">&lt;p&gt;</span> having
        <span class="text-highlight">id="hello-text"</span>.`,
  },
  {
    challenge: 3,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Demo Text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name> <class-name>id="demo-text"</class-name>&gt;
          Demo Text &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>
          <class-name>class="main-text"</class-name>&gt; Hello world
          &lt;/<tag-name>p</tag-name>&gt; <br />`,
    question: `From the above, select the element
        <span class="text-highlight">&lt;p&gt;</span> having
        <span class="text-highlight">class="main-text"</span>`,
  },
  {
    challenge: 4,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Demo Text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Demo Text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>div</tag-name>&gt;<br />
          &emsp;&emsp; &lt;<tag-name>p</tag-name>&gt; Hello world
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;/<tag-name>div</tag-name>&gt;`,
    question: `From the above, select the element
        <span class="text-highlight">&lt;p&gt;</span> that is inside the element
        <span class="text-highlight">&lt;div&gt;</span>.`,
  },
  {
    challenge: 5,
    htmlContent: `&lt;<tag-name>div</tag-name>&gt;<br />
          &emsp;&emsp; &lt;<tag-name>h1</tag-name>
          <class-name>class="main-head"</class-name>&gt; Select me
          &lt;/<tag-name>h1</tag-name>&gt; <br />
          &lt;/<tag-name>div</tag-name>&gt; <br />
          &lt;<tag-name>div</tag-name>&gt;<br />
          &emsp;&emsp; &lt;<tag-name>h2</tag-name>
          <class-name>class="sub-head"</class-name>&gt; Select me
          &lt;/<tag-name>h2</tag-name>&gt; <br />
          &lt;/<tag-name>div</tag-name>&gt;`,
    question: `From the above, select both elements
        <span class="text-highlight">&lt;h1&gt;</span> and
        <span class="text-highlight">&lt;h2&gt;</span>.`,
  },
  {
    challenge: 6,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Select me
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>div</tag-name>&gt;<br />
          &emsp;&emsp; &lt;<tag-name>p</tag-name>
          <class-name>id="sub-head"</class-name>&gt; Select me
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;/<tag-name>div</tag-name>&gt;`,
    question: `From the above, select both
        <span class="text-highlight">&lt;p&gt;</span> elements.`,
  },
  {
    challenge: 7,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p </tag-name
          ><class-name>class="heading"</class-name>&gt; Select Me
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>div</tag-name>&gt;<br />
          &emsp;&emsp; &lt;<tag-name>h2</tag-name>
          <class-name>class="heading"</class-name>&gt; Not me
          &lt;/<tag-name>h2</tag-name>&gt; <br />
          &lt;/<tag-name>div</tag-name>&gt;`,
    question: `From the above, select the element
        <span class="text-highlight">&lt;p&gt;</span> having
        <span class="text-highlight">class="heading"</span>.`,
  },
  {
    challenge: 8,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Select Me
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />`,
    question: `From the above, select the first element
        <span class="text-highlight">&lt;p&gt;</span>.`,
  },
  {
    challenge: 9,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; I'm Here
          &lt;/<tag-name>p</tag-name>&gt; <br />`,
    question: `From the above, select the last element
        <span class="text-highlight">&lt;p&gt;</span>.`,
  },
  {
    challenge: 10,
    htmlContent: `&lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Now I'm here
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />
          &lt;<tag-name>p</tag-name>&gt; Random text
          &lt;/<tag-name>p</tag-name>&gt; <br />`,
    question: `From the above, select the second element
        <span class="text-highlight">&lt;p&gt;</span>.`,
  },
];

// function to display level
const displayChallenge = function (stage) {
  stage = stage - 1;

  challenge_num.textContent = challenges[stage].challenge;
  htmlContentSec.innerHTML = challenges[stage].htmlContent;
  questionSec.innerHTML = challenges[stage].question;
  userMessage.style.display = "none";
  document.querySelector(".input-sec input").value = "";
};

const runCode = function () {
  const stage = parseInt(document.querySelector(".challenge-num").textContent);
  const userInput = document.querySelector(".input-sec input").value;

  if (stage === 1) {
    challenge01(userInput);
  } else if (stage === 2) {
    challenge02(userInput);
  } else if (stage === 3) {
    challenge03(userInput);
  } else if (stage === 4) {
    challenge04(userInput);
  } else if (stage === 5) {
    challenge05(userInput);
  } else if (stage === 6) {
    challenge06(userInput);
  } else if (stage === 7) {
    challenge07(userInput);
  } else if (stage === 8) {
    challenge08(userInput);
  } else if (stage === 9) {
    challenge09(userInput);
  } else if (stage === 10) {
    challenge10(userInput);
  }
};

// added click event in Run Code button to run code
btnRun.addEventListener("click", runCode);

// mover user to the previouse challenge stage
btnBack.addEventListener("click", () => {
  const stage =
    parseInt(document.querySelector(".challenge-num").textContent) - 1;

  if (stage > 0) {
    displayChallenge(stage);
  }
});

// function triggered when the Enter key is pressed in input field
document.querySelector(".input-sec input").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    runCode();
  }
});

// Function to flash red color when the user input is incorrect.
function flashColor() {
  let userInputField = document.querySelector(".input-sec input");
  let colors = ["#E57373", "#aee8ef", "#E57373", "#aee8ef"];
  let interval = 200;
  colors.forEach((color) => {
    setTimeout(() => {
      userInputField.style.backgroundColor = color;
    }, interval);
    interval += 100;
    setTimeout(() => {
      userInputField.style.backgroundColor = "white";
    }, 650);
  });
}

// function to test the code for challenge 1
const challenge01 = function (userInput) {
  if (userInput.trim() === "p") {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(2);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 2
const challenge02 = function (userInput) {
  if (userInput.trim() === "#hello-text") {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(3);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 3
const challenge03 = function (userInput) {
  if (userInput.trim() === ".main-text") {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(4);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 4
const challenge04 = function (userInput) {
  if (userInput.trim() === "div p") {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(5);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 5
const challenge05 = function (userInput) {
  if (
    userInput.trim() === "div h1, div h2" ||
    userInput.trim() === "div h2, div h1" ||
    userInput.trim() === "h1, h2" ||
    userInput.trim() === "h2, h1"
  ) {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(6);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 6
const challenge06 = function (userInput) {
  if (
    userInput.trim() === "p" ||
    userInput.trim() === "p, div p" ||
    userInput.trim() === "p, div #sub-head"
  ) {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(7);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 7
const challenge07 = function (userInput) {
  if (userInput.trim() === "p.heading") {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(8);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 8
const challenge08 = function (userInput) {
  if (
    userInput.trim() === "p:first-child" ||
    userInput.trim() === "p:first-of-type" ||
    userInput.trim() === "p:nth-child(1)"
  ) {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(9);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 9
const challenge09 = function (userInput) {
  if (
    userInput.trim() === "p:last-child" ||
    userInput.trim() === "p:last-of-type" ||
    userInput.trim() === "p:nth-child(4)"
  ) {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(10);
    }, 800);
  } else {
    flashColor();
  }
};

// function to test the code for challenge 10
const challenge10 = function (userInput) {
  if (userInput.trim() === "p:nth-child(2)") {
    userMessage.style.display = "block";
    setTimeout(() => {
      displayChallenge(10);
    }, 800);
  } else {
    flashColor();
  }
};

displayChallenge(1);
