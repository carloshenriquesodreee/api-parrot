"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('post', [
            {
                "idpost": 1,
                "content": "blablabla",
                "email": "carloshenriquedev@gmail.com",
                "user_id": 1
            },
            {
                "idpost": 2,
                "content": "blablabla",
                "email": "carloshenriquedev@gmail.com",
                "user_id": 2
            },
            {
                "idpost": 3,
                "content": "blablabla",
                "email": "carloshenriquedev@gmail.com",
                "user_id": 3
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('post', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXVzZXIuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckM7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLE9BQU8sRUFBRSw2QkFBNkI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDO2FBQ2Y7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsV0FBVztnQkFDdEIsT0FBTyxFQUFFLDZCQUE2QjtnQkFDdEMsU0FBUyxFQUFFLENBQUM7YUFDZjtZQUNEO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxXQUFXO2dCQUN0QixPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQzthQUNmO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDSixDQUFDIn0=