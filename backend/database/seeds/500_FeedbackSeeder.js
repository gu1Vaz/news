'use strict'


const Feedback = use('App/Models/Feedback')
const Factory = use('Factory')

class FeedbackSeeder {
  async run () {
    const comments = ["brabo", "um minutin pra palavra de deus", "bolado", "kkkkkkkkkkkkkkkkkkkkkkkk god", "olha esse css irmaozinnnnnnnnnnnnnnn", "Apocalipse 2:3 ...e deus destruiu a Terra","O seu site é muito ruim, não gostei e nao recomendo a ninguem", "fui hackeado ao entrar no seu site","AHHHHHHHHHHHHHH, AHHHHHHHH ZÉ DA MANGA", "BORAAA BILLLLLLL", "minha chave pix aleatoria: nadsda723424hjjdakdjj3423jk4k2vb", "depressão é foda"];
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const n = 35;
    for (let i = 1; i <= n; i++) {
      await Feedback.create({
        user_id: ids[Math.floor(Math.random() * ids.length)],
        value: comments[Math.floor(Math.random() * comments.length)]
      });
    }
  }
}
module.exports = FeedbackSeeder
