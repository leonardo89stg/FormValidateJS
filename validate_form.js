/* DevelopeBy Leonaro Gomes
Date :  2019/12/14
Country : Brazil 
contact:leo89stg@gmail.com
This  be validate  form of singup of Internet Saúde */

function displaynone() {


    document.getElementById('digi2').style.display = "none";
    document.getElementById('avisoerrocpf').style.display = "none";
}



function normalImg(x) {
    var str = document.getElementById("crm-inp").value;

    var strsli1 = str.slice(0, 8);
    var strsli2 = str.slice(8);

    console.log(strsli1, strsli2);




}


function tamanhopass(t) {
    var string = document.getElementById('ps1').value;
    var count = string.length;
    console.log((count));
    if (count < 8) {
        document.getElementById('avisochar').style.display = "block";

    } else { document.getElementById('avisochar').style.display = "none"; }

}

function comp(cmp) {
    var string1 = document.getElementById('ps1').value;
    var string2 = document.getElementById('ps2').value;

    if (string1 != string2) { document.getElementById('pasno').style.display = "block"; } else { document.getElementById('pasno').style.display = "none"; }

}

/*This using get  Card Flag: Master  Card , Visa , American Express*/

function getflag(flag) {

    var number_card = document.getElementById("numcard").value;
    var num_verify = number_card.length;

    if (num_verify < 5) {
        document.getElementById('digi').style.display = "block";
        console.log(num_verify)
    } else {
        document.getElementById('digi').style.display = "none";
        var strReverse = number_card.slice(0, 4);
        var strReverse2 = number_card.slice(4, 8);
        var strReverse3 = number_card.slice(8, 12);
        var strReverse4 = number_card.slice(12, 16);

        document.getElementById("numcard").value = "";

        var cardformathed = strReverse + "  " + strReverse2 + "  " + strReverse3 + "   " + strReverse4;

        document.getElementById("numcard").value = cardformathed;
        console.log(strReverse, strReverse2, strReverse3, strReverse4);
    }
    /*Now in this part  will get flag */
    var flag = number_card.substring(0, 1);
    var num_verify = number_card.length;



    if (flag == 4) {
        //  block of code to be executed if condition1 is true
        document.getElementById('digi').style.display = "none";
        document.getElementById('card').style.display = "block";
        document.getElementById('card').style.backgroundImage = "url('imagens/visa.png')";
        document.getElementById('card').style.backgroundSize = "cover";
        document.getElementById('card').style.backgroundRepeat = "no-repeat";
        document.getElementById('digi2').style.display = "none";
        //alert("visa");
    } else if (flag == 5) {
        //  block of code to be executed if the condition1 is false and condition2 is true

        document.getElementById('digi').style.display = "none";
        document.getElementById('card').style.display = "block";
        document.getElementById('card').style.backgroundImage = "url('imagens/master-card-icon-13.png')";
        document.getElementById('card').style.backgroundSize = "cover";
        document.getElementById('card').style.backgroundRepeat = "no-repeat";
        document.getElementById('digi2').style.display = "none";
        // alert("bandeira mastercard");
    } else {
        //  block of code to be executed if the condition1 is false and condition2 is false
        document.getElementById('card').style.display = "none";
        document.getElementById('digi2').style.display = "block";
        // alert("!!!!!!!!!!!!!");
    }
    document.getElementById('cardnumcad').value = "";
    document.getElementById('cardnumcad').value = number_card;
}