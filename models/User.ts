import { Schema, model, models } from "mongoose";

const userSchema = new Schema ({
    userName: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

const User = models.User || model("User", userSchema);


export default User;
