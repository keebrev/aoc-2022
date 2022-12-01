export function getDate() {
  return new Date()
}

export function executionTime(start: Date, end: Date) {
  // @ts-ignore
  let timeDiff = end - start;
  timeDiff /= 1000;
  console.log(`%cScript executed in %c${timeDiff} %cseconds`, "color: green", "color: yellow", "color: green");
}
