import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService: ConfigService<Env, true> = app.get(ConfigService)
  app.enableCors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
  });
  const port = configService.get('PORT', { infer: true })
  await app.listen(port)
}
bootstrap()
