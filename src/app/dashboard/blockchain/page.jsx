'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchDashboardData } from '@/lib/api'
import { Coins, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function BlockchainPage() {
  const [blockchainData, setBlockchainData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [timeFrame, setTimeFrame] = useState('daily')
  const [showPercentages, setShowPercentages] = useState(false)

  useEffect(() => {
    async function loadBlockchainData() {
      try {
        const data = await fetchDashboardData()
        setBlockchainData(data.blockchainMetrics)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    loadBlockchainData()
  }, [])

  if (isLoading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-500">Error: {error}</div>
  if (!blockchainData) return <div className="text-center">No blockchain data available</div>

  const renderStats = (data) => {
    const stats = [
      { name: 'Total Tokens', value: data.totalTokens, icon: Coins, color: 'bg-blue-500' },
      { name: 'Solana Wallets', value: data.totalWalletOnSolana, icon: Wallet, color: 'bg-green-500' },
      { name: 'Polygon Wallets', value: data.totalWalletOnPolygon, icon: Wallet, color: 'bg-yellow-500' },
      { name: 'Ethereum Wallets', value: data.totalWalletOnEthereum, icon: Wallet, color: 'bg-purple-500' },
    ]

    return (
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
                <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    )
  }

  const calculateGrowth = (current, previous) => {
    const growth = ((current - previous) / previous) * 100
    return growth.toFixed(2)
  }

  const renderComparison = () => {
    const currentData = blockchainData[timeFrame]
    const previousData = timeFrame === 'daily' ? blockchainData.daily : timeFrame === 'monthly' ? blockchainData.monthly : blockchainData.allTime

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(currentData).map(([key, value]) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">{key}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              {showPercentages && (
                <div className="flex items-center mt-2">
                  {value > previousData[key] ? (
                    <ArrowUpRight className="text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="text-red-500 mr-1" />
                  )}
                  <span className={value > previousData[key] ? "text-green-500" : "text-red-500"}>
                    {calculateGrowth(value, previousData[key])}%
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Blockchain Metrics</h1>
      <div className="flex justify-between items-center">
        <Select value={timeFrame} onValueChange={setTimeFrame}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time frame" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="allTime">All Time</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Switch
            id="show-percentages"
            checked={showPercentages}
            onCheckedChange={setShowPercentages}
          />
          <Label htmlFor="show-percentages">Show growth percentages</Label>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Detailed Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <h2 className="text-2xl font-semibold mb-4">Blockchain Overview</h2>
          {renderStats(blockchainData[timeFrame])}
        </TabsContent>
        <TabsContent value="details">
          <h2 className="text-2xl font-semibold mb-4">Detailed Blockchain Statistics</h2>
          {renderComparison()}
        </TabsContent>
      </Tabs>
    </div>
  )
}