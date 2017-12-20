import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    rugName: String,
    rugText: String
});
export default mongoose.model('Rug', Schema);