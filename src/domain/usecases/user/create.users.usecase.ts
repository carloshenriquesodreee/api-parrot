import { IUserEntity } from "../../entities/user/user.entity";
import { UsersRepository } from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";
import userRepository from "../../../adapters/repositories/user.repository";


class CreateUserUseCase implements IUseCase {

constructor(private _repository: UsersRepository) {

    }

    async execute(data: IUserEntity): Promise<IUserEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateUserUseCase(
    userRepository
)