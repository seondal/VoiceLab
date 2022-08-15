var jsPsychSurveyLikert = (function (e) {
  "use strict";
  const t = {
    name: "survey-likert",
    parameters: {
      questions: {
        type: e.ParameterType.COMPLEX,
        array: !0,
        pretty_name: "Questions",
        nested: {
          prompt: {
            type: e.ParameterType.HTML_STRING,
            pretty_name: "Prompt",
            default: void 0,
          },
          labels: {
            type: e.ParameterType.STRING,
            array: !0,
            pretty_name: "Labels",
            default: void 0,
          },
          required: {
            type: e.ParameterType.BOOL,
            pretty_name: "Required",
            default: !1,
          },
          name: {
            type: e.ParameterType.STRING,
            pretty_name: "Question Name",
            default: "",
          },
        },
      },
      randomize_question_order: {
        type: e.ParameterType.BOOL,
        pretty_name: "Randomize Question Order",
        default: !1,
      },
      preamble: {
        type: e.ParameterType.HTML_STRING,
        pretty_name: "Preamble",
        default: null,
      },
      scale_width: {
        type: e.ParameterType.INT,
        pretty_name: "Scale width",
        default: null,
      },
      button_label: {
        type: e.ParameterType.STRING,
        pretty_name: "Button label",
        default: "Continue",
      },
      autocomplete: {
        type: e.ParameterType.BOOL,
        pretty_name: "Allow autocomplete",
        default: !1,
      },
    },
  };
  class r {
    constructor(e) {
      this.jsPsych = e;
    }
    trial(e, t) {
      if (null !== t.scale_width) var r = t.scale_width + "px";
      else r = "100%";
      var s = "";
      (s += '<style id="jspsych-survey-likert-css">'),
        (s +=
          ".jspsych-survey-likert-statement { display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px; }.jspsych-survey-likert-opts { list-style:none; width:" +
          r +
          "; margin:auto; padding:0 0 35px; display:block; font-size: 14px; line-height:1.1em; }.jspsych-survey-likert-opt-label { line-height: 1.1em; color: #444; }.jspsych-survey-likert-opts:before { content: ''; position:relative; top:11px; /*left:9.5%;*/ display:block; background-color:#efefef; height:4px; width:100%; }.jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }.jspsych-survey-likert-opts li { display:inline-block; /*width:19%;*/ text-align:center; vertical-align: top; }.jspsych-survey-likert-opts li input[type=radio] { display:block; position:relative; top:0; left:50%; margin-left:-6px; }"),
        (s += "</style>"),
        null !== t.preamble &&
          (s +=
            '<div id="jspsych-survey-likert-preamble" class="jspsych-survey-likert-preamble">' +
            t.preamble +
            "</div>"),
        t.autocomplete
          ? (s += '<form id="jspsych-survey-likert-form">')
          : (s += '<form id="jspsych-survey-likert-form" autocomplete="off">');
      for (var a = [], l = 0; l < t.questions.length; l++) a.push(l);
      t.randomize_question_order && (a = this.jsPsych.randomization.shuffle(a));
      for (l = 0; l < t.questions.length; l++) {
        var i = t.questions[a[l]];
        s +=
          '<label class="jspsych-survey-likert-statement">' +
          i.prompt +
          "</label>";
        for (
          var p = 100 / i.labels.length,
            o =
              '<ul class="jspsych-survey-likert-opts" data-name="' +
              i.name +
              '" data-radio-group="Q' +
              a[l] +
              '">',
            n = 0;
          n < i.labels.length;
          n++
        )
          (o +=
            '<li style="width:' +
            p +
            '%"><label class="jspsych-survey-likert-opt-label"><input type="radio" name="Q' +
            a[l] +
            '" value="' +
            n +
            '"'),
            i.required && (o += " required"),
            (o += ">" + i.labels[n] + "</label></li>");
        s += o += "</ul>";
      }
      (s +=
        '<input type="submit" id="jspsych-survey-likert-next" class="jspsych-survey-likert jspsych-btn" value="' +
        t.button_label +
        '"></input>'),
        (s += "</form>"),
        (e.innerHTML = s),
        e
          .querySelector("#jspsych-survey-likert-form")
          .addEventListener("submit", (t) => {
            t.preventDefault();
            for (
              var r = performance.now(),
                s = Math.round(r - y),
                l = {},
                i = e.querySelectorAll(
                  "#jspsych-survey-likert-form .jspsych-survey-likert-opts"
                ),
                p = 0;
              p < i.length;
              p++
            ) {
              var o = i[p].dataset.radioGroup,
                n = e.querySelector('input[name="' + o + '"]:checked');
              if (null === n) var u = "";
              else u = parseInt(n.value);
              var m = {};
              if ("" !== i[p].attributes["data-name"].value)
                var c = i[p].attributes["data-name"].value;
              else c = o;
              (m[c] = u), Object.assign(l, m);
            }
            var d = { rt: s, response: l, question_order: a };
            (e.innerHTML = ""), this.jsPsych.finishTrial(d);
          });
      var y = performance.now();
    }
  }
  return (r.info = t), r;
})(jsPsychModule);
//# sourceMappingURL=index.browser.min.js.map
