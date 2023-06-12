type NavigationListType = NavigationElement[];

type NavigationElement = {
  name: string;
  path: string;
};

const navigationList: NavigationListType = [
  { name: "Home", path: "#" },
  { name: "About", path: "#aboutme" },
  { name: "Skils", path: "#skils" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default navigationList;
