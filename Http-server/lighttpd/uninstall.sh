#!/bin/bash

if [ ! -e /home/zlgmcu/lighttpd ]; then
    echo "/home/zlgmcu/lighttpd 不存在"
    exit
fi

killall -s 2 lighttpd
sleep 1
killall -s 2 lcmain.fcgi
sleep 1
systemctl stop lighttpd_service

rm /mnt/LCDataBase

systemctl disable lighttpd_service
systemctl disable update
systemctl disable fcgi_update 
systemctl disable web_update 
systemctl disable set_time 
systemctl disable set_ipaddress

systemctl daemon-reload

rm /etc/systemd/system/lighttpd_service.service
rm /etc/systemd/system/update.service
rm /etc/systemd/system/fcgi_update.service
rm /etc/systemd/system/web_update.service
rm /etc/systemd/system/set_time.service
rm /etc/systemd/system/set_ipaddress.service

rm -rf /home/zlgmcu/lighttpd
exit