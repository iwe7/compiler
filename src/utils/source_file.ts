import { createCompilerHost, ScriptTarget, SourceFile } from 'typescript';
import { readFileSync } from 'fs';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { resolve } from 'path';
let _tsconfig: string = resolve(process.cwd(), 'tsconfig.json');
export const ofSourceFile: (file: string, tsconfig?: string) => Observable<SourceFile> =
    (file: string, tsconfig: string = _tsconfig) => {
        if (tsconfig) {
            _tsconfig = tsconfig;
        }
        return of(null).pipe(
            map(() => {
                return JSON.parse(readFileSync(_tsconfig).toString())
            }),
            map((options) => {
                return createCompilerHost(options);
            }),
            map((host) => host.getSourceFile(file, ScriptTarget.ESNext))
        );
    }
