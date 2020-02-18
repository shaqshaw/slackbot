require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

console.log('Getting started with Node Slack SDK');

// Read the signing secret from the environment variables
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

// Initialize
const slackEvents = createEventAdapter(slackSigningSecret);

// Read the port from the environment variables, fallback to 3000 default.
const port = process.env.PORT || 3000;

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
// slackEvents.on('message', (event) => {
//     console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
//     console.log(event)
// });

slackEvents.on('app_mention', (event) => {
    //console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
    console.log(`Received a message event in channel ${event.channel} says ${event.text}`);
    handleMessage(event);
    //console.log('Reply Sent')
});

function handleMessage(event){
    if(message.text.include('help')){
        (async () => {
            const res = await web.chat.postMessage({ channel: event.channel, text: 'Hello there, what would you like help with?' });
          
            // Log a message when the server is ready
            console.log(`Message sent`);
          })();
        
    }
    if(message.include('status')){
        
    }
    if(message.include('status')){
        
    }
}



(async () => {
  // Start the built-in server
  const server = await slackEvents.start(port);

  // Log a message when the server is ready
  console.log(`Listening for events on ${server.address().port}`);
})();