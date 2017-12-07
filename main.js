function calculateChange(){
    var amountDue       = parseFloat(document.getElementById("amount-due").value);
    var amountReceived  = parseFloat(document.getElementById("amount-received").value);
    
    var balancelResult    = document.getElementById("balance-output");
    
    var fiftyResult     = document.getElementById("50-dollars-output");
    var twentyResult    = document.getElementById("20-dollars-output");
    var tenResult       = document.getElementById("10-dollars-output");
    var fiveResult      = document.getElementById("5-dollars-output");
    var twoResult       = document.getElementById("2-dollars-output");
    var oneResult       = document.getElementById("1-dollars-output");

    var quarterResult   = document.getElementById("quarters-output");
    var dimResult       = document.getElementById("dimes-output");
    var nickleResult    = document.getElementById("nickels-output");
    var pennieResult    = document.getElementById("pennies-output");
  
    var totalResult = (amountReceived - amountDue) * 100.0;
    
    balancelResult.textContent  = (amountReceived - amountDue).toFixed(2);

    fiftyResult.textContent  = parseInt(totalResult/ 5000);
    totalResult %= 5000;
    
    twentyResult.textContent  = parseInt(totalResult/ 2000);
    totalResult %= 2000;

    tenResult.textContent  = parseInt(totalResult/ 1000);
    //console.log(totalResult + 'nikleResultNow');
    totalResult %= 1000;

    fiveResult.textContent  = parseInt(totalResult/ 500);
    totalResult %= 500;

    twoResult.textContent  = parseInt(totalResult/ 200);
    totalResult %= 200

    oneResult.textContent  = parseInt(totalResult/ 100);
    totalResult %= 100;
    
    var quarterResultNow = parseInt(totalResult/ 25);
    //quarterResult.textContent = parseInt(totalResult/ 25);
    totalResult %= 25;
    for (let q=0; q < quarterResultNow; q++){
      let img = document.createElement('img')
      img.setAttribute('src', 'https://www.usmint.gov/wordpress/wp-content/uploads/2017/01/2017-america-the-beautiful-quarters-coin-proof-obverse-768x768.jpg')
      img.setAttribute('height', '50px' );
      quarterResult.appendChild(img);
    };

    var dimResultNow = parseInt(totalResult/ 10);
    //dimResult.textContent  = parseInt(totalResult/ 10);
    totalResult %= 10;
    for (let d=0; d < dimResultNow; d++){
      let img = document.createElement('img')
      img.setAttribute('src', 'https://raritetus.cdnvideo.ru/storage/coins/18677/revers/big.jpg?1502114340')
      img.setAttribute('height', '50px' );
      dimResult.appendChild(img);
    };
  
    var nickleResultNow = parseInt(totalResult/ 5);
    //nickleResult.textContent  = parseInt(totalResult/ 5);
    totalResult %= 5;
    for (let n=0; n < nickleResultNow; n++){
      let img = document.createElement('img')
      img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/2/23/US_Nickel_Reverse.jpg')
      img.setAttribute('height', '50px' );
      nickleResult.appendChild(img);
    };
    
    //pennieResult.textContent  = Math.round(totalResult);
    var pennieResultNow  = Math.round(totalResult);
    for (let p=0; p < pennieResultNow; p++){
      let img = document.createElement('img')
      img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/US_One_Cent_Rev.png/1024px-US_One_Cent_Rev.png')
      img.setAttribute('height', '50px' );
      pennieResult.appendChild(img);
    };
    
  };
  //calculateChange();
  
  var calButton = document.getElementById("calculate-change");
  calButton.addEventListener("click", calculateChange);
  
  /*----Money Convertion:
    $1= 4 Quarters = 10 Dimes = 20 Nickles = 100 Pennies
    1 Dime    = 2 Nickles = 10 Pennies
    1 Quarter = 2.5 Dimes = 5 Nickles = 25 Pennies
    1 Nickle  = 5 Pennies
    Example:
    $1.01
  */