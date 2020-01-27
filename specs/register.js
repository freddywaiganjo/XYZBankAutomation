// var RegistrationPage = require('./pages/registration-page.js');
var testData = require('../test-data.json');
var base_url = 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
var date_val = '01/01/1990'
// var date_regex = '(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d'
var btnManager = element(by.xpath('//button[@ng-click="manager()"]'));
var btnAddCustumer = element(by.xpath('//button[@ng-click="addCust()"]'));
var firstName = element(by.model('fName'));
var lastName = element(by.model('lName'));
var postCode = element(by.model('postCd')); 
var btnSubmit = element(by.xpath('//button[@type="submit"]')); 
var selectUser = element(by.model('custId'));  
var selectCurrency = element(by.xpath('//select[@id="currency"]'));  

describe('Have manager functionalities', function(){
    it('should allow manager to Add customer', function(){
        console.log('Adding Customer:::::')
        browser.driver.manage().window().maximize();
        browser.get(base_url);
        // browser.manage().timeouts().implicitlyWait(60000);
        btnManager.click();
        btnAddCustumer.click();
        firstName.sendKeys('Alex');
        lastName.sendKeys('Waiganjo');
        postCode.sendKeys('20241');
        btnSubmit.click();
        var popOkbutton = element(browser.switchTo().alert().accept());
    }),

    it('add the new customer to list of customers', function(){
        console.log('Checking customer list:::::')
        element(by.xpath('//button[@ng-click="showCust()"]'));
        var confirmUser = element(by.xpath('//tbody[contains(text(),"Alex")]')).click();  
        expect(confirmUser.isPresent()).toBe(true); 

    }),

    it('should allow manager to Open account for customer', function(){
        console.log('Opening Account:::::')
        // btnManager.click();
        element(by.xpath('//button[@ng-click="addCust()"]'));
        // btnOpenAccount.click();
        selectUser.click();
        element(by.xpath('//div[contains(text(),"Alex")]')).click();
        selectCurrency.click();
        element(by.xpath('//div[contains(text(),"Pound")]')).click();
        btnSubmit.click();
        var popOkbutton = element(browser.switchTo().alert().accept());
        // expect(errorSpan.isPresent()).toBe(true); 
        // expect(btnSubmit.isPresent()).toBe(true); 

    })
})

// ---------------------------------------------Customer section----------------------------------


describe('Customer functions', function(){
    it('should allow new customer to login', function(){
        console.log('Adding Customer:::::')
        element(by.xpath('//button[@ng-click="home()"]')).click();
        var btnCustomerLogin = element(by.xpath('//button[@ng-click="customer()"]'));
        btnCustomerLogin.click();
        element(by.xpath('//button[@ng-click="custId()"]')).click();
        element(by.xpath('//div[contains(text(),"Alex")]')).click();
        btnSubmit.click();
    }),

    it('should display customer entered names', function(){
        console.log('Opening Account:::::')
       custName = element(by.xpath('//div[@class="borderM box padT20 ng-scope"]'));
       var enteredName = 'Alex Waiganjo'
        expect(custName).toMatch(enteredName);
    }),

    it('should show zero balance for a new customer', function(){
        console.log('Checking Balance:::::')
      var custBal = element(by.xpath('//div[@ng-hide="noAccount"][1]'));
      var openingBal ='Balance: 0';
        expect(custBal).toMatch(openingBal);
    }),

    it('should allow customer to deposit', function(){
        console.log('Depositing::::::')
        element(by.xpath('//button[@ng-click="home()"]')).click();
        btnCustomerLogin.click();
        element(by.xpath('//button[@ng-click="custId()"]')).click();
        element(by.xpath('//div[contains(text(),"Alex")]')).click();
        btnSubmit.click();
        var inputAmount = element(by.model('amount'));
        var amountt = '2000';
        inputAmount.sendKeys(amountt);
        btnSubmit.click();
    }),

    it('should allow customer to withdraw money', function(){
        console.log('Withdrawing money::::::::::')
        element(by.xpath('//button[@ng-click="withdrawl()"]')).click();
        element(by.xpath('//button[@ng-click="custId()"]')).click();
        element(by.xpath('//div[contains(text(),"Alex")]')).click();
        btnSubmit.click();
        var inputAmount = element(by.model('amount'));
        var amountt = '1000';
        inputAmount.sendKeys(amountt);
        btnSubmit.click();
        var custBall = element(by.xpath('//div[@ng-hide="noAccount"][1]'));
        var availableBal ='Balance: 1000';
        //Perform calculation here
        expect(custBall).toMatch(availableBal);

    })
})