const text = await Deno.readTextFile("input.txt")
const input = text.split('\n')

function getCode(i: string | undefined): number {
  if(!i) return 0

  const code = i.charCodeAt(0)
  if(code > 96) {
    return code - 96
  } else {
    return code - 38
  }
}

function solve(i: string[]) {
  let sets: string[][] = [[]];
  let tempIdx = 0;
  i.forEach((q, idx) => {
    if(q === "") return;
    if((idx % 3) === 0 && idx !== 0) {
      tempIdx++;
      sets[tempIdx] = []
    }
    sets[tempIdx].push(q)
  })
  return sets.map(i => {
    return findMatch(i[0].split(""), i[1].split(""), i[2].split(""))
  }).reduce((a, b) => a + b, 0)
}

function findMatch(i: string[], j: string[], k: string[]): number {
  let char;
  i.forEach(l => {
    if(j.includes(l) && k.includes(l)) {
      char = l;
    }
  })
  return getCode(char)
}

console.log(solve(input))
