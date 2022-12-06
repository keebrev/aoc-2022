import {IRPC, RoundOutcomeEnum} from "./generic.ts"

export function mapScore(i: RoundOutcomeEnum): number {
  switch (i) {
    case RoundOutcomeEnum.DRAW:
      return 3
    case RoundOutcomeEnum.WIN:
      return 6
    case RoundOutcomeEnum.LOSE:
      return 0
  }
}

const scores: {[key: string]: IRPC} = {
  "Y": {
    name: "Paper",
    score: 2,
    d: {
      "A": RoundOutcomeEnum.WIN,
      "B": RoundOutcomeEnum.DRAW,
      "C": RoundOutcomeEnum.LOSE
    }
  },
  "X": {
    name: "Rock",
    score: 1,
    d: {
      "A": RoundOutcomeEnum.DRAW,
      "B": RoundOutcomeEnum.LOSE,
      "C": RoundOutcomeEnum.WIN
    }
  },
  "Z": {
    name: "Scissors",
    score: 3,
    d: {
      "A": RoundOutcomeEnum.LOSE,
      "B": RoundOutcomeEnum.WIN,
      "C": RoundOutcomeEnum.DRAW
    }
  }
}

const text = await Deno.readTextFile("input.txt");
let score = 0;
text.split("\n").map(l => {
  let choices = l.split(" ")
  let round = scores[choices[1]]
  if(!round) {
    return;
  }
  score += mapScore(round.d[choices[0]]) + round.score
})

console.log(score)
