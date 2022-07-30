'use strict'


const Materia = use('App/Models/Materia')

const Factory = use('Factory')

class MateriaSeeder {
  async run () {
    await Materia.createMany([
      {
        route_id:'materia_braba',
        image_url:'https://pbs.twimg.com/profile_images/1293278473893687302/ntjlziyJ_400x400.jpg',
        title: 'Documento na CPI mostra que ministério não queria protagonismo de Doria na vacinação',
        subtitle: 'etcetctetctetctettctetctteteteteteettttttttttttttttttttteetetetetetetetetetetetetetetetetetetetetetette',
        intro: 'Documentos obtidos pelo RJ1 mostram possíveis falhas em procedimentos que provocaram a morte do paraquedista do Exército Pedro Lucas Ferreira Chaves, de 19 anos.O caso aconteceu em junho de 2020, durante o salto de treinamento da Brigada de Infantaria Paraquedista, no Campo dos Afonsos, Zona Oeste do Rio. O equipamento usado pelo militar ficou preso no avião e ele acabou caindo.',
        dev: 'O Exército abriu um inquérito policial militar para apurar as causas da morte do soldado. As investigações duraram cerca de dois meses até que fossem concluídas.Neste período, testemunhas foram ouvidas e perícias foram feitas. E a conclusão é que não houve indícios de prática de crime militar.Todos os outros militares que estavam no avião foram inocentados e o caso foi arquivado. Mas os documentos obtidos pelo RJ1 apontam falhas de procedimentos.Num trecho do inquérito, o documento diz que o auxiliar de mestre de salto, ao visualizar qualquer situação que possa ameaçar a integridade dos militares ou pôr em risco a aeronave, deve tentar sanar a pane encontrada. E em caso de não obter sucesso, deve imediatamente retirar o saltador do salto.Em outra parte, o inquérito revela que o auxiliar de mestre de salto visualizou a distensão da fita de ligação de 20 pés do soldado Chaves, segurou a fita e, assim como havia feito com o estagiário 225, tentou prender no equipamento do soldado Chaves. O documento mostra que o sargento Alex Ribeiro deveria ter retirado o paraquedista do salto. Mas a regra não foi obedecida.',
        coc: 'Ficar sem a presença de Pedro Lucas na casa da família tem sido muito difícil para quem estava acostumado a conviver com um jovem sonhador, cheio de energia e bem humorado. Hoje, ele é lembrado com carinho em fotos espalhadas pela sala da casa.A mãe, os avós, os irmãos e os tios homenageiam o jovem usando camisas com estampa do Exército. Imagens relacionadas ao soldado e ao paraquedismo militar se transformaram em tatuagens."Quem errou não foi punido. Não existiu punição. O meu filho perdeu a vida, a gente perdeu alguém muito especial e, infelizmente, a justiça não foi feita ainda", disse a mãe de Pedro Lucas.',
        creador: 'O Brabo'
      }
    ]);
  }
}

module.exports = MateriaSeeder
