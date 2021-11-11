/* global NexusDataQueue, NexusDataSender, Preferences, WebRequestMonitor */
'use strict'

function generateSessionId() {
  const timestamp = Date.now()
  const suffix = 1000000 * Math.random()
  return `${timestamp}_${suffix}`
}

const sessionId = generateSessionId()

const preferences = new Preferences()
preferences.load()
preferences.listenForStorageChanges()

const nexusDataQueue = new NexusDataQueue()

const nexusDataSender = new NexusDataSender(preferences)

const webRequestMonitor = new WebRequestMonitor(sessionId, nexusDataQueue, nexusDataSender)
webRequestMonitor.addListeners()
