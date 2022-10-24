import { IPostEntity } from "../../../../domain/entities/post/post.entity";

export default function (user:any): IPostEntity | undefined {
    if(!user)
    return

    let posts : IPostEntity = {
        idpost: user.idpost,
        content: user.content,
        user_id: user.user_id,
    }

    if(user.logado){
        (posts  as IPostEntity).idpost = user.idpost;
        (posts  as IPostEntity).content = user.content
        (posts  as IPostEntity).user_id = user.user_id;
    }

    return (posts  as IPostEntity);
}