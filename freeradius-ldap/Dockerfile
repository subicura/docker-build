FROM freeradius/freeradius-server

COPY ldap /etc/raddb/mods-available/
# COPY eap /etc/raddb/mods-available/
COPY init /
RUN chmod +x /init

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/init"]
