# GettasksTaskDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | **str** |  | [optional] 
**completed_at** | **str** |  | [optional] 
**document_name** | **str** |  | [optional] 
**expires_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**identity_email** | **str** |  | [optional] 
**identity_id** | **str** |  | [optional] 
**scroll_required** | **bool** |  | [optional] 
**signature_required** | **bool** |  | [optional] 

## Example

```python
from complyco.models.gettasks_task_details import GettasksTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GettasksTaskDetails from a JSON string
gettasks_task_details_instance = GettasksTaskDetails.from_json(json)
# print the JSON string representation of the object
print GettasksTaskDetails.to_json()

# convert the object into a dict
gettasks_task_details_dict = gettasks_task_details_instance.to_dict()
# create an instance of GettasksTaskDetails from a dict
gettasks_task_details_form_dict = gettasks_task_details.from_dict(gettasks_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


