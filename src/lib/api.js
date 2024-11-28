export async function fetchDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userMetrics: {
          daily: {
            totalUser: 31,
            activeUser: 27,
            totalReferral: 14,
            creator: 6,
          },
          monthly: {
            totalUser: 15126,
            activeUser: 1495,
            totalReferral: 1856,
            creator: 311,
          },
          allTime: {
            totalUser: 125688,
            activeUser: 108769,
            totalReferral: 22504,
            creator: 19148,
          },
        },
        contentMetrics: {
          daily: {
            totalPosts: 42,
            totalCategory: 6,
            totalPostExitCount: 22,
            totalPostShares: 6,
            totalViews: 424,
            totalComments: 34,
            totalPostBlocked: 1,
            totalPostDeleted: 1,
          },
          monthly: {
            totalPosts: 18624,
            totalCategory: 179,
            totalPostExitCount: 730,
            totalPostShares: 946,
            totalViews: 78858,
            totalComments: 17538,
            totalPostBlocked: 82,
            totalPostDeleted: 87,
          },
          allTime: {
            totalPosts: 232021,
            totalCategory: 1347,
            totalPostExitCount: 57083,
            totalPostShares: 49729,
            totalViews: 1174401,
            totalComments: 145138,
            totalPostBlocked: 6886,
            totalPostDeleted: 4292,
          },
        },
        engagementMetrics: {
          daily: {
            totalLikes: 21,
            totalViews: 81,
            totalNotifications: 9,
            totalMessage: 13,
            privateChats: 5,
          },
          monthly: {
            totalLikes: 6528,
            totalViews: 44468,
            totalNotifications: 1539,
            totalMessage: 1229,
            privateChats: 657,
          },
          allTime: {
            totalLikes: 291079,
            totalViews: 1631651,
            totalNotifications: 58351,
            totalMessage: 59239,
            privateChats: 16713,
          },
        },
        blockchainMetrics: {
          daily: {
            totalTokens: 18,
            totalWalletOnSolana: 9,
            totalWalletOnPolygon: 20,
            totalWalletOnEthereum: 24,
          },
          monthly: {
            totalTokens: 36940,
            totalWalletOnSolana: 1871,
            totalWalletOnPolygon: 4315,
            totalWalletOnEthereum: 1473,
          },
          allTime: {
            totalTokens: 965066,
            totalWalletOnSolana: 284033,
            totalWalletOnPolygon: 392887,
            totalWalletOnEthereum: 531871,
          },
        },
      });
    }, 1000); // Simulate network delay
  });
}
