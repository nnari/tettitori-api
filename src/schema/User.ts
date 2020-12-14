import Mongoose from 'mongoose';
const { Schema, Types: ObjectId } = Mongoose;

const UserSchema = new Schema({
    username: { type: String, minlength: 5, maxlength: 200, required: true },
    password: { type: String, minlength: 10, maxlength: 250, required: true },
    email: { type: String, default: "", minlength: 5, maxlength: 250, required: false },

    role: { type: ObjectId, ref: 'Role', required: true }
});

export interface UserDoc extends Mongoose.Document {
    username: String,
    password: String,
    email: String,
    role: typeof ObjectId,
};

export default Mongoose.model<UserDoc>('User', UserSchema);