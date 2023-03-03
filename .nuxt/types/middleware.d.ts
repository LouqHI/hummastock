import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/admin/Documents/hummaction Offi/hummastock/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}