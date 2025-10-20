export type StartPageData = {
  en: StartPageInfo
  ru: StartPageInfo
  backgroundPath: Image
  logoPath: Image
}

type StartPageInfo = {
  title: string
  subtitle: string
  text: string
}

type Image = {
  dark: string
  light: string
}