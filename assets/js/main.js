const information1 = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
const information2 = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
const information3 = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
const information4 = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
const information5 = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
const information6 = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
const information7 = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
const information8 = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
const information9 = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
const information10 = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
const information11 = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
const information12 = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
const information13 = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
const information14 = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
const information15 = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
const information16 = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
const def = "Ein solches Bundesland gibt es in Deutschland nicht.";

const input = document.getElementById("bundeslandInfo").value;
const output = document.getElementById("bundeslandInfoErgebnis");

function check() {

    switch (input) {
        case "Baden-Württemberg":
            output.innerHTML = information1;
            break;
        case "Bayern":
            output.innerHTML = information2;
            break;
        case "Berlin":
            output.innerHTML = information3;
            break;
        case "Brandenburg":
            output.innerHTML = information4;
            break;
        case "Bremen":
            output.innerHTML = information5;
            break;
        case "Hamburg":
            output.innerHTML = information6;
            break;
        case "Hessen":
            output.innerHTML = information7;
            break;
        case "Mecklenburg-Vorpommern":
            output.innerHTML = information8;
            break;
        case "Niedersachsen":
            output.innerHTML = information9;
            break;
        case "Nordrhein-Westfalen":
            output.innerHTML = information10;
            break;
        case "Rheinland-Pfalz":
            output.innerHTML = information11;
            break;
        case "Saarland":
            output.innerHTML = information12;
            break;
        case "Sachsen":
            output.innerHTML = information13;
            break;
        case "Sachsen-Anhalt":
            output.innerHTML = information14;
            break;
        case "Schleswig-Holstein":
            output.innerHTML = information15;
            break;
        case "Thüringen":
            output.innerHTML = information16;
            break;
        default:
            output.innerHTML = def;
    }
}