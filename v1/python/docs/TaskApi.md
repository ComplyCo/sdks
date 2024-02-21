# complyco.TaskApi

All URIs are relative to *https://api.complyco.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_task**](TaskApi.md#cancel_task) | **PATCH** /tasks/{task_id}/cancel | Cancel task.
[**extend_task_expiry**](TaskApi.md#extend_task_expiry) | **PATCH** /tasks/{task_id}/extend_expiry | Extend task expiry date.
[**get_task**](TaskApi.md#get_task) | **GET** /tasks/{task_id} | Get task.
[**get_tasks**](TaskApi.md#get_tasks) | **GET** /tasks | Get all tasks.
[**post_task**](TaskApi.md#post_task) | **POST** /tasks/document_consent | Create document consent task.


# **cancel_task**
> CanceltaskResponseBody cancel_task(task_id)

Cancel task.

Cancel a specific task by ID if it is not already completed, cancelled, or expired.

### Example

* Basic Authentication (BasicAuth):

```python
import complyco
from complyco.models.canceltask_response_body import CanceltaskResponseBody
from complyco.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.complyco.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = complyco.Configuration(
    host = "https://api.complyco.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = complyco.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with complyco.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = complyco.TaskApi(api_client)
    task_id = 'task_id_example' # str | Task ID

    try:
        # Cancel task.
        api_response = api_instance.cancel_task(task_id)
        print("The response of TaskApi->cancel_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->cancel_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| Task ID | 

### Return type

[**CanceltaskResponseBody**](CanceltaskResponseBody.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task successfully cancelled |  -  |
**400** | Invalid task ID\&quot;, \&quot;Task already cancelled\&quot;, \&quot;Task already completed\&quot;, \&quot;Task already expired |  -  |
**404** | Task not found |  -  |
**500** | Failed to find task\&quot;, \&quot;Failed to cancel task\&quot;, \&quot;Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extend_task_expiry**
> ExtendtaskexpiryResponseBody extend_task_expiry(task_id, days)

Extend task expiry date.

Extend expiry date of specified task by a given number of days, if not already cancelled or completed.

### Example

* Basic Authentication (BasicAuth):

```python
import complyco
from complyco.models.extendtaskexpiry_response_body import ExtendtaskexpiryResponseBody
from complyco.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.complyco.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = complyco.Configuration(
    host = "https://api.complyco.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = complyco.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with complyco.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = complyco.TaskApi(api_client)
    task_id = 'task_id_example' # str | The ID of the task to extend
    days = 56 # int | Number of days to extend the expiry by

    try:
        # Extend task expiry date.
        api_response = api_instance.extend_task_expiry(task_id, days)
        print("The response of TaskApi->extend_task_expiry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->extend_task_expiry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The ID of the task to extend | 
 **days** | **int**| Number of days to extend the expiry by | 

### Return type

[**ExtendtaskexpiryResponseBody**](ExtendtaskexpiryResponseBody.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task expiry successfully extended |  -  |
**400** | Invalid task ID\&quot;, \&quot;Invalid &#39;days&#39; parameter. Please specify a positive integer.\&quot;, \&quot;Task already cancelled\&quot;, \&quot;Task already completed |  -  |
**404** | Task not found |  -  |
**500** | Failed to find task\&quot;, \&quot;Failed to extend task expiry\&quot;, \&quot;Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task**
> GettaskResponseBody get_task(task_id)

Get task.

Retrieves details for the task identified by the given task ID.

### Example

* Basic Authentication (BasicAuth):

```python
import complyco
from complyco.models.gettask_response_body import GettaskResponseBody
from complyco.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.complyco.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = complyco.Configuration(
    host = "https://api.complyco.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = complyco.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with complyco.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = complyco.TaskApi(api_client)
    task_id = 'task_id_example' # str | Task ID

    try:
        # Get task.
        api_response = api_instance.get_task(task_id)
        print("The response of TaskApi->get_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->get_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| Task ID | 

### Return type

[**GettaskResponseBody**](GettaskResponseBody.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid task ID |  -  |
**404** | Task not found |  -  |
**500** | Failed to find task\&quot;, \&quot;Failed to retrieve file\&quot;, \&quot;Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks**
> GettasksResponseBody get_tasks()

Get all tasks.

Retrieves all tasks associated with a workspace.

### Example

* Basic Authentication (BasicAuth):

```python
import complyco
from complyco.models.gettasks_response_body import GettasksResponseBody
from complyco.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.complyco.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = complyco.Configuration(
    host = "https://api.complyco.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = complyco.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with complyco.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = complyco.TaskApi(api_client)

    try:
        # Get all tasks.
        api_response = api_instance.get_tasks()
        print("The response of TaskApi->get_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->get_tasks: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GettasksResponseBody**](GettasksResponseBody.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Tasks not found |  -  |
**500** | Failed to find tasks\&quot;, \&quot;Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_task**
> PostdocumentconsenttaskResponseBody post_task(identity_id, identity_email, document_name, file=file, scroll_required=scroll_required, signature_required=signature_required, expires_at=expires_at)

Create document consent task.

Creates a new document consent task with the provided details and file. This endpoint accepts multipart/form-data content type for file uploads along with other task details.

### Example

* Basic Authentication (BasicAuth):

```python
import complyco
from complyco.models.postdocumentconsenttask_response_body import PostdocumentconsenttaskResponseBody
from complyco.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.complyco.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = complyco.Configuration(
    host = "https://api.complyco.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = complyco.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with complyco.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = complyco.TaskApi(api_client)
    identity_id = 'identity_id_example' # str | Identity ID (external identifier)
    identity_email = 'identity_email_example' # str | Identity Email
    document_name = 'document_name_example' # str | Document Name
    file = None # bytearray | Document File (optional)
    scroll_required = True # bool | Scroll Required (optional)
    signature_required = True # bool | Signature Required (optional)
    expires_at = '2013-10-20T19:20:30+01:00' # datetime | Expiry Date (optional)

    try:
        # Create document consent task.
        api_response = api_instance.post_task(identity_id, identity_email, document_name, file=file, scroll_required=scroll_required, signature_required=signature_required, expires_at=expires_at)
        print("The response of TaskApi->post_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->post_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identity_id** | **str**| Identity ID (external identifier) | 
 **identity_email** | **str**| Identity Email | 
 **document_name** | **str**| Document Name | 
 **file** | **bytearray**| Document File | [optional] 
 **scroll_required** | **bool**| Scroll Required | [optional] 
 **signature_required** | **bool**| Signature Required | [optional] 
 **expires_at** | **datetime**| Expiry Date | [optional] 

### Return type

[**PostdocumentconsenttaskResponseBody**](PostdocumentconsenttaskResponseBody.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad data\&quot;, \&quot;File too large\&quot;, \&quot;Invalid content type |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

