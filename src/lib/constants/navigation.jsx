import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "specs",
    label: "Specs",
    path: "/specs",
    icon: <HiOutlineCube />,
  },
  {
    key: "brand",
    label: "Brand",
    path: "/brand",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "learn",
    label: "Learn",
    path: "/learn",
    icon: <HiOutlineUsers />,
  },
  {
    key: "sales",
    label: "Sales",
    path: "/sales",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "schedules",
    label: "Schedules",
    path: "/schedules",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "manage user",
    label: "Manage User",
    path: "/manage-user",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
