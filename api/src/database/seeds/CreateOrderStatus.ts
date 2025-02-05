import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { OrderStatus } from '../../api/core/models/OrderStatus';
export class CreateOrderStatus implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();
        const statusData: any = [
            {
            orderStatusId: 1,
            name: 'In Progress',
            isActive: 1,
            },
            {
                orderStatusId: 2,
                name: 'Shipped',
                isActive: 1,
            },
            {
                orderStatusId: 3,
                name: 'Delivered',
                isActive: 1,
            },
            {
                orderStatusId: 4,
                name: 'completed',
                isActive: 1,
            },
        ];
        let i = 0;
            for ( i; i < statusData.length; i++ ) {
                const orderStatus = new OrderStatus();
                    orderStatus.orderStatusId = statusData[i].orderStatusId;
                    orderStatus.name = statusData[i].name;
                    orderStatus.isActive = statusData[i].isActive;
                    await em.save(orderStatus);
                }
        return statusData;
    }
}
