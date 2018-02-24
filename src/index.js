module.exports = function getZerosCount(number) {
    var fives = 0;


    for(var i = 1; i <= number; i++){
        if(i%5 === 0){
            var yourNumber = i;
            do{
                fives+=1;
                yourNumber/=5;
            } while(yourNumber % 5 === 0)
        }

    }
    return fives

};
