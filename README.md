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

## Performance Test Results

JMeter test plans and CSV result files are located in `src/test/resources/performancetest/`.

Note: The following files exceed GitHub's 100MB file size limit and are hosted on Google Drive:
- [results_normal.csv (Google Drive)](https://drive.google.com/file/d/1wOLQ3kIsQ0k-91lewtED1wJtYXmMfqml/view?usp=drive_link)
- [results_high.csv (Google Drive)](https://drive.google.com/file/d/1pASY0plQ7rKtgM_rMfz-Yum9qR33HZ2a/view?usp=drive_link)