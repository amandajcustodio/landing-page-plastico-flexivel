const sacos = document.querySelector('#sacos');
const bob = document.querySelector('#bob')
const larg = document.querySelector('#larg');
const comp = document.querySelector('#comp');
const esp = document.querySelector('#esp');
const reqProd = document.querySelector('#requiredProd');
const reqMed = document.querySelector('#requiredMed');
let result = document.querySelector('#resultado');

function change(i) {
    if (i == 0) {
        comp.style.display = "none";
        larg.style.marginBottom = 0;
    } else if (i == 1) {
        comp.style.display = "block";
        comp.style.margin = "auto";
        larg.style.marginBottom = "20px";
    }
}

function checkBob() {
    bob.setAttribute("aria-selected", true);
    sacos.removeAttribute("aria-selected");
    reqProd.innerText = "";
}

function checkSacos() {
    sacos.setAttribute("aria-selected", true);
    bob.removeAttribute("aria-selected");
    reqProd.innerText = "";
}

function calculate() {
    if (bob.ariaSelected) {
        if (larg.value == "" || esp.value == "") {
            reqMed.innerText = "Todos os campos são obrigatórios, por favor, adicione algum valor.";
            reqMed.style.color = "#cb0000";
        } else if (larg.value != "" && esp.value != "") {
            if (larg.value < 15) {
                result.innerText = "200kg.";
            } else if (larg.value >= 15 && larg.value <= 20) {
                result.innerText = "150kg.";
            } else if (larg.value > 20 && larg.value <= 150) {
                result.innerText = "100kg.";
            } else if (larg.value > 150) {
                result.innerText = "200kg.";
            } else {
                result.innerText = "Que pena! Algo deu errado! Por favor, tente novamente, se o erro persistir atualize a página.";
            }
        }
    } else if (sacos.ariaSelected) {
        if (larg.value == "" || comp.value == "" || esp.value == "") {
            reqMed.innerText = "Todos os campos são obrigatórios, por favor, adicione algum valor.";
            reqMed.style.color = "#cb0000";
        } else if (larg.value != "" && comp.value != "" && esp.value != "") {
            let conta = ((parseFloat(larg.value) * parseFloat(comp.value) * parseFloat(esp.value)) / 10) * 0.922;
            if (larg.value < 15) {
                let quantMilh = 200 / conta;
                result.innerText = "200kg ou aprox. " + quantMilh.toFixed(2) + " mlh.";
            } else if (larg.value >= 15 && larg.value <= 20) {
                let quantMilh = 150 / conta;
                result.innerText = "150kg ou aprox. " + quantMilh.toFixed(2) + " mlh.";
            } else if (larg.value > 20 && larg.value <= 150) {
                let quantMilh = 100 / conta;
                result.innerText = "100kg ou aprox. " + quantMilh.toFixed(2) + " mlh.";
            } else if (larg.value > 150) {
                let quantMilh = 200 / conta;
                result.innerText = "200kg ou aprox. " + quantMilh.toFixed(2) + " mlh.";
            } else {
                result.innerText = "Que pena! Algo deu errado! Por favor, tente novamente, se o erro persistir atualize a página.";
            }
        }
    } else {
        reqProd.innerText = "Por favor, selecione um produto.";
        reqProd.style.color = "#cb0000";
    }

}

function clean() {
    larg.value = larg;
    comp.value = comp;
    esp.value = esp;
    reqProd.innerText = "";
    reqMed.innerText = "";
    result.innerText = "";
}

function cleanMed() {
    reqMed.innerText = "";
}