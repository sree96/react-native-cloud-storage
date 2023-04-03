export type NativeRNCloudStorageScope = 'documents' | 'hidden';

export default interface NativeRNCloudStorage {
  fileExists: (path: string, scope: NativeRNCloudStorageScope) => Promise<boolean>;
  createFile: (path: string, data: string, scope: NativeRNCloudStorageScope, overwrite: boolean) => Promise<void>;
  readFile: (path: string, scope: NativeRNCloudStorageScope) => Promise<string>;
  deleteFile: (path: string, scope: NativeRNCloudStorageScope) => Promise<void>;
}
