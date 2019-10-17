sudo systemctl daemon-reload
sudo service rimpManage restart
sudo service rimpdb restart
sudo systemctl status rimpManage.service
sudo systemctl start rimpManage
    sudo systemctl start rimpdb
sudo systemctl status rimpdb.service
/usr/bin/mongod  --bind_ip 127.0.0.1 --port 8889 --dbpath $(pwd)/db --oplogSize 8 --noauth &
chown mongodb:mongodb db -R
