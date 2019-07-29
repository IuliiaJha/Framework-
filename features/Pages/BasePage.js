module.exports ={

go:function(site){
    return browser.get(site);
},

gettitle: function (){
    return browser.getTitle();
}

}