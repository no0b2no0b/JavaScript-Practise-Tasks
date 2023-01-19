let user = prompt("Enter S, W or G")
let alpha = Math.floor(Math.random() * 3)
let beta = ["S", "W", "G"][alpha]

const match = (beta, user) => {

  if (user == beta)
    return "Draw"
  else if (user == 'S' && beta == 'W')
    return "user"
  else if (user == 'S' && beta == 'G')
    return "Beta"
  else if (user == 'W' && beta == 'G')
    return "user"
  else if (user == 'W' && beta == 'S')
    return "Beta"
  else if (user == 'G' && beta == 'S')
    return "user"
  else if (user == 'G' && beta == 'W')
    return "Beta"
  else
    return "Invalid"
}

let result = match(beta, user)
document.write(`Beta:${beta} <br> User:${user} <br>The winner is: ${result.toUpperCase()}`)