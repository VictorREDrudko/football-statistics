export type HistoryData = {
  en: HistoryInfo
  ru: HistoryInfo
  background: Image
}

type Image = {
  dark: string
  light: string
}

export type HistoryInfo = {
  title: string
  info: string[]
}
