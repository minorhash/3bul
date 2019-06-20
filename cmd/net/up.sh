usr=admin
pss=bulk2010
host=tmsm.bulks.jp

lftp -u $usr,$pss $host -e "\
cd exp/biz/cafe/3bul
pwd
lpwd
mirror -R views
mirror -R routes
put app.js
exit"
