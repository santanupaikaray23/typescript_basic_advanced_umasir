function ShowData(data: {title:string, text:string, name:string, city:string}){
    console.log(data.title+ ' ' +data.text+ ' ' +data.name)

}

let myData = {title:'Angular',text:'Javascript framework', name:'santanu', city:'Bhubaneswar'}
ShowData(myData)

interface IUserData{

}