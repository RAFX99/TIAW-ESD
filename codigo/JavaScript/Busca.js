var RJ = ["rj", "Rio de Janeiro", "rio"]
var SP = ["sp", "São Paulo", "são paulo"]
var MG = ["mg", "minas", "minas gerais"]
var MA = ["ma", "maranhão", "maranhao"]
var MT = ["mt", "mato grosso", "mato"]
var PE = ["pe", "pernambuco", "pernam"]
var SC = ["sc", "santa catarina", "santa"]
var RS = ["rs", "rio grande do sul", "rio", "sul"]
var RR = ["rr", "roraima", "rorai"]
var PR = ["pr", "parana", "para"]

const btn = document.getElementById('click', (e) => {

  for (var i = 0; i < RJ.length; i++) {
    if (RJ[i] == valordovetor) {
      window.location(rj.html)
    }
  }


})


function pesquisar() {
  switch (pesq) {
    case "RJ, Rio de Janeiro":
      alert('Achamos Rio de Janeiro!');
      break;

      case "Sao paulo, SP, São Paulo":
      alert('Achamaos São Paulo!');
      break;

      case "Minas, MG, Minas Gerais":
      alert('Achamaos Minas Gerais!');
      break;

      case "MA, Maranhão, Maranhao":
      alert('Achamaos Maranhão!');
      break;

      case "MT, Mato Grosso, Mato":
      alert('Achamaos Mato Grosso!');
      break;

      case "PE, Pernambuco, Pernam":
      alert('Achamaos Pernambuco!');
      break;

      case "SC, Santa Catarina, Santa":
      alert('Achamaos Santa Catarina!');
      break;

      case "RS, Rio Grande do Sul, Sul":
      alert('Achamaos Rio Grande do Sul!');
      break;

      case "Roraima, RR, Rorai":
      alert('Achamaos Roraima!');
      break;

      case "PR, Parana, para":
      alert('Achamaos Paraná!');
      break;

  }
}

