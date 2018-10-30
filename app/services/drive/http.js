/*
 * http
 */

const name = 'HTTPFile'

const version = '1.0'

const protocols = ['http']

const url = require("url")

module.exports = (format) => {

  const file = (id)=>{
    console.log('file id',id)
    return {
      id,
      name:id.split('/').pop(),
      ext: id.split('.').pop(),
      url: `http:${id}`,
      protocol:'http',
    }
  }

  const folder = file

  return { name , version , protocols , folder , file }
}