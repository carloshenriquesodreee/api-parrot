import { IUserRepository } from "../../repositories/user.repository.interface";
import { IUseCase } from "../usecase.interface";
import userRepository from "../../../adapters/repositories/user.repository";
import jwt from 'jsonwebtoken';

export class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IUserRepository){

    }

    async execute(data: { email: string, password: string }) {
        const user = await this._repository.readByWhere(data.email, data.password);

        if(user){

            const token = jwt.sign(user, String(process.env.SECRET_KEY), {
                expiresIn: '2 days'
            });

            return {
                user: user,
                token: token
            };
        }

        return;
    }
}

export default new LoginAuthUseCase(
    userRepository 
);