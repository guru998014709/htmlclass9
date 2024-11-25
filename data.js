setInterval(() => {

    let dt =new date();
    let ct=dt.tolocaletimestring();
    document.querySelector('.ct').innerHTML=ct;
    
}, 1000)
