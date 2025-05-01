type ItemMenu = {
  title: "About" | "National tournaments" | "Club tournaments" | "National teams" | "Clubs";
  // fix
  path: string;
};

export type NavItems = ItemMenu[];