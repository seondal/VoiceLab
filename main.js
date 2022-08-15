var jsPsych = initJsPsych();

var start = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: ["Run demo"],
};

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

var trial_loop = {
  timeline: [trial, show_data],
  loop_function: function () {
    return true;
  },
};

if (typeof jsPsych !== "undefined") {
  jsPsych.run([start, trial_loop]);
} else {
  document.body.innerHTML =
    '<div style="text-align:center; margin-top:50%; transform:translate(0,-50%);">You must be online to view the plugin demo.</div>';
}
