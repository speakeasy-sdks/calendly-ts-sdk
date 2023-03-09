import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class DataCompliance {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * postDataComplianceDeletionEvents - Delete Scheduled Event Data
   *
   * <!-- theme: info -->
   *   > This endpoint requires an <strong>Enterprise</strong> subscription.
   * 
   * To submit a request to remove scheduled events data within a time range for your organization, use this endpoint. Requests for data deletion can take up to 7 days to complete.
   * 
   * Time range can be no greater than 24 months and must occur in the past.
  **/
  postDataComplianceDeletionEvents(
    req: operations.PostDataComplianceDeletionEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDataComplianceDeletionEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDataComplianceDeletionEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/data_compliance/deletion/events";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostDataComplianceDeletionEventsResponse =
            new operations.PostDataComplianceDeletionEventsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postDataComplianceDeletionEvents202ApplicationJSONObject = utils.deserializeJSONResponse(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionEventsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionEventsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse1 = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionEventsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionEventsErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postDataComplianceDeletionInvitees - Delete Invitee Data
   *
   * <!-- theme: info -->
   *   > This endpoint requires an <strong>Enterprise</strong> subscription.
   * 
   * To submit a request to remove invitee data from all previously booked events in your organization, use this endpoint. Requests for data deletion can take up to 7 days to complete.
  **/
  postDataComplianceDeletionInvitees(
    req: operations.PostDataComplianceDeletionInviteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDataComplianceDeletionInviteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDataComplianceDeletionInviteesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/data_compliance/deletion/invitees";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostDataComplianceDeletionInviteesResponse =
            new operations.PostDataComplianceDeletionInviteesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postDataComplianceDeletionInvitees202ApplicationJSONObject = utils.deserializeJSONResponse(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionInviteesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionInviteesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse1 = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionInviteesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostDataComplianceDeletionInviteesErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

}
