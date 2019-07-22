# Background and Overview (Where the 1% Invest)

Finbox.io and whale whisdom give retail investors insight into the portfolios of their role models. Hedge funds are required to disclose their holdings on a quarterly basis to the SEC, in a filing known as the 13-F. Since the alternative investments sector remains an attractive destination for the wallets of the wealthy, by studying the investment decisions of hedge fund managers we can gain an understanding of where the well off are looking to shore up capital. 

The purpose of this data visualization is to illustrate how elite hedge fund managers have performed in the post-recessionary period, across varying market environments (sustained high-VIX, trade war/various global headwinds, etc.) and sectors.

# Functionality and MVP

In 'Where the 1% Invest', users will be able to: 

- [ ] Filter by market environment and see the performance of each hedge fund manager
- [ ] See which money managers are best suited towards navigating macro headwinds or spotting nascent trends
- [ ] Stay away from or populate popular hedge fund hotels
- [ ] Cumulative buy/sell rating on the manager's total portfolio
- [ ] See an updated, quarterly snapshot tracking fund performance

# Wireframes

This app will consist of a series of line charts, and a sidebar with a toggle selector. 

Wireframe structure (hand-drawn image):

- Chart
- Toggles
  - Market conditions
  - Average time horizon per security
  - Hedge fund hotels
  - Fair value valuation of each hedge fund manager's portfolio relative to market value (getting buy/sell recommendations to see what the
  fund investor is seeing that I'm not)
  
# Architecture and technologies

- Vanilla JavaScript for overall structure and chart interactivity
- Plotly / D3 for data rendering
- WhaleWisdom API to pull holdings for each manager
- Finbox APIs to pull fair value valuations for each holding 
- Webpack to bundle and serve up the various scripts. 

In addition to the webpack entry file, there will be two additional scripts involved in this project: 

chart.js: this script will handle the logic for creating and updating the necessary DOM elements. 
toggle.js: entry file for the various toggle features

# Implementation Timeline 

Day 1: 

- [ ] Completed brickbreaker tutorials

Day 2: 

- [ ] Setup all necessary Node modules (get webpack up and running)
- [ ] Create webpack.config.js and package.json

Day 3:

- [ ] Master the Finbox.io and Whale Wisdom APIs
- [ ] Connect various toggles (datapoints) to the chart itself

Day 4: 

Day 5:

- [ ] N/A








