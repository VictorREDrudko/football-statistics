export type AboutProjectData = {
  en: AboutProjectInfo
  ru: AboutProjectInfo
  iconsPath: {
    projectLogo: Image
    statisticsIcon: Image
    viewIcon: Image
    thinkIcon: Image
    historyIcon: Image
  }
  background: Image
}

type AboutProjectInfo = {
  title: string
  text: string[]
  link: string
}

type Image = {
  dark: string
  light: string
}
