//Data Field
const variables = ['+', '-', '*', '/'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
let DecimalUsed = false;

function NumberButtons(val) {
        //If Text Box Contains A Completed Equation Or An Error, Reset And Continue. Else Continue
        if(document.getElementById("txtBox").value.includes('=') || document.getElementById("txtBox").value.includes('E'))
                document.getElementById("txtBox").value = "" + val;
        else 
                document.getElementById("txtBox").value += val;
}

function OperatorButtons(val) {
        DecimalUsed = false;

        //If Equation Is Complete Do nothing
        if(document.getElementById("txtBox").value.includes('='))
                return;
        
        //Checks If The Text Box Is Empty And If The Operator I Clicked Is A "-"
        if(document.getElementById("txtBox").value == "" && val == "-")
                document.getElementById("txtBox").value += val;
                
        //Function Call
        CheckForNumber(val);
}

function DecimalButton(val) {
        //If Text Box Contains A Completed Equation Or An Error, Reset And Continue.
        if(document.getElementById("txtBox").value.includes('=') || document.getElementById("txtBox").value.includes('E'))
                        document.getElementById("txtBox").value = "" + val;

        //checks if theres been a decimal used, if not then continue.
        if(DecimalUsed == false)
        {
                CheckForNumber(val);
                DecimalUsed = true;
        }
}

function OperationButton(val) {
        //Do Nothing If There's An Error Or If An Equation Was Made
        if(document.getElementById("txtBox").value == "Error" || document.getElementById("txtBox").value.includes('='))
                return;

        //Main Evaluation Of Equation
        let y = document.getElementById("txtBox").value;
        let z = eval(y);

        //Error Checking For Divide By Zero (Infinity)
        if(z == "Infinity")
        {
                document.getElementById("txtBox").value = "Error";
                return;
        }

        //Error Checking For Zero Divided By Zero
        if(y == ("0/0"))
                document.getElementById("txtBox").value = "Error";
       
        //To Find If The Equation Contains A Variable then evaluates the Equation
        for(let item of variables)
                if (document.getElementById("txtBox").value.includes(item))
                {
                        document.getElementById("txtBox").value = y + val + z;
                        DecimalUsed = false; 
                }
}

function DelButton() {
        //To Shorten A Variable
        const txtBox = document.getElementById("txtBox");

        //If Text Box Length Is Is Greater Than 0 Go To The Last Index In The Text Box Substring And -1
        if(txtBox.value.length > 0)
                txtBox.value = txtBox.value.substring(0, txtBox.value.length - 1);

        //Reset Text Box if Equation Was Complete Or There Was An Error
        if(txtBox.value.includes('=') || txtBox.value.includes('E'))
                txtBox.value = "";
}

function CheckForNumber(val) {
        //Check Last Character For Numbers, If True Then Add An Operator
        let z = document.getElementById("txtBox").value.slice(-1);

        for(let item of numbers)
                if(z.includes(item))
                        document.getElementById("txtBox").value += val;
}