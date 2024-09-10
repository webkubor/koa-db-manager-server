import mongoose from 'mongoose';

// 定义 User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String, unique: true }
});

// 基于 Schema 创建 User 模型
const User = mongoose.model('User', UserSchema);

export default User;
