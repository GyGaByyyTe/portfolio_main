const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AboutSchema = new Schema({
  _id: Schema.ObjectId,
  data: [
    {
      _id: { type: String },
      type: {
        type: Number,
        default: 1
      },
      name: { type: String },
      percents: {
        type: Number,
        default: 0
      }
    }
  ]
});

// просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('about', AboutSchema);
