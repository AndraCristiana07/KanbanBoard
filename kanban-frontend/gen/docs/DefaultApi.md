# FastApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBoardBoardUpdatePut**](DefaultApi.md#createBoardBoardUpdatePut) | **PUT** /board/update | Create Board
[**createTaskTaskDeleteDelete**](DefaultApi.md#createTaskTaskDeleteDelete) | **DELETE** /task/delete | Create Task
[**createTaskTaskUpdatePut**](DefaultApi.md#createTaskTaskUpdatePut) | **PUT** /task/update | Create Task
[**deleteBoardBoardDeleteDelete**](DefaultApi.md#deleteBoardBoardDeleteDelete) | **DELETE** /board/delete | Delete Board
[**deleteColumnBoardColumnDeleteDelete**](DefaultApi.md#deleteColumnBoardColumnDeleteDelete) | **DELETE** /board/column/delete | Delete Column
[**getBoardBoardGet**](DefaultApi.md#getBoardBoardGet) | **GET** /board | Get Board
[**getBoardlistBoardlistGet**](DefaultApi.md#getBoardlistBoardlistGet) | **GET** /boardlist | Get Boardlist
[**getColumnColumnGet**](DefaultApi.md#getColumnColumnGet) | **GET** /column | Get Column
[**getTasksTasksGet**](DefaultApi.md#getTasksTasksGet) | **GET** /tasks | Get Tasks
[**loginTokenPost**](DefaultApi.md#loginTokenPost) | **POST** /token | Login
[**moveTaskTaskMovePost**](DefaultApi.md#moveTaskTaskMovePost) | **POST** /task/move | Move Task
[**rootAuthDebugGet**](DefaultApi.md#rootAuthDebugGet) | **GET** /auth_debug | Root
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | Root
[**signupSignupPost**](DefaultApi.md#signupSignupPost) | **POST** /signup | Signup
[**updateColumnBoardColumnUpdatePost**](DefaultApi.md#updateColumnBoardColumnUpdatePost) | **POST** /board/column/update | Update Column



## createBoardBoardUpdatePut

> Object createBoardBoardUpdatePut(board)

Create Board

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let board = new FastApi.Board(); // Board | 
apiInstance.createBoardBoardUpdatePut(board, (error, data, response) => {
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
 **board** | [**Board**](Board.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTaskTaskDeleteDelete

> Object createTaskTaskDeleteDelete(taskId)

Create Task

### Example

```javascript
import FastApi from 'fast_api';
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


## createTaskTaskUpdatePut

> Object createTaskTaskUpdatePut(task)

Create Task

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let task = new FastApi.Task(); // Task | 
apiInstance.createTaskTaskUpdatePut(task, (error, data, response) => {
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
 **task** | [**Task**](Task.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBoardBoardDeleteDelete

> Object deleteBoardBoardDeleteDelete(boardId)

Delete Board

### Example

```javascript
import FastApi from 'fast_api';
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


## deleteColumnBoardColumnDeleteDelete

> Object deleteColumnBoardColumnDeleteDelete(boardId, columnId)

Delete Column

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let boardId = null; // Object | 
let columnId = null; // Object | 
apiInstance.deleteColumnBoardColumnDeleteDelete(boardId, columnId, (error, data, response) => {
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
 **columnId** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoardBoardGet

> Object getBoardBoardGet(boardId)

Get Board

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let boardId = null; // Object | 
apiInstance.getBoardBoardGet(boardId, (error, data, response) => {
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


## getBoardlistBoardlistGet

> Object getBoardlistBoardlistGet()

Get Boardlist

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
apiInstance.getBoardlistBoardlistGet((error, data, response) => {
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


## getColumnColumnGet

> Object getColumnColumnGet(columnId)

Get Column

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let columnId = null; // Object | 
apiInstance.getColumnColumnGet(columnId, (error, data, response) => {
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
 **columnId** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTasksTasksGet

> Object getTasksTasksGet(columnId)

Get Tasks

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let columnId = null; // Object | 
apiInstance.getTasksTasksGet(columnId, (error, data, response) => {
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
 **columnId** | [**Object**](.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginTokenPost

> Object loginTokenPost(username, password, opts)

Login

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
let username = null; // Object | 
let password = null; // Object | 
let opts = {
  'grantType': null, // Object | 
  'scope': null, // Object | 
  'clientId': null, // Object | 
  'clientSecret': null // Object | 
};
apiInstance.loginTokenPost(username, password, opts, (error, data, response) => {
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
 **username** | [**Object**](Object.md)|  | 
 **password** | [**Object**](Object.md)|  | 
 **grantType** | [**Object**](Object.md)|  | [optional] 
 **scope** | [**Object**](Object.md)|  | [optional] 
 **clientId** | [**Object**](Object.md)|  | [optional] 
 **clientSecret** | [**Object**](Object.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## moveTaskTaskMovePost

> Object moveTaskTaskMovePost(taskId, dest)

Move Task

### Example

```javascript
import FastApi from 'fast_api';
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


## rootAuthDebugGet

> Object rootAuthDebugGet()

Root

### Example

```javascript
import FastApi from 'fast_api';
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


## rootGet

> Object rootGet()

Root

### Example

```javascript
import FastApi from 'fast_api';

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


## signupSignupPost

> Object signupSignupPost(signUpForm)

Signup

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
let signUpForm = new FastApi.SignUpForm(); // SignUpForm | 
apiInstance.signupSignupPost(signUpForm, (error, data, response) => {
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
 **signUpForm** | [**SignUpForm**](SignUpForm.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateColumnBoardColumnUpdatePost

> Object updateColumnBoardColumnUpdatePost(boardId, column)

Update Column

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let boardId = null; // Object | 
let column = new FastApi.Column(); // Column | 
apiInstance.updateColumnBoardColumnUpdatePost(boardId, column, (error, data, response) => {
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
 **column** | [**Column**](Column.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

