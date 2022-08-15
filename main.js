const audio_files = [
  [
    // batch0
    "./stim/KsponSpeech_125921_4sec.wav",
    "./stim/KsponSpeech_125922_4sec.wav",
    "./stim/KsponSpeech_125924_4sec.wav",
  ],
  [
    // batch1
    "./stim/KsponSpeech_125925_4sec.wav",
    "./stim/KsponSpeech_125927_4sec.wav",
    "./stim/KsponSpeech_125929_4sec.wav",
  ],
  [
    // batch2
    "./stim/KsponSpeech_125933_4sec.wav",
    "./stim/KsponSpeech_125934_4sec.wav",
    "./stim/KsponSpeech_125935_4sec.wav",
  ],
  [
    // batch3
    "./stim/KsponSpeech_125944_4sec.wav",
    "./stim/KsponSpeech_125946_4sec.wav",
    "./stim/KsponSpeech_125949_4sec.wav",
  ],
  [
    // batch4
    "./stim/KsponSpeech_125952_4sec.wav",
    "./stim/KsponSpeech_125954_4sec.wav",
    "./stim/KsponSpeech_125955_4sec.wav",
  ],
  [
    // batch5
    "./stim/KsponSpeech_125960_4sec.wav",
    "./stim/KsponSpeech_125961_4sec.wav",
    "./stim/KsponSpeech_125962_4sec.wav",
  ],
  [
    // batch6
    "./stim/KsponSpeech_125966_4sec.wav",
    "./stim/KsponSpeech_125968_4sec.wav",
    "./stim/KsponSpeech_125971_4sec.wav",
  ],
  [
    // batch7
    "./stim/KsponSpeech_125972_4sec.wav",
    "./stim/KsponSpeech_125973_4sec.wav",
    "./stim/KsponSpeech_125984_4sec.wav",
  ],
  [
    // batch8
    "./stim/KsponSpeech_125985_4sec.wav",
    "./stim/KsponSpeech_125987_4sec.wav",
    "./stim/KsponSpeech_125989_4sec.wav",
  ],
  [
    // batch9
    "./stim/KsponSpeech_125992_4sec.wav",
    "./stim/KsponSpeech_125994_4sec.wav",
    "./stim/KsponSpeech_126000_4sec.wav",
  ],
  [
    "./stim/angry10_067-279.wav",
    "./stim/happiness10_009-008.wav",
    "./stim/sad10_001-312.wav",
  ],
];
const test_audio = ["./stim/z_volumeTest.wav"];
const beep_audio = ["./stim/z_beep2s.wav"];

// random batch number
const random10 = Math.floor(Math.random() * 10);
const batchNum = random10;
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
          '<audio autoplay><source src="' +
          audioQ[t] +
          '", type = "audio/wav">Your browser does not support the audio element.</audio>',
        choices: jsPsych.NO_KEYS,
        response_ends_trial: false,
        trial_duration: 5000,
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
  preload_audio: [audio_files, test_audio, beep_audio],
  preload_images: [catchImgs],
  on_finish: function () {
    jsPsych.data.displayData();
    endExperiment(jsPsych.data.get().csv(), function () {
      document.write(HTMLExperimentEnd);
    });
  },
});
