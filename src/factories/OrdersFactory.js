angular.module('cpLib').factory('OrdersFactory', function(ApiService) {
    return {
        getAllOrders: () => ApiService.get(`/orders`),

        getOrdersByCurrentVendor: () => ApiService.get(`/orders/by-current-vendor`),

        getOrdersByCurrentCustomer: () => ApiService.get(`/orders/by-current-customer`),

        getOrder: (id) => ApiService.get(`/orders/${id}`),

        getOrderMessages: (id) => ApiService.get(`/orders/${id}/messages`),

        sendMessage: (id, message) => ApiService.put(`/orders/${id}/messages`, {message: message}),

        updateOrder: (id, updatedOrder) => ApiService.put(`/order/${id}`, updatedOrder),

        deleteOrder: (id, reason = '') => ApiService.delete(`/order/${id}?deletionReason=${reason}`),

        getCourierOrders: () => ApiService.get(`/orders/courier`),

        addCustomerServiceEvent: (id, event) => ApiService.post(`/order/${id}/customer-service-events`, {event: event}),

        acceptOrder: (id) => ApiService.put(`/order/${id}/accept`),

        addOrderReview: (id, review) => ApiService.post(`/reviews/order/${id}`, review),

        getHeadCountOptions(maxPeople = 1, minPeople = 1) {
            if (maxPeople === null) {
                maxPeople = 1000;
            }
            if (minPeople === null) {
                minPeople = 1;
            }

            const options = [];

            for (let i = minPeople; i <= maxPeople; i += 1) {
                options.push(i);
            }

            return options;
        },

        getAllCustomerInvoices: () => ApiService.get(`/orders/customer-invoices`),

        getCustomerInvoice: (id) => ApiService.get(`/orders/customer-invoice/${id}`),

        getCustomerInvoiceAsHtml: (id) => ApiService.get(`/orders/customer-invoice-as-html/${id}`),

        updateCustomerInvoiceStatus: (id, status) => ApiService.put(`/orders/customer-invoice/${id}/status`, {status: status}),

        refundOrder: (id, refundDetails) => ApiService.put(`/order/${id}/refund`, refundDetails),

        getOrderInvoices: (orderId) => ApiService.get(`/orders/customer-invoices-by-order/${orderId}`),

        createOrder: orderDetails => ApiService.post(`/orders`, orderDetails)
    };
});
