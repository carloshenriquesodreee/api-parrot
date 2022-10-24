import { IPostEntity } from "../../entities/post/post.entity";
import { IPostRepository } from "../../repositories/post.repository.interface";
import { IUseCase } from "../usecase.interface";
import postRepository from "../../../adapters/repositories/post.repository";

class ListPostUseCase implements IUseCase {

    constructor(private _repository: IPostRepository) {

    }

    async execute(): Promise<IPostEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListPostUseCase(
    postRepository
);