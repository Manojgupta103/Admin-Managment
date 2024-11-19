"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchDashboardData } from "@/lib/api";
import { Users, FileText, ThumbsUp, Coins } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OverviewPage() {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState("daily");
  const [chartMetric, setChartMetric] = useState("users");

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (!dashboardData)
    return <div className="text-center">No dashboard data available</div>;

  const { userMetrics, contentMetrics, engagementMetrics, blockchainMetrics } =
    dashboardData;

  const getMetricValue = (metric, type) => {
    return dashboardData[`${metric}Metrics`][timeRange][type];
  };

  const stats = [
    {
      name: "Total Users",
      value: getMetricValue("user", "totalUser"),
      icon: Users,
      color: "bg-blue-500",
    },
    {
      name: "Total Posts",
      value: getMetricValue("content", "totalPosts"),
      icon: FileText,
      color: "bg-green-500",
    },
    {
      name: "Total Likes",
      value: getMetricValue("engagement", "totalLikes"),
      icon: ThumbsUp,
      color: "bg-yellow-500",
    },
    {
      name: "Total Tokens",
      value: getMetricValue("blockchain", "totalTokens"),
      icon: Coins,
      color: "bg-purple-500",
    },
  ];

  const chartData = dashboardData[`${chartMetric}Metrics`][timeRange].chartData;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="allTime">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.name}
                </CardTitle>
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Metrics Over Time</CardTitle>
            <Select value={chartMetric} onValueChange={setChartMetric}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="users">Users</SelectItem>
                <SelectItem value="content">Content</SelectItem>
                <SelectItem value="engagement">Engagement</SelectItem>
                <SelectItem value="blockchain">Blockchain</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium">Active Users</h3>
                  <p className="text-2xl font-bold">
                    {userMetrics[timeRange].activeUser}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">New Signups</h3>
                  <p className="text-2xl font-bold">
                    {userMetrics[timeRange].totalUser -
                      userMetrics.daily.totalUser}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Content Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium">Total Posts</h3>
                  <p className="text-2xl font-bold">
                    {contentMetrics[timeRange].totalPosts}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Total Views</h3>
                  <p className="text-2xl font-bold">
                    {contentMetrics[timeRange].totalViews}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium">Total Likes</h3>
                  <p className="text-2xl font-bold">
                    {engagementMetrics[timeRange].totalLikes}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Total Comments</h3>
                  <p className="text-2xl font-bold">
                    {engagementMetrics[timeRange].totalComments}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="blockchain">
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium">Total Tokens</h3>
                  <p className="text-2xl font-bold">
                    {blockchainMetrics[timeRange].totalTokens}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Total Wallets</h3>
                  <p className="text-2xl font-bold">
                    {blockchainMetrics[timeRange].totalWalletOnSolana +
                      blockchainMetrics[timeRange].totalWalletOnPolygon +
                      blockchainMetrics[timeRange].totalWalletOnEthereum}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
