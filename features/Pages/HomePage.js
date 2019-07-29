module.exports ={
    elementsHomePage: {
        CustomerLoginButton: element(by.buttonText('Customer Login')),
        ManagerLoginButton : element(by.buttonText('Bank Manager Login'))
    },

    goToCustomerLogin: function(){

    var elements = this.elementsHomePage;
    elements.CustomerLoginButton.click();
    }, 

    goToManagerLogin: function(){

        this.elementsHomePage.ManagerLoginButton.click()
    }
 
}