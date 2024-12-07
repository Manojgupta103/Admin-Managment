export async function fetchDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userMetrics: {
          daily: {
            totalUser: 1000,
            activeUser: 750,
            totalReferral: 50,
            creator: 100,
          },
          monthly: {
            totalUser: 900,
            activeUser: 600,
            totalReferral: 30,
            creator: 80,
          },
        },
        contentMetrics: {
          daily: {
            totalPosts: 500,
            totalViews: 10000,
            totalComments: 2000,
            totalPostShares: 300,
          },
          monthly: {
            totalPosts: 450,
            totalViews: 9000,
            totalComments: 1800,
            totalPostShares: 250,
          },
        },
        engagementMetrics: {
          daily: {
            totalLikes: 5000,
            totalViews: 20000,
            totalMessage: 1000,
            privateChats: 500,
          },
          monthly: {
            totalLikes: 4500,
            totalViews: 18000,
            totalMessage: 900,
            privateChats: 450,
          },
        },
        blockchainMetrics: {
          daily: {
            totalTokens: 1000000,
            totalWalletOnSolana: 500,
            totalWalletOnPolygon: 300,
            totalWalletOnEthereum: 200,
          },
          monthly: {
            totalTokens: 900000,
            totalWalletOnSolana: 450,
            totalWalletOnPolygon: 250,
            totalWalletOnEthereum: 180,
          },
        },
      });
    }, 1000); // Simulate network delay
  });
}
