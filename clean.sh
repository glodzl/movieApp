watchman watch-del-all && rm -rf /tmp/metro-bundler-cache-* && rm -rf /tmp/haste-map-react-native-packager-* && rm -fr $TMPDIR/react-* && rm -rf node_modules && rm -fr package-lock.json && npm cache verify && npm i && cd ios && rm -rf Build && rm -rf Pods && rm -fr Podfile.lock && pod repo update && pod install && cd .. && cd android && ./gradlew clean && cd ..