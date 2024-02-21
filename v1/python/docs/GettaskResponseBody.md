# GettaskResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | **str** |  | [optional] 
**completed_at** | **str** |  | [optional] 
**document_name** | **str** |  | [optional] 
**expires_at** | **str** |  | [optional] 
**file_url** | **str** |  | [optional] 
**identity_email** | **str** |  | [optional] 
**identity_id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**scroll_required** | **bool** |  | [optional] 
**signature_required** | **bool** |  | [optional] 

## Example

```python
from complyco.models.gettask_response_body import GettaskResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GettaskResponseBody from a JSON string
gettask_response_body_instance = GettaskResponseBody.from_json(json)
# print the JSON string representation of the object
print GettaskResponseBody.to_json()

# convert the object into a dict
gettask_response_body_dict = gettask_response_body_instance.to_dict()
# create an instance of GettaskResponseBody from a dict
gettask_response_body_form_dict = gettask_response_body.from_dict(gettask_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


