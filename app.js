var price = prompt("Prašome įvesti prekės kainą");
var check = Number(price);
var delivery = confirm("Ar reikalingas prekės pristatymas į namus?");
var deliveryNotification = "Pristatymas: 2.00 €";
var newLine = "\r\n";
var deliveryFee = 2;
var total = Number(price) + Number(deliveryFee);



while(price <=0 || isNaN(check))
{
    var price = prompt("Prašome įvesti prekės kainą")
    var check = Number(price)
}

if(delivery == true)
{
    var address = prompt("Į kurį miestą pristatyti?")
    alert("Prekės kaina: " + price + " €" + newLine + deliveryNotification + newLine + "Iš viso: " + total + " €" + newLine + "Prekę pristatysime į " + address + " per 1-3 dienas.")    
}
else
{alert("Prekės kaina: " + price + " €" + newLine + "Prekę galite atsiimti nemokamai Vilniuje adresu: Gedimino pr. 1a")
}
