export function importCsjOrEsModule(filePath: string): any {
    const imported = require(filePath);
    return imported.default !== undefined ? imported.default : imported;
}