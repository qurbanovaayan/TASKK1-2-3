//3. Tapşırıq
//1-dən verilən ədədə qədər olan cüt ədədlərin cəmini hesablayan funksiya yaz.
function cutEdedCemi(eded) {
    let cem = 0;
    for(i=1;i<=eded;i++){
        if(i%2===0){
            cem+=i;
        }
    }
    return cem;
}
console.log (cutEdedCemi(10));