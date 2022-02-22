import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  ImportContacts,
  PhotoAlbum,
  CalendarToday,
} from "@material-ui/icons";

export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Posts",
    icon: MenuBook,
    url: `/posts`,

  },

      {
        name: "Events",
        icon: CalendarToday,
        url: `/event`,
    
      },
      
      {
        name: "Gallery",
        icon: PhotoAlbum,
        url: `/gallery`,
    
      },
      
  {
    name: "Profile",
    icon: PeopleAlt,
    url: `/profile`,
  },

];
