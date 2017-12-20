import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    rugText: String,
    rugDesc : String
});
export default mongoose.model('Rug', Schema);