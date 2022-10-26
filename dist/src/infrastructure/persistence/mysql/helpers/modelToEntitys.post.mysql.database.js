"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    if (!user)
        return;
    let posts = {
        idpost: user.idpost,
        content: user.content,
        user_id: user.user_id,
    };
    if (user.logado) {
        posts.idpost = user.idpost;
        posts.content = user.content(posts).user_id = user.user_id;
    }
    return posts;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxUb0VudGl0eXMucG9zdC5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL21vZGVsVG9FbnRpdHlzLnBvc3QubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLEtBQUssR0FBaUI7UUFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87S0FDeEIsQ0FBQTtJQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUNWLEtBQXNCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsS0FBc0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FDN0MsS0FBcUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ2xEO0lBRUQsT0FBUSxLQUFzQixDQUFDO0FBQ25DLENBQUM7QUFqQkQsNEJBaUJDIn0=