var Pokemon = require('mongoose').model('Pokemon');
var pokemonsData = require('./../../data/pokemons.json');

module.exports = {

  index: function(req, res, next) {
    Pokemon.find()
    .exec((err, result) => {

      if(result.length <= 0) {
        var data = JSON.parse(JSON.stringify(pokemonsData));

        Pokemon.create(data, (err, data) => {
          if(err) return res.json({ message: err});
          res.status(200).json(data);
        });

      }else {
        res.json( result);
      }

    });
  }

};
