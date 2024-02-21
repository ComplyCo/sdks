# coding: utf-8

"""
    ComplyCo SDK

    A REST API for working with ComplyCo data.

    The version of the OpenAPI document: 1.0.0
    Contact: support@complyco.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from complyco.models.postdocumentconsenttask_response_body import PostdocumentconsenttaskResponseBody

class TestPostdocumentconsenttaskResponseBody(unittest.TestCase):
    """PostdocumentconsenttaskResponseBody unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PostdocumentconsenttaskResponseBody:
        """Test PostdocumentconsenttaskResponseBody
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PostdocumentconsenttaskResponseBody`
        """
        model = PostdocumentconsenttaskResponseBody()
        if include_optional:
            return PostdocumentconsenttaskResponseBody(
                message = ''
            )
        else:
            return PostdocumentconsenttaskResponseBody(
        )
        """

    def testPostdocumentconsenttaskResponseBody(self):
        """Test PostdocumentconsenttaskResponseBody"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
