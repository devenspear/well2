# Wellness Snapshot

A mobile-first wellness assessment web app designed for Baby Boomers to self-assess their wellness across 6 categories and receive personalized recommendations.

## Features

- **Simple Assessment**: 6 wellness categories with intuitive slider inputs
- **Visual Results**: Radar chart comparing your scores to benchmarks
- **Personalized Recommendations**: Based on your assessment results
- **Mobile-First Design**: Fully responsive for all devices
- **No Authentication Required**: Start assessing immediately

## Tech Stack

- Next.js
- Tailwind CSS
- Chart.js
- React

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `components/`: React components
  - `Landing.js`: Initial landing page
  - `Demographics.js`: Age, gender, location collection
  - `Assessment.js`: Wellness questions with sliders
  - `Results.js`: Results display with radar chart
  - `FinalCTA.js`: Final call-to-action page
  - `ChartComponent.js`: Radar chart visualization

## Future Improvements

- Connect to benchmark API for real data
- Add email functionality for results
- Implement PDF export
- Add user accounts with history tracking
- Integrate with Supabase or Firebase for data persistence
