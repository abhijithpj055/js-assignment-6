// newDate()
const currentDate = new Date();
  console.log("Current Date :",currentDate);


  // 2. Date.parse();
let date = "january 10,2024"
const pDate = Date.parse(date);
  console.log("Parsed Date :",pDate);

  // 3. Date.UTC()
const utcDate = Date.UTC(2024, 0, 4);
 console.log('UTC Date:', new Date(utcDate));

 // 4. getDate()
const d = new Date().getDate();
 console.log('Date :',d);

// 5. getMonth()
const m = new Date();
let month = m.getMonth();
console.log('Month : ',m);

//6.getFullYear()
const f=new Date();
let year= f.getFullYear();
console.log('Fullyear : ',f);


//7.getDay()
const Day = new Date().getDay();
 console.log('Day :',Day);

// 8. getHours()
const hrs = new Date().getHours();
 console.log('Hour :',hrs);

 // 9. getMinutes()
const min = new Date().getMinutes();
 console.log('Minutes :',min);

 // 10. getSeconds()
const sec = new Date().getSeconds();
 console.log('Seconds :',sec);

 // 11. getMilliSeconds()
const msec = new Date().getMilliseconds();
 console.log('MilliSeconds :',msec); 

//12.setDate
const dte = new Date();
dte.setDate(15);
console.log('Date: ',dte);

//13.setMonth()
const smonth = new Date();
smonth.setMonth(4);
console.log('Month: ',smonth);

//14.setFullYear()
const sf = new Date();
sf.setFullYear(2021);
console.log('Fullyear: ',sf);

//15.setHours()
const sh = new Date();
sh.setHours(15);
console.log('Hours: ',sh);

//16.setMinutes()
const sm = new Date();
sm.setMinutes(15);
console.log('Minutes: ',sm);

//17.setSeconds()
const ss = new Date();
ss.setDate(50);
console.log('Second: ',ss);

//18.setMilliseconds()
const sms = new Date();
sms.setDate(150);
console.log('Milliseconds: ',sms);

//19.toDateString()
const dstring = new Date().toDateString();
 console.log('Date String :', dstring);

// 20.toLocalDateString()
const ldstring = new Date().toLocaleDateString();
 console.log('Locale Date String :', ldstring);

// 21.toTimeString()
const tstring = new Date().toTimeString();
 console.log('Time String:', tstring);

 // 22.toLocaleTimeString()
const ltstring = new Date().toLocaleTimeString();
 console.log('Locale Time String :',ltstring);



 //Utc date methods

 const udate = new Date().getUTCDate();
 console.log('utc Date :',udate);

// 24.getUTCday()
const day = new Date().getUTCDay();
 console.log('utc Day :',day);

// 25.getUTCfullYears()
const fyear = new Date().getUTCFullYear();
 console.log('utc FullYear :', fyear); 

// 26.getUTChours()
const utcHours = new Date().getUTCHours();
 console.log('UTC Hours :',utcHours); 

// 27.getUTCminutes()
const minutes = new Date().getUTCMinutes();
 console.log('utc Minutes :',minutes); 

// 28.getUTCseconds()
const seconds = new Date().getUTCSeconds();
 console.log('utc Seconds :',seconds); 

// 29.getUTCmilliSeconds()
const milliseconds = new Date().getUTCMilliseconds();
 console.log('utc milliseconds :',milliseconds);

// 30.setUTCdate()
const utcdate = new Date().setUTCDate(20);
 console.log('utc Date:',new Date(utcdate));

// 31.setUTCfullYear()
const fullyear = new Date().setUTCFullYear(2000);
 console.log('utc fullyear :',new Date(fullyear));

// 32.setUTCHours()
const utchours = new Date().setUTCHours(7);
 console.log('utc Hours :',new Date(utchours));
 
// 33.setUTCminutes()
const utcminutes = new Date().setUTCMinutes(20);
 console.log('utc Minutes:',new Date(utcminutes)); 

// 34.setUTCseconds()
const utcseconds = new Date().setUTCSeconds(45)
 console.log('utc Seconds :',new Date(utcseconds));

// 35.setUTCMilliSeconds()
const utcmilliseconds = new Date().setUTCMilliseconds(192);
 console.log('utc MilliSeconds :',new Date(utcmilliseconds));




