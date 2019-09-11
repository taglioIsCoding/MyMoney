console.log("Start")

const APP_ID="tMOgm8UlkcmqcOpPbI27kFGMy2BMLPeWZ4zwyh33UzJRCKFZKZ8U9pkSjpx6"
const BASE_URI="https://api.worldtradingdata.com/api/v1/stock?symbol="

//https://api.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L&api_token=tMOgm8UlkcmqcOpPbI27kFGMy2BMLPeWZ4zwyh33UzJRCKFZKZ8U9pkSjpx6

let infos = []


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
        })
        console.log(infos)



      })
