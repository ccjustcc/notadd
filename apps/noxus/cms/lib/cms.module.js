"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const magnus_client_1 = require("@notadd/magnus-client");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let CmsModule = class CmsModule {
};
CmsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            magnus_client_1.MagnusClientModule.create({
                inputGolb: path_1.join(__dirname, '/**/*.ts'),
                outputPath: __dirname,
                apollo: {
                    uri: 'http://localhost:9000'
                }
            })
        ]
    })
], CmsModule);
exports.CmsModule = CmsModule;
//# sourceMappingURL=cms.module.js.map