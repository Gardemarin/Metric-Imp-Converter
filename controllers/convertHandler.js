/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = 'invalid number';
    //Checks is it only number or only letters
    input.replace(/^[A-Za-z]+$|^((0*(\.0*[1-9]+\d*))|((0*[1-9]+\d*)(\.\d+)?))(\/((0*(\.0*[1-9]+\d*))|((0*[1-9]+\d*)(\.\d+)?)))?$/, (...values) => {
      result = isNaN(values[0])? 1 : values[0];
    });
    if (result === 'invalid number'){
    //Checks is it a correct value with unit.
      input.replace(/((0*(\.0*[1-9]+\d*))|((0*[1-9]+\d*)(\.\d+)?))(\/((0*(\.0*[1-9]+\d*))|((0*[1-9]+\d*)(\.\d+)?)))?([A-Za-z]+)/, (...values) => {  

        if (values[15] === 0){
          result = values[1] + (values[7]||""); 
        } else {
          result = 'invalid number';
        }
      });
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result = input;
    input.replace(/([A-Za-z]+)/, (...values) => {
      result =  values[1];
    });
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
          result = "l";
          break;
      case 'lbs':
          result = "kg";
          break;
      case 'mi':
          result = "km";
          break;
      case 'l':
          result = "gal";
          break;
      case 'kg':
          result = "lbs";
          break;
      case 'km':
          result = "mi";
          break;  
      default:
          result = "invalid input unit";
          break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
   
    switch (unit) {
      case 'l':
          result = "L";
          break;
      default:
        result = unit;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    console.log(initNum);
    let result;
    switch(initUnit.toLowerCase()){
      case 'gal':
        {
        result = initNum * galToL;
        break;
      } 
      case 'l': {
        result = initNum / galToL;
        break;
      }
      case 'lbs':
        {
        result = initNum * lbsToKg;
        break;
      } 
      case 'kg': {
        result = initNum / lbsToKg;
        break;
      }
      case 'mi':
        {
        result = initNum * miToKm;
        break;
      } 
      case 'km': {
        result = initNum / miToKm;
        break;
      }        
    }
  
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    switch(initUnit.toLowerCase()){
      case 'gal':
        {
        result = `${initNum} gallons converts to ${returnNum} liters`;
        break;
      } 
      case 'l': {
        result = `${initNum} liters converts to ${returnNum} gallons`;
        break;
      }
      case 'lbs':
        {
        result = `${initNum} pounds converts to ${returnNum} kilograms`;
        break;
      } 
      case 'kg': {
        result = `${initNum} kilograms converts to ${returnNum} pounds`;
        break;
      }
      case 'mi':
        {
        result = `${initNum} miles converts to ${returnNum} kilometers`;
        break;
      } 
      case 'km': {
        result = `${initNum} kilometers converts to ${returnNum} miles`;
        break;
      }        
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
