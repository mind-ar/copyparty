"use strict";
/*
 * 
 *
*/

var offline_enabled = false;

console.log("cargando funcionalidades offline");
offline_init()

// inicializa la funcionalidad offline
async function  offline_init() {
  await  offline_register_sw();

  const granted = await navigator.storage.persist();

  if (granted) {
    offline_enabled = false;
    const { quota, usage } = await navigator.storage.estimate();
    console.log(`almacenamiento persistente habilitado, cuota disponible: ${ quota / 1024 / 1024 } MB. Usado: ${ usage / 1024 / 1024  }`);
  } else {
    alert("almacenamiento local no habilitado");

  }

}


// registra el service worker que maneja el contenido offline
async function offline_register_sw() {
  console.log("registrando service worker ");
  if (!('serviceWorker' in navigator)) {
      console.log('service workers not supported');
      return;
  }

  try {
      var reg = await navigator.serviceWorker.register('/sw.js');
      console.log('service worker registered:', reg);
  }
  catch (ex) {
      console.error('service worker registration failed:', ex);
  }
}


// agrega un archivo al storage local
function offline_add(file) {
  console.log(`agregando ${file} al contenido offline`);
}

function offline_remove(file) {
  console.log(`eliminando ${file} del contenido offline`);
}

// function offline_get() {
//
// }
// function offline_has() {}
// function offline_get_children () {}
// function offline_storage_info() {}


