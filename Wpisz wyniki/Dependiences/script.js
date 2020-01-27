$(document).ready(function() {
    let template = 0, direction = 0, sentOnce = false, value, outputValues, d;
    $(".tempButton").click(function() {
        $("#temp" + template).removeClass("bigButtonPressed")
        template = $(this).attr("id")[4];
        $(this).addClass("bigButtonPressed");
    });
    $(".dirButton").click(function() {
        $("#dir" + direction).removeClass("bigButtonPressed")
        direction = $(this).attr("id")[3];
        $(this).addClass("bigButtonPressed");
    });
    $("#submitButton").click(function() {
        value = $("#stuI").val();
        if (value == "" || !Number.isInteger(Number(value)) || Number(value) <= 1) {
            if (value == "") {
                alert("Wpisz ilość uczniów");
            }
            else if (Number(value) <= 1) {
                alert("Ilość uczniów nie może być mniejsza lub równa 1.")
            }
            else {
                alert ("Dane są niepoprawne. Wpisz poprawne dane i spróbuj ponownie.");
            }
        }
        else {
            $("#results").html("").removeClass("insertStudentsNumber");
            let header = "<div id=\"inputHeader\"><div class=\"cell\">Numer</div><div class=\"cell\">Ilość punktów</div><div class=\"cell\">Wynik</div>";
            let separator = "<div class=\"separator\">'</div>";
            $("#results").append(header + separator + header).append("<div id=\"inputTable\"></div>").append("<div class=\"insertInput\" id=\"insertDataInput\"></div>");
            let appDivs = [];
            for (let i = 0; i < value; i++) {
                let number = "<div id=\"n" + i + "\" class=\"sNumber\">" + (i + 1) + "</div>";
                let inputScore = "<div id=\"i" + i + "\"><input type=\"text\" class=\"sInput\" id=\"it" + i + "\"></div>";
                let score = "<div id=\"r" + i + "\" class=\"sResult\"></div>";
                appDivs.push(number + inputScore + score);
            }
            let twoDimTable = [[], []];
            if (direction == 0) {
                for (let i = 0; i < appDivs.length; i += 2) {
                    twoDimTable[0].push(appDivs[i]);
                    twoDimTable[1].push(appDivs[i + 1]);
                }
            }
            else if (direction == 1) {
                for (let i = 0; i < appDivs.length / 2; i++) {
                    twoDimTable[0].push(appDivs[i]);
                    twoDimTable[1].push(appDivs[i + parseInt(appDivs.length / 2) + (appDivs.length % 2)]);
                }
            }
            let eeex;
            for (let i = 0; i < twoDimTable[0].length; i++) {
                if (twoDimTable[1][i] == undefined) {
                    twoDimTable[1][i] = "<div></div><div></div><div></div>";
                }
                eeex = twoDimTable[0][i] + separator + twoDimTable[1][i];
                $("#inputTable").append(eeex);
            }
            eeex = "<div class=\"verSep\">'</div>".repeat(7);
            $("#inputTable").append(eeex);
            $("#insertDataInput").append("<div id=\"insertDataInput\"><button class=\"bigButton\" id=\"insertDataInputButton\">Wprowadź</button></div>")
        }
    });
    $("body").on("change", ".sInput", function() {
        let ID = $(this).attr("id").replace("it", "");
        let calcVal = calculator($(this).val().split(" ").join(""));
        if (calcVal != "EMPTY" && calcVal != "NaN") {
            $("#r" + ID).text(roundTwoPlaces(calcVal));
        }
        else if (calcVal == "NaN") {
            $("#r" + ID).text(calcVal);
        }
        else {
            $("#r" + ID).text("");
        }
    });
    $("body").on("click", "#insertDataInputButton", function() {
        let maxScore = Number($("#maxI").val());
        if (isPositive($("#maxI").val())) {
            outputValues = [];
            for (let i = 0; i < value; i++) {
                outputValues.push(returnPasteValue(roundTwoPlaces(calculator($("#it" + i).val().split(" ").join(""))), maxScore, template));
            }
            $("#top").removeClass("topClassBeg").addClass("topClassEnd").html("<div class=\"topLabel\" id=\"endTextDiv\">Pomyślnie wprowadzono dane</div>");
            $("body").css("grid-template-rows", "200px 1fr")
            $("#results").html("<div id=\"countdownButton\"><a id=\"downloadFile\" download=\"wyniki.txt\"><button class=\"bigButton\" id=\"startDownloadButton\">Pobierz plik</button></a></div>").addClass("countdownDiv");
            downloadFile.href = "data:text/plain," + encodeURIComponent(outputValues.join("\n"));
        }
        else {
            alert("Podaj prawidłową maksymalną ilość punktów.");
        }
    });
    $("body").on("click", "#startDownloadButton", function() {
        if (!sentOnce) {
            sentOnce = true;
            $("#startCountdownButton").text("Pobierz ponownie");
        }        
    });
});

function calculator(inputStr) {
    function getElements(input) {
        let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."], operators = ["+", "-", "*", "/"];
        let retArr = [], num = "", oper = "", nextMinus = false, done = false;

        for (let i = 0; i < input.length; i++) {
            if (nums.indexOf(input[i]) != -1) {
                if (oper.length == 1) {
                    retArr.push(oper);
                    oper = "";
                    done = false;
                }
                if (nextMinus == true) {
                    num += "-";
                }
                num += input[i];
                nextMinus = false;
            }
            else if (operators.indexOf(input[i]) != -1) {
                if (!done) {
                    if (nextMinus) {
                        num = "-" + num;
                    }
                    if (num != "" && (i != 0 || input == "-")) {
                        retArr.push(num);
                        num = "";
                    }
                    done = true;
                }    
                if (input[i] == "-" && oper.length == 1) {
                    nextMinus = true;
                }
                else {
                    oper = input[i];
                    nextMinus = false;
                }            
            }
            else {
                return [];
            }
        }

        if (nextMinus) {
            num = "-" + num;
        }
        retArr.push(num);
        if (retArr[0] == "-") {
            retArr[1] = "-" + retArr[1];
            retArr.shift();
        }
        else if (operators.indexOf(retArr[0]) != -1) {
            retArr.shift();
        }

        return retArr;
    }
    if (inputStr === "") {
        return "EMPTY";
    }
    let elements = getElements(inputStr);
    if (elements.length % 2 == 0) {
        return "NaN";
    }
    else if (elements.length == 1) {
        return Number(elements[0]);
    }

    let numbers = [], operators = [];

    for (let i = 1; i < elements.length; i += 2) {
        numbers.push(Number(elements[i - 1]));
        operators.push(elements[i]);
    }
    numbers.push(Number(elements[elements.length - 1]));

    for (let i = 0; i < operators.length; i++) { //multiplying and dividing
        if (operators[i] == "/" || operators[i] == "*") {
            if (operators[i] == "/") {
                numbers[i] /= numbers[i + 1];
            }
            else {
                numbers[i] *= numbers[i + 1];
            }
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < operators.length; i++) { //adding and subtracting
        if (operators[i] == "+" || operators[i] == "-") {
            if (operators[i] == "+") {
                numbers[i] += numbers[i + 1];
            }
            else {
                numbers[i] -= numbers[i + 1];
            }
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }

    return Number(numbers[0]);
}

function isPositive(value) {
    return Number(value) >= 1  && value !== "";
}

function returnPasteValue(score, max, template) {
    if (score == "IGNORE") {
        return "";
    }
    let retVal = "";
    if (template < 2) {
        retVal += score;
        retVal += "/";
        retVal += max;
    }
    if (template == 1) {
        retVal += " ";
    }
    if (template > 0) {
        retVal += Math.round(score / max * 100)
        retVal += "%";
    }
    return retVal;
}

function roundTwoPlaces(num) {
    if (num == "EMPTY" || num == "NaN") {
        return "IGNORE";
    }
    return Math.round(num * 100) / 100
}