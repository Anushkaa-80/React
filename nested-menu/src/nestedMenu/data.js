export const menus = [
  {
    label: "Home",
    to: "/"
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location"
          },
          {
            label: "Contact",
            to: "contact"
          }
        ]
      },
      {
        label: "Settings",
        to: "settings"
      }
    ]
  },
  {
    label: "Messages",
    to: "/messages",
    children: [
      {
        label: "Inbox",
        to: "inbox"
      },
      {
        label: "Sent",
        to: "sent"
      }
    ]
  },
  {
    label: "Logout",
    to: "/logout"
  }
];

export default menus;