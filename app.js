// https://www.omnicalculator.com/health/iv-flow-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const IVflowrateRadio = document.getElementById('IVflowrateRadio');
const dropfactorRadio = document.getElementById('dropfactorRadio');
const totalvolumeRadio = document.getElementById('totalvolumeRadio');
const infusiontimeRadio = document.getElementById('infusiontimeRadio');

let IVflowrate;
let dropfactor = v1;
let totalvolume = v2;
let infusiontime = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

IVflowrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Drop factor';
  variable2.textContent = 'Total volume';
  variable3.textContent = 'Infusion time';
  dropfactor = v1;
  totalvolume = v2;
  infusiontime = v3;
  result.textContent = '';
});

dropfactorRadio.addEventListener('click', function() {
  variable1.textContent = 'IV flow rate';
  variable2.textContent = 'Total volume';
  variable3.textContent = 'Infusion time';
  IVflowrate = v1;
  totalvolume = v2;
  infusiontime = v3;
  result.textContent = '';
});

totalvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'IV flow rate';
  variable2.textContent = 'Drop factor';
  variable3.textContent = 'Infusion time';
  IVflowrate = v1;
  dropfactor = v2;
  infusiontime = v3;
  result.textContent = '';
});

infusiontimeRadio.addEventListener('click', function() {
  variable1.textContent = 'IV flow rate';
  variable2.textContent = 'Drop factor';
  variable3.textContent = 'Total volume';
  IVflowrate = v1;
  dropfactor = v2;
  totalvolume = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(IVflowrateRadio.checked)
    result.textContent = `IV flow rate = ${computeIVflowrate().toFixed(2)}`;

  else if(dropfactorRadio.checked)
    result.textContent = `Drop factor = ${computedropfactor().toFixed(2)}`;

  else if(totalvolumeRadio.checked)
    result.textContent = `Total volume = ${computetotalvolume().toFixed(2)}`;

  else if(infusiontimeRadio.checked)
    result.textContent = `Infusion time = ${computeinfusiontime().toFixed(2)}`;
})

// calculation

// IVflowrate = dropfactor * totalvolume / infusiontime

function computeIVflowrate() {
  return (Number(dropfactor.value) * Number(totalvolume.value)) / Number(infusiontime.value);
}

function computedropfactor() {
  return (Number(IVflowrate.value) * Number(infusiontime.value)) / Number(totalvolume.value);
}

function computetotalvolume() {
  return (Number(IVflowrate.value) * Number(infusiontime.value)) / Number(dropfactor.value);
}

function computeinfusiontime() {
  return (Number(dropfactor.value) * Number(totalvolume.value)) / Number(IVflowrate.value);
}