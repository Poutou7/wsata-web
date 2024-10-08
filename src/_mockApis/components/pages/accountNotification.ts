/*import tabler icons*/
import { ArticleIcon, CheckboxIcon, ClockIcon, MailIcon, TruckDeliveryIcon } from 'vue-tabler-icons';
import type { notificationTabType } from '@/types/components/pages/notificationTab';
const notificationTb: notificationTabType[] = [
    {
        title: 'Our newsletter',
        subtitle: 'We will always let you know about important changes',
        icon: ArticleIcon,
        switch: false
    },

    {
        title: 'Email Notification',
        subtitle: 'Turn on email notificaiton to get updates through email',
        icon: MailIcon,
        switch: false
    }
];

export {notificationTb};
