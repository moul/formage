var mongoose = require('mongoose'),
    Schema = mongoose['Schema'],
    ObjectId = Schema.Types.ObjectId;

var s = new Schema({
    list: [
        {
            name: { type: String, required: true },
            list: [
                {
                    name: String
                }
            ]
        }
    ],
    ref: { type: ObjectId, ref: 'pages', required: true },
    string: { type: String, required: true },
    date: { type: Date, required: true },
    enum: { type: String, enum: ['1', '2', '3'], required: true },
    rich_text: { type: Schema.Types.Html, required: true },
    text: { type: Schema.Types.Text, required: true },
    image: { type: Schema.Types.File, required: true },
    map: { type: Schema.Types.GeoPoint, required: true },
    num: { type: Schema.Types.Integer, required: true },
    order: { type: Number, editable: false },
    bool: { type: Boolean, 'default': true },
    object: {
        object: {
            object: {
                string: { type: String, required: true }
            }
        }
    },
    steps: [
        {
            rewards: {
                xp: {type: Schema.Types.Integer, 'default': 0},
                cash: {min: {type: Schema.Types.Integer, min: 0, 'default': 0}, max: {type: Schema.Types.Integer, min: 0, 'default': 0}},
                tokens: {min: {type: Schema.Types.Integer, min: 0, 'default': 0}, max: {type: Schema.Types.Integer, min: 0, 'default': 0}},
                morale: {min: {type: Schema.Types.Integer, min: 0, 'default': 0}, max: {type: Schema.Types.Integer, min: 0, 'default': 0}},
                reputation: {min: {type: Schema.Types.Integer, min: 0, 'default': 0}, max: {type: Schema.Types.Integer, min: 0, 'default': 0}},
                intimidation: {min: {type: Schema.Types.Integer, min: 0, 'default': 0}, max: {type: Schema.Types.Integer, min: 0, 'default': 0}},
                members: {min: {type: Schema.Types.Integer, min: 0, 'default': 0}, max: {type: Schema.Types.Integer, min: 0, 'default': 0}}
            },
            loot: {
                items: [
                    {item_id: {type: Schema.ObjectId, ref: 'pages', query: '/__value__/i.test(this.title)', required: true},
                        amount: {type: Schema.Types.Integer, min: 0, 'default': 0},
                        percent: {type: Schema.Types.Integer, min: 0, max: 100, 'default': 0},
                        is_mandatory: {type: Boolean, 'default': false}}
                ]
            },
            action_word: {type: String}
        }
    ]
});

module.exports = mongoose.model('tests', s);
