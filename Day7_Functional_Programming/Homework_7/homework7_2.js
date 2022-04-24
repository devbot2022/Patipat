//homework 7_2

axios.get(`https://corona.lmao.ninja/v2/countries/`).then(function(response) {

    debugger;
    //API
    let allCovidData = response.data;  //array object
    console.log(allCovidData);

    //API test todayRecovered
    console.log(allCovidData[0].todayRecovered);

    //callback Function Sum
    const callbackFunction = (sum, obj) => {
        return sum + obj.todayRecovered
    };

    //Sum_TodayRecovered_all_country   use reduce
    const Sum_todayRecovered_all_country = allCovidData.reduce(callbackFunction, 0)   
    console.log(Sum_todayRecovered_all_country);


    //Filter Result_Country_Filter    use filter death<10 
    const Result_Country_Filter = allCovidData
        .filter(obj => obj.todayDeaths < 10 && obj.population > 100000000)
        .map(obj => obj.country);

    console.log(Result_Country_Filter);
}); 