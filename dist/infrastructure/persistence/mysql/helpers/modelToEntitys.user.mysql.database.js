"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    if (!user)
        return;
    let users = {
        iduser: user.iduser,
        name: user.name,
        apartment: user.apartment,
        email: user.email,
        password: user.password,
    };
    if (user.logado) {
        users.iduser = user.iduser;
        users.name = user.name(users).apartment = user.apartment;
        users.email = user.email;
        users.password = user.password;
    }
    return users;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxUb0VudGl0eXMudXNlci5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL21vZGVsVG9FbnRpdHlzLnVzZXIubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLEtBQUssR0FBZ0I7UUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0tBQzFCLENBQUE7SUFFRCxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFDVixLQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNDLEtBQXFCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3RDLEtBQW9CLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqRCxLQUFxQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pDLEtBQXFCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDbkQ7SUFFRCxPQUFRLEtBQXFCLENBQUM7QUFDbEMsQ0FBQztBQXJCRCw0QkFxQkMifQ==