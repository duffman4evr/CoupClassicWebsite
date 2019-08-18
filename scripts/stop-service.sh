#!/bin/bash

systemctl is-active --quiet service

if [ $? -neq 0 ]; then
  systemctl stop coupclassicwebsite.service
fi
