//2. Tapşırıq
//Verilən ədədin neçə rəqəmdən ibarət olduğunu tapan funksiya yaz.
function reqemSayi(eded){
    let say = 0;
while(eded > 0){
    eded = (eded - (eded % 10)) / 10;
    say++;
}
    return say;
}

console.log(reqemSayi(12345)); 