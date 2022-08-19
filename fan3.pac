function FindProxyForURL(url, host) {
  if (isResolvable(host))
    return "DIRECT";
  else
    return "SOCKS 127.0.0.1:1082";
}
