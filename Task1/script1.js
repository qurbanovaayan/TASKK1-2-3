//1. Tapşırıq
//Verilən ədədin tərsini tapan funksiya yaz.
function tersEded(eded){
    let ters=0;
    while(eded>0){
        let sonReqem=eded%10;
        ters=ters*10+sonReqem;
        eded=(eded-(eded%10))/10;
    }
    return ters;

}
console.log(tersEded(1234));