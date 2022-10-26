import { IPostEntity } from "../../../../domain/entities/post/post.entity";

export default function (user: IPostEntity){
    const posts  = {
       idpost: user.idpost,
        content: user.content,

        iduser: user.iduser,
    }

    return {
        posts : posts 
    };
}