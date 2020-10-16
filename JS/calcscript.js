/*
        Make a calulator that accepts more than two numbers.
        do order of operations if possible.
*/
function NumberButtons(val) {
        if(!document.getElementById("txtBox").value.includes('='))
                document.getElementById("txtBox").value += val;
        else 
                document.getElementById("txtBox").value = "" + val;
}

function OperatorButtons(val) {
        if(!document.getElementById("txtBox").value.includes('='))
                document.getElementById("txtBox").value += val;   
}

function DecimalButton(val) {
        if(!document.getElementById("txtBox").value.includes('='))
                document.getElementById("txtBox").value += val;  
}

function OperationButton(val) {
        let y = document.getElementById("txtBox").value;
        let z = eval(y)
        document.getElementById("txtBox").value += val += z;
}

function DelButton() {
        const txtBox = document.getElementById("txtBox"); 
        if(txtBox.value.length > 0)
                txtBox.value = txtBox.value.substring(0, txtBox.value.length - 1);

        if(txtBox.value.includes('='))
                txtBox.value = "";
}