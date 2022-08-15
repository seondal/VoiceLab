const text_files = [
  // batch 0
  [
    "왜 안 맞지?",
    "선생님, 다른 방법은요?",
    "저기 왼쪽으로 쭉 가시면 돼요.",
    "손 좀 씻어.",
    "쓰레기 냄새.",
    "너무 다행이다.",
    "많이 아플까요?",
    "잠깐 지나갈게요.",
    "날씨도 나처럼 우울하네.",
    "왜 꼭 바쁠 때 그래?",
    "일단 진정 좀 하세요.",
    "보여주지 마. 그런 거.",
    "부모가 저렇게 키우니까 애들이 버릇이 없는 거야.",
    "두 시에 올 거면 집은 뭐 하러 와.",
    "앞에, 앞에!",
    "몇 개야, 이게 다?",
  ],
  // batch 1
  [
    "계속 피곤해야겠다.",
    "친구랑 같이 가면 안 돼요?",
    "이러면 안 되는데.",
    "네. 인상 좋은 거 알아요.",
    "돈 내고 써야 돼요?",
    "두고 봅시다. 당신들.",
    "손님. 못 바꿔드려요.",
    "너 나 좀 보자.",
    "건강이 최고야.",
    "배고파. 내 것도 같이 해줘.",
    "행사 언제까지죠?",
    "우리 끝입니까?",
    "많이 아플까요?",
    "그렇게 됐다.",
    "너무 위험해.",
    "수술 잘 된 것 맞죠?",
  ],
  // batch 2
  [
    "뭔 소리야?",
    "나 술 안 마셔 이제.",
    "집에 어떻게 가냐?",
    "학생이야 산악인이야.",
    "잡히기만 해, 진짜.",
    "하루종일 집에 있으면서 대체 뭐 했어?",
    "정상까지 얼마나 남았어요?",
    "빠진 적이 있어서.",
    "왜 이렇게 깊어?",
    "너나 잘해라, 너나.",
    "당장 나가.",
    "오늘 입고 나가야지.",
    "못하면 어떡하지?",
    "오늘 내가 다 산다.",
    "지들 자식이라면서 똥은 왜 안 치워.",
    "이러면 안 되는데.",
    "내 옷 입지 말라 그랬지.",
  ],
  // batch 3
  [
    "너무 귀여워. 어떡해.",
    "어제까진 잘 됐었는데, 갑자기 안 되네요.",
    "나 이제 누구랑 놀아?",
    "왜 아무것도 안 보여?",
    "저거 나야?",
    "내가 봉이냐?",
    "뭔 일 있었어?",
    "쪽팔린 줄도 모르고.",
    "여기 땅 전부?",
    "아직 언제 끝날지 모르겠어요.",
    "벌써 전역했어?",
    "별 미친 놈을 다 보겠네.",
    "멧돼지가 가게 안으로 들어왔어요.",
    "저는 그쪽한테 관심 없다니까요.",
    "이거 쓰고 어떻게 살았어?",
    "이제 다 컸네.",
  ],
  // batch 4
  [
    "난 취직 언제 하냐.",
    "저걸 혼자 다 먹어?",
    "못해요. 그냥 내려갈게요.",
    "너무 진짜 같아.",
    "집에 어떻게 가냐?",
    "지금 시간이 몇 시인데 뛰어다녀요?",
    "언제까지 이렇게 사냐.",
    "실감이 안 나.",
    "해고라니요.",
    "상쾌하다.",
    "이제 다 컸네.",
    "뭔 소리야, 이게?",
    "얘기 들어줘서 고맙다.",
    "머리카락이 녹아요?",
    "큰일 날 뻔 했네.",
    "정말 믿어지지가 않네요.",
  ],
  // batch 5
  [
    "머리 진짜 작다.",
    "완전히 망했다.",
    "또 지각이다.",
    "오늘 공강이었어.",
    "후회 안 하실 거죠.",
    "얼마만의 바다야.",
    "차가워.",
    "밤 되면 여기도 무섭구나.",
    "저 왔어요.",
    "이제 다 컸네.",
    "사진 좀 찍어 주시면 안 될까요.",
    "너도 걸리면 어쩌려고.",
    "진작 만날 걸 그랬어요.",
    "집에 어떻게 가냐?",
    "드디어 붙었어.",
    "제발 백만 아니길.",
  ],
  // batch 6
  [
    "드디어 샀다.",
    "나 먼저 갈게.",
    "먹어본 것 중에 제일 맛있어.",
    "빨리 와, 빨리.",
    "드라이브 갈래?",
    "너 여기 왜 있어?",
    "몇 시나 됐지?",
    "몇 개야, 이게 다?",
    "계속 피곤해야겠다.",
    "무슨 광고가 이렇게 길어?",
    "고양이 풀어놓지 말라고.",
    "당신 뭐야?",
    "우산이 필요가 없잖아.",
    "한잔 더 하러 갈 사람.",
    "어디 갔어?",
    "웬일이냐, 내 걱정을 다 하고.",
  ],
  // batch 7
  [
    "뭐 하고 놀까.",
    "맵기만 하구만.",
    "이게 죽으라는 거지.",
    "오늘 보자고 하려고 했지.",
    "몇 개야, 이게 다?",
    "여기도 닫았네.",
    "진짜 왔나봐.",
    "해고라니요.",
    "거미줄이 왜 이렇게 많아.",
    "착하지 우리 아들. 조금만 참자.",
    "나 지금 도착했어.",
    "배고픈데 라면 먹자.",
    "오늘은 할 일이 있어서.",
    "당신 뭐야?",
    "진짜 없어. 어떡해.",
    "너 때문에 초기화됐잖아.",
  ],
  // batch 8
  [
    "걔가 한 말 다 거짓말이었어?",
    "언제 다시 길러.",
    "이번 한 번만 도와주십시오.",
    "정상까지 얼마나 남았어요?",
    "새우부터 해동시켜.",
    "일단 진정 좀 하세요.",
    "무슨 소리야, 이게.",
    "열심히 키운 보람이 있네.",
    "완전히 망했어.",
    "쟤는 좋을까 슬플까?",
    "정말 열심히 했는데.",
    "이 회의 주제가 뭔지는 알고 말하시는 거죠?",
    "오늘 할 일이 있어서.",
    "왜 이렇게 많이 빠졌지?",
    "뭐지, 이게?",
    "오늘 할 일이 있어서.",
  ],
  // batch 9
  [
    "시청자 여러분, 안녕하십니까.",
    "안녕히 주무세요.",
    "왜 자꾸 거짓말을 하세요?",
    "손님. 못 바꿔드려요.",
    "빨리 집으로 와.",
    "후회 안 하실 거죠.",
  ],
];

// random batch number
const random10 = Math.floor(Math.random() * 10);
const batchNum = random10;
console.log("batch" + batchNum);

// random counter balance
const random2 = Math.floor(Math.random() * 2);
const counterBalance = random2;
counterBalance ? console.log("trialA") : console.log("trialB");

// set variables - part1
const audioQ = jsPsych.randomization.shuffle(text_files[batchNum]);
const numTrials = text_files[batchNum].length;
const catchTrial = [
  math.floor(math.random((numTrials * 2) / 8, (3 * numTrials) / 8)),
  math.floor(math.random((6 * numTrials) / 8, (7 * numTrials) / 8)),
];
const catchImgs = ["./stim/Cat.jpg", "./stim/Icecream.jpg"];

console.log(audioQ[0]);

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
    prompt: "The line looks...",
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
    prompt: "The line looks...",
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

// Intro - 안내 글자는 추후 직접 추가해주세요

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
  const inputText = audioQ[t];
  console.log(inputText);

  let mainTrial = {
    timeline: [
      {
        type: "html-keyboard-response",
        stimulus: `<h2>${inputText}</h2>`,
        choices: jsPsych.NO_KEYS,
        response_ends_trial: false,
        trial_duration: 5000,
      },
      {
        type: "audio-likert-jedit",
        stimulus: inputText,
        preamble: `<h2>${inputText}</h2>`,
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
  preload_images: [catchImgs],
  on_finish: function () {
    jsPsych.data.displayData();
    endExperiment(jsPsych.data.get().csv(), function () {
      document.write(HTMLExperimentEnd);
    });
  },
});
