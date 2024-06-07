function getData(data, getDataCB) {
    setTimeout(() => {
        console.log("data", data);
        if(getDataCB) 
            getDataCB();
    }, 3000);
}

getData(1, () => {
    getData(2);
})