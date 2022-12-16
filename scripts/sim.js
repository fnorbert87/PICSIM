let PICset = [];
let tempList = [];

tempList = PICini.replace(/\n/g, '\n').substring(1).split(/\n/);

tempList.forEach((element) => {
  if (element.substring(0, 1) != '#' && element.length > 0) {
    if (element.includes('=')) {
      temp = element.split('=');
      if (temp[0] != 'SFR' && temp[0] != 'SFRFLD') {
        PICset[temp[0]] = temp[1].includes(',') ? temp[1].split(',') : temp[1];
      } else {
        if (temp[0] in PICset == false) 
            PICset[temp[0]] = [];
        PICset[temp[0]].push(temp[1].split(','));
      }
    }
  }
});

//console.log(PICset[0].length)
console.log(PICset);
