// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

//Julia API Machine Learning AI

/*var accessToken = "dafc86bb648b4deca941ac934deda6e2",
    subscriptionKey = "4c62f0fa-adf8-4ec0-ba8b-098271ca3361",
    baseUrl = "https://api.api.ai/v1/",
    $speechInput,
    $recBtn,
    recognition,
    messageRecording = "Recording...",
    messageCouldntHear = "I couldn't hear you, could you say that again?",
    messageInternalError = "Oh no, there has been an internal server error",
    messageSorry = "I'm sorry, I don't have the answer to that yet.";
    
	$(document).ready(function() {
      $speechInput = $("#speech");
      $recBtn = $("#rec");
      $speechInput.keypress(function(event) {
        if (event.which == 13) {
          event.preventDefault();
          send();
        }
      });
      
	  $recBtn.on("click", function(event) {
        switchRecognition();
      });
      
	  $(".debug__btn").on("click", function() {
        $(this).next().toggleClass("is-active");
        return false;
      });
    });
    
	function startRecognition() {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
          recognition.interimResults = false;
      recognition.onstart = function(event) {
        respond(messageRecording);
        updateRec();
      };
      recognition.onresult = function(event) {
        recognition.onend = null;
        
        var text = "";
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          setInput(text);
        stopRecognition();
      };
      recognition.onend = function() {
        respond(messageCouldntHear);
        stopRecognition();
      };
      recognition.lang = "en-US";
      recognition.start();
    }
  
    function stopRecognition() {
      if (recognition) {
        recognition.stop();
        recognition = null;
      }
      updateRec();
    }
    function switchRecognition() {
      if (recognition) {
        stopRecognition();
      } else {
        startRecognition();
      }
    }
    function setInput(text) {
      $speechInput.val(text);
      send();
    }
    function updateRec() {
      $recBtn.text(recognition ? "Stop" : "Speak");
    }
    function send() {
      var text = $speechInput.val();
      $.ajax({
        type: "POST",
        url: baseUrl + "query/",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          "Authorization": "Bearer " + accessToken,
          "ocp-apim-subscription-key": subscriptionKey
        },
        data: JSON.stringify({q: text, lang: "en"}),
        success: function(data) {
          prepareResponse(data);
        },
        error: function() {
          respond(messageInternalError);
        }
      });
    }
    function prepareResponse(val) {
      var debugJSON = JSON.stringify(val, undefined, 2),
        spokenResponse = val.result.speech;
      respond(spokenResponse);
      debugRespond(debugJSON);
    }
    function debugRespond(val) {
      $("#response").text(val);
    }
    function respond(val) {
      if (val == "") {
        val = messageSorry;
      }
      if (val !== messageRecording) {
        var msg = new SpeechSynthesisUtterance();
        msg.voiceURI = "native";
        msg.text = val;
        msg.lang = "en-US";
        window.speechSynthesis.speak(msg);
      }
      
	  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
*/

var hello = jQuery.parseJSON({
  "id": "3c0585ef-b3eb-4e3b-b1f2-a3c3fb9a61bb",
  "timestamp": "2016-11-16T13:07:48.759Z",
  "result": {
    "source": "agent",
    "resolvedQuery": "hello Julie",
    "action": "Hello",
    "actionIncomplete": false,
    "parameters": {
      "given-name": "Julie"
    },
    "contexts": [],
    "metadata": {
      "intentId": "a81fc3fd-1c60-406a-b5d5-ad5cdda0a972",
      "webhookUsed": "false",
      "intentName": "Hi Julia"
    },
    "fulfillment": {
      "speech": "Hi there. Where would you like to get started?",
      "messages": [
        {
          "type": 0,
          "speech": "Hi there. Where would you like to get started?"
        }
      ]
    },
    "score": 1
  },
  "status": {
    "code": 200,
    "errorType": "success"
  },
  "sessionId": "18114b6f-1601-461a-9974-75046ff67720"
});


if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
	'use strict';  
    'hello julia': function() {hello}
  }

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}