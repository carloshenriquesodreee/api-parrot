import { IPostRepository } from "../../repositories/post.repository.interface";
import { IUseCase } from "../usecase.interface";
import postRepository from "../../../adapters/repositories/post.repository";


class DeletePostUseCase implements IUseCase {

    constructor(private _repository: IPostRepository) {

    }

    async execute(data: { idpost: number }): Promise<void> {
        return await this._repository.deleteById(data.idpost);
    }
}

export default new DeletePostUseCase(
    postRepository
);
