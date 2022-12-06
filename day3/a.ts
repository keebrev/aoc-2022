const text = await Deno.readTextFile("input.txt")
const input = text.split('\n')

function findDuplicate(a: string[], b: string[]): string {
  let duplicate = ""
  a.forEach(char => {
    if(b.includes(char)) {
      duplicate = char
    }
  })
  return duplicate
}

function solve(i: string[]): number {
  return i.map(line => {
    const left: string[] = line.slice(0, line.length / 2).split("")
    const right: string[] = line.slice(line.length / 2, line.length).split("")
    return getCode(findDuplicate(left, right))
  }).reduce((a, b) => a + b, 0)
}

function getCode(i: string | undefined): number {
  if(!i) return 0

  const code = i.charCodeAt(0)
  if(code > 96) {
    return code - 96
  } else {
    return code - 38
  }
}

console.log(solve(input))
