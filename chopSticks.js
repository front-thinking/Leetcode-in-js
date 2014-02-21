//@ sourceURL=chopSticks.js
var chops;
(function() {
var resultBuf = {};
var chopsResult = function(input) {
    if (resultBuf[input]) return resultBuf[input];
    var output = "";
    output = input.replace(/[^n]/ig, "");
    output = output + input.replace(/[^_]/ig, "");
    output = output + input.replace(/[^u]/ig, "");
    return resultBuf[input] = output;
}

chops = function(input, emptyIndex) {
    
    if (input == chopsResult(input)) {
        console.log(input);
        return true;
    }
    input = [].slice.call(input);

    var bufInput = false;
    if (input[emptyIndex + 1] == "n" && !(input[emptyIndex - 1] == "n" && input[emptyIndex - 2] == "u")) {
        bufInput = input.concat();
        bufInput[emptyIndex + 1] = "_";
        bufInput[emptyIndex] = "n";
        if (chops(bufInput.join(""), emptyIndex + 1)) {
            console.log(input.join(""));
            return true;
        }
        else bufInput = false;
    }

    if (input[emptyIndex + 2] == "n" && !(input[emptyIndex - 1] == "n" && input[emptyIndex - 2] == "u")) {
        bufInput = input.concat();
        bufInput[emptyIndex + 2] = "_";
        bufInput[emptyIndex] = "n";
        if (chops(bufInput.join(""), emptyIndex + 2)) {
            console.log(input.join(""));
            return true;
        }
        else bufInput = false;
    }

    if (input[emptyIndex - 1] == "u" && !(input[emptyIndex + 1] == "u" && input[emptyIndex + 2] == "n")) {
        bufInput = input.concat();
        bufInput[emptyIndex - 1] = "_";
        bufInput[emptyIndex] = "u";
        if (chops(bufInput.join(""), emptyIndex - 1)) {
            console.log(input.join(""));
            return true
        }
        else bufInput = false;
    }

    if (input[emptyIndex - 2] == "u" && !(input[emptyIndex + 1] == "u" && input[emptyIndex + 2] == "n")) {
        bufInput = input.concat();
        bufInput[emptyIndex - 2] = "_";
        bufInput[emptyIndex] = "u";
        if (chops(bufInput.join(""), emptyIndex - 2)) {
            console.log(input.join(""));
            return true;
        }
        else bufInput = false;
    }

    if (!bufInput) return false;
}
})();