import { IPostEntity } from "../../../../domain/entities/post/post.entity";

export default function (user:any): IPostEntity | undefined {
    if(!user)
    return

    let posts : IPostEntity = {
        idpost: user.idpost,
        content: user.content,
        iduser: user.iduser,
    }

    if(user.logado){
        (posts  as IPostEntity).idpost = user.idpost;
        (posts  as IPostEntity).content = user.content
        (posts  as IPostEntity).iduser = user.iduser;
    }

    return (posts  as IPostEntity);
}