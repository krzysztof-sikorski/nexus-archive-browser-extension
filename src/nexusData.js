/* exported NexusData */
'use strict'

class NexusData {
  constructor() {
    this._sessionId = null
    this._requestId = null
    this._previousRequestId = null
    this._requestStartedAt = null
    this._responseCompletedAt = null
    this._method = null
    this._url = null
    this._formData = null
    this._responseBodyParts = []
  }

  get sessionId() {
    return this._sessionId
  }

  set sessionId(value) {
    this._sessionId = value
  }

  get requestId() {
    return this._requestId
  }

  set requestId(value) {
    this._requestId = value
  }

  get previousRequestId() {
    return this._previousRequestId
  }

  set previousRequestId(value) {
    this._previousRequestId = value
  }

  get requestStartedAt() {
    return this._requestStartedAt
  }

  set requestStartedAt(value) {
    this._requestStartedAt = value
  }

  get responseCompletedAt() {
    return this._responseCompletedAt
  }

  set responseCompletedAt(value) {
    this._responseCompletedAt = value
  }

  get method() {
    return this._method
  }

  set method(value) {
    this._method = value
  }

  get url() {
    return this._url
  }

  set url(value) {
    this._url = value
  }

  get formData() {
    return this._formData
  }

  set formData(value) {
    this._formData = value
  }

  get responseBody() {
    return this._responseBodyParts.join('')
  }

  set responseBody(value) {
    this._responseBodyParts = []
    this.appendResponseBodyPart(value)
  }

  appendResponseBodyPart(value) {
    this._responseBodyParts.push(value)
  }
}
