import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card"

export function UserStats({ data }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.daily.totalUser}</div>
          <p className="text-xs text-muted-foreground">
            +{data.daily.totalUser - data.monthly.totalUser} from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.daily.activeUser}</div>
          <p className="text-xs text-muted-foreground">
            {((data.daily.activeUser / data.daily.totalUser) * 100).toFixed(2)}% of total users
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.daily.totalReferral}</div>
          <p className="text-xs text-muted-foreground">
            +{data.daily.totalReferral - data.monthly.totalReferral} from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Creators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.daily.creator}</div>
          <p className="text-xs text-muted-foreground">
            {((data.daily.creator / data.daily.totalUser) * 100).toFixed(2)}% of total users
          </p>
        </CardContent>
      </Card>
    </div>
  )
}