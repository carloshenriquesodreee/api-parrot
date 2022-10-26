"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                "iduser": 1,
                "name": "John",
                "email": "carlos@gmail.com",
                "apartment": 2,
                "password": "euruasjkas",
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('users', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXVzZXIuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUM7WUFDckM7Z0JBQ0ksUUFBUSxFQUFDLENBQUM7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsV0FBVyxFQUFDLENBQUM7Z0JBQ2IsVUFBVSxFQUFFLFlBQVk7YUFFM0I7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBd0MsRUFBQyxFQUFFO1FBQzlDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEQsQ0FBQztDQUNKLENBQUEifQ==