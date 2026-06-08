import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/')
const isUserPage = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`

// https://vite.dev/config/
export default defineConfig({
  base: repo && !isUserPage ? `/${repo}/` : '/',
  plugins: [react()],
})
