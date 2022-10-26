// import { IPostRepository } from "../../repositories/post.repository.interface";
import { IUseCase } from "../usecase.interface";
import { PostRepository } from "../../../adapters/repositories/post.repository";
import { PostEntity } from "../../entities/post/ipost.entity";
import postRepository from "../../../adapters/repositories/post.repository";


class DeletePostUseCase implements IUseCase {

    constructor(private _repository: PostRepository) {

    }

    async execute(data: { idpost: number }): Promise<void> {
        return await this._repository.deleteById(data.idpost);
    }
}

export default new DeletePostUseCase(
    postRepository
);
