import { IUserEntity } from "../../../../domain/entities/user/user.entity";

export default function (user:any): IUserEntity | undefined  {
    if(!user)
    return

    let users: IUserEntity = {
        iduser: user.iduser,
        name: user.name,
        apartment: user.apartment,
        email: user.email,
        password: user.password,
    }

    if(user.logado){
        (users as IUserEntity).iduser = user.iduser;
        (users as IUserEntity).name = user.name
        (users as IUserEntity).apartment = user.apartment;
        (users as IUserEntity).email = user.email;
        (users as IUserEntity).password = user.password;
    }

    return (users as IUserEntity);
}