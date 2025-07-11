// B = Bube, D = Dame, K = König, A = Ass
// BC = Kreuz Bube, BS = Pik Bube, BH = Herz Bube, BD = Karo Bube 

const [cardsString] = process.argv.slice(2);
const cards = (string => {
    const temp = string.split(/[ ,]/);
    for (let i = 0; i < temp.length; i++) temp[i] = {color: temp[i][temp[i].length - 1], value: temp[i].substring(0, temp[i].length - 1)};
    return temp;
})(cardsString);

