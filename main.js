console.log("Start")

const APP_ID="tMOgm8UlkcmqcOpPbI27kFGMy2BMLPeWZ4zwyh33UzJRCKFZKZ8U9pkSjpx6"
const BASE_URI="https://api.worldtradingdata.com/api/v1/stock?symbol="

//https://api.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L&api_token=tMOgm8UlkcmqcOpPbI27kFGMy2BMLPeWZ4zwyh33UzJRCKFZKZ8U9pkSjpx6

let infos = []
let data = []
let i = 0;
let c = 0;

function getDataUri()
{
  return `${BASE_URI}AAPL,RACE.MI&api_token=${APP_ID}`
}

fetch(getDataUri())
      .then((response) => response.json())
      .then((body) =>{
        console.log(body.data)

        body.data.forEach(q => {
          let info = {
             name: q.name,
             value: q.price,
             max: q.day_high,
             min: q.day_low,
             earn: q.day_change,
          }
          infos.push(info)
          i++;
        })

//
          document.getElementById("1").innerHTML = infos[0].name + ": " + infos[0].value;
          if (infos[0].earn >0){
            document.getElementById("1").style.backgroundColor = "lightgreen";
          }
          else {
            document.getElementById("1").style.backgroundColor = "lightred";
          }

          document.getElementById("2").innerHTML = infos[1].name + ": " + infos[1].value;
          //document.getElementById("2").innerHTML = infos[1].name +  ": " + infos[1].value;
          if (infos[1].earn >1){
            document.getElementById("2").style.backgroundColor = "lightgreen";
          }
          else {
            document.getElementById("2").style.backgroundColor = "red";
          }


        console.log(infos[1])
        console.log(i)
      })
