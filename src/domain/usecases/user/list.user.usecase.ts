import { IUserEntity } from "../../entities/user/user.entity";
import { UsersRepository } from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";
import userRepository from "../../../adapters/repositories/user.repository";


class ListUserUseCase implements IUseCase{
    constructor(private _repository: UsersRepository){}
    async execute(): Promise<IUserEntity[] | undefined> {
        return await this._repository.list()        
    }
}

export default new ListUserUseCase(
    userRepository
)