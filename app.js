let form=document.getElementById('form');
let table=document.getElementById('table');
let donationArray=[];

function Donation(name,amont,age ){
    this.name=name;
    this.amont=amont;
    this.age=age;

donationArray.push(this);
addStorge()
}
function getRndom() {
    return Math.floor(Math.random() * (60 - 20 + 1) ) + 20;
  }
 

  Donation.prototype.render=function(){
    let trElm=document.createElement('tr');
    trElm.appendChild(table);
 
   
   for(i=0;i<donationArray.length;i++){
    let tdElm=document.createElement('td');
    tdElm.appendChild(trElm)
    tdElm.textContent=donationArray[i];
   }
   



  }
  console.log(donationArray);
 
  form.addEventListener('submit',addNew);
  function addNew(event){
    event.preventDefault();
    let nameUser =event.target.name.value;
    let amontUser=event.target.amont.value;
    let userAge=getRndom();
   
    new Donation(nameUser,amontUser,userAge);



  }
  function addStorge(){
   let stringArray=  JSON.stringify(donationArray);
      console.log(stringArray);
      localStorage.setItem('acount',stringArray);
  }
  function getStorge(){
      let sotrgeData=localStorage.getItem('acount')
      if (sotrgeData !==null){
          for(let i=0;i>sotrgeData.length;i++){
          //  name,amont,age
          new Donation(sotrgeData[i].name,sotrgeData[i].amont,sotrgeData[i].age);
          }

      }
  }
  getStorge();
  function claerAll(){
      localStorage.clear;
      
  }