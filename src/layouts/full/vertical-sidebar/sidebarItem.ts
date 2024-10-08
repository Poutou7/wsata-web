export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  id?: number;
  to?: string;
  chip?: string;
  BgColor?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}
const sidebarItem: menu[] = [
  {
    header: "dashboards",
    id: 1,
    children: [
      {
        title: "Projects",
        icon: "lucide:layout-dashboard",
        to: "/",
      },
      {
        title: "My Projects",
        icon: "tabler:file-text",
        to: "/my-projects",
      },
      {
        title: "Chat",
        icon: "ci:chat-conversation",
        to: "/chat",
      },
      {
        title: "Likes",
        icon: "tabler:heart-plus",
        to: "/likes",
      },
      {
        title: "Invoice",
        icon: "material-symbols:receipt-long-outline",
        to: "/invoice",
      },
      {
        title: "Pay Commission",
        icon: "tabler:brand-paypal",
        to: "/pay-commission",      },
      {
        title: "Notes",
        icon: "material-symbols:note-stack-outline",
        to: "/notes",
      },
      {
        title: "Give Comment",
        icon: "tabler:pencil-plus",
        to: "/give-comment",
      },
      {
        title: "Blog",
        icon: "tabler:rss",
        to: "/blog",
      },
    ],
  },
];

export default sidebarItem;
