import z from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string()
})

const config = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
})

if (!config.success) {
  console.error('Các giá trị cấu hình không hợp lệ:', config.error.issues)
  throw new Error('Cấu hình không hợp lệ')
}

const envConfig = config.data

export default envConfig
