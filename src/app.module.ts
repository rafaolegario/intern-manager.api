import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { HttpModule } from './http/http.module'
import { UseCasesModule } from './use-cases/useCases.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    HttpModule,
    UseCasesModule
  ],

  providers: [],
})
export class AppModule {}
