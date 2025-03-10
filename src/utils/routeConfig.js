const routeMap = new Map();
routeMap.set('home', { name: 'Home', path: '/', anchorable: true });
routeMap.set('about', { name: 'About', path: '/about', anchorable: true });
routeMap.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
routeMap.set('reservations', {
    name: 'Reservations',
    path: '/reservations',
    anchorable: true
});
routeMap.set('confirmedBooking', {
    name: 'Confirmed Booking',
    path: '/confirmed-booking',
    anchorable: false
});
routeMap.set('orders', {
    name: 'Order Online',
    path: '/orders',
    anchorable: true
});
routeMap.set('login', { name: 'Login', path: '/login', anchorable: true });

export default routeMap;