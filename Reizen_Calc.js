// B = Bube, D = Dame, K = König, A = Ass
// BC = Kreuz Bube, BS = Pik Bube, BH = Herz Bube, BD = Karo Bube 

let factor = 1;
const [cardsString] = process.argv.slice(2);
const cards = (string => {
    const temp = string.split(/[ ,]/);
    for (let i = 0; i < temp.length; i++) temp[i] = {color: temp[i][temp[i].length - 1], value: temp[i].substring(0, temp[i].length - 1)};
    return temp;
})(cardsString);
let Bs = [];

for (let i = 0; i < cards.length; i++) if(cards[i].value === "B") Bs.push(cards[i]);
if(Bs.length === 0 || Bs.length === 4) {
    factor += 4;
} else if(serachCard.call(Bs, {color: "C", value: "B"})) {
    factor++;
    if(serachCard.call(Bs, {color: "S", value: "B"})) {
        factor++;
        if(serachCard.call(Bs, {color: "H", value: "B"})) {
            factor++;
        }
    }
} else {
    factor++;
    if(!serachCard.call(Bs, {color: "S", value: "B"})) {
        factor++;
        if(!serachCard.call(Bs, {color: "H", value: "B"})) {
            factor++;
        }
    }
}
function serachCard(card) {
    for (let i = 0; i < this.length; i++) if(this[i].color === card.color && this[i].value === card.value) return true;
    return false;
}

console.log(factor);