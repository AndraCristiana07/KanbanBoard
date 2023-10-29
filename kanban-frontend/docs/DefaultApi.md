# FastApi.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBoardBoardUpdatePut**](DefaultApi.md#createBoardBoardUpdatePut) | **PUT** /board/update | Create Board
[**createTaskTaskDeleteDelete**](DefaultApi.md#createTaskTaskDeleteDelete) | **DELETE** /task/delete | Create Task
[**createTaskTaskUpdatePut**](DefaultApi.md#createTaskTaskUpdatePut) | **PUT** /task/update | Create Task
[**deleteBoardBoardDeleteDelete**](DefaultApi.md#deleteBoardBoardDeleteDelete) | **DELETE** /board/delete | Delete Board
[**deleteColumnBoardColumnDeleteDelete**](DefaultApi.md#deleteColumnBoardColumnDeleteDelete) | **DELETE** /board/column/delete | Delete Column
[**loginTokenPost**](DefaultApi.md#loginTokenPost) | **POST** /token | Login
[**moveTaskTaskMovePost**](DefaultApi.md#moveTaskTaskMovePost) | **POST** /task/move | Move Task
[**rootAuthDebugGet**](DefaultApi.md#rootAuthDebugGet) | **GET** /auth_debug | Root
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | Root
[**signupSignupPost**](DefaultApi.md#signupSignupPost) | **POST** /signup | Signup
[**updateColumnBoardColumnUpdatePost**](DefaultApi.md#updateColumnBoardColumnUpdatePost) | **POST** /board/column/update | Update Column

<a name="createBoardBoardUpdatePut"></a>
# **createBoardBoardUpdatePut**
> Object createBoardBoardUpdatePut(body)

Create Board

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let body = new FastApi.Board(); // Board | 

apiInstance.createBoardBoardUpdatePut(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Board**](Board.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTaskTaskDeleteDelete"></a>
# **createTaskTaskDeleteDelete**
> Object createTaskTaskDeleteDelete(taskId)

Create Task

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let taskId = null; // Object | 

apiInstance.createTaskTaskDeleteDelete(taskId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTaskTaskUpdatePut"></a>
# **createTaskTaskUpdatePut**
> Object createTaskTaskUpdatePut(body)

Create Task

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let body = new FastApi.Task(); // Task | 

apiInstance.createTaskTaskUpdatePut(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Task**](Task.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBoardBoardDeleteDelete"></a>
# **deleteBoardBoardDeleteDelete**
> Object deleteBoardBoardDeleteDelete(boardId)

Delete Board

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let boardId = null; // Object | 

apiInstance.deleteBoardBoardDeleteDelete(boardId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boardId** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteColumnBoardColumnDeleteDelete"></a>
# **deleteColumnBoardColumnDeleteDelete**
> Object deleteColumnBoardColumnDeleteDelete(boardId, columId)

Delete Column

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let boardId = null; // Object | 
let columId = null; // Object | 

apiInstance.deleteColumnBoardColumnDeleteDelete(boardId, columId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boardId** | [**Object**](.md)|  | 
 **columId** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginTokenPost"></a>
# **loginTokenPost**
> Object loginTokenPost(grantType, username, password, scope, clientId, clientSecret)

Login

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
let grantType = null; // Object | 
let username = null; // Object | 
let password = null; // Object | 
let scope = null; // Object | 
let clientId = null; // Object | 
let clientSecret = null; // Object | 

apiInstance.loginTokenPost(grantType, username, password, scope, clientId, clientSecret, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | [**Object**](.md)|  | 
 **username** | [**Object**](.md)|  | 
 **password** | [**Object**](.md)|  | 
 **scope** | [**Object**](.md)|  | 
 **clientId** | [**Object**](.md)|  | 
 **clientSecret** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="moveTaskTaskMovePost"></a>
# **moveTaskTaskMovePost**
> Object moveTaskTaskMovePost(taskId, dest)

Move Task

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let taskId = null; // Object | 
let dest = null; // Object | 

apiInstance.moveTaskTaskMovePost(taskId, dest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**Object**](.md)|  | 
 **dest** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootAuthDebugGet"></a>
# **rootAuthDebugGet**
> Object rootAuthDebugGet()

Root

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
apiInstance.rootAuthDebugGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootGet"></a>
# **rootGet**
> Object rootGet()

Root

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
apiInstance.rootGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupSignupPost"></a>
# **signupSignupPost**
> Object signupSignupPost(body)

Signup

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
let body = new FastApi.SignUpForm(); // SignUpForm | 

apiInstance.signupSignupPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignUpForm**](SignUpForm.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateColumnBoardColumnUpdatePost"></a>
# **updateColumnBoardColumnUpdatePost**
> Object updateColumnBoardColumnUpdatePost(body, boardId)

Update Column

### Example
```javascript
import {FastApi} from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let body = new FastApi.Column(); // Column | 
let boardId = null; // Object | 

apiInstance.updateColumnBoardColumnUpdatePost(body, boardId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Column**](Column.md)|  | 
 **boardId** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

