# BlogApp

A full-stack blog application built with **React**, **Tailwind CSS** and **Appwrite**. Users can sign up, log in, write rich-text posts with a featured image, and edit or delete their own posts.

**Live demo:** https://appwrite-blog-omega-sable.vercel.app/

## Features

- Email/password authentication (signup, login, logout) with Appwrite Auth
- Create, read, update and delete posts
- Rich text editor powered by TinyMCE
- Featured image upload and storage with Appwrite Storage
- Auto-generated slug from the post title
- Protected routes (only logged-in users can add or edit posts)
- Only the author can edit or delete a post
- Active/inactive post status
- Responsive UI with Tailwind CSS

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| State management | Redux Toolkit, React Redux |
| Routing | React Router |
| Forms | React Hook Form |
| Rich text editor | TinyMCE |
| Backend (BaaS) | Appwrite (Auth, Databases, Storage) |
| Deployment | Vercel |

## Project Structure

```
src/
├── appwrite/        # Appwrite services (auth.js, config.js)
├── components/      # Reusable UI (Header, Footer, PostCard, PostForm, RTE, ...)
├── conf/            # Environment variable config
├── pages/           # Route pages (Home, AllPosts, AddPost, EditPost, Post, Login, Signup)
├── store/           # Redux store and auth slice
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Appwrite

1. Create a project in the [Appwrite Console](https://cloud.appwrite.io).
2. Add a **Web platform** with hostname `localhost` (add your deployed domain later).
3. Create a **Database** and a **Table** named `posts` with these columns:

   | Key | Type | Size | Required |
   | --- | --- | --- | --- |
   | `title` | String | 300 | Yes |
   | `content` | String | 10000+ | Yes |
   | `featuredImage` | String | 300 | Yes |
   | `status` | String / Enum (`active`, `inactive`) | | Yes |
   | `userId` | String | 300 | Yes |

   The post slug is used as the document ID (max 36 characters, letters, numbers and underscores only).

4. Table permissions: `Any` -> **Read**, `Users` -> **Create**, **Update**, **Delete**.
5. Create a **Storage bucket** with permissions: `Any` -> **Read**, `Users` -> **Create**.

### 4. Environment variables

Create a `.env` file in the **project root** (next to `package.json`):

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_table_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

Get a free TinyMCE API key from [tiny.cloud](https://www.tiny.cloud) and add `localhost` to its approved domains.

> Never commit your `.env` file. It is already listed in `.gitignore`.

### 5. Run the app

```bash
npm run dev
```

Open http://localhost:5173.

## Deployment (Vercel)

1. Push the project to GitHub and import it on [Vercel](https://vercel.com).
2. Add all the `VITE_...` variables under **Settings -> Environment Variables**.
3. Add a `vercel.json` in the project root so page refreshes work with React Router:

   ```json
   { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
   ```

4. Add your Vercel domain to **Appwrite Console -> Platforms -> Web** and to TinyMCE **Approved domains**.
5. Redeploy after changing environment variables.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Future Improvements

- Comments and likes
- Search and category filters
- User profile pages
- Pagination on the All Posts page

## Acknowledgements

Built while following the Chai aur Code React + Appwrite series.

## Author

**Anup Patwa**

If you like this project, give it a star.
