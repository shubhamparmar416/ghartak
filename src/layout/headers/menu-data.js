const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    has_children: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    has_children: true,
    title: "About Us",
    link: "/",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    has_children: false,
    title: "Services",
    link: "/",
    sub_menus: [
      { link: "", title: "WEBSITE DEVELOPMENT" },
      { link: "", title: "SOFTWARE SOLUTIONS" },
      { link: "", title: "DIGITAL MARKETING" },
      { link: "", title: "APPLICATION DEVELOPMENT" },
    ],
  },
  {
    id: 4,
    mega_menu: true,
    has_dropdown: true,
    has_children: false,
    title: "Readymade Solutions",
    link: "#",
    mega_menus: [
      // layout 01
      {
        link: "#",
        layout: [
          { link: "/accordion", title: "MLM " },
          { link: "/alerts", title: " School Management " },
          { link: "/badges", title: "College Management" },
          { link: "/brands", title: "Inventory Management" },
        ],
      },
      // layout 02
      {
        link: "#",
        title: "",
        layout: [
          { link: "/columns", title: "Warehouse Management " },
          { link: "/counter", title: "6 Grocery Management" },
          { link: "/contact-form", title: "Mobile Repairing" },
          { link: "/call-to-action", title: "ERP" },
        ],
      },
      // layout 03
      {
        link: "#",
        title: "",
        layout: [
          { link: "/footer", title: "Pathology Management" },
          { link: "/gallery", title: " Hospital Management software" },
          { link: "/lightbox", title: "Trading software" },
          { link: "/page-titles", title: " Billing software" },
        ],
      },
      // layout 04
      {
        link: "#",
        title: "",
        layout: [
          { link: "/subscribe", title: "Automatic Attendance " },
          { link: "/tab", title: " Logistic app " },
          { link: "/team-elements", title: "HRM" },
          { link: "/testimonials", title: "CRM" },
        ],
      },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    has_children: false,
    title: "TECHNOLOGY",
    link: "/blog",
    mega_menus: [
      // layout 01
      {
        link: "#",
        title: "Mobile",
        layout: [
          { link: "/accordion", title: "iOS" },
          { link: "/alerts", title: "Android" },
          { link: "/badges", title: "ReactNative" },
          { link: "/badges", title: "Flutter" },
        ],
      },
      // layout 02
      {
        link: "#",
        title: "Frontend",
        layout: [
          { link: "/columns", title: "HTML5" },
          { link: "/counter", title: "Angular" },
          { link: "/brands", title: "Javascript" },
          { link: "/brands", title: "ReactJs" },
        ],
      },
      // layout 03
      {
        link: "#",
        title: "Backend",
        layout: [
          { link: "/subscribe", title: ".Net" },
          { link: "/tab", title: "Node" },
          { link: "/team-elements", title: "PHP" },
          { link: "/team-elements", title: "Laravel" },
        ],
      },
      // layout 04

      {
        link: "#",
        title: "CMS",
        layout: [
          { link: "/footer", title: "Wordpress" },
          { link: "/gallery", title: "Shopify" },
        ],
      },
    ],
  },
];
export default menu_data;
