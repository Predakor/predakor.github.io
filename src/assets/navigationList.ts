type NavigationListType = NavigationElement[];

type NavigationElement = {
  name: string;
  path: string;
};

const navigationList: NavigationListType = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default navigationList;
