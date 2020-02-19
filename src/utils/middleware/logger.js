const round = number => Math.round(number * 100) / 100

const logger = store => next => action => {
  //console.log('dispatching', action)
  //const start = Date.now()
  let result = next(action)
  //const end = Date.now()
  //const diff = round(end - start)
  //console.log('action process time:', diff + 'ms')
  //console.log('next state', store.getState())
  return result
}


export default logger;