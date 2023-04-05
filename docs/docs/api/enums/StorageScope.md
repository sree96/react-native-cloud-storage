---
sidebar_position: 1
---

# StorageScope

`StorageScope` is a TypeScript enum containing the possible values for the `scope` parameters of the rest of the API.

```ts
import { StorageScope } from 'react-native-cloud-storage';
```

Available scopes are `documents` and `app_data`. When using `documents`, data will be stored in the user-visible root directory of the cloud storage. When using `app_data`, the directory for app-specific data, usually hidden from the user, will be used.

## Definition

```ts
enum StorageScope {
  Documents = 'documents',
  AppData = 'app_data',
}
```

When using pure JavaScript, simply use the appropriate values:

```js
RNCloudStorage.exists('test.txt', 'documents');
```