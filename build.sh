#!/usr/bin/env bash
npm version patch
# ng build --watch
ng build
docker build -t anthonyrawlinsuom/bushfire:latest .
docker push anthonyrawlinsuom/bushfire