import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function findName(username) {
	if(username.indexOf('.com') >= 0 ) {
		username = username.slice(username.indexOf(".com") + 5);
	}
	if(username.indexOf(".org") >= 0) {
		username = username.slice(username.indexOf(".org") + 5);
	}
	if(username.indexOf(".ru") >= 0) {
		username = username.slice(username.indexOf(".ru") + 4);
	}
	if(username.indexOf("p1ai") >= 0) {
		username = username.slice(username.indexOf("p1ai") + 5);
	}
	if(username.indexOf("/") >= 0) {
		username = username.slice(0, username.indexOf('/'));
	}
	if(username.indexOf("?") >= 0) {
		username = username.slice(0, username.indexOf('?'));
	}
	if(username[0] === '@') {
		username = username.slice(1);
	} 
	return username;
}

app.get('/', (req, res) => {
	var username = req.query.username;
	username = findName(username);
	username = '@' + username;
	res.send(username);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});