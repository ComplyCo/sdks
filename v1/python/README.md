# complyco-sdk
A REST API for working with ComplyCo data.

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import complyco
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import complyco
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import complyco
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
    except ApiException as e:
        print("Exception when calling TaskApi->cancel_task: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.complyco.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TaskApi* | [**cancel_task**](docs/TaskApi.md#cancel_task) | **PATCH** /tasks/{task_id}/cancel | Cancel task.
*TaskApi* | [**extend_task_expiry**](docs/TaskApi.md#extend_task_expiry) | **PATCH** /tasks/{task_id}/extend_expiry | Extend task expiry date.
*TaskApi* | [**get_task**](docs/TaskApi.md#get_task) | **GET** /tasks/{task_id} | Get task.
*TaskApi* | [**get_tasks**](docs/TaskApi.md#get_tasks) | **GET** /tasks | Get all tasks.
*TaskApi* | [**post_task**](docs/TaskApi.md#post_task) | **POST** /tasks/document_consent | Create document consent task.


## Documentation For Models

 - [CanceltaskResponseBody](docs/CanceltaskResponseBody.md)
 - [ExtendtaskexpiryResponseBody](docs/ExtendtaskexpiryResponseBody.md)
 - [GettaskFailureResponseBody](docs/GettaskFailureResponseBody.md)
 - [GettaskResponseBody](docs/GettaskResponseBody.md)
 - [GettasksFailureResponseBody](docs/GettasksFailureResponseBody.md)
 - [GettasksResponseBody](docs/GettasksResponseBody.md)
 - [GettasksTaskDetails](docs/GettasksTaskDetails.md)
 - [PostdocumentconsenttaskResponseBody](docs/PostdocumentconsenttaskResponseBody.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="BasicAuth"></a>
### BasicAuth

- **Type**: HTTP basic authentication


## Author

support@complyco.com

