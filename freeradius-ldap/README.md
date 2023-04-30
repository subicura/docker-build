# freeradius + ldap

참고: https://github.com/irasnyd/freeradius-ldap

## 설정

docker-compose.yml

```
version: '3'

services:
  radius:
    image: freeradius/freeradius-server
    ports:
      - "1812:1812/udp"
      - "1813:1813/udp"
    environment:
      - "LDAP_HOST=ldap.example.com"
      - "LDAP_USER=cn=admin,dc=example,dc=com"
      - "LDAP_PASS=adminpassword"
      - "LDAP_BASEDN=dc=example,dc=com"
      - "LDAP_USER_BASEDN=ou=Users,dc=example,dc=com"
      - "LDAP_USER_FILTER=(sAMAccountName=%{%{Stripped-User-Name}:-%{User-Name}})"
      - "LDAP_GROUP_BASEDN=ou=Groups,dc=example,dc=com"
      - "LDAP_RADIUS_ACCESS_GROUP=vpnaccess"
      - "RADIUS_CLIENT_CREDENTIALS=1.2.3.4:32:password1234,5.6.7.8:24:password5678"
    restart: "always"
```
