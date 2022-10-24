import { IPostEntity } from "../../../../domain/entities/post/post.entity";

export default function (user: IPostEntity){
    const posts  = {
       idpost: user.idpost,
        context: user.context,
        user_id: user.user_id,
    }

    return {
        posts : posts 
    };
}