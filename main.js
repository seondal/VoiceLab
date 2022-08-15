const audio_files = [
  [
    // batch0
    // "./stim/000-061.m2ts",
    // "./stim/000-158.m2ts",
    "./ya.mp4",
  ],
  // [
  //   // batch1
  //   "./stim/001-102.m2ts",
  //   "./stim/001-210.m2ts",
  // ],
  // [
  //   // batch2
  //   "./stim/002-209.m2ts",
  //   "./stim/003-021.m2ts",
  // ],
  // [
  //   // batch3
  //   "./stim/003-154.m2ts",
  //   "./stim/004-118.m2ts",
  // ],
  // [
  //   // batch4
  //   "./stim/004-323.m2ts",
  //   "./stim/005-231.m2ts",
  // ],
  // [
  //   // batch5
  //   "./stim/006-173.m2ts",
  //   "./stim/006-245.m2ts",
  // ],
  // [
  //   // batch6
  //   "./stim/007-225.m2ts",
  //   "./stim/007-256.m2ts",
  // ],
  // [
  //   // batch7
  //   "./stim/008-067.m2ts",
  //   "./stim/008-212.m2ts",
  // ],
  // [
  //   // batch8
  //   "./stim/009-025.m2ts",
  //   "./stim/009-172.m2ts",
  // ],
  // [
  //   // batch9
  //   "./stim/010-188.m2ts",
  //   "./stim/010-223.m2ts",
  // ],
];
const test_audio = ["./stim/z_volumeTest.wav"];
const beep_audio = ["./stim/z_beep2s.wav"];

// random batch number
const random10 = Math.floor(Math.random() * 10);
const batchNum = 0;
console.log("batch" + batchNum);

// random counter balance
const random2 = Math.floor(Math.random() * 2);
const counterBalance = random2;
counterBalance ? console.log("trialA") : console.log("trialB");

// set variables - part1
const audioQ = jsPsych.randomization.shuffle(audio_files[batchNum]);
const numTrials = audio_files[batchNum].length;
const catchTrial = [
  math.floor(math.random((numTrials * 2) / 8, (3 * numTrials) / 8)),
  math.floor(math.random((6 * numTrials) / 8, (7 * numTrials) / 8)),
];
const catchImgs = ["./stim/Cat.jpg", "./stim/Icecream.jpg"];

// Survey code generator
function makecode() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

//Termination message
var surveyCode = jsPsych.data.getURLVariable("survey");
if (!surveyCode) {
  surveyCode = "test";
  console.log(surveyCode);
}

function finish(surveycode) {
  DOM_target = document.querySelector("#jspsych-content");
  DOM_target.innerHTML =
    '<div class="center"><p style="font-size:150%;"><strong>Thank you for participating' +
    ' in this experiment</strong></p> <p style="font-size:150%;">' +
    '<strong>Your experiment code: <font color="red">' +
    surveycode +
    "</font></strong></p></div>";
  jsPsych.pluginAPI.cancelAllKeyboardResponses();
  jsPsych.pluginAPI.clearAllTimeouts();
}

// Set Timeline
let expTL = [];

/* init connection with pavlovia.org */
var pavlovia_init = {
  type: "pavlovia",
  command: "init",
};
expTL.push(pavlovia_init);

// setup variables - part2
const scaleE1 = [
  "Stressed",
  " ",
  " ",
  "<span style='background-color: #d3d3d3'>0</span>",
  " ",
  " ",
  "Relaxed",
];
const scaleE2 = [
  "Angry",
  " ",
  " ",
  "<span style='background-color: #d3d3d3'>0</span>",
  " ",
  " ",
  "Content",
];
const scaleE3 = [
  "Hostile",
  " ",
  " ",
  "<span style='background-color: #d3d3d3'>0</span>",
  " ",
  " ",
  "Friendly",
];
const scaleE4 = [
  "Happy",
  " ",
  " ",
  "<span style='background-color: #d3d3d3'>0</span>",
  " ",
  " ",
  "Sad",
];
const scaleE5 = [
  "Interested",
  " ",
  " ",
  "<span style='background-color: #d3d3d3'>0</span>",
  " ",
  " ",
  "Bored",
];
const scaleE6 = [
  "Formal",
  " ",
  " ",
  "<span style='background-color: #d3d3d3'>0</span>",
  " ",
  " ",
  "Intimate",
];
const scaleE7 = [
  "Confident",
  " ",
  " ",
  "<span style='background-color: #d3d3d3'>0</span>",
  " ",
  " ",
  "Timid",
];

const trialA = [
  {
    prompt: "The voice sounds...",
    name: "stressed",
    labels: scaleE1,
    required: true,
  },
  { prompt: " ", name: "angry", labels: scaleE2, required: true },
  { prompt: " ", name: "hostile", labels: scaleE3, required: true },
  { prompt: " ", name: "happy", labels: scaleE4, required: true },
  { prompt: " ", name: "interested", labels: scaleE5, required: true },
  { prompt: " ", name: "formal", labels: scaleE6, required: true },
  { prompt: " ", name: "confident", labels: scaleE7, required: true },
];

const trialB = [
  {
    prompt: "The voice sounds...",
    name: "stressed",
    labels: [...scaleE1].reverse(),
    required: true,
  },
  {
    prompt: " ",
    name: "angry",
    labels: [...scaleE2].reverse(),
    required: true,
  },
  {
    prompt: " ",
    name: "hostile",
    labels: [...scaleE3].reverse(),
    required: true,
  },
  {
    prompt: " ",
    name: "happy",
    labels: [...scaleE4].reverse(),
    required: true,
  },
  {
    prompt: " ",
    name: "interested",
    labels: [...scaleE5].reverse(),
    required: true,
  },
  {
    prompt: " ",
    name: "formal",
    labels: [...scaleE6].reverse(),
    required: true,
  },
  {
    prompt: " ",
    name: "confident",
    labels: [...scaleE7].reverse(),
    required: true,
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////// EXPERIMENT TIMELINE BEGINS ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Instructions
expTL.push({
  type: "html-button-response",
  stimulus: [
    '<p style="text-align: left; margin: auto"> Hi, welcome! Thanks for agreeing to participate in this study.' +
      "<br>This experiment does not work on mobile phones or tablet PCs, so please use a computer. <br>Also, <b>make sure you&apos;re using earphones or headphones.</b>" +
      '<br>For any technical inquiries, send an email to <font color="#4355FF">suhrjinsun@yonsei.ac.kr<br><br></p>',
  ],
  choices: ["Got it!"],
  on_finish: function (data) {
    data.balance = counterBalance ? "trialA" : "trialB";
    data.batch = "batch" + batchNum;
  },
});

// gender and language
expTL.push({
  type: "survey-multi-choice",
  preamblel: "Couple of questions before we start",
  questions: [
    {
      prompt: "Please tell us your gender.",
      options: ["Female", "Male", "Prefer not to say"],
      horizontal: true,
      required: true,
    },
    {
      prompt: "What is your first language?",
      options: ["English", "Spanish", "Hindi", "Korean", "Other"],
      horizontal: true,
      required: true,
    },
  ],
  on_finish: function (data) {
    data.subGen = JSON.parse(
      jsPsych.data.getLastTrialData().select("responses").values
    ).Q0;
    data.subLang = JSON.parse(
      jsPsych.data.getLastTrialData().select("responses").values
    ).Q1;
    if (
      "Korean" ==
      JSON.parse(jsPsych.data.getLastTrialData().select("responses").values).Q1
    ) {
      jsPsych.endExperiment(
        "You cannot participate in the study if your first language is Korean."
      );
    }
  },
});

// Volume test
expTL.push({
  type: "html-button-response",
  stimulus: [
    '<p style="text-align: left; margin: auto">Before we begin, please adjust your earphone volume. A sample voice will be played when you press Next.' +
      "<br>Use that sound to set the volume to the level you feel comfortable.<br><br></p>",
  ],
  choices: ["Next"],
});

expTL.push({
  type: "audio-likert-jedit_volumeAdjust",
  stimulus: test_audio,
  preamble: "<p>Adjust your system volume.<br></p>",
});

expTL.push({
  type: "html-button-response",
  stimulus: [
    '<p style="text-align: left; margin-left: 50px; margin-right: 50px">In this HIT, your task is to <u>listen to 33 short audio clips and rate each of their characteristics.</u>' +
      "<br>For each trial, a four-second voice clip will be played and you will be asked to answer 7 questions regarding the voice. <br>You must answer all of them before continuing to the next voice clip. " +
      "There will be a one-minute break when you are half-way. There may be a couple of surprise questions between trials, so be aware! <br>After all trials are finished, we&apos;ll ask you a couple of demographic questions and comments on the experiment." +
      "<br>There&apos;s no right or wrong answer so just go with your instincts." +
      "<br>You&apos;re now all set to begin. Good luck!</p>",
  ],
  choices: ["Start Experiment"],
});

// main experiment
for (let t = 0; t < numTrials; t++) {
  let mainTrial = {
    timeline: [
      {
        type: "html-keyboard-response",
        stimulus:
          '<video><source src="' +
          audioQ[t] +
          '" ype="video/mp4">해당 브라우저는 video 태그를 지원하지 않습니다.</video>',
        choices: ["Next"],
        response_ends_trial: false,
      },
      {
        type: "survey-likert-jedit",
        stimulus: audioQ[t],
        scale_width: 400,
        response_ends_trial: false,
        questions: counterBalance ? trialA : trialB,
        on_finish: function (data) {
          data.Gender = jsPsych.data.get().last(1).values()[0].Gender;
          data.Stressed = counterBalance
            ? 6 -
              JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).stressed
            : JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).stressed;
          data.Angry = counterBalance
            ? 6 -
              JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).angry
            : JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).angry;
          data.Hostile = counterBalance
            ? 6 -
              JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).hostile
            : JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).hostile;
          data.Happy = counterBalance
            ? 6 -
              JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).happy
            : JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).happy;
          data.Interested = counterBalance
            ? 6 -
              JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).interested
            : JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).interested;
          data.Formal = counterBalance
            ? 6 -
              JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).formal
            : JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).formal;
          data.Confident = counterBalance
            ? 6 -
              JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).confident
            : JSON.parse(
                jsPsych.data.getLastTrialData().select("responses").values
              ).confident;
        },
      },
    ],
  };
  expTL.push(mainTrial);

  if (t == math.round(numTrials / 2 - 1)) {
    expTL.push({
      type: "html-keyboard-response",
      stimulus:
        "Your 60 second break starts now.<br>Rest your eyes, maybe take a stretch. Please make sure you are prepared to continue before the break is over.",
      choices: jsPsych.NO_KEYS,
      trial_duration: 50000,
    });
    for (tt = 0; tt < 10; tt++) {
      expTL.push({
        type: "html-keyboard-response",
        stimulus: "<p>Your break ends in <br></p>" + [10 - tt],
        choices: jsPsych.NO_KEYS,
        trial_duration: 990,
      });
    }
    expTL.push({
      type: "html-button-response",
      stimulus: "Break over! Please press Continue",
      choices: ["Continue"],
    });
  } else if (t == catchTrial[0]) {
    expTL.push({
      type: "html-button-response",
      stimulus: '<img src="' + catchImgs[0] + '" style="height:300px">',
      prompt: "What did you just see?",
      stimulus_duration: 1000,
      choices: ["Gold fish", "Whale", "Cat", "Did not see"],
    });
  } else if (t == catchTrial[1]) {
    expTL.push({
      type: "html-button-response",
      stimulus: '<img src="' + catchImgs[1] + '" style="height:300px">',
      prompt: "What did you just see?",
      stimulus_duration: 1000,
      choices: ["Garlic bread", "Ice cream", "Soda", "Did not see"],
    });
  }
}

// headphones and comments
expTL.push({
  type: "survey-text",
  preamble: "<p>You are done! Thanks again for participating.</p>",
  questions: [
    {
      prompt: "Tell us the name of your earphone model.",
      placeholder: "e.g. Apple wired earphones, not sure..",
      required: true,
    },
    {
      prompt: "Any Comments for us?",
      placeholder: "Feel free to give us any feedback.",
      rows: 6,
      columns: 40,
    },
  ],
  button_label: "Submit",
});

/* finish connection with pavlovia.org */
var pavlovia_finish = {
  type: "pavlovia",
  command: "finish",
};
expTL.push(pavlovia_finish);

jsPsych.init({
  //show_preload_progress_bar: true,
  override_safe_mode: true,
  show_progress_bar: true,
  timeline: expTL,
  use_webaudio: false,
  preload_video: [audio_files],
  preload_audio: [test_audio, beep_audio],
  preload_images: [catchImgs],
  on_finish: function () {
    jsPsych.data.displayData();
    endExperiment(jsPsych.data.get().csv(), function () {
      document.write(HTMLExperimentEnd);
    });
  },
});
