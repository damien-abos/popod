foreground = ${STUNNEL_FOREGROUND}
# chroot = /chroot/stunnel
# pid = /run/stunnel.pid
# outpout = /dev/stdout
# client = no

setuid = ${STUNNEL_UID}
setguid = ${STUNNEL_GUID}

cert = ${STUNNEL_CERT_FILE}
key = ${STUNNEL_KEY_FILE}

# Some performance tunings                                               
socket = l:TCP_NODELAY=1                                                 
socket = r:TCP_NODELAY=1                                                 
#compression = zlib | rle | <empty>
compression = ${STUNNEL_COMPRESSION}

# Authentication stuff       
# level 1 - verify peer certificate if present
# level 2 - verify peer certificate
# level 3 - verify peer with locally installed certificate
# default - no verify                                                
verify = ${STUNNEL_VERIFY}                                                              
# Don't forget to c_rehash CApath                                        
# CApath is located inside chroot jail:                                  
CApath = ${STUNNEL_CAROOT_PATH}
# It's often easier to use CAfile:                                       
CAfile = ${STUNNEL_CAROOT_FILE}
# Don't forget to c_rehash CRLpath 
# CRLpath is located inside chroot jail:
CRLpath = ${STUNNEL_CRL_PATH}
# Alternatively you can use CRLfile:  
CRLfile = ${STUNNEL_CRL_FILE}

[${STUNNEL_SERVICE}]
accept = ${STUNNEL_SERVICE_ACCEPT}
connect = ${STUNNEL_SERVICE_CONNECT}
TIMEOUTclose = ${STUNNEL_SERVICE_TIMEOUTCLOSE}
transparent = ${STUNNEL_SERVICE_TRANSPARENT}
