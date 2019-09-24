// export const inverse = direction => -direction

export const isBetween = (a, min, max) => a < max && a > min

export const ramdomBetween = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// Inverse direction if element touches others element
// export const isTouch = (el, direction, positions, cardSize) => {
//   const { dx, dy } = direction
//   const rx = cardSize.width / 2
//   const ry = cardSize.height / 2
//
//   positions.forEach(other => {
//     // echap this
//     if (other.id !== el.id) {
//       const { x: elx, y: ely } = other
//       const tx = el.x + dx < elx + rx && el.x + dx > elx - rx // x touched
//       const ty = el.y + dy < ely + ry && el.y + dy > ely - ry // y touched
//       // if touched
//       if (tx && ty) {
//         inverse(dx)
//         inverse(dy)
//       }
//     }
//   })
//
//   return { dx, dy }
// }
