/**
 * This example demonstrates setting up webhook
 * on the OpenShift platform.
 */


const TOKEN = process.env.TELEGRAM_TOKEN || '344440465:AAHijYUPv5iEV12ax7ODQFrh7mAkL88s-fk';

//const TelegramBot = require('node-telegram-bot-api');
const TelegramBot = require('..');
// See https://developers.openshift.com/en/node-js-environment-variables.html
const options = {
  webHook: {
    port: process.env.OPENSHIFT_NODEJS_PORT,
    host: process.env.OPENSHIFT_NODEJS_IP,
    // you do NOT need to set up certificates since OpenShift provides
    // the SSL certs already (https://<app-name>.rhcloud.com)
  },
};
// OpenShift routes from port :443 to OPENSHIFT_NODEJS_PORT
const domain = process.env.OPENSHIFT_APP_DNS;
const url = `${domain}:443`;
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on OpenShift!');
});