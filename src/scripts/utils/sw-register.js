// eslint-disable-next-line import/no-extraneous-dependencies
import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker tidak mendukung pada broswer ini...');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker berhasil di regist');
  } catch (error) {
    console.log('Oh No! :( service worker gagal register', error);
  }
};

export default swRegister;
