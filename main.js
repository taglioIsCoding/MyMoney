console.log("Start")

const APP_ID="tMOgm8UlkcmqcOpPbI27kFGMy2BMLPeWZ4zwyh33UzJRCKFZKZ8U9pkSjpx6"
const BASE_URI="https://api.worldtradingdata.com/api/v1/stock?symbol="

//https://api.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L&api_token=tMOgm8UlkcmqcOpPbI27kFGMy2BMLPeWZ4zwyh33UzJRCKFZKZ8U9pkSjpx6

//https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&sort=newest&api_token=demo
let infos = []
let data = []
let i = 0;
let c;
let date;
let dateObj = new Date();
let time;

function getDataUri()
{
  return `${BASE_URI}AAPL,RACE.MI&api_token=${APP_ID}`
}

function getStoricUri(){
  dateObj.setMonth(dateObj.getMonth()-1)
  date = dateObj.toISOString()
  date = date.substring(0,10)
  return `https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&sort=newest&date_from=${date}&api_token=${APP_ID}`
}

fetch(getDataUri())
      .then((response) => response.json())
      .then((body) =>{
      //  console.log(body.data)

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
          if (infos[0].earn > 0){
            document.getElementById("1").style.backgroundColor = "lightgreen";
          }
          else {
            document.getElementById("1").style.backgroundColor = "red";
          }

          document.getElementById("2").innerHTML = infos[1].name + ": " + infos[1].value;
          //document.getElementById("2").innerHTML = infos[1].name +  ": " + infos[1].value;
          if (infos[1].earn > 0){
            document.getElementById("2").style.backgroundColor = "lightgreen";
          }
          else {
            document.getElementById("2").style.backgroundColor = "red";
          }


          fetch(getStoricUri())
                .then((response) => response.json())
                .then((item) =>{


                  let test = Object.keys(item.history).map(function(key) {
                      return [key, item.history[key]];
                    });

                    console.log(test)

                  
                })

      })
