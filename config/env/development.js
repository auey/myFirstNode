module.exports = {
       //mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
              clientID: '439483213905-jddumr0415j0edep0631ofbq1nj2gt5l.apps.googleusercontent.com',
              clientSecret: 'K5OeHMNwn3DzMG39y4ZWdezX',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }
}
