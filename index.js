require('dotenv').config();
var parser=require('./parser');
var app_mentions=require('./app_mentions/index');
const { createEventAdapter } = require('@slack/events-api');

console.log('Getting started with Node Slack SDK');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const slackEvents = createEventAdapter(slackSigningSecret);
const port = process.env.PORT || 3000;

slackEvents.on('app_mention', (event) => {
  console.log(`Received a message event in channel ${event.channel} says ${event.text}`);
  //a parsemessage function to find key words (return key word)
  //a function that takes keyword and direct it to its respective method
  //console.log success if returns true 

    const keyword = parser.msgparser(event);
    console.log("keyword is ", keyword);
    app_mentions.execute(keyword);
});


(async () => {
  // Start the built-in server
  const server = await slackEvents.start(port);

  // Log a message when the server is ready
  console.log(`Listening for events on ${server.address().port}`);
})();