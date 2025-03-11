/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as authRegisterImport } from './routes/(auth)/register'
import { Route as authLoginImport } from './routes/(auth)/login'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authRegisterRoute = authRegisterImport.update({
  id: '/(auth)/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/solid-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/register': {
      id: '/(auth)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/register': typeof authRegisterRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/login' | '/register'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/login' | '/register'
  id: '__root__' | '/' | '/about' | '/(auth)/login' | '/(auth)/register'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  authLoginRoute: typeof authLoginRoute
  authRegisterRoute: typeof authRegisterRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  authLoginRoute: authLoginRoute,
  authRegisterRoute: authRegisterRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/(auth)/login",
        "/(auth)/register"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(auth)/register": {
      "filePath": "(auth)/register.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
