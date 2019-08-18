#!/bin/bash

systemctl is-active --quiet service

if [ $? -ne 0 ]; then
  systemctl stop coupclassicwebsite.service
fi
