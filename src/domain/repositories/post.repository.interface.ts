import { PostEntity } from "../entities/post/ipost.entity"

export interface IPostRepository  {
    readById(resourceId: number): Promise<PostEntity | undefined>,
    create(resource: PostEntity): Promise<PostEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<PostEntity[]>,
    updateById(resource: PostEntity): Promise<PostEntity | undefined>
}