import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

export const sharedRoutes: Routes = [
    {
        key: 'homePage', // HomePage route
        path: `/`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    // Add more shared routes here that are accessible to both authorized and unauthorized users
]
