const os = require('os');
const net = require('net');


export function getLocalIPAddress(port) {
    const ifaces = os.networkInterfaces();
    let ipAddress = '';
    
    Object.keys(ifaces).forEach((ifname) => {
      ifaces[ifname].forEach((iface) => {
        if (iface.family !== 'IPv4' || iface.internal !== false) {
          // 跳过非IPv4地址和内部地址
          return;
        }
  
        if (net.isIPv4(iface.address)) {
          // 找到第一个IPv4地址，将其用于拼接URL
          ipAddress = iface.address;
          return;
        }
      });
    });
  
    return `http://${ipAddress}:${port}`;
  }