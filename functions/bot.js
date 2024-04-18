import express, { Router } from "express";
import serverless from "serverless-http";

import { Telegraf } from "telegraf"
import 'dotenv/config'

const token = '6459856771:AAEqvfXqWpADz7mgccCwOG6K4sJuvAfC9W8';

const webUrl = "https://gorgeous-dusk-a3880d.netlify.app/"
//t.me/testo_ax_my_bot






const bot = new Telegraf(token);

bot.start((ctx) => ctx.sendMessage('Welcome123'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.hears('hi', (ctx) => ctx.reply('Hey there'))





const commands = [
  {

    command: "menu",
    description: "меню"

  },
  {

    command: "start",
    description: "Запуск бота"

  },
  {

    command: "ref",
    description: "Получить реферальную ссылку"

  },
  {

    command: "help",
    description: "Раздел помощи"

  },

]

bot.telegram.setMyCommands(commands);
bot.on('message', async (msg) => {
  const text = msg.message.text
  const chatId = msg.chat.id
  // console.log(msg)

  if (msg.text == '/menu') {

    await bot.telegram.sendMessage(msg.chat.id, `Меню бота`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Кнопка 1', web_app: { url: webUrl } }],
          [{ text: 'Кнопка 2', callback_data: 'data 2' }],
          [{ text: 'Кнопка 3', callback_data: 'text 3' }]
        ]
      }


    })

  }
  else if (msg.text == "1") {
    bot.telegram.sendMessage(msg.chat.id, `бан`)
  }
});


let urlHook = "https://66208a3f7dd5bc00079fc0e4--tab-functions.netlify.app/.netlify/functions/bot/"
// bot.telegram.setWebhook(urlHook + "/bot" + `${token}`)
// bot.startWebhook(urlHook + "/bot" + `${token}`, null, 8800)

bot.launch({
  webhook: {
    // Public domain for webhook; e.g.: example.com
    domain: urlHook,

    // Port to listen on; e.g.: 8080


    // Optional path to listen for.
    // `bot.secretPathComponent()` will be used by default
    // path: urlHook + "/bot" + `${token}`,

    // Optional secret to be sent back in a header for security.
    // e.g.: `crypto.randomBytes(64).toString("hex")`
    // secretToken: randomAlphaNumericString,
  },
});





export const handler = serverless(bot);

