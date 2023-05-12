import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../shemas/user";
import {AuthService} from "../../services/Authentication/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import { ToursModule } from '../tours/tours.module';

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '60s'},
    }),
    ToursModule,],
    controllers: [UsersController],
    providers: [ UsersController,AuthService],
})
export class UsersModule {}