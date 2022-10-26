import { IUserEntity } from "../../../../domain/entities/user/user.entity";
//brcrypt


export default function (user: IUserEntity){
    const users = {
        iduser: user.iduser,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: user.password,
    }

    return {
        users: users
    };
}