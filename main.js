// Set Timeline
let timeline = [];

/* init connection with pavlovia.org */
var pavlovia_init = {
  type: "pavlovia",
  command: "init",
};
timeline.push(pavlovia_init);

var start = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: ["Run demo"],
};
timeline.push(start);

var show_data = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function () {
    var trial_data = jsPsych.data.getLastTrialData().values();
    var trial_json = JSON.stringify(trial_data, null, 2);
    return `<p style="margin-bottom:0px;"><strong>Trial data:</strong></p>
            <pre style="margin-top:0px;text-align:left;">${trial_json}</pre>`;
  },
  choices: ["Repeat demo"],
};
timeline.push(show_data);

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
};
timeline.push(pavlovia_finish);

/* start the experiment */
jsPsych.init({
  timeline: timeline,
});
