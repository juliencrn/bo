export const INIT = 'INIT'
export const SELECTED = 'SELECTED'
export const UNSELECT = 'UNSELECT'
export const tabSize = 92

export const pxToNumber = n => Number(n.replace('px', ''))

export function getState(packNumber, selected) {
  switch (selected) {
    case null:
      return INIT
    case packNumber:
      return SELECTED
    default:
      return UNSELECT
  }
}
