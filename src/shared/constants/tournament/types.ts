import { STAGES } from './stages'

export type Stage = (typeof STAGES)[keyof typeof STAGES]
export type StageKey = keyof typeof STAGES

// typeof STAGES (тип всего объекта):
// - возвращает тип объекта со всеми его ключами и точными значениями
// { readonly FINAL: "1:final", ... }

// keyof typeof TOURNAMENT_STAGES (доступ к значениям по всем ключам):
// - возвращает union type всех ключей объекта:
// "FINAL" | "SEMI_FINAL" | "QUARTER_FINAL" | ... // все ключи
