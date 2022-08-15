/**
 * jspsych-survey-likert
 * a jspsych plugin for measuring items on a likert scale
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

jsPsych.plugins['audio-likert-jedit_volumeAdjust'] = (function () {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('audio-button-response', 'stimulus', 'audio');

  plugin.info = {
    name: 'audio-likert-jedit_volumeAdjust',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.AUDIO,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The audio to be played.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'The maximum duration to wait for a response.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, the trial will end when user makes a response.'
      },

      //likert
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'String to display at top of the page.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default: 'Continue',
        description: 'Label of the button.'
      }
    }
  }

  plugin.trial = function (display_element, trial) {
    // audio
    // setup stimulus
    var context = jsPsych.pluginAPI.audioContext();
    if (context !== null) {
      var source = context.createBufferSource();
      source.buffer = jsPsych.pluginAPI.getAudioBuffer(trial.stimulus);
      source.connect(context.destination);
    } else {
      var audio = jsPsych.pluginAPI.getAudioBuffer(trial.stimulus);
      audio.currentTime = 0;
    }

    //likert
    if (trial.scale_width !== null) {
      var w = trial.scale_width + 'px';
    } else {
      var w = '100%';
    }

    // inject CSS for trial    
    var html = "";
    html += '<style id="jspsych-survey-likert-css">';
    html += ".jspsych-survey-likert-statement { display:block; font-size: 16px; padding-top: 20px; margin-bottom:7px; }" +
      ".jspsych-survey-likert-opts { list-style:none; width:" + w + "; margin:auto; padding:0 0 10px; display:block; font-size: 14px; line-height:1.1em; }" +
      ".jspsych-survey-likert-opt-label { line-height: 1.1em; color: #444; }" +
      ".jspsych-survey-likert-opts:before { content: ''; position:relative; top:11px; /*left:9.5%;*/ display:block; background-color:#efefef; height:4px; width:100%; }" +
      ".jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }" +
      ".jspsych-survey-likert-opts li { display:inline-block; /*width:19%;*/ text-align:center; vertical-align: top; }" +
      ".jspsych-survey-likert-opts li input[type=radio] { display:block; position:relative; top:0; left:50%; margin-left:-6px; }"
    html += '</style>';

    // show preamble text
    if (trial.preamble !== null) {
      html += '<div id="jspsych-survey-likert-preamble" class="jspsych-survey-likert-preamble">' + trial.preamble + '</div>';
    }
    html += '<form id="jspsych-survey-likert-form">';


    // add submit button
    html += '<input type="button" id="jspsych-survey-likert-replay" class="jspsych-survey-likert jspsych-btn" style="cursor: pointer; display: inline-block; margin: 0 8" value="Replay"></input>'
    html += '&nbsp;&nbsp;&nbsp;<input type="submit" id="jspsych-survey-likert-next" class="jspsych-survey-likert jspsych-btn" value="' + trial.button_label + '"></input>';
    
    html += '</form>'


    display_element.innerHTML = html;

    display_element.querySelector('#jspsych-survey-likert-replay').addEventListener('click', function (e) {
      // start audio
      if (context !== null) {
        var source = context.createBufferSource();
        source.buffer = jsPsych.pluginAPI.getAudioBuffer(trial.stimulus);
        source.connect(context.destination);
        startTime = context.currentTime;
        source.start(startTime);
      } else {
        var audio = jsPsych.pluginAPI.getAudioBuffer(trial.stimulus);
        audio.currentTime = 0;
        audio.play();
      };
    });


    display_element.querySelector('#jspsych-survey-likert-form').addEventListener('submit', function (e) {
      e.preventDefault();
      // measure response time
      var endTime = performance.now();
      var response_time = endTime - startTime;

      // save data
      var trial_data = {
        "rt": response_time,
        "stimulus": trial.stimulus
      };

      if (trial.response_ends_trial) {
        end_trial(trial_data)
      } else {

        display_element.innerHTML = '';
        // next trial
        jsPsych.finishTrial(trial_data);
      }

    });

    var startTime = performance.now();

    function end_trial(trial_data) {
      // stop the audio file if it is playing
      // remove end event listeners if they exist
      if (context !== null) {
        source.stop();
        source.onended = function () { }
      } else {
        audio.pause();
        audio.removeEventListener('ended', end_trial);
      }

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    }


    //start audio
    if (context !== null) {
      startAud = context.currentTime;
      source.start(startAud);
    } else {
      audio.play();
    }



  };

  return plugin;
})();