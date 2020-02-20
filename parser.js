const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

module.exports ={

  msgparser: function(event){
    if(event.text.includes('help')){
      const keyword="help";
      (async () => {
        try {
          // Use the `chat.postMessage` method to send a message from this app
          await web.chat.postMessage({
            channel: '#test',
            text: `How may I help you?`,
          });
        } 
        catch (error) {
          console.log(error);
        }
        console.log('Message posted!');
      })();
      return(keyword);
    } 
    else if(event.text.includes('status')){
      const keyword="status";
      (async () => {
        try {
          // Use the `chat.postMessage` method to send a message from this app
          await web.chat.postMessage({
            channel: '#test',
            text: `The status option will soon be available.`,
          });
        } 
        catch (error) {
          console.log(error);
        }
        console.log('Message posted!');
      })();
      return(keyword);
    } 
    else if(event.text.includes('release')){
      (async () => {
        try {
          // Use the `chat.postMessage` method to send a message from this app
          await web.chat.postMessage({
            channel: '#test',
            text: `The release option will soon be available`,
          });
        } 
        catch (error) {
          console.log(error);
        }  
        console.log('Message posted!');
      })();
      return(keyword);
    } 
    else {
      keyword = "notfound";
      (async () => {
        try {
          // Use the `chat.postMessage` method to send a message from this app
          await web.chat.postMessage({
            channel: '#test',
            text: `Your message could not be understood. Please see list of available options in "@releasbot help"`,            
          });
        } 
        catch (error) {
          console.log(error);
        }    
        console.log('Message posted!');
      })();
      return(keyword);
    }
    
  }

};