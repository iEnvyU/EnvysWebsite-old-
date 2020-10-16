var Check = false
const variables = ['+', '-', '*', '/']

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

        for(let item of variables)
                if (document.getElementById("txtBox").value.includes(item))
                        Check = true;

        if(Check === true)
                document.getElementById("txtBox").value += val += z;
        else
                document.getElementById("txtBox").value = "ERROR"

        Check = false;
}

function DelButton() {
        const txtBox = document.getElementById("txtBox"); 
        if(txtBox.value.length > 0)
                txtBox.value = txtBox.value.substring(0, txtBox.value.length - 1);

        if(txtBox.value.includes('=') || Check === false)
                txtBox.value = "";
}