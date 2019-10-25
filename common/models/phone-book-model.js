'use strict';

module.exports = function (Phonebookmodel) {

  Phonebookmodel.validatesLengthOf('name', { min: 3, message: { min: 'name must more than 3 Character' } });
  Phonebookmodel.validatesUniquenessOf('phoneNumber', { message: 'this number is Already Exist' });

  Phonebookmodel.getName = function(name, cb) {
    Phonebookmodel.findOne({where: {name:name}},(err,value)=>{
      let response = value
        cb(null, response);
    })
    
  };

  Phonebookmodel.remoteMethod (
        'getName',
        {
          http: {path: '/getname/:name', verb: 'get'},
          accepts: {arg: 'name', type: 'string', http: { source: 'path' } },
          returns: {arg:'data'}
        }
    );
}


