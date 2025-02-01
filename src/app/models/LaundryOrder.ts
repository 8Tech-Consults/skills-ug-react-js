export class LaundryOrder {
    id: number;
    created_at: string;
    updated_at: string;
    user_id: string;
    customer_name: string;
    customer_phone: string;
    customer_address: string;
    pickup_address: string;
    pickup_gps: string;
    delivery_address: string;
    special_instructions: string;
    total_amount: string;
    payment_status: string;
    payment_method: string;
    payment_date: string;
    stripe_payment_link: string;
    payment_reference: string;
    payment_notes: string;
    customer_photos: string;
    scheduled_pickup_time: string;
    assigned_driver_id: string;
    driver_id: string;
    actual_pickup_time: string;
    pickup_notes: string;
    laundry_delivery_time: string;
    washer_assignment_time: string;
    assigned_washer_id: string;
    washer_id: string;
    washing_start_time: string;
    washing_end_time: string;
    drying_start_time: string;
    drying_end_time: string;
    scheduled_delivery_time: string;
    delivery_driver_id: string;
    actual_delivery_time: string;
    delivery_notes: string;
    final_payment_date: string;
    receipt_approved_date: string;
    rating: string;
    driver_amount: string;
    driving_distance: string;
    feedback: string;
    local_id: string;
    status: string;
    washing_amount: string;
    service_amount: string;
    weight: string;
    drying_start_time_weight: string;
    order_received_email_sent: string;
    order_picked_up_email_sent: string;
    order_ready_for_payment_email_sent: string;
    order_receipt_email_sent: string;
    order_washed_email_sent: string;
    order_delivered_email_sent: string;
    order_feedback_email_sent: string;
    driver_email_sent: string;

    constructor(data: any) {
        Object.assign(this, data);
    }

    static fromJson(json: any): LaundryOrder {
        return new LaundryOrder(json);
    }

    static fromJsonList(jsonArray: any[]): LaundryOrder[] {
        return jsonArray.map(json => LaundryOrder.fromJson(json));
    }

    toJson(): any {
        return { ...this };
    }

    static toJsonList(orderList: LaundryOrder[]): any[] {
        return orderList.map(order => order.toJson());
    }

    save(): void {
        const orders = LaundryOrder.fetch() || [];
        orders.push(this);
        localStorage.setItem('laundryOrders', JSON.stringify(orders));
    }

    static fetch(): LaundryOrder[] {
        const orders = localStorage.getItem('laundryOrders');
        return orders ? LaundryOrder.fromJsonList(JSON.parse(orders)) : [];
    }

    static fetchById(id: number): LaundryOrder | undefined {
        const orders = LaundryOrder.fetch();
        return orders.find(order => order.id === id);
    }

    static delete(id: number): void {
        let orders = LaundryOrder.fetch();
        orders = orders.filter(order => order.id !== id);
        localStorage.setItem('laundryOrders', JSON.stringify(orders));
    }

    static update(updatedOrder: LaundryOrder): void {
        let orders = LaundryOrder.fetch();
        orders = orders.map(order => order.id === updatedOrder.id ? updatedOrder : order);
        localStorage.setItem('laundryOrders', JSON.stringify(orders));
    }

    static deleteAll(): void {
        localStorage.removeItem('laundryOrders');
    }
}