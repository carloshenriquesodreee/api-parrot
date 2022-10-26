import { IUserEntity } from "../../entities/user/user.entity";
import { UsersRepository } from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";
import userRepository from "../../../adapters/repositories/user.repository";

class DeleteUserUseCase implements IUseCase {

constructor(private _repository: UsersRepository) {

    }

    async execute(data: { iduser: number }): Promise<void> {
        return await this._repository.deleteById(data.iduser);
    }
}

export default new DeleteUserUseCase(
    userRepository
)