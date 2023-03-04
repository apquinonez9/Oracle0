const {IncomingWebhook}=require("@slack/webhook")
const webhoot=new IncomingWebhook(process.env.SLACK_WEBHOOK)
const loggerStream= {
    write: message => {
        webhoot.send({
            text:message
        });
        console.log('capturando el LOG',message)
        
    },
};
module.exports=loggerStream