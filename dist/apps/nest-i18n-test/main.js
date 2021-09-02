(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/nest-i18n-test/src/app.controller.ts":
/*!***************************************************!*\
  !*** ./apps/nest-i18n-test/src/app.controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nest-i18n-test/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/nest-i18n-test/src/app.module.ts":
/*!***********************************************!*\
  !*** ./apps/nest-i18n-test/src/app.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const auth_1 = __webpack_require__(/*! @nest-i18n-test/auth */ "./libs/auth/src/index.ts");
const prisma_1 = __webpack_require__(/*! @nest-i18n-test/prisma */ "./libs/prisma/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const nestjs_i18n_1 = __webpack_require__(/*! nestjs-i18n */ "nestjs-i18n");
const path = __webpack_require__(/*! path */ "path");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/nest-i18n-test/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nest-i18n-test/src/app.service.ts");
const http_exception_filter_1 = __webpack_require__(/*! ./http-exception.filter */ "./apps/nest-i18n-test/src/http-exception.filter.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            nestjs_i18n_1.I18nModule.forRootAsync({
                useFactory: () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    return {
                        fallbackLanguage: 'en',
                        parserOptions: {
                            path: path.join(__dirname, '/locales/'),
                            watch: true, //enable live translations
                        },
                    };
                }),
                parser: nestjs_i18n_1.I18nJsonParser,
                resolvers: [nestjs_i18n_1.AcceptLanguageResolver],
            }),
            auth_1.AuthModule,
            prisma_1.PrismaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.AllExceptionsFilter, // global filter
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/nest-i18n-test/src/app.service.ts":
/*!************************************************!*\
  !*** ./apps/nest-i18n-test/src/app.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to nest-i18n-test!' };
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/nest-i18n-test/src/http-exception.filter.ts":
/*!**********************************************************!*\
  !*** ./apps/nest-i18n-test/src/http-exception.filter.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_i18n_1 = __webpack_require__(/*! nestjs-i18n */ "nestjs-i18n");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(i18n) {
        this.i18n = i18n;
    }
    catch(exception, host) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            const statusCode = exception.getStatus();
            const req = ctx.getRequest();
            let message = exception.getResponse();
            message = yield this.i18n.translate(message.key, {
                lang: ctx.getRequest().i18nLang,
                args: message.args,
            });
            response.status(statusCode).json({ statusCode, message });
        });
    }
};
AllExceptionsFilter = (0, tslib_1.__decorate)([
    (0, common_1.Catch)(common_1.HttpException),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_i18n_1.I18nService !== "undefined" && nestjs_i18n_1.I18nService) === "function" ? _a : Object])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;


/***/ }),

/***/ "./apps/nest-i18n-test/src/main.ts":
/*!*****************************************!*\
  !*** ./apps/nest-i18n-test/src/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/nest-i18n-test/src/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/');
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/auth/src/index.ts":
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
(0, tslib_1.__exportStar)(__webpack_require__(/*! ./lib/auth.module */ "./libs/auth/src/lib/auth.module.ts"), exports);


/***/ }),

/***/ "./libs/auth/src/lib/auth.controller.ts":
/*!**********************************************!*\
  !*** ./libs/auth/src/lib/auth.controller.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const prisma_1 = __webpack_require__(/*! @nest-i18n-test/prisma */ "./libs/prisma/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./libs/auth/src/lib/auth.service.ts");
const local_guard_1 = __webpack_require__(/*! ./local.guard */ "./libs/auth/src/lib/local.guard.ts");
const request_interface_1 = __webpack_require__(/*! ./request.interface */ "./libs/auth/src/lib/request.interface.ts");
let AuthController = class AuthController {
    constructor(prisma, authService) {
        this.prisma = prisma;
        this.authService = authService;
    }
    register(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, password } = data;
            return yield this.authService.register(email, password);
        });
    }
    login(request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            console.log(request);
            const { user } = request;
            const { accessToken, accessCookie, } = this.authService.getCookieAndAccessToken(user.id);
            request.res.setHeader('Set-Cookie', [accessCookie]);
            return yield this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    accessToken,
                },
            });
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('register'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "register", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof request_interface_1.Request !== "undefined" && request_interface_1.Request) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('auth'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof prisma_1.PrismaService !== "undefined" && prisma_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _c : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./libs/auth/src/lib/auth.module.ts":
/*!******************************************!*\
  !*** ./libs/auth/src/lib/auth.module.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./libs/auth/src/lib/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./libs/auth/src/lib/auth.service.ts");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./libs/auth/src/lib/local.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.registerAsync({
                useFactory: (configService) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    return {
                        secret: configService.get('JWT_ACCESS_SECRET'),
                        signOptions: {
                            expiresIn: configService.get('JWT_EXPIRATION'),
                        },
                    };
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./libs/auth/src/lib/auth.service.ts":
/*!*******************************************!*\
  !*** ./libs/auth/src/lib/auth.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const prisma_1 = __webpack_require__(/*! @nest-i18n-test/prisma */ "./libs/prisma/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    generateAccessToken(payload) {
        return this.jwtService.sign(payload);
    }
    getCookieAndAccessToken(userId) {
        const token = this.generateAccessToken({ userId });
        const cookie = `Access=${token}; HttpOnly; Path=/; Max-Age="6d"`;
        return {
            accessToken: token,
            accessCookie: cookie,
        };
    }
    // check password if matches, return user if matches
    validateUser(email, password) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findUnique({
                where: { email },
                select: {
                    id: true,
                    password: true,
                },
            });
            if (user) {
                const isMatch = password === user.password;
                if (!isMatch)
                    throw new common_1.HttpException({
                        key: 'auth.USER_CREDENTIALS_WRONG',
                    }, common_1.HttpStatus.UNAUTHORIZED);
                return yield this.prisma.user.findUnique({
                    where: {
                        id: user.id,
                    },
                });
            }
            return null;
        });
    }
    // register
    register(email, password) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const isExisting = yield this.prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (isExisting)
                throw new common_1.HttpException({
                    key: 'auth.USER_ALREADY_EXISTS_EMAIL',
                    args: {
                        email,
                    },
                }, common_1.HttpStatus.CONFLICT);
            return yield this.prisma.user.create({
                data: {
                    email,
                    password,
                },
            });
        });
    }
};
AuthService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof prisma_1.PrismaService !== "undefined" && prisma_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./libs/auth/src/lib/local.guard.ts":
/*!******************************************!*\
  !*** ./libs/auth/src/lib/local.guard.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./libs/auth/src/lib/local.strategy.ts":
/*!*********************************************!*\
  !*** ./libs/auth/src/lib/local.strategy.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./libs/auth/src/lib/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
        });
        this.authService = authService;
    }
    validate(email, password) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.authService.validateUser(email, password);
        });
    }
};
LocalStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./libs/auth/src/lib/request.interface.ts":
/*!************************************************!*\
  !*** ./libs/auth/src/lib/request.interface.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./libs/prisma/src/index.ts":
/*!**********************************!*\
  !*** ./libs/prisma/src/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
(0, tslib_1.__exportStar)(__webpack_require__(/*! ./lib/prisma.module */ "./libs/prisma/src/lib/prisma.module.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__(/*! ./lib/prisma.service */ "./libs/prisma/src/lib/prisma.service.ts"), exports);


/***/ }),

/***/ "./libs/prisma/src/lib/prisma.module.ts":
/*!**********************************************!*\
  !*** ./libs/prisma/src/lib/prisma.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./libs/prisma/src/lib/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
PrismaModule = (0, tslib_1.__decorate)([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [],
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);
exports.PrismaModule = PrismaModule;


/***/ }),

/***/ "./libs/prisma/src/lib/prisma.service.ts":
/*!***********************************************!*\
  !*** ./libs/prisma/src/lib/prisma.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        super();
    }
    // async onModuleInit() {
    //     // optional and better for performance, because of prisma client lazy connect behavior
    //     // https://github.com/fivethree-team/nestjs-prisma-starter/issues/438
    //     await this.$connect()
    // }
    onModuleDestroy() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.$disconnect();
        });
    }
};
PrismaService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], PrismaService);
exports.PrismaService = PrismaService;


/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./apps/nest-i18n-test/src/main.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jiewang/Desktop/nest-i18-test/nest-i18n-test/apps/nest-i18n-test/src/main.ts */"./apps/nest-i18n-test/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "nestjs-i18n":
/*!******************************!*\
  !*** external "nestjs-i18n" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nestjs-i18n");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map