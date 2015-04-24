angular.module('cpLib').factory('OrdersFactory', function(ApiService) {
    // Cache of Date objects, to avoid having to create a new Date object many times when running
    // an array filter or sort.
    const dateObjectCache = {};

    const getDateObject = (date) => {
        if (dateObjectCache[date] === undefined) {
            dateObjectCache[date] = new Date(date);
        }

        return dateObjectCache[date];
    };

    return {
        getAllOrders: () => ApiService.get(`/orders`),

        getOrdersByCurrentVendor: () => ApiService.get(`/orders/by-current-vendor`),

        getOrdersByCurrentCustomer: () => ApiService.get(`/orders/by-current-customer`),

        /**
         * Get the next order for a customer, which can have either the status 'pending vendor
         * approval' or 'accepted'.
         *
         * @return {Promise} Resolves to an order, or null if there is none.
         */
        getNextCustomerOrder() {
            return this.getOrdersByCurrentCustomer()
                .then((response) => {
                    const orders = response.data.orders;
                    if (orders.length === 0) {
                        return null;
                    }

                    const now = new Date();

                    return orders.filter((order) => order.statusText !== 'not_placed')
                        .filter((order) => getDateObject(order.requestedDeliveryDate) >= now)
                        .sort((a, b) => getDateObject(a.requestedDeliveryDate) - getDateObject(b.requestedDeliveryDate))
                        .shift();
                });
        },

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
