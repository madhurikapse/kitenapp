import  { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    points: { type: Number, default: 0 }
});

const User = model('User', UserSchema);
export default User;
