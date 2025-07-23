#!/bin/bash
cd /tmp/kavia/workspace/code-generation/weather-insights-629804-629813/weather_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

