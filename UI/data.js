function loadJSON(callback){
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET','data/CityOfTheAncients.json',true);
    xobj.onreadystatechange = function(){
        if(xobj.readyState == 4 && xobj.status == '200')
            callback(xobj.responseText);
    }
    xobj.send(null);
}

loadJSON((data) => window.data = data);