/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Board from '../model/Board';
import Column from '../model/Column';
import HTTPValidationError from '../model/HTTPValidationError';
import SignUpForm from '../model/SignUpForm';
import Task from '../model/Task';

/**
* Default service.
* @module api/DefaultApi
* @version 0.1.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Board
     * @param {module:model/Board} board 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createBoardBoardUpdatePutWithHttpInfo(board) {
      let postBody = board;
      // verify the required parameter 'board' is set
      if (board === undefined || board === null) {
        throw new Error("Missing the required parameter 'board' when calling createBoardBoardUpdatePut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/board/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Board
     * @param {module:model/Board} board 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createBoardBoardUpdatePut(board) {
      return this.createBoardBoardUpdatePutWithHttpInfo(board)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Task
     * @param {Object} taskId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createTaskTaskDeleteDeleteWithHttpInfo(taskId) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling createTaskTaskDeleteDelete");
      }

      let pathParams = {
      };
      let queryParams = {
        'task_id': taskId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/task/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Task
     * @param {Object} taskId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createTaskTaskDeleteDelete(taskId) {
      return this.createTaskTaskDeleteDeleteWithHttpInfo(taskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Task
     * @param {module:model/Task} task 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createTaskTaskUpdatePutWithHttpInfo(task) {
      let postBody = task;
      // verify the required parameter 'task' is set
      if (task === undefined || task === null) {
        throw new Error("Missing the required parameter 'task' when calling createTaskTaskUpdatePut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/task/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Task
     * @param {module:model/Task} task 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createTaskTaskUpdatePut(task) {
      return this.createTaskTaskUpdatePutWithHttpInfo(task)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Board
     * @param {Object} boardId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteBoardBoardDeleteDeleteWithHttpInfo(boardId) {
      let postBody = null;
      // verify the required parameter 'boardId' is set
      if (boardId === undefined || boardId === null) {
        throw new Error("Missing the required parameter 'boardId' when calling deleteBoardBoardDeleteDelete");
      }

      let pathParams = {
      };
      let queryParams = {
        'board_id': boardId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/board/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Board
     * @param {Object} boardId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteBoardBoardDeleteDelete(boardId) {
      return this.deleteBoardBoardDeleteDeleteWithHttpInfo(boardId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Column
     * @param {Object} boardId 
     * @param {Object} columnId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteColumnBoardColumnDeleteDeleteWithHttpInfo(boardId, columnId) {
      let postBody = null;
      // verify the required parameter 'boardId' is set
      if (boardId === undefined || boardId === null) {
        throw new Error("Missing the required parameter 'boardId' when calling deleteColumnBoardColumnDeleteDelete");
      }
      // verify the required parameter 'columnId' is set
      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling deleteColumnBoardColumnDeleteDelete");
      }

      let pathParams = {
      };
      let queryParams = {
        'board_id': boardId,
        'column_id': columnId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/board/column/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Column
     * @param {Object} boardId 
     * @param {Object} columnId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteColumnBoardColumnDeleteDelete(boardId, columnId) {
      return this.deleteColumnBoardColumnDeleteDeleteWithHttpInfo(boardId, columnId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Board
     * @param {Object} boardId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getBoardBoardGetWithHttpInfo(boardId) {
      let postBody = null;
      // verify the required parameter 'boardId' is set
      if (boardId === undefined || boardId === null) {
        throw new Error("Missing the required parameter 'boardId' when calling getBoardBoardGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'board_id': boardId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/board', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Board
     * @param {Object} boardId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getBoardBoardGet(boardId) {
      return this.getBoardBoardGetWithHttpInfo(boardId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Boardlist
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getBoardlistBoardlistGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/boardlist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Boardlist
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getBoardlistBoardlistGet() {
      return this.getBoardlistBoardlistGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Column
     * @param {Object} columnId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getColumnColumnGetWithHttpInfo(columnId) {
      let postBody = null;
      // verify the required parameter 'columnId' is set
      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling getColumnColumnGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'column_id': columnId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/column', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Column
     * @param {Object} columnId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getColumnColumnGet(columnId) {
      return this.getColumnColumnGetWithHttpInfo(columnId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Tasks
     * @param {Object} columnId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getTasksTasksGetWithHttpInfo(columnId) {
      let postBody = null;
      // verify the required parameter 'columnId' is set
      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling getTasksTasksGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'column_id': columnId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Tasks
     * @param {Object} columnId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getTasksTasksGet(columnId) {
      return this.getTasksTasksGetWithHttpInfo(columnId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Login
     * @param {Object} username 
     * @param {Object} password 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.grantType 
     * @param {Object} opts.scope 
     * @param {Object} opts.clientId 
     * @param {Object} opts.clientSecret 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    loginTokenPostWithHttpInfo(username, password, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling loginTokenPost");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling loginTokenPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'grant_type': opts['grantType'],
        'username': username,
        'password': password,
        'scope': opts['scope'],
        'client_id': opts['clientId'],
        'client_secret': opts['clientSecret']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Login
     * @param {Object} username 
     * @param {Object} password 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.grantType 
     * @param {Object} opts.scope 
     * @param {Object} opts.clientId 
     * @param {Object} opts.clientSecret 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    loginTokenPost(username, password, opts) {
      return this.loginTokenPostWithHttpInfo(username, password, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Move Task
     * @param {Object} taskId 
     * @param {Object} dest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    moveTaskTaskMovePostWithHttpInfo(taskId, dest) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling moveTaskTaskMovePost");
      }
      // verify the required parameter 'dest' is set
      if (dest === undefined || dest === null) {
        throw new Error("Missing the required parameter 'dest' when calling moveTaskTaskMovePost");
      }

      let pathParams = {
      };
      let queryParams = {
        'task_id': taskId,
        'dest': dest
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/task/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Move Task
     * @param {Object} taskId 
     * @param {Object} dest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    moveTaskTaskMovePost(taskId, dest) {
      return this.moveTaskTaskMovePostWithHttpInfo(taskId, dest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Root
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    rootAuthDebugGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/auth_debug', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Root
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    rootAuthDebugGet() {
      return this.rootAuthDebugGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Root
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    rootGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Root
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    rootGet() {
      return this.rootGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Signup
     * @param {module:model/SignUpForm} signUpForm 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    signupSignupPostWithHttpInfo(signUpForm) {
      let postBody = signUpForm;
      // verify the required parameter 'signUpForm' is set
      if (signUpForm === undefined || signUpForm === null) {
        throw new Error("Missing the required parameter 'signUpForm' when calling signupSignupPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Signup
     * @param {module:model/SignUpForm} signUpForm 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    signupSignupPost(signUpForm) {
      return this.signupSignupPostWithHttpInfo(signUpForm)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Column
     * @param {Object} boardId 
     * @param {module:model/Column} column 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateColumnBoardColumnUpdatePostWithHttpInfo(boardId, column) {
      let postBody = column;
      // verify the required parameter 'boardId' is set
      if (boardId === undefined || boardId === null) {
        throw new Error("Missing the required parameter 'boardId' when calling updateColumnBoardColumnUpdatePost");
      }
      // verify the required parameter 'column' is set
      if (column === undefined || column === null) {
        throw new Error("Missing the required parameter 'column' when calling updateColumnBoardColumnUpdatePost");
      }

      let pathParams = {
      };
      let queryParams = {
        'board_id': boardId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/board/column/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Column
     * @param {Object} boardId 
     * @param {module:model/Column} column 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateColumnBoardColumnUpdatePost(boardId, column) {
      return this.updateColumnBoardColumnUpdatePostWithHttpInfo(boardId, column)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}