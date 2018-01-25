# MySQLwithNode.js


![screenshot 1 mysql database](https://user-images.githubusercontent.com/30198872/35378263-2fef00ac-0180-11e8-9019-58f18b01e16f.png)
![screenshot 2 mysql database](https://user-images.githubusercontent.com/30198872/35378269-3263dde4-0180-11e8-8405-115750a07f38.png)
![screenshot 3 mysql database](https://user-images.githubusercontent.com/30198872/35378271-33f6b19a-0180-11e8-8a65-09e913e0170a.png)
![screenshot 4 node js](https://user-images.githubusercontent.com/30198872/35378273-35a06644-0180-11e8-99d0-aa9040bd1286.png)
![screenshot 5 node js](https://user-images.githubusercontent.com/30198872/35378277-378aca30-0180-11e8-9d6c-76a55fcdc49c.png)
![screenshot 6 node js](https://user-images.githubusercontent.com/30198872/35378279-398c1fb4-0180-11e8-9709-b51c5d05ae62.png)
![screenshot 7 node js](https://user-images.githubusercontent.com/30198872/35378281-3b7333f8-0180-11e8-98ba-872a15a80a28.png)
![screenshot 8 node js](https://user-images.githubusercontent.com/30198872/35378286-3d56cdce-0180-11e8-9cfa-76ec3207888a.png)

______________________________________________________________________

LIRI Node App supplies information to user requests through the interface of
	a command line in node.js

LIRI supplies detailed and extensive information on items with just short calls typed in 
	by the user.  

There are four categories of information requests:
	1.  my-tweets
    2.  spotify-this-song
    3.  movie-this
	4.  do-what-it-says

From the command line in node.js, the user types in "node liri.js" to start all requests for information.  After "node liri.js", the user types in one of the four categories just mentioned.  	
For "my-tweets" and "do-what-it-says", this completes the request and the user hits enter to receive the 
	results.  For "spotify-this-song", the user adds the name of the song he is interested in enclosed in quotation marks.  Then he enters the request.  For "movie-this", the user adds the name of a movie he is interested in enclosed in quotation marks.  Then he hits the enter button. 

my-tweets will output the last 20 tweets of my twitter account along with the dates they were written.
spotify-this-song will list five songs along with a preview link, artist, and album.
movie-this will list the title, year, IMDB rating, Rotten Tomatoes Rating, country, language, plot, and 
	actors of the movie.
do-what-it-says will read a file and take information from that file to initiate a request for 
	information on a song.

The information output to the screen will also be saved to a (log) file.

To run the program you will need the npm packages of fs (in node), twitter, spotify, and request.  You can install twitter with the command line entry [npm install twitter].  You can install request with the command line entry [npm install request].  You can install spotify with the command line entry [npm install --save node-spotify-api].

I kept my twitter and spotify api keys private to my computer by not having them posted to github with special file management.  To run this program, the user will need to supply their own api keys.



![GitHub Logo](/images/"Screenshot 1 (mySQL database).png")
