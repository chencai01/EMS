#date -s 2023/07/01
#date -s 12:13:14
#hwclock --systohc   

cd /home/zlgmcu/lighttpd

chmod 777 uninstall.sh

mv ./cgi-bin/LCDataBase /mnt/LCDataBase

cp ./sbin/lighttpd_service.service /etc/systemd/system/.
cp ./sbin/update.service /etc/systemd/system/.
cp ./sbin/fcgi_update.service /etc/systemd/system/.
cp ./sbin/web_update.service /etc/systemd/system/.
cp ./sbin/set_time.service /etc/systemd/system/.
cp ./sbin/set_ipaddress.service /etc/systemd/system/.
#cp ./sbin/wpa.service /etc/systemd/system/.

chmod 777 /etc/systemd/system/lighttpd_service.service
chmod 777 /etc/systemd/system/update.service
chmod 777 /etc/systemd/system/fcgi_update.service
chmod 777 /etc/systemd/system/web_update.service
chmod 777 /etc/systemd/system/set_time.service
chmod 777 /etc/systemd/system/set_ipaddress.service
#chmod 777 /etc/systemd/system/wpa.service

chmod 777 -R ./sbin
chmod 777 -R ./cgi-bin
chmod 777 -R /home/zlgmcu/lighttpd

systemctl enable lighttpd_service
systemctl enable update
systemctl enable fcgi_update 
systemctl enable web_update 
systemctl enable set_time 
systemctl enable set_ipaddress
#systemctl enable wpa

systemctl daemon-reload
systemctl start lighttpd_service

rm cache/.gitkeep
rm log/.gitkeep
rm sockets/lcmain/.gitkeep
rm sockets/test/.gitkeep
rm upload/.gitkeep
rm vhosts/.gitkeep