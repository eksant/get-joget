function getWinner(data) {
  let arr = [];
  for (const id in data) {
    let obj = {}
    obj.id = id
    for (const field in data[id]) {
      obj[field] = data[id][field]
    }
    arr.push(obj)
  }

  let result = arr.filter(value => {
    return (value.isLogin == true && value.score >= 50)
  })

  let maxScore = Math.max(...result.map(obj => obj.score))
  let idxWinner = arr.findIndex(value => {
    return value.score == maxScore
  })
  return arr[idxWinner]
}

export default getWinner