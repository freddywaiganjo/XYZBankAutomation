var RegistrationPage = function(){
    var firstName =element(by.model('userName'));
    this.setFirstName = function(fname){
        firstName.sendKeys(fname)
    };

    var lastName =element(by.model('userFullName'));
    this.setLastName = function(lname){
        lastName.sendKeys(lname)
    };

    var idNumber =element(by.model('userNationalId'));
    this.setIdNumber = function(idno){
        idNumber.sendKeys(idno)
    };

    var usrEmail =element(by.model('userEmail'));
    this.setuserEmail = function(mail){
        usrEmail.sendKeys(mail)
    };

    var usrPhone =element(by.model('userPhone'));
    this.setUserPhone = function(phone){
        usrPhone.sendKeys(phone)
    };

    var btnSubmit =element(by.xpath('//button[@ng-click="updSignUpDetails()"]'));
    this.setbtnSubmit = function(){
        btnSubmit.click()
    };

    var btnSignUp =element(by.xpath('//a[contains(text(),"Sign up")]'));
    this.setbtnSignUp = function(){
        btnSignUp.click()
    };
};

module.exports = new RegistrationPage();