require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

console.log('Getting started with Node Slack SDK');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);


const slackEvents = createEventAdapter(slackSigningSecret);


const port = process.env.PORT || 3000;

const currentTime = new Date().toTimeString();



slackEvents.on('app_mention', (event) => {
    console.log(`Received a message event in channel ${event.channel} says ${event.text}`);
    if(event.text.includes('help')){
        (async () => {

            try {
              // Use the `chat.postMessage` method to send a message from this app
              await web.chat.postMessage({
                channel: '#test',
                text: `The current time is ${currentTime}`,
              });
            } catch (error) {
              console.log(error);
            }
          
            console.log('Message posted!');
          })();
    }  
});


(async () => {
  // Start the built-in server
  const server = await slackEvents.start(port);

  // Log a message when the server is ready
  console.log(`Listening for events on ${server.address().port}`);
  
})();