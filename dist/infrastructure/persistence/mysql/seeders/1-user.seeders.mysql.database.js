"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('posts', [
            {
                "idpost": 1,
                "content": "blablabla",
                "iduser": 1
            },
            {
                "idpost": 2,
                "content": "blablabla",
                "iduser": 2
            },
            {
                "idpost": 3,
                "content": "blablabla",
                "iduser": 3
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('posts', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXVzZXIuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdEM7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsV0FBVztnQkFDdEIsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNEO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxXQUFXO2dCQUN0QixRQUFRLEVBQUUsQ0FBQzthQUNkO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDSixDQUFDIn0=