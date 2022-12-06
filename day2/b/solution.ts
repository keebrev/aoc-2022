import {RoundOutcomeEnum} from "../a/generic.ts";
import {mapScore} from "../a/solution.ts";

enum RoundChoice {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors"
}

function mapChoiceScore(i: RoundChoice) {
  switch (i) {
    case RoundChoice.Rock:
      return 1
    case RoundChoice.Paper:
      return 2
    case RoundChoice.Scissors:
      return 3
  }
}

function mapOutcome(i: string): RoundOutcomeEnum {
  switch(i) {
    case "Y":
      return RoundOutcomeEnum.DRAW
    case "X":
      return RoundOutcomeEnum.LOSE
    case "Z":
      return RoundOutcomeEnum.WIN
    default:
      return RoundOutcomeEnum.WIN
  }
}

function mapChoice(i: string, x: RoundOutcomeEnum): number {
  switch (i) {
    // rock
    case "A": {
      switch (x) {
        case RoundOutcomeEnum.WIN: return mapChoiceScore(RoundChoice.Paper) + mapScore(x)
        case RoundOutcomeEnum.LOSE: return mapChoiceScore(RoundChoice.Scissors) + mapScore(x)
        case RoundOutcomeEnum.DRAW: return mapChoiceScore(RoundChoice.Rock) + mapScore(x)
      }
    }
    // paper
    case "B": {
      switch (x) {
        case RoundOutcomeEnum.DRAW: return mapChoiceScore(RoundChoice.Paper) + mapScore(x)
        case RoundOutcomeEnum.WIN: return mapChoiceScore(RoundChoice.Scissors) + mapScore(x)
        case RoundOutcomeEnum.LOSE: return mapChoiceScore(RoundChoice.Rock) + mapScore(x)
      }
    }
    // scissors
    case "C": {
      switch (x) {
        case RoundOutcomeEnum.LOSE: return mapChoiceScore(RoundChoice.Paper) + mapScore(x)
        case RoundOutcomeEnum.DRAW: return mapChoiceScore(RoundChoice.Scissors) + mapScore(x)
        case RoundOutcomeEnum.WIN: return mapChoiceScore(RoundChoice.Rock) + mapScore(x)
      }
    }
    default: {
      return 0
    }
  }
}

const text = await Deno.readTextFile("input.txt");
let score = 0
text.split('\n').map(line => {
  const choices = line.split(" ");
  score += mapChoice(choices[0], mapOutcome(choices[1]))
})

console.log(score)
