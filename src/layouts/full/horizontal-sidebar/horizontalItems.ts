import { CircleIcon, PointIcon } from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  subCaption?: string;
  class?: string;
  extraclass?: string;
  type?: string;
}

const horizontalItems: menu[] = [
  {
    title: "Projetcs",
    icon: "bx:category",
    to: "/",
  },
  {
    title: "My Projects",
    icon: "tabler:file-text",
    to: "/my-projects",
  },
  {
    title: "Chat",
    icon: "tabler:heart-plus",
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
    to: "/pay-commission",
  },
  {
    title: "Notes",
    icon: "material-symbols:receipt-long-outline",
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


];

export default horizontalItems;
