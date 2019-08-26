Read Me:

Team Name: Crazy Hacker

Problem assigned:
Gallery page for photos (have photo size allowed configurable)
-          Use compression techniques for the photos uplod and viewer
-          Group Chat page for the consumers

Proposed Solution:
1. Web Application:
1.2 Image Upload
1.2.1 : Screen:
It has a screen that is authorised only for Administrator. It has a screen (Upload Image) screen to upload. 
Configuration for the upload size is specified in the app-master on the database. App_master is a table on DB which has the parameters required for the 
application. The upload screen, when the file is uploaded, will validate the size against the size on App_Master.

1.2.2: Save Image to DB:
Image is converted to base64. It is then compressed. The DB will have base64 format of original image as well as the compressed image. 
Intent is to show the compressed version when the view of image gallery. When a particular image is selected for view, the original size image will be used.
Each upload will have a FileID as a unique identifier

Example:
Original image : 8 KB
Compressed image : 2 KB 

1.3 Rest Service:
1.3.1 Get all images	
	Returns List of FileID and Compressed image (base 64 format)
1.3.2 Get Image using FileID
    Return Original image (base 64 format)


2. Mobile Application:
	Mobile App to consume Rest API for
		2.1 Get All images - Where a web app will return base64 image list of Compressed version and render it in a grid.
		2.2 On Click of a particular image, a rest API request will be initiated with the FileID . The web app will return the original image in base64 format
		
		
Completed Solution:
1. Java Service:
- Image upload service
- Image is compressed and stored in DB as Base64 component
2. Mobile App:
- Render picture from Base64 format

Folder structure details:
1. src - has the source of web application
2. sample - Data sample
3. mobile_src - has the source of mobile app
4. dbscript - has the DB script used 

TechStack Used:
Spring Boot - Rest API
JDK 8
React Native
Oracle DB
