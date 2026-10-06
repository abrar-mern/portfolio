# Abrar Khan Portfolio

Full-stack personal portfolio built with React, Vite, Tailwind CSS, Node.js, Express and MongoDB.

## Setup

### Backend

```bash
cd server
npm install
npm run dev
```

The backend reads `server/.env`:

```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/abrar_portfolio
FRONTEND_URL=http://localhost:5173
ADMIN_API_KEY=change_this_to_a_strong_secret
```

Replace `MONGODB_URI` with your MongoDB Atlas connection string when you want to use your hosted database.

### Frontend

```bash
cd client
npm install
npm run dev
```

The frontend reads `client/.env`:

```env
VITE_GITHUB_USERNAME=abrar-mern
VITE_SITE_URL=http://localhost:5173
VITE_API_URL=http://localhost:5001
VITE_TRACKER_API_URL=http://localhost:5001/api/v1
```

Open `http://localhost:5173` after the frontend is running. The contact form
uses FormSubmit to email `abrarkhan.fullstack@gmail.com`; the first real
submission sends a one-time activation email to that inbox. Open that email and
confirm the form before relying on submissions. The optional Node/MongoDB
backend is still used for visitor tracking when configured.

## Build and deploy

```bash
cd client
npm run build
```

Deploy or serve `client/dist` rather than `client/index.html`. Vite writes the
compiled CSS, JavaScript and imported images into that directory. When using
XAMPP/Apache, point the virtual host document root at `client/dist`; when using
Vercel from the repository root, the included root `vercel.json` runs the same
build automatically.

## API

- `GET /api/v1/health`
- `POST /api/v1/contact`
- `POST /api/v1/visitors/track`
- `POST /api/v1/visitors/heartbeat`
- Admin routes use `X-Admin-Key`.
