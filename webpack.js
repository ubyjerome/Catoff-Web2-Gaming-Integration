var rfs = require('recursive-fs')
 
var path = require('path')
var source = path.resolve(process.cwd(), process.argv[2])
var destination = path.resolve(process.cwd(), process.argv[3])
 
;(async () => {
  console.log(`copying from ${source} to ${destination}`)
  try {
    await rfs.copy(source, destination)
    console.log('done')
  }
  catch (err) {
    console.error(err)
  }
})()