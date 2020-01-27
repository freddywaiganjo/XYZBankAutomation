var ElementLocator = function(){
    var inputFirstName = element(by.model('fName'));
    var inputLastName = element(by.model('lName'));
};

module.exports = new ElementLocator();