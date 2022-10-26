"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    if (!user)
        return;
    let posts = {
        idpost: user.idpost,
        content: user.content,
        iduser: user.iduser,
    };
    if (user.logado) {
        posts.idpost = user.idpost;
        posts.content = user.content(posts).iduser = user.iduser;
    }
    return posts;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxUb0VudGl0eXMucG9zdC5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL21vZGVsVG9FbnRpdHlzLnBvc3QubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLEtBQUssR0FBaUI7UUFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07S0FDdEIsQ0FBQTtJQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUNWLEtBQXNCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsS0FBc0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FDN0MsS0FBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ2hEO0lBRUQsT0FBUSxLQUFzQixDQUFDO0FBQ25DLENBQUM7QUFqQkQsNEJBaUJDIn0=