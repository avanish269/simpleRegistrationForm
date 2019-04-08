# Registration Form  
Using Node.js and Express Framework, I have built a simple registration form with simple HTTP authentication with MongoDB database.  
This app consist of view that lists successful registrations and Bootstrap is used for styling.  
>npm install  

Run the above command in the project root folder to install all the dependencies.  
Run the following command and then go to [localhost:8080](http://localhost:8080)  
>npm run watch  

To access the list of all registrations edit the file named user.htpasswd and in it enter your username and password in format <username\>:<password\>.(By default abc:xyz)   
Then go to [localhost:8080/registrations](http://localhost:8080/registrations)