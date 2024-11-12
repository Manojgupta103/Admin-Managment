# Admin Dashboard

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Video Demo](#video-demo)
- [Components](#components)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Admin Dashboard is a powerful, interactive web application built with Next.js and React. It provides a comprehensive overview of user engagement, content metrics, blockchain activity, and more. This dashboard is designed to help administrators and managers quickly understand and analyze key performance indicators (KPIs) across various aspects of their platform.

## Features

- **Interactive Overview**: A dynamic summary of all key metrics with customizable time ranges.
- **User Management**: Track user growth, active users, and referrals.
- **Content Metrics**: Monitor post creation, views, shares, and moderation actions.
- **Engagement Analysis**: Analyze likes, views, notifications, and messaging activity.
- **Blockchain Integration**: Keep track of token distribution and wallet creation across multiple chains.
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices.
- **Real-time Updates**: Data refreshes automatically to provide the most current information.
- **Customizable Charts**: Interactive charts that allow for deep dive into specific metrics.

## Installation

To get started with the Admin Dashboard, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/admin-dashboard.git
   cd admin-dashboard
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## Usage

After installation, you can navigate through the dashboard using the sidebar menu. Here's a quick overview of how to use the main features:

1. **Overview Page**: This is your landing page, showing a summary of all key metrics. Use the time range selector to view data for different periods.

2. **Users Page**: Dive deep into user statistics. Track new sign-ups, active users, and top creators.

3. **Content Page**: Analyze content performance, including views, shares, and moderation actions.

4. **Engagement Page**: Monitor user interactions such as likes, comments, and messaging activity.

5. **Blockchain Page**: Keep track of token distribution and wallet creation across Solana, Polygon, and Ethereum.

## Video Demo

https://github.com/user-attachments/assets/c6a8eeba-ddfd-4770-8ab4-c2079b2adf57

Click the image above to watch a comprehensive video demonstration of the Admin Dashboard in action. The video covers:

- Navigation and layout overview
- Exploring key features and functionalities
- Customizing views and generating reports
- Tips for efficient dashboard usage

## Components

The Admin Dashboard is built using several reusable components:

- `Overview`: The main dashboard component displaying summary metrics.
- `UserMetrics`: Detailed user statistics and growth charts.
- `ContentAnalytics`: In-depth analysis of content performance and moderation.
- `EngagementInsights`: Visualization of user engagement and interaction data.
- `BlockchainMonitor`: Tracking of blockchain-related activities and token distribution.

Each component is designed to be modular and can be easily customized or extended as needed.

## API

The dashboard interacts with a backend API to fetch and display data. The main API functions are located in `lib/api.js`. Key functions include:

- `fetchDashboardData()`: Retrieves all dashboard metrics.
- `fetchUserData(timeRange)`: Fetches user-specific data for a given time range.
- `fetchContentData(timeRange)`: Retrieves content metrics for a specified period.
- `fetchEngagementData(timeRange)`: Gets engagement statistics for a particular timeframe.
- `fetchBlockchainData(timeRange)`: Fetches blockchain-related metrics for the specified duration.

Refer to the API documentation for detailed information on request/response formats and available endpoints.

## Contributing

We welcome contributions to the Admin Dashboard! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

For any additional questions or support, please contact our team at support@admindashboard.com.

```

This README provides a comprehensive overview of the Admin Dashboard project, including installation instructions, usage guidelines, a section for a video demo, component descriptions, API information, contribution guidelines, and licensing details. The Markdown format ensures that it will render nicely on GitHub or other platforms that support Markdown.

Remember to replace placeholder URLs, email addresses, and other project-specific information with your actual project details. Also, you'll need to create or obtain appropriate images for the logo and video thumbnail, replacing the placeholder SVG URLs with actual image URLs.
