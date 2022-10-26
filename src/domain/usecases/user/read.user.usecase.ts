import { IUserEntity } from "../../entities/user/user.entity";
import { UsersRepository } from "../../../adapters/repositories/user.repository";
import { IUseCase } from "../usecase.interface";
import userRepository from "../../../adapters/repositories/user.repository";

class ReadUserUseCase implements IUseCase{
    constructor(private _repository: UsersRepository){}
    async execute(data: { iduser:number}): Promise<IUserEntity | undefined> {
        return await this._repository.readById(data.iduser)        
    }
}

export default new ReadUserUseCase(
    userRepository
)