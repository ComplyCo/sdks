# ComplyCo\TaskApi

All URIs are relative to https://api.complyco.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelTask()**](TaskApi.md#cancelTask) | **PATCH** /tasks/{task_id}/cancel | Cancel task. |
| [**extendTaskExpiry()**](TaskApi.md#extendTaskExpiry) | **PATCH** /tasks/{task_id}/extend_expiry | Extend task expiry date. |
| [**getTask()**](TaskApi.md#getTask) | **GET** /tasks/{task_id} | Get task. |
| [**getTasks()**](TaskApi.md#getTasks) | **GET** /tasks | Get all tasks. |
| [**postTask()**](TaskApi.md#postTask) | **POST** /tasks/document_consent | Create document consent task. |


## `cancelTask()`

```php
cancelTask($task_id): \ComplyCo\Model\CanceltaskResponseBody
```

Cancel task.

Cancel a specific task by ID if it is not already completed, cancelled, or expired.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: BasicAuth
$config = ComplyCo\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new ComplyCo\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string | Task ID

try {
    $result = $apiInstance->cancelTask($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->cancelTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| Task ID | |

### Return type

[**\ComplyCo\Model\CanceltaskResponseBody**](../Model/CanceltaskResponseBody.md)

### Authorization

[BasicAuth](../../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `extendTaskExpiry()`

```php
extendTaskExpiry($task_id, $days): \ComplyCo\Model\ExtendtaskexpiryResponseBody
```

Extend task expiry date.

Extend expiry date of specified task by a given number of days, if not already cancelled or completed.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: BasicAuth
$config = ComplyCo\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new ComplyCo\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string | The ID of the task to extend
$days = 56; // int | Number of days to extend the expiry by

try {
    $result = $apiInstance->extendTaskExpiry($task_id, $days);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->extendTaskExpiry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| The ID of the task to extend | |
| **days** | **int**| Number of days to extend the expiry by | |

### Return type

[**\ComplyCo\Model\ExtendtaskexpiryResponseBody**](../Model/ExtendtaskexpiryResponseBody.md)

### Authorization

[BasicAuth](../../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTask()`

```php
getTask($task_id): \ComplyCo\Model\GettaskResponseBody
```

Get task.

Retrieves details for the task identified by the given task ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: BasicAuth
$config = ComplyCo\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new ComplyCo\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string | Task ID

try {
    $result = $apiInstance->getTask($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->getTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| Task ID | |

### Return type

[**\ComplyCo\Model\GettaskResponseBody**](../Model/GettaskResponseBody.md)

### Authorization

[BasicAuth](../../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTasks()`

```php
getTasks(): \ComplyCo\Model\GettasksResponseBody
```

Get all tasks.

Retrieves all tasks associated with a workspace.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: BasicAuth
$config = ComplyCo\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new ComplyCo\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getTasks();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->getTasks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\ComplyCo\Model\GettasksResponseBody**](../Model/GettasksResponseBody.md)

### Authorization

[BasicAuth](../../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postTask()`

```php
postTask($identity_id, $identity_email, $document_name, $file, $scroll_required, $signature_required, $expires_at): \ComplyCo\Model\PostdocumentconsenttaskResponseBody
```

Create document consent task.

Creates a new document consent task with the provided details and file. This endpoint accepts multipart/form-data content type for file uploads along with other task details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: BasicAuth
$config = ComplyCo\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new ComplyCo\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$identity_id = 'identity_id_example'; // string | Identity ID (external identifier)
$identity_email = 'identity_email_example'; // string | Identity Email
$document_name = 'document_name_example'; // string | Document Name
$file = "/path/to/file.txt"; // \SplFileObject | Document File
$scroll_required = True; // bool | Scroll Required
$signature_required = True; // bool | Signature Required
$expires_at = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Expiry Date

try {
    $result = $apiInstance->postTask($identity_id, $identity_email, $document_name, $file, $scroll_required, $signature_required, $expires_at);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->postTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **identity_id** | **string**| Identity ID (external identifier) | |
| **identity_email** | **string**| Identity Email | |
| **document_name** | **string**| Document Name | |
| **file** | **\SplFileObject****\SplFileObject**| Document File | [optional] |
| **scroll_required** | **bool**| Scroll Required | [optional] |
| **signature_required** | **bool**| Signature Required | [optional] |
| **expires_at** | **\DateTime**| Expiry Date | [optional] |

### Return type

[**\ComplyCo\Model\PostdocumentconsenttaskResponseBody**](../Model/PostdocumentconsenttaskResponseBody.md)

### Authorization

[BasicAuth](../../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
