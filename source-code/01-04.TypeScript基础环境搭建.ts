interface Point {
  x: number
  y: number
  z: string
}

function tsDemo(data: Point) {
  console.log('Dell TS')
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

tsDemo({ x: 1, y: 123, z: '33' })
