const express = require('express')
const app = express()

// set routing
app.use('/Raj', (req, res) => {
  res.send('Hello from Rajmahmmad!')
})

app.use('/Pankaj', (req, res) => {
  res.send('Hello from Pankaj!')
})

app.use('/Nishant', (req, res) => {
  res.send('Hello from Nishant!')
})

app.use('/mukund', (req, res) => {
  res.send('Hello from mukund!')
})

app.use('/sanat', (req, res) => {
  res.send('Hello from sanat!')
})

app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})



// Express.js middleware aur routes ko top-to-bottom order me execute karta hai.

// app.use('/') ek generic middleware hai, jo har incoming request path ko match kar leta hai.

// kyunki sabhi URLs / se start hoti hain.Toh Agar mai sabse pahle / likhunga toh wahi pe code execute ho jayega and usake niche wala code execute nahi hoga , Agar aap chahte ho ki niche wala code execute ho toh aap / ko niche likhe 





// THIS IS THE SOME BASIC INFORMATION 

// "express": "^5.2.1"

// Jo ye version diya hai usaka matalab 

/*

^5.2.1
Major->Minor->patch

^ ---> Isaka matalab ye hai ki suppose Agar koi company ne work kiya hai version 5 pe andAfter some time changed the version like version 6 , Toh use time pe bhi use company ka code work kare , Isiliye ^ used kiya jata hai


0.0.0  -> starting hota hai koi bhi version
1.0.0 -> Isaka matalab hai ki Major changed huaa hai
1.1.0 -> Isaka matalab hai ki Minor changed huaa hai 
1.2.0 -> Isaka matalab hai ki Minor changed huaa hai 
1.2.1 -> Isaka matalab hai ki patch changed huaa hai 
2.2.1 -> Isaka matalab hai ki Major changed huaa hai 

// Isi Tarika se version work karta hai


*/