import { UserEntity } from "../entities/user/iuser.entity"

export interface IUserRepository {
    readById(resourceId: number): Promise<UserEntity | undefined>,
    create(resource: UserEntity): Promise<UserEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<UserEntity[]>,
    updateById(resource: UserEntity): Promise<UserEntity | undefined>,
    readByWhere(email: string, password: string): Promise<UserEntity | undefined>
}