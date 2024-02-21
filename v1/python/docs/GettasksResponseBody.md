# GettasksResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**tasks** | [**List[GettasksTaskDetails]**](GettasksTaskDetails.md) |  | [optional] 

## Example

```python
from complyco.models.gettasks_response_body import GettasksResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GettasksResponseBody from a JSON string
gettasks_response_body_instance = GettasksResponseBody.from_json(json)
# print the JSON string representation of the object
print GettasksResponseBody.to_json()

# convert the object into a dict
gettasks_response_body_dict = gettasks_response_body_instance.to_dict()
# create an instance of GettasksResponseBody from a dict
gettasks_response_body_form_dict = gettasks_response_body.from_dict(gettasks_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


