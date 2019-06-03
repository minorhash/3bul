usr=admin
pss=bulk2010
host=tmsm.bulks.jp

lftp -u $usr,$pss $host -e "\
    cd exp/biz/prj/1bul
pwd
lpwd
mirror views
mirror routes
exit"
