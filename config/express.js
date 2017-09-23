// create new file ./config/express.js
//จัดการเกี่ยวกับexpress
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';

module.exports = function() {
const app = express();

if (process.env.NODE_ENV === "development") {
app.use(morgan('dev'));
}
else {
app.use(compression());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
       extended: true
}));

module.exports = function () {
       
       var config = require('./config');
       app.use(session({
              secret: config.sessionSecret,
              resave: false,
              saveUninitializeed: true
       }));
       app.use(passport.initialize()); // start passport
       app.use(passport.session()); // use session via express-session

       require('../app/routes/index.route')(app);
        
}



require('../app/routes/index.route')(app); //import ตัวจัดการrouting ต้องอยู่หลัง app.use ทั้งหมด
require('../app/routes/user.route')(app);

return app;
}