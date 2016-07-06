const filteredList = require('./6MakeItModular');

const dirName = process.argv[2];
const filterExt = process.argv[3];

filteredList(dirName, filterExt, (err, list) => {
  if (err) console.log(err);

  list.forEach(file => {
      console.log(file)
  })
});
