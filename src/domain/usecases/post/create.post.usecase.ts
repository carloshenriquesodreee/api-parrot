import { IPostEntity } from "../../entities/post/post.entity";
import { IPostRepository } from "../../repositories/post.repository.interface";
import { IUseCase } from "../usecase.interface";
import postRepository from "../../../adapters/repositories/post.repository";

class CreatePostUseCase implements IUseCase {

    constructor(private _repository: IPostRepository) {

    }

    async execute(data: IPostEntity): Promise<IPostEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreatePostUseCase(
    postRepository
);