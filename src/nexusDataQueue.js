/* exported NexusDataQueue */
/* global NexusData */
'use strict'

class NexusDataQueue {
  constructor() {
    this._data = new Map()
    this._currentRequestId = null
  }

  push(nexusData) {
    if (!(nexusData instanceof NexusData)) {
      window.console.error('[NexusDataQueue] push: argument is not an instance of NexusData!')
    }
    nexusData.previousRequestId = this._currentRequestId
    this._currentRequestId = nexusData.requestId
    this._data.set(nexusData.requestId, nexusData)
  }

  get(requestId) {
    if (this._data.has(requestId)) {
      return this._data.get(requestId)
    }
    return null
  }

  has(requestId) {
    return this._data.has(requestId)
  }

  delete(requestId) {
    if (this._data.has(requestId)) {
      this._data.delete(requestId)
    }
  }
}
