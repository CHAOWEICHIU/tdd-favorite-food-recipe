require('./api/models/db.js')


const express    	= require('express'),
      bodyParser 	= require('body-parser'),
      mongoose 		= require('mongoose'),
      routes 		= require('./api/routes'),
      app     		= express(),
      PORT    		= process.env.PORT || 3000





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/api', routes)

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})