//homework7_3  

let result = '';

axios.get("homework1-4.json").then(function(response){
    //set Data API
    let apiData = response.data;
    console.log(apiData);

    //male filter from api data
    let maleFilter = apiData.filter(obj => obj.gender === "male")
    console.log(maleFilter);

    //male name filter from male
    let maleNameFilter = maleFilter.filter(f => f.name)
    console.log(maleNameFilter);

    //male friends(>=2) filter  form male filter
    let maleFriendFilter = maleFilter.filter(obj => obj.friends.length >= 2)
    console.log(maleFriendFilter);


    //Map for Filter Request details
    let mapToDetails = maleFriendFilter.map(obj => {
        return{
            name: obj.name, 
            gender: obj.gender, 
            company: obj.company, 
            email: obj.email, 
            friends: obj.friends,
            //reduce_balance money everybody  (-10X)
            balance: parseFloat(obj.balance.replace("$","").replace(",","")/10).toFixed(2).toString()
        }   
    })
    console.log(mapToDetails);
   
    //Set bootstrap table
    result += `<table class="table table-success table-striped">  
    <thead><tr>
    <th scope="col">name</th>
    <th scope="col">gender</th>
    <th scope="col">company</th>
    <th scope="col">email</th>
    <th scope="col">friends</th>
    <th scope="col">balance</th>
    </tr></thead><tbody><tr>`;

    //filter >=2 friends for male
    let maleFriendsData = (maleFriends)=>{
        let result='';
        for (let i=0; i<mapToDetails[maleFriends].friends.length;i++){
            result +=`<li>${mapToDetails[maleFriends].friends[i].name}</li>`;
        }
        return `<ol>`+result+`</ol>`;
    }


    //Loop mapToDetails All  show 6 column in table bootstrap
    for (i in mapToDetails) {
        console.log(i);

        //Col 1  
        result += `<th scope="row">${mapToDetails[i].name}</th>`;

        //Col 2
        result += `<td>${mapToDetails[i].gender}</td>`;

        //Col 3
        result += `<td>${mapToDetails[i].company}</td>`;

        //Col 4
        result += `<td>${mapToDetails[i].email}</td>`;

         //Col 5
        result += `<td><ul>${maleFriendsData(i)}</ul></td>`;

        //Col 6
        result += `<td>$${mapToDetails[i].balance}</td>`;

        //End 
        result += `</tr><tr>`;
    }

    //Show result in "id = display"
    result += `</tr></tbody></table>`;
    document.getElementById("display").innerHTML = result;
});