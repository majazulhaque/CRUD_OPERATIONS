const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../model/user');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'practice'

};

passport.use(new JWTStrategy(opts,async function(jwtPayload,done){
    let user = await User.findById(jwtPayload._id);
    try {
        if(user){
            return done(null,user);
        }
        
    } catch (error) {
        return done(null,false);
    }
}));

module.exports = passport;