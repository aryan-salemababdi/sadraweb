import { Schema, model, models } from "mongoose";

const postsSchema = new Schema({
    title : {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    }
},
{ collection: 'posts' }
)

const Posts = models.Posts || model("Posts", postsSchema);


export default Posts;