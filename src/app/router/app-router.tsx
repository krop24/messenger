import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'app/layout'
import { projectRoutes, routes } from 'app/router/const'

interface IRoute {
  path: string
  Component: React.FC
}

export const AppRouter = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={projectRoutes.home} Component={Layout}>
          {routes.map((route, index) => {
            const { Component } = route

            return (
              <Route key={index + route.path} path={route.path} element={<Component />}>
                {route?.children?.map((child: IRoute, i: number) => {
                  const { Component } = child

                  return (
                    <Route
                      key={i + child.path}
                      path={child.path}
                      element={<Component />}
                    />
                  )
                })}
              </Route>
            )
          })}
        </Route>
      </Routes>
    </div>
  )
}
