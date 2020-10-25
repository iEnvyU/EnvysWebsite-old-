var CheckForVariable = false;
var VariableExists  = false;
const variables = ['+', '-', '*', '/'];
const numbers = ['1','2','3','4','5','6','7','8','9',]

function NumberButtons(val) {
        if(!document.getElementById("txtBox").value.includes('='))
                document.getElementById("txtBox").value += val;
        else 
                document.getElementById("txtBox").value = "" + val;
}

function OperatorButtons(val) {
        if(document.getElementById("txtBox").value.includes('='))
                return
                
        let z = document.getElementById("txtBox").value.slice(-1);

        for(let item of numbers)
                if(z.includes(item))
                        document.getElementById("txtBox").value += val;
}

function DecimalButton(val) {
        if(!document.getElementById("txtBox").value.includes('='))
                document.getElementById("txtBox").value += val; 
}

function OperationButton(val) {
        let y = document.getElementById("txtBox").value;
        let z = eval(y);

        for(let item of variables)
                if (document.getElementById("txtBox").value.includes(item))
                        CheckForVariable = true;

        if(CheckForVariable === true)
                document.getElementById("txtBox").value += val += z;
        else
                document.getElementById("txtBox").value = "ERROR";

        CheckForVariable = false;
        VariableExists = false;
}

function DelButton() {
        const txtBox = document.getElementById("txtBox"); 

        for(let item of variables)
                if (document.getElementById("txtBox").value.includes(item))
                        VariableExists = false;

        if(txtBox.value.length > 0)
                txtBox.value = txtBox.value.substring(0, txtBox.value.length - 1);

        if(txtBox.value.includes('=') || txtBox.value.includes('E'))
                txtBox.value = "";
}



/* NOTES - was working on how to be able to use multiple vatiables in a sigle equation! 
        also try to stop using eval for your equeations :D */