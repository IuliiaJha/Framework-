module.exports ={
    elementsCustomerLoginPage: {
        NameDropdown: element(by.id('userSelect')),
        HarryPotter: element(by.cssContainingText('option','Harry Potter')),
        loginButton: element(by.className('btn btn-default'))
    }

}
