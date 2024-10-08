import type { RevenueProjects,Performance } from '@/types/components/dashboard/dashboard1';


/*--Performance--*/
const PerformanceData: Performance[] = [
    {
        icon: 'shop-2-linear',
        title: '64 New Orders',
        subtitle: 'In Pricing',
        color:'primary',
    },
    {
        icon: 'filters-outline',
        title: '4 orders',
        subtitle: 'Processing',
        color:'error',
    },
    {
        icon: 'pills-3-linear',
        title: '12 Orders',
        subtitle: 'Completed',
        color:'secondary',
    },

];


export {PerformanceData}
