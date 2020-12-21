/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Mail from '@ioc:Adonis/Addons/Mail'

Mail.extend('postmark', () => {
  console.log('using postmark')
  return {
    async send() {},
    async close() {},
  }
})
