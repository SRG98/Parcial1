const mongoose = require("mongoose");
const playerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  contry: {
    type: String,
    require: true,
  },

  date_personal: {
    type: Object,
    require: true,
    age: {
      type: String,
      require: true
    },
    weight: {
      type: String,
      require: true
    },
    teams: {
      type: Array,
      require: true
    }
  },
  attributes: {
    type: Object,
    require: true,

    statistics: {
      type: Object,
      require: true,
      matches: {
        type: String,
        require: true
      },
      goals: {
        type: String,
        require: true
      },
      assists: {
        type: String,
        require: true
      },
    },
    titles: {
      type: String,
      require: true
    }
  }
});
module.exports = mongoose.model('PlayerCollection', playerSchema);
