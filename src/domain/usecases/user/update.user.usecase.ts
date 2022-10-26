import { IUserEntity } from "../../entities/user/user.entity";
import { UsersRepository } from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";
import userRepository from "../../../adapters/repositories/user.repository";
import { IUserRepository } from "../../repositories/user.repository.interface";


class updateUserUsecase implements IUseCase{
    constructor(private _repository: IUserRepository){}
    async execute(data: IUserEntity): Promise<IUserEntity | undefined> {
        return await this._repository.updateById(data)        
    }
}

export default new updateUserUsecase(
    userRepository
)