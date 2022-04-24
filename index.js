function calculateAmount(){
    let bankBalance1= document.getElementById('cx1').value;
    let bankBalance2= document.getElementById('cx2').value;
    let bankBalance3= document.getElementById('cx3').value;

    let bankBalances= [bankBalance1, bankBalance2, bankBalance3];

    for(let i=0; i<bankBalances.length; i++){
        bankBalances[i]= Number(bankBalances[i]);
        if(bankBalances[i] > 200000)
        {
            bankBalances[i]= bankBalances[i]+ .1 * bankBalances[i]- (.002* bankBalances[i]);
        }
        else if(bankBalances[i] > 100000){
            bankBalances[i]= bankBalances[i]+ .05*bankBalances[i] -(.0005* bankBalances[i]);
        }
        else{
            bankBalances[i]= bankBalances[i] + bankBalances[i]* .03;
        }
    }

    let updatedBankBalance1= document.getElementById('updated-Bank-Balance1');
    let updatedBankBalance2= document.getElementById('updated-Bank-Balance2');
    let updatedBankBalance3= document.getElementById('updated-Bank-Balance3');


    updatedBankBalance1.value = bankBalances[0];
    updatedBankBalance2.value = bankBalances[1];
    updatedBankBalance3.value = bankBalances[2];
}


//OPTIMISED METHOD USING .getElementById:-

    /*function calculateAmount(){
        let input_balances = document.getElementsByClassName('input-balances');
        for(let i=0; i<input_balances.length; i++){
            console.log(input_balances[i]);
        }
    }*/