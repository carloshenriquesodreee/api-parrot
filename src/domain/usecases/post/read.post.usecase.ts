import { IPostEntity } from "../../entities/post/post.entity";
import { IPostRepository } from "../../repositories/post.repository.interface";
import { IUseCase } from "../usecase.interface";
import postRepository from "../../../adapters/repositories/post.repository";

class ReadPostUseCase implements IUseCase {

    constructor(private _repository: IPostRepository) {

    }

    async execute(data: { idpost: number }): Promise<IPostEntity | undefined> {
        return await this._repository.readById(data.idpost);
    }
}

export default new ReadPostUseCase(
    postRepository
);