/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log(initNum, initUnit);
      if ((initNum === 'invalid number')&&(returnUnit === 'invalid input unit')){
        res.send('invalid number and unit');
      }else
      if (initNum === 'invalid number'){
        res.send('invalid number');
      } else 
      if (returnUnit === 'invalid input unit'){
        res.send('invalid input unit');//
      } else {
        var returnNum = convertHandler.convert(eval(initNum), initUnit);
        var string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.send({initNum, initUnit, returnNum, returnUnit, string});
      }
    });
    
};
