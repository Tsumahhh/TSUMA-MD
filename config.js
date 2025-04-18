const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/Tsumahhh/TSUMA-WB";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "254743399594" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_29_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUxLFxuICAgICAgICA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ3RINjBhRi95WTV5dDdnR2Q2a2RJbTlVU3dzMVZSdEU5SElsYkROL2dWQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZTRnc3BkRkZSQXlUclNNN1JVckE4QVwiLFxuICBcInBob25lSWRcIjogXCIwY2YyNGRjZi02NGMxLTQ0NTItYmEwMi03OGM4M2U4Zjg2OWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTExLFxuICAgICAgMjMxLFxuICAgICAgMTE3LFxuICAgICAgMTk5LFxuICAgICAgMzMsXG4gICAgICAxNzYsXG4gICAgICAxODUsXG4gICAgICA5NSxcbiAgICAgIDE5OSxcbiAgICAgIDM1LFxuICAgICAgMTc3LFxuICAgICAgMTUsXG4gICAgICA5NSxcbiAgICAgIDk2LFxuICAgICAgMTUyLFxuICAgICAgNzMsXG4gICAgICAyNDksXG4gICAgICAxODksXG4gICAgICAyNVxuICAgIF1cbigfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDEzMyxcbiAgICAgIDE1MixcbiAgICAgIDgwLFxuICAgICAgNDIsXG4gICAgICA4MSxcbiAgICAgIDIwNyxcbiAgICAgIDEyMSxcbiAgICAgIDIzNixcbiAgICAgIDcsXG4gICAgICAxMDMsXG4gICAgICA3NixcbiAgICAgIDExNCxcbiAgICAgIDE1MCxcbiAgICAgIDM2LFxuICAgICAgMTUxLFxuICAgICAgMjIzLFxuICAgICAgOTcsXG4gICAgICAyNDQsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVFLUU1WRUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MzM5OTU5NDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwNTQ0OTkxODQ2NTgzOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xMDA1UUJFUDN1aU1BR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTmkvVzVDelFnNmlndmVvSzNjdEFtQ2dDQWxEZWRwVDRwek40T2JIcGlqST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmNTlrL2haV25Dakg1RnlGWkdLTmRsZG5iZURlYStzRG5OZUZFUk1nOUxHRDBYN3kzbFhEb0MwS09zemZvS0RxamZTQmpIZGszSkJodW5PZDRkT3dDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5VkgrWTFMZS96ZmlvLzNQbXMzajdQL1NCRnRwZHE1YWg2YkJRV3NpdUszcWdDcExvNzZYbXVlQ3ZsR2c2NTRNMCsyRDU1Z2UyQjNGcnBwbnMrL1dBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDMzOTk1OTQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTc1NzQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlRFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVEUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyeFBFRGcwZWFON1gvRVhtaUl4V3kxWlNuRlR1M09lZlc4VlhKQ1B4bVJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxMTc0NTEyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDgzNjk3NTU4MVwifSIKfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
