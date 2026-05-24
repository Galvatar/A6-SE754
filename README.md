# OOPS Leaderboard Feature

This project implements a minimal leaderboard feature for performance testing. The backend provides a `GET /leaderboard` endpoint that returns users sorted by weekly points in descending order. The frontend fetches this endpoint and displays the ranked leaderboard with user names and points.

## Running the app

Start the frontend:

```bash
cd frontend
npm run dev
```

Start the backend:
```bash
cd backend
node index.js
```
Open [http://localhost:3000](http://localhost:3000) to view the leaderboard.