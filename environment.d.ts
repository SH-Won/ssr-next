namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    NEXT_PUBLIC_MOVIE_BASE_URL: string
    NEXT_PUBLIC_MOVIE_API_KEY: string
    NEXT_PUBLIC_BASE_IMAGE_URL: string
    NEXT_PUBLIC_BASE_BACK_DROP_IMAGE_URL: string
    NEXT_PUBLIC_ACCESS_TOKEN: string
  }
}
