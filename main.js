/* create timeline */
var timeline = [];

/* init connection with pavlovia.org */
var pavlovia_init = {
  type: "pavlovia",
  command: "init",
};
timeline.push(pavlovia_init);

/* define welcome message trial */
var welcome = {
  type: "html-keyboard-response",
  stimulus: "Welcome to the experiment. Press any key to begin.",
};
timeline.push(welcome);

/* test trials */
var likert_scale = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

var trial = {
  type: jsPsychSurveyLikert,
  questions: [
    { prompt: "I like vegetables.", name: "Vegetables", labels: likert_scale },
    { prompt: "I like fruit.", name: "Fruit", labels: likert_scale },
    { prompt: "I like meat.", name: "Meat", labels: likert_scale },
  ],
  randomize_question_order: true,
};
timeline.push(trial);

/* finish connection with pavlovia.org */
var pavlovia_finish = {
  type: "pavlovia",
  command: "finish",
  participantId: "JSPSYCH-DEMO",
};
timeline.push(pavlovia_finish);

/* start the experiment */
jsPsych.init({
  timeline: timeline,

  on_finish: function (data) {
    jsPsych.data.displayData();
  },
});
