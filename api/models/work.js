const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  WorkSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите описание проекта']
    },
    tech: {
        type: String,
        required: [true, 'Укажите технологии проекта']
      },    
    picture: {
      type: String
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('work', WorkSchema);