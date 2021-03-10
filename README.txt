Short URL program details

Libraries used: 
1)Express.js
2)ejs
3)Mongoose 
4)shortid

Description: 
Express.js server was used to implement this project along with Mongodb(cloud) as backend data storage. ejs was used to create views so that
HTML and backend could work togeather to send data to browser. Used Bootstrap library for better display of UI. 
For creating short version of URL, "shortid" library was used to shrink the url text to randomly generated shorter text. 
Information like original URL, new short URL is stored in MongoDB. APIs have been implemented inorder to send and get data from Database.
Screenshot of Database schema are stored in "screenshot" folder of project. 


To install dependencies:
npm i express mongoose ejs shortid
npm i --save-dev nodemon


To run the project:
npm run devStart